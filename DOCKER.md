# Running the app with Docker

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose

## Quick start

From the project root (`Dev/`):

```bash
docker compose up --build
```

- **Frontend:** http://localhost:3000  
- **Backend API / assets:** http://localhost:5000  

Stop with `Ctrl+C`. Run in background: `docker compose up -d --build`.

## Optional: Backend env (Supabase, etc.)

If you use `Backend/.env` for Supabase or other config, uncomment the `env_file` section for the `backend` service in `docker-compose.yml`, then:

```bash
docker compose up --build
```

## Custom API URL (e.g. deployed server)

If the app is not at `localhost`, rebuild the frontend with the URL the **browser** should use for the API:

```bash
docker compose build --build-arg REACT_APP_API_URL=http://your-server:5000 frontend
docker compose up -d
```

Replace `http://your-server:5000` with your actual backend URL.
