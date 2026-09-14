import http.server
import socketserver
import sys
import os
import mimetypes

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Ensure MIME types are registered properly
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('application/json', '.json')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('audio/ogg', '.ogg')

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))

class ChroniclesHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=CURRENT_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def log_message(self, format, *args):
        sys.stderr.write(f"[ChroniclesServer] {self.address_string()} - {format % args}\n")

def run(port=8085):
    os.chdir(CURRENT_DIR)
    try:
        with http.server.ThreadingHTTPServer(("", port), ChroniclesHTTPHandler) as httpd:
            print(f"============================================================")
            print(f" CHRONICLES OF WAR: EMPIRES OF STEEL & POWDER")
            print(f" Servidor Táctico Multi-hilo Activo en:")
            print(f" 👉 http://0.0.0.0:{port}/index.html")
            print(f" Directorio de servicio: {CURRENT_DIR}")
            print(f"============================================================")
            sys.stdout.flush()
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 10048 or "Address already in use" in str(e):
            print(f"[Aviso] Puerto {port} ocupado. Reintentando en puerto {port + 1}...")
            run(port + 1)
        else:
            raise e

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8085
    run(port)
