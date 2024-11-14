import { Component } from "react";
import "./RushCard.css"

class CardData extends Component {
  render() {
    return (
      <div className="rushcard">
        <div className="dates">
          <h1><a>{this.props.date}</a></h1>
          <h1><a>{this.props.date2}</a></h1>
        </div>
  
        <div className="events">
          <p className="name"><a>{this.props.event}</a></p>
          <p><a>{this.props.location}</a></p>
          <p><a>{this.props.time}</a></p>
        </div>

        <div className="infos">
          <p className="name"><a>{this.props.info}</a></p>
          <p><a>{this.props.infoloc}</a></p>
          <p><a>{this.props.infotime}</a></p>
        </div>
      </div>
    );
  }
}

export default CardData;