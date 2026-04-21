# Stage 1: build React app
FROM node:20-alpine AS build

WORKDIR /app

# API URL for browser requests (use same host, backend port)
ARG REACT_APP_API_URL=http://localhost:5000
ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY package*.json ./
RUN npm ci || npm install

COPY . .
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:alpine

# Copy built app
COPY --from=build /app/build /usr/share/nginx/html

# SPA: serve index.html for client routes
RUN echo 'server { \
  listen 80; \
  root /usr/share/nginx/html; \
  index index.html; \
  location / { try_files $uri $uri/ /index.html; } \
  location /health { return 200; add_header Content-Type text/plain; } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
