# Service-to-Service

Two Node.js services (A & B) communicating via HTTP, running with Docker Compose.

## Run

1. Create .env files:
   - service-a/.env: SERVICE_B_URL=http://service-b:3001
   - service-b/.env: PORT=3001

2. Start services:
   docker-compose up --build -d

3. Test:
   curl http://localhost:4000/get-data
