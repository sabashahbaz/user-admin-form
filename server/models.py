from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func 

db = SQLAlchemy()

class User_Form(db.Model):
    __tablename__ = "user_form_table"

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.String(50), nullable = False, default = "")
    last_name = db.Column(db.String(50), nullable = False, default = "")
    email = db.Column(db.String(50), nullable = False, default = "")
    description = db.Column(db.String(1000), nullable = False, default = "")

