const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const SERVER_DIR = __dirname;

const server = http.createServer((req, res) => {
    // Sanitize the URL to prevent directory traversal
    const safeUrl = req.url === '/' ? 'Index.html' : req.url;
    // Extract just the filename to prevent paths like ../../windows/system32/cmd.exe
    const filename = path.basename(safeUrl);
    
    // Only serve files from the current directory
    let filePath = path.join(SERVER_DIR, filename);
    
    // Serve the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - File Not Found</h1>');
            return;
        }
        
        // Determine content type
        let contentType = 'text/html';
        if (filePath.endsWith('.css')) contentType = 'text/css';
        if (filePath.endsWith('.js')) contentType = 'text/javascript';
        if (filePath.endsWith('.json')) contentType = 'application/json';
        
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`🔥 Football Legends Website is LIVE!`);
    console.log(`📍 Open Chrome and go to: http://localhost:${PORT}`);
    console.log(`🎯 Press Ctrl+C to stop the server`);
});
