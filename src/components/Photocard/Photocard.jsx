import "./Photocard.css"

const Photocard = (props) => {
  return (
    <div className="photocard">
      <div className="p-image">
        <img src={props.image} alt="image"></img>
      </div>

      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default Photocard;