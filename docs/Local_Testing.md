# Local Testing
This section will walk you through testing this application locally

### With Docker Officially
This application is designed to work out-of-the-box with docker compose.

1. Run `docker-compose build && docker-compose up`
2. You can access your instance at `http://0.0.0.0`

### With Docker for Debugging
You can also test these things on a much faster docker-compose

1. Run `docker-compose -f docker-compose-dev.yml build && docker-compose -f docker-compose-dev.yml up`
2. You can access your instance much quicker at `http://localhost:3000`, but in production this will have compiled React instead
