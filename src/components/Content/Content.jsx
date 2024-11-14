import "./Content.css"
import ContentData from "./ContentData";

const Content = (props) => {
  return (
    <div className="content">
      <ContentData
        heading={props.cHeading}
        headLink={props.hLink}
        text={props.cText}
        textlink={props.cLink}
        img1={props.cImg1}
      />
    </div>
  );
};

export default Content;