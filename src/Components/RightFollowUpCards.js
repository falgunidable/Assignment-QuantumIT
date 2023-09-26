import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Profile from "../images/proicon.jpeg";
import CardTemplate from "./CardTemplate";
import InnerCardTemplate from "./InnerCardTemplate";
import { information, itenary, reports } from "./ConstantsList";
import TableContent from "./TableContent";

const RightCards = () => {
  return (
    <Container>
      <Row>
        <Col className="col-auto col-md-4">
          <Card className="p-2 rounded-3 border-0 shadow-sm text-center">
            <Card.Body>
              <Figure>
                <Figure.Image
                  className="rounded"
                  width={130}
                  alt="171x180"
                  src={Profile}
                />
              </Figure>
              <Card.Title>David Harris</Card.Title>
              <Card.Text>Age: 36</Card.Text>
              <Button variant="success">UPDATE</Button>
            </Card.Body>
          </Card>
          <Card className="mt-4 p-1 rounded-3 border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Information</Card.Title>
              {information.map((item, index) => (
                <Card.Text
                  key={index}
                  className="d-flex justify-content-between"
                >
                  <span>
                    <b>{item.name} : </b>
                  </span>
                  {item.value}
                </Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Row className="text-center">
            {itenary.map((item, index) => (
              <Col key={index}>
                <CardTemplate
                  image={item.image}
                  text={item.heading}
                  title={item.text}
                />
              </Col>
            ))}
          </Row>
          <Card className="p-2 rounded-3 mt-4 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Test Reports</Card.Title>
              <Row>
                {reports.map((item, index) => (
                  <Col key={index}>
                    <InnerCardTemplate
                      image={item.image}
                      heading={item.heading}
                      text={item.text}
                    />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
          <Card className="p-2 rounded-3 mt-4 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Prescriptions</Card.Title>
              <Row className="mt-4">
                <Button
                  style={{ borderStyle: "dashed" }}
                  className="p-2 col border-success bg-transparent text-success"
                >
                  Add a Prescription +
                </Button>
              </Row>
              <TableContent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RightCards;
