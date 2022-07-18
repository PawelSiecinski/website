import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { BsTools } from 'react-icons/bs'

export default function Placeholder() {
  return (
    <Container fluid className="vertical-center">
      <Row className="text-center">
        <Col className="inProgress text-center align-middle mt-5">
          <h1 className="header">Panel Główny</h1>
          <h5 className="header mb-4">Prace w toku...</h5>
          <BsTools size={140}  className="icon" />
        </Col>
      </Row>
    </Container>
  );
}
