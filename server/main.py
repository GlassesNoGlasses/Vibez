
from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app) # modify this line to configure CORS as needed. In TESTING, allow all origins.


@app.route("/api/data", methods=["GET"])
def get_data():
    sample_data = {"message": "Hello, World!"}
    return jsonify(sample_data)

if __name__ == "__main__":
    app.run(debug=True, port=5173)

