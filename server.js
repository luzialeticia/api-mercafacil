const app = require('./src/app')
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});