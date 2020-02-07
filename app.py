from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
from sklearn.externals import joblib
from flask_cors import CORS, cross_origin
import json, ast
import os
from random_forest_pred import RandomForestPred


flask_app = Flask(__name__)
cors = CORS(flask_app)

flask_app.config['CORS_HEADERS'] = 'Content-Type'

app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "ML React App", 
		  description = "Predict results using a trained model")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
				  {'age': fields.Integer(required = True, 
				  							   description="Age", 
    					  				 	   help="Age cannot be blank"),
				  'sex': fields.Integer(required = True, 
				  							   description="Sex", 
    					  				 	   help="Sex cannot be blank"),
				  'cp': fields.Integer(required = True, 
				  							description="Chest-pain type", 
    					  				 	help="Chest-pain cannot be blank"),
				  'trestbps': fields.Integer(required = True, 
				  							description="Resting Blood Pressure", 
    					  				 	help="Resting Blood Pressure cannot be blank"),
				  'chol': fields.Integer(required = True, 
				  							description="Serum Cholestrol", 
    					  				 	help="Serum Cholestrol cannot be blank"),
					'fbs': fields.Integer(required = True, 
				  							description="Fasting Blood Sugar", 
    					  				 	help="Fasting Blood Sugar cannot be blank"),
					'restecg': fields.Integer(required = True, 
				  							description="Resting ECG", 
    					  				 	help="Resting ECG cannot be blank"),
					'thalach': fields.Integer(required = True, 
				  							description="Max heart rate achieved", 
    					  				 	help="Max heart rate achieved cannot be blank"),
					'exang': fields.Integer(required = True, 
				  							description="Exercise induced angina", 
    					  				 	help="Exercise induced angina cannot be blank"),
					'oldpeak': fields.Float(required = True, 
				  							description="ST depression induced by exercise relative to rest", 
    					  				 	help="ST depression induced by exercise relative to rest cannot be blank"),
					'slope': fields.Integer(required = True, 
				  							description="Peak exercise ST segment", 
    					  				 	help="Peak exercise ST segment cannot be blank"),
					'ca': fields.Integer(required = True, 
				  							description="Number of major vessels (0-3) colored by flourosopy", 
    					  				 	help="Number of major vessels (0-3) colored by flourosopy cannot be blank"),
					'thal': fields.Integer(required = True, 
				  							description="Thal", 
    					  				 	help="Thal cannot be blank"),
											   })

# classifier = joblib.load('classifier.joblib')

@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData = request.json


			formData = ast.literal_eval(json.dumps(formData))

			data = [val for val in formData.values()]

			data = RandomForestPred()
			data = data.predict(formData)

			print(data)

			if(data == 1):
				data = "Did not detect heart disease"
			else:
				data = "Heart disease detected"

			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": "Prediction: " + str(data)
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})

if __name__ == "__main__":
    app.run(port=4993)