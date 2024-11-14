import CardData from "./CardData";
import "./RushCard.css"

const RushCard = (props) => {
  return (
    <div className="rush">
      <CardData
        date={props.date}
        date2={props.date2}
        title={props.title}
        event={props.event}
        location={props.location}
        time={props.time}
        info={props.info}
        infoloc={props.infoloc}
        infotime={props.infotime}
      />
    </div>

    
  );
};

export default RushCard;