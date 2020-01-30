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

#print(dataset.describe())

#rcParams['figure.figsize'] = 20, 14
#plt.matshow(dataset.corr())
#plt.yticks(np.arange(dataset.shape[1]), dataset.columns)
#plt.xticks(np.arange(dataset.shape[1]), dataset.columns)
#plt.colorbar()

#plt.show() uncomment to display plt
#plt.hist('data')

#Data Processing
#CATEGORICAL VARIABLES - Breack each categorical column into dummy columns

print(dataset.head())

dataset = pd.get_dummies(dataset, columns = ['sex', 'cp', 'fbs', 'restecg', 'exang', 'slope', 'ca', 'thal'])
standardScaler = StandardScaler()
columns_to_scale = ['age', 'trestbps', 'chol', 'thalach', 'oldpeak']
dataset[columns_to_scale] = standardScaler.fit_transform(dataset[columns_to_scale])

y = dataset['target']
X = dataset.drop(['target'], axis=1)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.33, random_state = 0)

#X_train e X_test são os dados separados do csv, um pra treino e outro pra teste

#print(X_test.head())
#print(X_train.head())

#Random Forest Classifier

rf_scores = []
estimators = [10, 100, 200, 500, 1000]

rf_classifier = RandomForestClassifier(n_estimators = 10, random_state = 0)
rf_classifier.fit(X_train, y_train)

