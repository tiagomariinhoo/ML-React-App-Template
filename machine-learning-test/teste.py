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

dataset = pd.read_csv('heart.csv')

dataset = pd.get_dummies(dataset, columns = ['sex', 'cp', 'fbs', 'restecg', 'exang', 'slope', 'ca', 'thal'])

data_input = pd.DataFrame({
    'age': [32],
    'sex': [1],
    'cp' : [3],
    'trestbps': [130],
    'chol': [233],
    'fbs': [1],
    'restecg': [0],
    'thalach': [150],
    'exang': [0],
    'oldpeak': [2.3],
    'slope': [0],
    'ca': [0],
    'thal': [1],
    'target': [1]
})

data_input = pd.get_dummies(data_input, columns = ['sex', 'cp', 'fbs', 'restecg', 'exang', 'slope', 'ca', 'thal'])

for i in dataset.columns:
    if i not in data_input.columns:
        data_input[i] = 0

print(data_input)

#data_input = dataset.loc[[0]]

standardScaler = StandardScaler()
columns_to_scale = ['age', 'trestbps', 'chol', 'thalach', 'oldpeak']

dataset[columns_to_scale] = standardScaler.fit_transform(dataset[columns_to_scale])
data_input[columns_to_scale] = standardScaler.fit_transform(data_input[columns_to_scale])

y = dataset['target']
X = dataset.drop(['target'], axis=1)


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.33, random_state = 0)

y_input = data_input['target']
x_input = data_input.drop(['target'], axis=1)

#Random Forest Classifier
rf_classifier = RandomForestClassifier(n_estimators = 10, random_state = 0)
rf_classifier.fit(X_train, y_train)

y_pred = rf_classifier.predict(x_input)
print(y_pred)



