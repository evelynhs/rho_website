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
        headerImg="../src/assets/eboard.jpeg"
        sticker="sticker_hide"
        buttonText="MEET THE SISTERS"
        url="/sisters/activehouse"
        btnClass="show"
      />
      <h1 className="exec_header">Fall '24 Executive Board</h1>
      <Photocard
        image="../src/assets/kristi-message.jpeg"
        name='Miss Kristiana "claws" Zembrano'
        position="president"
        class="Fall '22 Beta Beta"
        why="Coming into college after COVID, I struggled with homesickness & 
        loneliness at such a large campus. I actually didn't intend on rushing 
        at first however after attending an event as a plus one, I was 
        immediately drawn in by the connections I easily made with all the 
        girls! The energy was always so lively and welcoming! From then, I knew 
        I had found my place at A&M and found my for"
      />

      <Footer/>
    </>
  )
}

export default Cabinet;