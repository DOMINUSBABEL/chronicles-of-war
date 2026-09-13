/**
 * Chronicles of War - Peer-to-Peer (P2P) WebRTC Tactical Multiplayer Engine
 * Operates serverless direct WebRTC DataChannels according to Geist Naturaleza Rule 42.
 * Allows latency-free 1v1 tactical battles between browsers on local Wi-Fi, LAN or Internet.
 */

const P2P_PACKET = {
  HANDSHAKE: 'handshake',
  ORDER_MOVE: 'order_move',
  ORDER_FORMATION: 'order_formation',
  ORDER_DOCTRINE: 'order_doctrine',
  CALL_REINFORCEMENT: 'call_reinforce',
  ARMY_RETREAT: 'army_retreat',
  CHAT_MESSAGE: 'chat_msg',
  PING: 'ping',
  PONG: 'pong'
};

class P2PNetworkManager {
  constructor(engine) {
    this.engine = engine;
    this.peerConnection = null;
    this.dataChannel = null;
    this.isHost = false;
    this.isConnected = false;
    this.remotePeerId = null;
    this.pingMs = 0;
    this.lastPingSent = 0;

    this.iceServers = [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ];
  }

  initPeerConnection() {
    if (typeof RTCPeerConnection === 'undefined') {
      console.warn('WebRTC RTCPeerConnection not supported in this environment.');
      return false;
    }

    this.peerConnection = new RTCPeerConnection({ iceServers: this.iceServers });

    this.peerConnection.onicecandidate = (event) => {
      if (!event.candidate) {
        // All ICE candidates gathered; SDP offer/answer is complete!
        this._onLocalSdpReady();
      }
    };

    this.peerConnection.ondatachannel = (event) => {
      this._setupDataChannel(event.channel);
    };

    return true;
  }

  // Host creates a room
  async createHostRoom() {
    if (!this.initPeerConnection()) return;
    this.isHost = true;

    // Host creates the reliable data channel
    const channel = this.peerConnection.createDataChannel('chronicles_tactics', {
      ordered: true
    });
    this._setupDataChannel(channel);

    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);

