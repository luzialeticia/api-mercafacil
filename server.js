const http = require('http');
const app = require('./src/app')
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});