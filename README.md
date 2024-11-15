# monster-repo

#Since this is a monorepo you can start  the frontend  with npm run start


To install the backend with database we created a shell script that does it for you
# Start everything
./dev.sh start

# Connect to database
./dev.sh db

# View logs
./dev.sh logs

# Run migrations
./dev.sh migrate

# Stop everything
./dev.sh stop

