import React from 'react';
import { Form, Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class LogIn extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Card>
              <div className='card-title'>
                <h4>
                  {' '}
                  <i className='icon-user'></i> Log in
                </h4>
              </div>

              <Form>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type='email' />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' />
                </Form.Group>
                <Form.Group controlId='formBasicCheckbox'>
                  <Form.Check type='checkbox' label='Remember me' />
                </Form.Group>
                <Button
                  className='btn btn-orange'
                  variant='primary'
                  type='submit'
                >
                  Log in
                </Button>
              </Form>
              <div className='extra-links'>
                <Link>Forgot password ?</Link> |{' '}
                <Link to='/register'>Register</Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogIn;
