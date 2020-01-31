import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function FormItem(props) {
    return (
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={props.placeholder}
                    name="textfield1"
                    value={''}
                    onChange={}
                />
            </Form.Group>
        </Form.Row>
    )
}

export default FormItem;