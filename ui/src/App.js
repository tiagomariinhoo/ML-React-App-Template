import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import FormItem from './components/FormItem';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        textfield1: '',
        textfield2: '',
        select1: 1,
        select2: 1,
        select3: 1
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

            <FormItem label={'Age'}
                      placeholder={'Your age'}></FormItem>
            <FormItem label={'Sex'}
                      placeholder={'Gender (1 - male, 0 - female)'}></FormItem>
            <FormItem label={'Chest-pain type'}
                      placeholder={'Chest-pain experienced (1 - typical angina, 2 - atypical, 3 - non, 4 - asymptotic)'}></FormItem>
            <FormItem label={'Resting Blood Pressure'}
                      placeholder={'Blood pressure (mmHg)'}></FormItem>
            <FormItem label={'Serum Cholestrol'}
                      placeholder={'Display the serum cholesterol (mg/dl)'}></FormItem>
            <FormItem label={'Fasting Blood Sugar'}
                      placeholder={'Compares fasting blood sugar > 120 mg/dl (1 - true, 0 - false)'}></FormItem>
            <FormItem label={'Resting ECG'}
                      placeholder={'Max heart rate'}></FormItem>
            <FormItem label={'Exercise induced angina'}
                      placeholder={'(1 - true, 0 - false)'}></FormItem>
            <FormItem label={'ST depression induced by exercise relative to rest'}
                      placeholder={'Value integer or float'}></FormItem>
            <FormItem label={'Peak exercise ST segment'}
                      placeholder={'(1 - upsloping, 2 - flat, 3 - downsloping)'}></FormItem>
            <FormItem label={'Number of major vessels (0-3) colored by flourosopy'}
                      placeholder={'Integer or float'}></FormItem>
            <FormItem label={'Thal'}
                      placeholder={'Thalassemia (3 - normal, 6 - fixed defect, 7 - reversible defect)'}></FormItem>

            {/* <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Select 1</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.select1}
                  name="select1"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Select 2</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.select2}
                  name="select2"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Select 3</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.select3}
                  name="select3"
                  onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
            </Form.Row> */}
            
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