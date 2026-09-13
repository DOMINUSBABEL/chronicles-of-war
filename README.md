# Chronicles of War: Empires of Steel & Powder
### Simulador Táctico RTS de Formaciones & Gran Campaña Cartográfica 4X

![Chronicles of War Banner](assets/earth_historical_map.jpg)

**Chronicles of War** es un videojuego híbrido de **Gran Estrategia 4X** y **Combate Táctico en Tiempo Real (RTS)** para navegador, inspirado en las mecánicas profundas de *Total War*, *Empire Earth*, *Age of History 3*, *Age of Empires III*, *Wargame: Red Dragon* y *Cossacks 3*.

---

## 🌟 Características Principales

### 1. 🌍 Gran Campaña 4X Geopolítica & Cartográfica
- **Mapa Mundial en Relieve Topográfico HD (2400 x 1162 px):** Extraído y calibrado a partir de teselas históricas globales, con 25 provincias y capitales mundiales (Madrid, París, Londres, Milán, Constantinopla, Tenochtitlan, Kioto, etc.).
- **Economía de 4 Recursos (Empire Earth):** Oro, Alimentos, Hierro y Ciencia. Cada provincia aporta tributos y levas según sus construcciones (Plazas Fuertes, Mercados, Fundiciones, Universidades).
- **Árbol de Épocas & Desarrollo Tecnológico:** Transición continua desde la Antigüedad Clásica hasta la Era Napoleónica.
- **Rutas Marítimas & Galeones Animados:** Flotas mercantes navegando rutas históricas oceánicas con estelas cinemáticas en tiempo real.
- **Puente de Batalla Total War:** Despliegue de ejércitos estratégicos con pantalla pre-batalla, cálculo de balance de poder, opción de *Auto-Resolve* táctico o *Luchar Manualmente* en el campo de batalla.

### 2. ⚔️ Combate Táctico RTS & Micro-Soldados
- **Arquitectura de Doble Capa:** Cada batallón militar combina un bloque táctico exterior (estética *SandRhoman History*) con soldados individuales articulados internamente en rangos y filas.
- **Alineación Cinemática Estricta:** Coherencia vectorial donde picas, arcabuces y ciclos de marcha apuntan con precisión quirúrgica en la dirección efectiva de avance y combate.
- **5 Doctrinas de Formación Interactivas:**
  - `[🛡️ Muro Picas]`: Anclaje al terreno, extensión frontal de lanzas y +50% de resistencia defensiva.
  - `[⚔️ Carga]`: Aceleración de choque (+50% velocidad) con empuje kinemático inicial.
  - `[🔲 Cuadro]`: Formación perimetral hueca con defensa radial omnidireccional contra caballería.
  - `[💨 Dispersa]`: Orden abierto que reduce en un 45% las bajas por metralla y proyectiles.
  - `[💥 Salva]`: Fuego sincronizado con severa supresión moral enemiga.
- **Detección Posicional de Flanqueo & Espalda:**
  - Flanqueo ($1.2 \le \Delta\theta \le 2.2\text{ rad}$): **+30% daño** y choque moral severo.
  - Retaguardia ($\Delta\theta > 2.2\text{ rad}$): **+60% daño** y colapso psicológico inmediato.
- **Balística y Terreno Realista:**
  - Bonificación de cota (+25% alcance y daño en colinas).
  - Cobertura arbórea (mitigación del 40% de proyectiles en bosques).
  - Humo volumétrico de pólvora, destellos de boca de fuego (*muzzle flashes*) y bajas persistentes en el suelo con charcos de sangre y armas arrojadas.

### 3. 📡 Red Logística & Refuerzos en Combate (*Wargame System*)
- **Convoyes y Trenes de Suministros Móviles (`SupplyTrain`):** Carretas de munición con radio logístico de 320 px.
- **Raycast de Líneas de Suministro:** Si un escuadrón enemigo corta la línea entre una unidad y su tren, la unidad entra en estado `⚠️ AISLADO`.
- **Fallas de Suministro:** Desgaste continuo de moral y fatiga si se corta la comunicación logística.
- **Puntos de Mando (CP) & Objetivos Estratégicos:** Captura de colinas, puentes y cruces para aumentar el flujo de CP y ordenar reservas tácticas que marchan desde el borde del mapa.

### 4. 🔊 Paisaje Sonoro de Retransmisión (*Cossacks 3*)
- Muestras de audio de alta definición extraídas de *Cossacks 3*:
  - Descargas de mosquetería con eco de campo abierto (`musket1-3.ogg`).
  - Cañonazos de artillería pesada con sub-graves e impacto (`cannon1-2.ogg`, `cannon_hit.ogg`).
  - Choque de acero de armas blancas (`melee1-2.ogg`).
  - Silbido de flechas bodkin (`arrow1.ogg`, `arrow_hit.ogg`).
  - Alarma táctica de cuartel general y pista ambiental continua de 11.3 MB (`battle_amb.ogg`).
- Paneo estéreo espacial con respaldo procedural continuo vía Web Audio API.

### 5. 🏛️ Creador de Batallas & Generador de Terrenos Empire Earth
- Editor de batallas con presupuesto *point-buy* en oro.
- 10 civilizaciones históricas con regimientos únicos.
- Generación procedural de mapas simétricos (*Continental*, *Highlands*, *Mediterráneo*, etc.) y climas variables (*Templado*, *Árido*, *Invernal*, *Otoñal*).

---

## 🚀 Instalación y Ejecución Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DOMINUSBABEL/chronicles-of-war.git
   cd chronicles-of-war
   ```
2. Inicia el servidor local de alto rendimiento:
   ```bash
   python server.py
   ```
3. Abre tu navegador en:
   ```
   http://127.0.0.1:8085/
   ```

---

## 🧪 Pruebas Automatizadas

El proyecto cuenta con suites completas de verificación sin dependencias externas:
```bash
# Verificación de integridad general y eras históricas
node tests/test_simulation.js

# Verificación de la Gran Campaña 4X, diplomacia y puente de batalla
node tests/test_campaign.js

# Verificación de combate táctico, doctrinas, flanqueo, munición y logística Wargame
node tests/test_tactical_combat.js
```

---

## 📜 Licencia
Distribuido bajo licencia MIT. Desarrollado como parte del ecosistema de simuladores históricos y sistemas autónomos de alto rendimiento.
