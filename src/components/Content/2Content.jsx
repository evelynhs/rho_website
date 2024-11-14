import "./2Content.css"
import ContentData from "./2ContentData";

const Content2 = (props) => {
  return (
    <div className="content">
      <ContentData
        cName={props.imgs}
        heading={props.cHeading}
        text1={props.cText1}
        text2={props.cText2}
        img1={props.cImg1}
      />
    </div>
  );
};

export default Content2;