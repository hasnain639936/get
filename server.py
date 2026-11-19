import http.server
import socketserver
import os
import webbrowser
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable caching-friendly headers & utf-8
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run():
    os.chdir(DIRECTORY)
    server_address = ("", PORT)
    try:
        with socketserver.TCPServer(server_address, Handler) as httpd:
            url = f"http://localhost:{PORT}"
            print(f"==================================================")
            print(f"🌊 Sahil Beach Hut - Water Sports Booking App")
            print(f"🚀 Running locally at: {url}")
            print(f"📂 Root directory: {DIRECTORY}")
            print(f"==================================================")
            print("Press Ctrl+C to stop the server.")
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 10048 or "Address already in use" in str(e):
            alt_port = PORT + 1
            print(f"Port {PORT} in use, trying {alt_port}...")
            with socketserver.TCPServer(("", alt_port), Handler) as httpd:
                print(f"🚀 Running locally at: http://localhost:{alt_port}")
                httpd.serve_forever()
        else:
            raise e

if __name__ == "__main__":
    run()
