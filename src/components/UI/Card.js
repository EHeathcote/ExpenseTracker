import "./Card.css";

function Card(props) {
  // children prop value will always be the content between the opening and closing tags of the component --so when we use Card component in another component, there can be things inside of the custom Card component
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
