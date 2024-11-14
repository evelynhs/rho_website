import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { FAQItems } from "./FAQitems";
import rhocontact from '../../assets/rhocontactimg.jpeg';
import "./FAQ.css"

function FAQ () {
  return (
    <>
      <Navbar/>
      <div className="faqpage">
        <h1>Frequently Asked Questions</h1>

        <div className="items">
          <div className="head">
            <img src={rhocontact} alt="rho contact pic"/>
            <p>Rho Delta Chi</p>
          </div>

          {FAQItems.map((message) => (
            <div key={message.id} className={message.sender === "User" ? "user-wrapper" : "sender-wrapper"}>
              <div className={message.sender === "User" ? "user" : "sender"}>
                <p className="text-base">{message.message}</p>
                <p className="text-base">{message.message2}</p>
              </div>
            </div>
          ))}

          <div className="foot">
            <p className="plus">+</p>
            <p className="txtmsg">message</p>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default FAQ;