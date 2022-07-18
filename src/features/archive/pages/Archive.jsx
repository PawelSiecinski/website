import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArchiveTable from '../components/ArchiveTable'

export default function Archive() {
  return (
    <Container>
      <Row >
        <Col md={12} lg ={6} className="mt-5 ml-5 mx-auto text-left">
          <h2 className="mb-4">Archiwalne Badania</h2>
          <hr/>
        </Col>
      </Row>
      <Row className = "justify-content-center mt-4">
        <Col md={12} lg ={6}>
          <ArchiveTable/>
        </Col>
      </Row>
    </Container>
  )
}
