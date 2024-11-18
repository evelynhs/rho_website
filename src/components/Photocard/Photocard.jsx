import "./Photocard.css"

const Photocard = (props) => {
  return (
    <div className="photocard">
      <div className="p-image">
        <img src={props.image} alt="image"></img>
      </div>

      <h2>{props.name}</h2>
      <h3>{props.position}</h3>
      <p>{props.class}</p>
      <p>Why Rho?</p>
      <p>{props.why}</p>
    </div>
  );
};

export default Photocard;