import React from "react";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  UploadPage,
  ArchivePage,
  PendingPage,
} from "./features";
import { NavBar } from "./common";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { DiagnoseDescription } from "./features/diagnoseDescription";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Container fluid>
          <Row>
            <NavBar />
          </Row>
          <Row>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/pending">
              <PendingPage />
            </Route>
            <Route exact path="/archive">
              <ArchivePage />
            </Route>
            <Route exact path="/badanie/:id">
              <DiagnoseDescription />
            </Route>
            <Route exact path="/upload">
              <UploadPage />
            </Route>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}
