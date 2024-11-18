import Content2 from "../../components/Content/2Content";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Chapters.css";
import UCR from '../../assets/ucr.jpg';
import TAMU from '../../assets/tamu.jpg';
import UCSD from '../../assets/ucsd.jpg';
import UOP from '../../assets/uop.jpg';
import SFSU from '../../assets/sfsu.jpg';
import CSUR from '../../assets/csur.jpg';
import UTSA from '../../assets/utsa.jpg';


function Chapters () {
  return (
    <>
      <Navbar/>
      <h1 className="ch_header">Rho Delta Chi Chapters & Colony</h1>
      
      <Content2
        cHeading="Alpha Chapter"
        cText1="University of California, Riverside"
        cText2="January 17, 1991"
        imgs="cont-image"
        cImg1={UCR}
      />

      <Content2
        cHeading="Beta Chapter"
        cText1="Texas A&M University, College Station"
        cText2="November 10, 1995"
        imgs="cont-image"
        cImg1={TAMU}
      />

      <Content2
        cHeading="Gamma Chapter"
        cText1="University of California, San Diego"
        cText2="November 9, 2002"
        imgs="cont-image"
        cImg1={UCSD}
      />

      <Content2
        cHeading="Delta Chapter"
        cText1="University of the Pacific"
        cText2="May 21, 2005"
        imgs="cont-image"
        cImg1={UOP}
      />

      <Content2
        cHeading="Epsilon Chapter"
        cText1="San Francisco State University"
        cText2="November 27, 2014"
        imgs="cont-image"
        cImg1={SFSU}
      />
      
      <Content2
        cHeading="Zeta Chapter"
        cText1="California State University, Northridge"
        cText2="February 24, 2014"
        imgs="cont-image"
        cImg1={CSUR}
      />

      <Content2
        cHeading="Eta Colony"
        cText1="University of Texas at San Antonio"
        cText2="Chartered November 9, 2013"
        imgs="cont-image"
        cImg1={UTSA}
      />

      <Footer/>
    </>
  )
}

export default Chapters;