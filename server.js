const http = require('http');
const PORT = process.env.PORT || 8080;
const server = http.createServer();

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});