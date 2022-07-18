import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      toast.error("Email is not valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <Container>
      <Row className="d-flex mt-5 justify-content-center">
        <Col className="mt-5" md={5}>
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <label>Adres e-mail</label>
              <input
                type="email"
                className="form-control mt-2"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group mt-4">
              <label>Hasło</label>
              <input
                type="password"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
              </small>
            </div>
            <div className="form-group form-check mt-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Zapamiętaj mnie</label>
            </div>
            <div className="d-grid gap-2">
              <Button type="submit" className="btn btn-success mt-4 btn-block">
                Zaloguj się
              </Button>
              <Button type="link" href="/register" className="btn btn-danger mt-2 btn-block">
                Nie masz konta? zarejestruj się
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
