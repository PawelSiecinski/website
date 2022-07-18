import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

function Evaluation() {
  return (
    <Form>
      <h5 className="mb-4">
        <b>Informacje o pacjencie</b>
      </h5>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="basic">
            <Form.Label>
              <b>Rozpoczęcie usługi</b>
            </Form.Label>
            <Form.Control required type="date" placeholder="Data usługi" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nameSurname">
            <Form.Label>
              <b>Imię i nazwisko</b>
            </Form.Label>
            <Form.Control required type="text" placeholder="Imię i nazwisko" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="birthday">
            <Form.Label>
              <b>Data urodzenia</b>
            </Form.Label>
            <Form.Control required type="date" placeholder="Data urodzenia" />
          </Form.Group>
          <Form.Group required className="mb-3" controlId="birthday">
            <Form.Label>
              <b>PESEL</b>
            </Form.Label>
            <Form.Control required type="number" placeholder="PESEL" />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>
              <b>PŁEĆ</b>
            </Form.Label>
            <br />
            <Form.Check
              type="radio"
              id={`radio-female`}
              label={`K`}
              required
              style={{ display: "inline-block" }}
            />
            <Form.Check
              type="radio"
              id={`radio-male`}
              label={`M`}
              required
              style={{ display: "inline-block" }}
              className="ms-3"
            />
            <Form.Check
              type="radio"
              id={`radio-other`}
              label={`Inne`}
              required
              style={{ display: "inline-block" }}
              className="ms-3"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="basic">
            <Form.Label>
              <b>adres (ulica)</b>
            </Form.Label>
            <Form.Control required type="text" placeholder="Adres (ulica)" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="basic">
            <Form.Label>
              <b>Miasto</b>
            </Form.Label>
            <Form.Control required type="text" placeholder="Miasto" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="basic">
            <Form.Label>
              <b>Kod pocztowy</b>
            </Form.Label>
            <Form.Control
              type="text"
              required
              pattern="^\d{2}-\d{3}$"
              placeholder="kod pocztowy"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="basic">
            <Form.Label>
              <b>Telefon kontaktowy</b>
            </Form.Label>
            <Form.Control required type="tel" placeholder="Telefon kontaktowy" />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>
              <b>Rozrusznik</b>
            </Form.Label>
            <br />
            <Form.Check
              type="radio"
              required
              id={`radio-yes`}
              label={`Tak`}
              value={true}
              style={{ display: "inline-block" }}
            />
            <Form.Check
              type="radio"
              id={`radio-no`}
              label={`Nie`}
              required
              style={{ display: "inline-block" }}
              className="ms-3"
              value={false}
            />
          </Form.Group>
        </Col>
      </Row>
      <br />

      <h5 className="mb-3">
        <b>Diagnoza</b>
      </h5>
      <Row>
        <Col md={6} lg={4}>
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l44.0 Blok przedsionkowo-komorowy I stopnia`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l44.1 Blok przedsionkowo-komorowy II stopnia`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l44.2 Blok przedsionkowo-komorowy III stopnia (zupełny)`}
          />

          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l44.3 Inne nieokreślone bloki przedsionkowo-komorowe`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l44.7 Blok odnogi pęczka Hisa - lewej`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l45.1 Blok odnogi pęczka Hisa - prawej`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l47.1 Częstoskurcz nadkomorowy`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l47.2 Częstoskurcz komorowy`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l48 Migotanie lub trzepotanie przedsionków`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l48.0 Migotanie lub trzepotanie przedsionków - utrwalone`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l48.1 Migotanie lub trzepotanie przedsionków - napadowe`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l49 Zaburzenia przewodzenia, nieokreślone`}
          />
        </Col>
        <Col md={6} lg={4}>
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l49.1 Przedwczesna deploraryzacja przedsionkowa`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l49.2 Przedwczesna deploraryzacja z łącza przedsionkowo-komorowego`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l49.3 Przedwczesna deploraryzacja komorowa`}
          />

          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l49.5 Zespół chorej zatoki`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l49.8 Zaburezenia przewodzenia, nieokreślone - pauzy`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`I49.9 Zaburzenia rytmu - nieokreślone`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`G45.9 Przemijające napady niedokrwienne mózgu (TIA)`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l10 Nadciśnienie tętnicze`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l25 Choroba wieńcowa`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l25.2 Zawał serca przebyty`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l45.6 WPW (Zespół preekscytacji)`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l50 Niewydolność serca`}
          />
        </Col>
        <Col md={6} lg={4} className="mt-md-4 mt-lg-0">
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`l64 Udar mózgu przebyty`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Q20-Q28 Wada wrodoczna serca`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Z95.2 Sztuczna zastawka`}
          />

          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Z95.2 Sztuczna zastawka - aortalna`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Z95.2 Sztuczna zastawka - mitralna`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Z95.2 Sztuczna zastawka - inna`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Stan po ablacji`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Stan po ablacji - migotania przedsionków`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Stan po ablacji - trzepotania przedsionków`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Stan po ablacji - komorowych zaburzeń`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`Stan po ablacji - inna`}
          />
          <Form.Check
            type="radio"
            name="diagnoza"
            label={`brak`}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formFile" className="mt-3 mb-2">
            <Form.Label><b>Załącz plik</b></Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 mb-3 float-right">
          <Button className="d-block float-end" variant="success" type="submit">
            Wyślij badanie
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Evaluation;
