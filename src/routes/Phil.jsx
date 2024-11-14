import Content2 from "../components/Content/2Content";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "/Users/Evelyn/Documents/rho_website/src/routes/About/Chapters.css"
import ala from '/Users/Evelyn/Documents/rho_website/src/assets/ala.png';
import ijm from '/Users/Evelyn/Documents/rho_website/src/assets/ijm.png';

function Phil () {
  return (
    <>
      <Navbar/>
      <h1 className="header">Rho Delta Chi Philanthropies</h1>
      <Content2
        cHeading="American Lung Association"
        cText2="The American Lung Association is saving lives by improving lung health and preventing lung disease. They were founded 120 years ago by a 
        group of volunteers dedicated to ending the lung health threat at the time: tuberculosis. With TB largely controlled in the United States, they 
        have extended that mission to other respiratory diseases. Thanks to all their support, the American Lung Association is America's most trusted 
        source for lung health education, lung disease research, support, programs, services and advocacy."
        imgs="image"
        cImg1={ala}
      />

      <Content2
        cHeading="International Justice Mission"
        cText2="The International Justice Mission's mission is to protect people in poverty from violence by rescuing victims, bringing criminals to 
        justice, restoring survivors to safety and strength, and helping local law enforcement build a safe future that lasts. Their vision is to rescue 
        millions, protect half a billion and make justice unstoppable."
        imgs="image"
        cImg1={ijm}
      />

      <Footer/>
    </>
  )
}

export default Phil;