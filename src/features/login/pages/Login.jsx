import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <Container>
      <Row>
        <Col className = "justify-content-center mt-5">
            <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}
