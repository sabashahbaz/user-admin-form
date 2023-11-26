from flask import Flask, request, make_response, jsonify 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, User_Form
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

migrate = Migrate(app, db)

db.init_app(app)


#submit user info to database 
@app.post('/submit_user_form')
def submit_user_form():
    data = request.json
    print("we made it")
    try:
        user_info = User_Form (
            first_name = data['first_name'], 
            last_name = data['last_name'],
            email = data['email'],
            description = data['description']
        )

        db.session.add(user_info)
        db.session.commit()

        return {"info": user_info.to_dict()}
    
    except Exception as e:
        print("Error:" , e)
        return make_response(jsonify({"error": "function submit_user_form is broken"}), 400)


@app.


@app.route("/")
def hello_zealthy():
    return "Hello Zealthy!"


if __name__ == "__main__":
    app.run(port=5555, debug=True)
