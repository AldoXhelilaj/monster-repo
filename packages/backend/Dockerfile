FROM node:18-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install

# Copy prisma files and generate client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy rest of the application
COPY . .

# Set up wait script and start command in container's entrypoint
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:dev"]

