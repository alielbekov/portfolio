# ---- Build Stage ----
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your app
COPY . .

# Build the project
RUN npm run build

# ---- Run Stage ----
FROM node:20-alpine

WORKDIR /app

# Copy built app and necessary files
COPY --from=build /app ./

# Install only production deps if needed
# (uncomment if your project has runtime deps)
# RUN npm ci --omit=dev

EXPOSE 3000
CMD ["npm", "run", "preview"]
