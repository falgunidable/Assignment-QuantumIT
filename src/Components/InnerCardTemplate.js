import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InnerCardTemplate = (props) => {
  return (
    <>
      <Row>
        <Col>
          <div className="d-flex align-items-center">
            <div className="rounded bg-light p-2">
              <img src={props.image} width={32} alt={props.heading} />
            </div>
            <div className="ms-1 p-2">
              <h6>
                <b>{props.heading}</b>
              </h6>
              <h6 className="text-muted">{props.text}</h6>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default InnerCardTemplate;
