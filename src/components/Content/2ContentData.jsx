import { Component } from "react";
import "./2Content.css";

class ContentData2 extends Component {
  render() {
    return (
      <div className="cont">
        <div className="cont-text">
          <h2><a>{this.props.heading}</a></h2>
          <p>{this.props.text1}</p>
          <p>{this.props.text2}</p>
        </div>

        <div className={this.props.cName}>
          <img alt="img" src={this.props.img1} />
        </div>
      </div>
    );
  }
}

export default ContentData2;