# Basic
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib import rcParams
from matplotlib.cm import rainbow
'exec(%matplotlib inline)'
import warnings
warnings.filterwarnings('ignore')

# Other libraries
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Machine Learning
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler

import json

class RandomForestPred():
    
    def predict(self, dataJson):

        dataset = pd.read_csv('heart.csv')

        dataset = pd.get_dummies(dataset, columns = ['sex', 'cp', 'fbs', 'restecg', 'exang', 'slope', 'ca', 'thal'])

        #data = [val for val in formData.values()]
        list_index = []
        list_values = []
        for val in dataJson:
            list_index.append(val)

        for val in dataJson.values():
            list_values.append(val)

        #print(list_index)

        print(list_index)
        print(list_values)

        #fileName = "data.json"
        #file1 = open(fileName, "w")

        #file1.write(dataJson)
        #file1.close()

        #data_inputAux = pd.read_csv('data.json')

        data_input = pd.DataFrame({
            'age': [67],
            'sex': [1],
            'cp' : [4],
            'trestbps': [160],
            'chol': [286],
            'fbs': [0],
            'restecg': [2],
            'thalach': [108],
            'exang': [1],
            'oldpeak': [1.5],
            'slope': [2],
            'ca': [3],
            'thal': [3],
            'target': [1]
        })

        j = 0
        for i in list_index:
            data_input[i] = list_values[j]
            j+=1
        

        data_input = pd.get_dummies(data_input, columns = ['sex', 'cp', 'fbs', 'restecg', 'exang', 'slope', 'ca', 'thal'])


        for i in dataset.columns:
            if i not in data_input.columns:
                data_input[i] = 0

        standardScaler = StandardScaler()
        columns_to_scale = ['age', 'trestbps', 'chol', 'thalach', 'oldpeak']


        dataset[columns_to_scale] = standardScaler.fit_transform(dataset[columns_to_scale])
        data_input[columns_to_scale] = standardScaler.fit_transform(data_input[columns_to_scale])

        y = dataset['target']
        X = dataset.drop(['target'], axis=1)     

        y_input = data_input['target']
        x_input = data_input.drop(['target'], axis=1)

        for i in x_input.columns:
            if i not in X.columns:
                X[i] = 0

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.33, random_state = 0)


        #Random Forest Classifier
        rf_classifier = RandomForestClassifier(n_estimators = 100, random_state = 0)
        rf_classifier.fit(X_train, y_train)
        print(rf_classifier.score(X_test, y_test))
        
        x_input = x_input.reindex(sorted(x_input.columns), axis=1)
        X = X.reindex(sorted(X.columns), axis=1)

        # print(x_input.columns)
        # print(X.columns)

        # print(x_input)

        y_pred = rf_classifier.predict(x_input)
        # print(y_pred)

        return y_pred

# a = RandomForestPred()

#a.predict('{\'fbs\': \'1\', \'slope\': \'1\', \'trestbps\': \'1\', \'exang\': \'1\', \'restecg\': \'1\', \'age\': \'1\', \'chol\': \'1\', \'sex\': \'1\', \'oldpeak\': \'1\', \'thalach\': \'1\', \'cp\': \'1\', \'ca\': \'1\', \'thal\': \'1\'}')
# a.predict("Teste")


