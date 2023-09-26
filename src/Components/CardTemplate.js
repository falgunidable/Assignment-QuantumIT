import Card from "react-bootstrap/Card";

const CardTemplate = (props) => {
  return (
    <Card className="p-1 rounded-3 border-0 shadow-sm">
      <Card.Body>
        <img src={props.image} alt={props.text} />
        <Card.Text className="mt-2">{props.text}</Card.Text>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default CardTemplate;
