# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

COPY package.json ./
RUN npm install --production

# Copy the built output from the build stage
COPY --from=build /app/dist ./dist

# Expose the port your app listens on
EXPOSE 3000

# Start your app
CMD ["node", "dist/index.js"]