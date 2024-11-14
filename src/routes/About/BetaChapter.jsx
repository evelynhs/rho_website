import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

function BetaChapter () {
  return (
    <>
      <Navbar/>
      <Header
        cName="header"
        headerImg="../src/assets/active house.jpg"
      />
      <h1>This is BetaChapter</h1>
      <Content
        cHeading="Who are we?"
        cText="Rho Delta Chi was established on January 17, 1991 as the first Asian 
        American sorority at the University of California, Riverside. The sorority 
        was founded by fourteen women who felt that there was a strong need for an 
        Asian American sorority on campus. It was formed to increase Asian awareness, 
        provide services in the best interest of the community and the University, and 
        to unite women of different backgrounds through bonds of sisterhood. Since its 
        inception, Rho Delta Chi has welcomed women of all Asian descent into its 
        sisterhood in hopes that its original purpose of bringing harmony among all 
        ethnicity, would not be forgotten but passed on from one generation to another."
        imgs="image"
        cImg1=""
      />

      <Content
        cHeading="Our Sisterhood <3"
        cText=" The Beta Chapter of Rho Delta Chi was founded on September 16, 1995 by 
        seven who wanted to create a new sisterhood on campus. Our organization has 
        steadily grown to over 220 actives and alumnae. With 7 Chapters extending 
        from our golden coast steadily making its way across the nation, Rho Delta Chi 
        has firmly established itself as a well respected organization on campus as 
        well as in local and Asian communities everywhere. "
        imgs="image"
        cImg1=""
      />

      <Footer/>
    </>
  )
}

export default BetaChapter;