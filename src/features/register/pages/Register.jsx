import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <Container>
    <Row>
      <Col className = "justify-content-center mt-5">
          <RegisterForm />
      </Col>
    </Row>
  </Container>
  )
}
