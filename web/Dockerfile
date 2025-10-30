# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Run stage
FROM node:20-alpine AS run
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD ["npm", "run", "preview"]
