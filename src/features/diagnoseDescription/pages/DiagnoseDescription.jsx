import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EvaluationWithDescription from "../components/EvaluationWithDescription";
import { useParams } from "react-router-dom";

export default function DiagnoseDescription() {
  const { id } = useParams();

  return (
    <Container>
      <Row className="mt-5 d-flex justify-content-center">
        <Col md={10} lg={8} className="justify-content-center">
          <h1 className="header mt-2 mb-4">Badanie nr {id}</h1>
          <hr/>
        </Col>
      </Row>
      <Row className="mt-3 d-flex justify-content-center">
        <Col md={10} lg={8} className="justify-content-center">
          <EvaluationWithDescription/>
        </Col>
      </Row>
    </Container>
  );
}
