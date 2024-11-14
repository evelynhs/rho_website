import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import shelly from '../../assets/shelly-pmom.jpeg';
import "./Pmom.css"

function Pmom () {
  return (
    <>
      <Navbar/>
      <Header
        cName="heading"
        headerImg={shelly}
        sticker="sticker_hide"
        buttonText="LEARN MORE"
        url="/rush/rushweek"
        btnClass="show"
      />
      <div className="pmom">
        <h1>Meet our P-Mom!</h1>
        <p className="who">Shelly Lim
          <br/>
          Fall '22 Beta Beta
        </p>
        <div className="postcard">
          <p className="note">
            Howdy! My name is Shelly and I'm a senior Community Health major pursuing to become 
            a CRNA! I'm the VP Pledge Mom for Fall 2024 Beta Zeta Class, and I am so excited to meeting each 
            one of you!! Upon entering college, I did not anticipate becoming a part of a sorority; however, 
            thanks to my pledge mom, I decided to give Rho a chance. This decision has enriched my college 
            experience in ways I could not have imagined. I have had the privilege of meeting my big sis, 11 
            pledge sisters, picking up a little sis along with 4 little bros, entering a sisterhood full of 
            wonderful ladies, and now pledge mom!! I encourage you to participate in rush week 
            and fully immerse yourself in the experience. It is a wonderful opportunity 
            to meet new people and create lasting memories.
            <br/> <br/>
            Much Love,<br/>
            Shelly “GOLDIE” Lim
          </p>
          <div className="other">
            <p><b>TO</b> beta zeta</p>
            <p>2024 Fall Class</p>
            <p>Rho Delta Chi, TAMU</p>
            <p>1995</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Pmom;