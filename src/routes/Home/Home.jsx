import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css"

function Home () {
  return (
    <>
      <Navbar/>
      {/* <div >
        <h1>Who we are</h1>
        <p>Howdy! Welcome to the Beta Chapter of Rho Delta Chi at Texas A&M University.
        Established in 1995, we are an Asian-interest sorority focused on promoting academic 
        achievement, leadership, personal growth, and self-esteem.</p>
      </div> */}
      <Header
        cName="heading_home"
        headerImg="src/assets/ah_long.jpeg"
        sticker="sticker_show"
        sticker_text="Together as one, striving for excellence"
      />
      <Content
        cName="dest1"
        cHeading="Welcome to Rho Delta Chi"
        cText="Howdy! Welcome to the Beta Chapter of Rho Delta Chi at Texas A&M University. 
        Established in 1995, we are an Asian-interest sorority focused on promoting academic 
        achievement, leadership, personal growth, and self-esteem. "
        imgs="image"
        cImg1="src/assets/eboard.jpeg"
      />

      <Content
        cName="dest2"
        cHeading="A message from our president:"
        cText="I never expected the impact Rho Delta Chi would have on me. Coming straight 
        into college after 2 years of COVID through high school, I was hesitant to find my 
        place at A&M. I ultimately made the decision to try rushing a sorority and was 
        immediately drawn to Rho due to the kind & open arms these wonderful ladies 
        surrounded me with. I have met such amazing individuals that I can relate to 
        ranging from my personality to my culture; My forever best friends who by my side, 
        are consistently uplifting my confidence, energy, and supporting my life goals & 
        dreams.  My growth from being a timid sophomore rushee to becoming President of 
        this beautiful sorority could not have been accomplished without them who bring so 
        much insight, blessings, and opportunities. As President, I hope to contribute in 
        allowing our sorority to continue to grow and strive in the ways our founders and 
        past leaders have set up for us. I am so excited for our Fall ‘24 Rush semester!"
        imgs="image"
        cImg1="src/assets/kristi-message.jpeg"
      />
      
      <Footer/>
    </>
  )
}

export default Home;