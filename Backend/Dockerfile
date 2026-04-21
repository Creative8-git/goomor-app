# Backend (Node/Express) – API and static assets
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Application and data
COPY . .

# Default port (override with env)
ENV PORT=5000
EXPOSE 5000

CMD ["node", "server.js"]
