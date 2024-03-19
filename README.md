# fastify-caching-redis

## Getting Started

1. `nvm use` -- setup Node
2. `npm install` -- install dependencies
3. `node server.js` -- run server

## Testing Latency

Run `curl -w "@curl-format.txt" -o /dev/null -s http://localhost:8000/api/user-data`

## Clear cache

Within redis CLI: `DEL user-data`
