FROM node:20-alpine AS base

WORKDIR /app

#####################################
#       FRONTEND ENVIRONMENT        #
#####################################

FROM base AS frontend-base
COPY package.json package-lock.json ./
# Install Chromium
# RUN apk add --no-cache chromium
RUN npm install && npm cache clean --force
CMD ["npm", "run", "dev"]

FROM frontend-base AS frontend-final
COPY public ./public
COPY src ./src
COPY index.html tsconfig.json vite.config.ts tsconfig.app.json tsconfig.node.json tailwind.config.js postcss.config.js ./
# ARG VITE_BASE_URL
# ENV VITE_BASE_URL $VITE_BASE_URL
RUN npm run build
CMD ["npm", "run", "preview"]

# #####################################
# #       COMBINED ENVIRONMENT        #
# #####################################

# nginx state for serving content
FROM nginx:alpine AS final
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy static assets from frontend-final stage
COPY --from=frontend-final /app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]