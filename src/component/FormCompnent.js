import React, { Component } from 'react'
import { Form, Button, Col } from 'react-bootstrap';

class FormCompnent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: 0
    }
  }



  render() {


    return (
      < Form horizontal
        style={{ margin: "10px 20%" }}
        onSubmit={
          (e) => {
            e.preventDefault()
            this.props.showHorns(this.state.horns)
            console.log(this.state.horns)
          }
        }
      >
        <Form.Group
          controlId="formBasicEmail"
          style={{ margin: "10px 20%" }}

        >
          <Col sm={4}  >
            <Form.Select size="sm" onChange={(e) => {
              this.setState({
                horns: e.target.value
              })
            }} >
              <option value="">choose Number of horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Col xs={2} style={{ margin: "10px 20%" }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Form >
    );
  }
}

export default FormCompnent
