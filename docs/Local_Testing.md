# Local Testing
This section will walk you through testing this application locally

### With Docker
This application is designed to work out-of-the-box with docker compose.

1. Change the API path in `frontend/API.js` to the current URI
2. Run `docker-compose build && docker-compose up`
3. You can access your instance at `http://localhost`

### Individually
You can also test these things locally!

1. Change the API path in `frontend/API.js` to `localhost:5000`
2. Install python requirements with `cd api && pip install -r requirements.txt && cd ..`
3. Install javascript requirements with `cd frontend && yarn add && cd ..`
4. Run the flask server with `cd api && python app.py`
5. In a new terminal, run the react dev server with `cd frontend && yarn start`
6. You can access your instance at `http://localhost:3000`
