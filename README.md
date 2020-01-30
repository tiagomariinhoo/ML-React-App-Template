# ML-React-App
It's a template on which we can build a React app and call endpoints to make predictions.

To run: 
In UI folder: yarn install and yarn start
In Service folder: pip install -r requirements.txt and FLASK_APP=app.py flask run

### Usage
The complete guide to use this repository: https://towardsdatascience.com/create-a-complete-machine-learning-web-application-using-react-and-flask-859340bddb33


### The Data

**Age**: displays the age of the individual

**Sex**: Gender (1 - male, 0 - female)

**Chest-pain type**: displays the type of chest-pain experienced by the individual (1 - typical angina, 2 - atypical angina, 3 - non, 4 - asymptotic)

**Resting Blood Pressure**: displays resting blood pressure mmHg (unit)

**Serum Cholestrol**: displays the serum cholesterol in mq/dl (unit)

**Fasting Blood Sugar**: compares the fasting blood sugar > 120 mg/dl (1 - true, 0 - false)

**Resting ECG**: displays the max heart rate

**Exercise induced angina**: 1 - true, 0 - false

**ST depression induced by exercise relative to rest**: value integer or float

**Peak exercise ST segment**: 1 - upsloping, 2 - flat, 3 - downsloping

**Number of major vessels (0-3) colored by flourosopy**: displayes the values, integer or float

**Thal**: displayes the thalassemia (3 - normal, 6 - fixed defect, 7 - reversible defect)

**Diagnosis of heart disease**: DIsplays wheter the individual is suffering from heart disease (0 - absence, 1,2,3,4 - present)

Description

Age: Age is the most important risk factor in developing cardiovascular or heart diseases, with approximately a tripling of risk with each decade of life. Coronary fatty streaks can begin to form in adolescence. It is estimated that 82 percent of people who die of coronary heart disease are 65 and older. Simultaneously, the risk of stroke doubles every decade after age 55.

Sex: Men are at greater risk of heart disease than pre-menopausal women. Once past menopause, it has been argued that a woman’s risk is similar to a man’s although more recent data from the WHO and UN disputes this. If a female has diabetes, she is more likely to develop heart disease than a male with diabetes.

Angina (Chest Pain): Angina is chest pain or discomfort caused when your heart muscle doesn’t get enough oxygen-rich blood. It may feel like pressure or squeezing in your chest. The discomfort also can occur in your shoulders, arms, neck, jaw, or back. Angina pain may even feel like indigestion.

Resting Blood Pressure: Over time, high blood pressure can damage arteries that feed your heart. High blood pressure that occurs with other conditions, such as obesity, high cholesterol or diabetes, increases your risk even more.

Serum Cholesterol: A high level of low-density lipoprotein (LDL) cholesterol (the “bad” cholesterol) is most likely to narrow arteries. A high level of triglycerides, a type of blood fat related to your diet, also ups your risk of a heart attack. However, a high level of high-density lipoprotein (HDL) cholesterol (the “good” cholesterol) lowers your risk of a heart attack.

Fasting Blood Sugar: Not producing enough of a hormone secreted by your pancreas (insulin) or not responding to insulin properly causes your body’s blood sugar levels to rise, increasing your risk of a heart attack.

Resting ECG: For people at low risk of cardiovascular disease, the USPSTF concludes with moderate certainty that the potential harms of screening with resting or exercise ECG equal or exceed the potential benefits. For people at intermediate to high risk, current evidence is insufficient to assess the balance of benefits and harms of screening.

Max heart rate achieved: The increase in cardiovascular risk, associated with the acceleration of heart rate, was comparable to the increase in risk observed with high blood pressure. It has been shown that an increase in heart rate by 10 beats per minute was associated with an increase in the risk of cardiac death by at least 20%, and this increase in the risk is similar to the one observed with an increase in systolic blood pressure by 10 mm Hg.

Exercise induced angina: The pain or discomfort associated with angina usually feels tight, gripping or squeezing, and can vary from mild to severe. Angina is usually felt in the center of your chest but may spread to either or both of your shoulders, or your back, neck, jaw or arm. It can even be felt in your hands. o Types of Angina a. Stable Angina / Angina Pectoris b. Unstable Angina c. Variant (Prinzmetal) Angina d. Microvascular Angina.

Peak exercise ST segment: A treadmill ECG stress test is considered abnormal when there is a horizontal or down-sloping ST-segment depression ≥ 1 mm at 60–80 ms after the J point. Exercise ECGs with up-sloping ST-segment depressions are typically reported as an ‘equivocal’ test. In general, the occurrence of horizontal or down-sloping ST-segment depression at a lower workload (calculated in METs) or heart rate indicates a worse prognosis and higher likelihood of multi-vessel disease. The duration of ST-segment depression is also important, as prolonged recovery after peak stress is consistent with a positive treadmill ECG stress test. Another finding that is highly indicative of significant CAD is the occurrence of ST-segment elevation > 1 mm (often suggesting transmural ischemia); these patients are frequently referred urgently for coronary angiography.