    this._updateStatusUI('Generando código de sala anfitrión...');
  }

  // Guest joins using host's room code
  async joinRoomWithCode(hostCodeBase64) {
    if (!this.initPeerConnection()) return;
    this.isHost = false;

    try {
      const sdpString = atob(hostCodeBase64.trim());
      const offerDesc = new RTCSessionDescription({ type: 'offer', sdp: sdpString });
      await this.peerConnection.setRemoteDescription(offerDesc);

      const answer = await this.peerConnection.createAnswer();
      await this.peerConnection.setLocalDescription(answer);

      this._updateStatusUI('Generando código de respuesta...');
    } catch (err) {
      console.error('Error al unirse a sala P2P:', err);
      this._updateStatusUI('❌ Código de sala inválido.');
    }
  }

  // Host confirms guest's answer code
  async confirmGuestAnswer(guestCodeBase64) {
    try {
      const sdpString = atob(guestCodeBase64.trim());
      const answerDesc = new RTCSessionDescription({ type: 'answer', sdp: sdpString });
      await this.peerConnection.setRemoteDescription(answerDesc);
      this._updateStatusUI('🤝 Conectando con el invitado...');
    } catch (err) {
      console.error('Error al confirmar respuesta P2P:', err);
      this._updateStatusUI('❌ Código de respuesta inválido.');
    }
  }

  _onLocalSdpReady() {
    const sdp = this.peerConnection.localDescription.sdp;
    const base64Code = btoa(sdp);

    const codeArea = document.getElementById('p2p-exchange-code');
    if (codeArea) {
      codeArea.value = base64Code;
    }

    if (this.isHost) {
      this._updateStatusUI('🟢 Sala lista. Copia el código y compártelo con tu rival:');
    } else {
      this._updateStatusUI('🟢 Respuesta lista. Copia este código y pásalo al anfitrión:');
    }
  }

  _setupDataChannel(channel) {
    this.dataChannel = channel;

    this.dataChannel.onopen = () => {
      this.isConnected = true;
      this._updateStatusUI('⚔️ ¡Conexión P2P establecida! Listos para la batalla.');
      this._sendPacket(P2P_PACKET.HANDSHAKE, {
        isHost: this.isHost,
        timestamp: Date.now()
      });
      this._startHeartbeat();

      // Show in-game multiplayer indicator
      const badge = document.getElementById('p2p-live-indicator');
      if (badge) badge.style.display = 'inline-flex';
    };

    this.dataChannel.onclose = () => {
      this.isConnected = false;
      this._updateStatusUI('🔌 Conexión P2P cerrada.');
      const badge = document.getElementById('p2p-live-indicator');
      if (badge) badge.style.display = 'none';
    };

    this.dataChannel.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        this._handleRemotePacket(msg);
      } catch (err) {
        console.warn('Mensaje P2P no válido:', event.data);
      }
    };
  }

  _sendPacket(type, payload) {
    if (!this.dataChannel || this.dataChannel.readyState !== 'open') return;
    const packet = JSON.stringify({ type, payload, t: Date.now() });
    this.dataChannel.send(packet);
  }

  // Tactical broadcast methods
  sendOrderMove(unitId, targetX, targetY, addWaypoint = false) {
    this._sendPacket(P2P_PACKET.ORDER_MOVE, { unitId, targetX, targetY, addWaypoint });
  }

  sendOrderFormation(unitId, formation) {
    this._sendPacket(P2P_PACKET.ORDER_FORMATION, { unitId, formation });
  }

  sendOrderDoctrine(unitId, doctrine) {
    this._sendPacket(P2P_PACKET.ORDER_DOCTRINE, { unitId, doctrine });
  }

  sendCallReinforcement(eraKey, unitKey) {
    this._sendPacket(P2P_PACKET.CALL_REINFORCEMENT, { eraKey, unitKey });
  }

  _handleRemotePacket(packet) {
    const { type, payload } = packet;

    switch (type) {
      case P2P_PACKET.PING:
        this._sendPacket(P2P_PACKET.PONG, { replyTo: payload.timestamp });
        break;

      case P2P_PACKET.PONG:
        this.pingMs = Date.now() - payload.replyTo;
        const pingEl = document.getElementById('p2p-ping-val');
        if (pingEl) pingEl.innerText = `${this.pingMs} ms`;
        break;

      case P2P_PACKET.ORDER_MOVE:
        if (this.engine) {
          const unit = this.engine.units.find(u => u.id === payload.unitId);
          if (unit) unit.setTarget(payload.targetX, payload.targetY, payload.addWaypoint);
        }
        break;

      case P2P_PACKET.ORDER_FORMATION:
        if (this.engine) {
          const unit = this.engine.units.find(u => u.id === payload.unitId);
          if (unit) unit.setFormation(payload.formation);
        }
        break;

      case P2P_PACKET.ORDER_DOCTRINE:
        if (this.engine) {
          const unit = this.engine.units.find(u => u.id === payload.unitId);
          if (unit) unit.setDoctrine(payload.doctrine);
        }
        break;

      case P2P_PACKET.CALL_REINFORCEMENT:
        if (this.engine && this.engine.supply) {
          // Enemy remotely called reinforcement
          const enemyTeam = this.isHost ? 1 : 0;
          this.engine.supply.callReinforcement(payload.eraKey, payload.unitKey, enemyTeam);
        }
        break;

      case P2P_PACKET.HANDSHAKE:
        this.engine.addLogMessage(`🌐 ¡Rival multijugador conectado mediante WebRTC!`);
        break;
    }
  }

  _startHeartbeat() {
    setInterval(() => {
      if (this.isConnected) {
        this.lastPingSent = Date.now();
        this._sendPacket(P2P_PACKET.PING, { timestamp: this.lastPingSent });
      }
    }, 3000);
  }

  _updateStatusUI(text) {
    const statusEl = document.getElementById('p2p-status-msg');
    if (statusEl) statusEl.innerText = text;
  }
}

if (typeof window !== 'undefined') {
  window.P2PNetworkManager = P2PNetworkManager;
}
