#!/bin/bash

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

case "$1" in
  "start")
    ./start.sh
    ;;
    
  "stop")
    echo -e "${BLUE}Stopping all containers...${NC}"
    docker-compose down
    ;;
    
  "restart")
    echo -e "${BLUE}Restarting all containers...${NC}"
    docker-compose down
    docker-compose up -d
    ;;
    
  "logs")
    echo -e "${BLUE}Showing logs...${NC}"
    docker-compose logs -f
    ;;
    
  "db")
    echo -e "${BLUE}Connecting to database...${NC}"
    docker exec -it backend-db-1 psql -U postgres -d monster
    ;;
    
  "migrate")
    echo -e "${BLUE}Running database migrations...${NC}"
    docker exec backend-server-1 npx prisma migrate deploy
    ;;
    
  "shell")
    echo -e "${BLUE}Opening shell in backend container...${NC}"
    docker exec -it backend-server-1 sh
    ;;
    
  *)
    echo "Usage: ./dev.sh [command]"
    echo "Commands:"
    echo "  start    - Start all services"
    echo "  stop     - Stop all services"
    echo "  restart  - Restart all services"
    echo "  logs     - Show container logs"
    echo "  db       - Connect to database"
    echo "  migrate  - Run database migrations"
    echo "  shell    - Open shell in backend container"
    ;;
esac