import { Component } from "react";
import "./Content.css";

class ContentData extends Component {
  render() {
    return (
      <div className="dest">
        <img className="dest-image" alt="img" src={this.props.img1} />
      

        <div className="dest-text">
          <h2><a href={this.props.headLink} target="_blank">{this.props.heading}</a></h2>
          <a href={this.props.textlink} target="_blank">{this.props.text}</a>
        </div>
      </div>
    );
  }
}

export default ContentData;