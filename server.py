import http.server
import socketserver
import os
import sys
import webbrowser

PORT = 8085
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Prevent caching for live development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def guess_type(self, path):
        mimetype, _ = super().guess_type(path), None
        if path.endswith('.js'):
            return 'application/javascript'
        if path.endswith('.css'):
            return 'text/css'
        if path.endswith('.html'):
            return 'text/html'
        if path.endswith('.ogg'):
            return 'audio/ogg'
        return mimetype

def run():
    sys.stdout.reconfigure(encoding='utf-8')
    os.chdir(DIRECTORY)
    server_address = ('127.0.0.1', PORT)
    httpd = http.server.ThreadingHTTPServer(server_address, CustomHandler)
    print(f"🚀 Chronicles of War Server running at http://127.0.0.1:{PORT}/")
    print(f"📁 Serving directory: {DIRECTORY}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Servidor detenido.")
        httpd.server_close()

if __name__ == '__main__':
    run()
