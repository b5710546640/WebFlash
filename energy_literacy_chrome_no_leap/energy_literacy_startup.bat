@ECHO OFF

TIMEOUT /T 0
REM Start serial-port-json-server
START "Start serial-port-json-server" /MIN "C:\Users\admin\Documents\energy_literacy_chrome\support\serial-port-json-server.exe"

TIMEOUT /T 10
REM Start Energy literacy (Chrome)
START "Start Energy literacy model" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -kiosk -fullscreen "file:///C:/Users/admin/Documents/energy_literacy_chrome/index.html"