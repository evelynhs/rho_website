import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Photocard from "../../components/Photocard/Photocard";
import "./Cabinet.css"

function Cabinet () {
  return (
    <>
      <Navbar/>
      <Header
        cName="heading"
        headerImg="../src/assets/active house.jpg"
        sticker="sticker_hide"
        buttonText="MEET THE SISTERS"
        url="/sisters/activehouse"
        btnClass="show"
      />

      <Photocard
        image="../src/assets/kristi.jpg"
        heading="kristi"
        text="president"
      />

      <Footer/>
    </>
  )
}

export default Cabinet;