#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting development environment...${NC}"

# Stop any running containers and remove volumes
echo -e "${GREEN}Cleaning up old containers...${NC}"
docker-compose down -v

# Build and start containers
echo -e "${GREEN}Building and starting containers...${NC}"
docker-compose up --build -d

# Wait for containers to be ready
echo -e "${GREEN}Waiting for services to be ready...${NC}"
sleep 10

# Run database migrations
echo -e "${GREEN}Running database migrations...${NC}"
docker exec backend-server-1 npx prisma migrate deploy

# Show running containers
echo -e "${GREEN}Services are ready! Running containers:${NC}"
docker ps

# Show logs
echo -e "${GREEN}Showing logs (Ctrl+C to exit):${NC}"
docker-compose logs -f