import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UploadForm from "../components/UploadForm";
import Evaluation from "../components/Evaluation";

export default function Upload() {
  return (
    <Container>
      <Row className="mt-5 d-flex justify-content-center">
        <Col md={10} lg={8} className="justify-content-center">
          <h1 className="header mt-2 mb-4">Prześlij badanie</h1>
          <hr/>
        </Col>
      </Row>
      <Row className="mt-3 d-flex justify-content-center">
        <Col md={10} lg={8} className="justify-content-center">
          <Evaluation/>
        </Col>
      </Row>
    </Container>
  );
}
