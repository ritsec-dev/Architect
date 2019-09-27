from api import app, api_path
from rest.user_routes import user
from rest.team_routes import team

app.register_blueprint(user, url_prefix=api_path)
app.register_blueprint(team, url_prefix=api_path)

if __name__ == "__main__":
    app.run(debug=True)
