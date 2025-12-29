"""Simple Flask application serving a React frontend with user data."""
from flask import Flask, render_template

app = Flask(__name__,
            static_folder="./dist/assets",
            template_folder="./dist")

@app.route("/")
def index():
    """Render the main page with user information."""
    user = {"name": "Rémi", "role": "architecte"}
    return render_template("index.html", user=user)

if __name__ == "__main__":
    app.run(debug=True)
