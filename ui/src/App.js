import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: ''
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/prediction/',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  }

  handleCancelClick = (event) => {

    this.setState({ result: "" });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    return (
      <Container>
        <div>
          <h1 className="title">Heart Disease Prediction</h1>
        </div>
        <div className="content">

          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Your age"
                  name="age"
                  value={formData.age}
                  onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Sex</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Gender (1 - male, 0 - female)"
                  name="sex"
                  value={formData.sex}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Chest-pain type</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Chest-pain experienced (1 - typical angina, 2 - atypical, 3 - non, 4 - asymptotic)'
                    name="cp"
                    value={formData.cp}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Resting Blood Pressure</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Blood pressure (mmHg)'
                    name="trestbps"
                    value={formData.trestbps}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Serum Cholestrol</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Display the serum cholesterol (mg/dl)'
                    name="chol"
                    value={formData.chol}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Fasting Blood Sugar</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Compares fasting blood sugar > 120 mg/dl (1 - true, 0 - false)'
                    name="fbs"
                    value={formData.fbs}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Resting ECG</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Electocardiographic results (0 - normal, 1 - ST-T wave abnormality, 2 - left ventricular hyperthrophy)'
                    name="restecg"
                    value={formData.restecg}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Max heart rate achieved</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Max heart rate'
                    name="thalach"
                    value={formData.thalach}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Exercise induced angina</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='(1 - true, 0 - false)'
                    name="exang"
                    value={formData.exang}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>ST depression induced by exercise relative to rest</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Value integer or float'
                    name="oldpeak"
                    value={formData.oldpeak}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Peak exercise ST segment</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='(1 - upsloping, 2 - flat, 3 - downsloping)'
                    name="slope"
                    value={formData.slope}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Number of major vessels (0-3) colored by flourosopy</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Integer or float (0-3)'
                    name="ca"
                    value={formData.ca}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Thal</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Displays the thalassemia (3 - normal, 6 - fixed defect, 7 - reversible defect)'
                    name="thal"
                    value={formData.thal}
                    onChange={this.handleChange} />
                </Form.Group>
              </Form.Row>
            
            <Row>
              <Col>
                <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  {isLoading ? 'Making prediction' : 'Predict'}
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="danger"
                  disabled={isLoading}
                  onClick={this.handleCancelClick}>
                  Reset prediction
                </Button>
              </Col>
            </Row>
          </Form>
          {result === "" ? null :
            (<Row>
              <Col className="result-container">
                <h5 id="result">{result}</h5>
              </Col>
            </Row>)
          }
        </div>
      </Container>
    );
  }
}

export default App;