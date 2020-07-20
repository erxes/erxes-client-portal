import React from "react";
import { Form, Container, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class SignUp extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Card>
              <div className="card-title">
                <h4>
                  {" "}
                  <i className="icon-user"></i> Register
                </h4>
              </div>

              <Form>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button
                  className="btn btn-orange"
                  variant="primary"
                  type="submit"
                >
                  Register
                </Button>
              </Form>
              <div className="extra-links">
                <Link to="/log-in">Already have an account</Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
