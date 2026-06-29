#!/usr/bin/env python3
"""
Run this to preview the portfolio locally.
Double-click or run: python server.py
Then open: http://localhost:8000
"""
import http.server, socketserver, os, webbrowser, threading

PORT = 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

def open_browser():
    import time; time.sleep(0.8)
    webbrowser.open(f"http://localhost:{PORT}")

threading.Thread(target=open_browser, daemon=True).start()
print(f"✅  Portfolio running at http://localhost:{PORT}")
print("    Press Ctrl+C to stop.\n")

with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    httpd.serve_forever()
