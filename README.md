# Notification Portal Phase 1

Learning scaffold: Next.js + Nginx + two Express services + PostgreSQL + Redis in Docker Compose.

## Run
1. Install Docker Desktop (Linux containers / WSL2 on Windows).
2. Copy `.env.example` to `.env` and replace the password with a strong random value.
3. From this folder run `docker compose up -d --build`.
4. Open http://localhost:3000.
5. Test http://localhost:8080/api/auth/health and http://localhost:8080/api/whatsapp/health.
6. Run `docker compose ps` and `docker compose logs -f` to inspect services.
7. Stop with `docker compose down` (preserves volumes).

**Warning:** `docker compose down -v` deletes local database and Redis volumes. Do not use it unless intentionally resetting test data.

## Scope
This is a **local-only learning scaffold**, not a secure production deployment. No actual login, API keys, WhatsApp sessions, messages, queues, or CI/CD are implemented. Do not expose port 8080 to the public internet or deploy as-is.

## Next phase
Add authentication, user/project data models, real WhatsApp integration, a BullMQ worker, tests, image pinning, and secure production builds.
