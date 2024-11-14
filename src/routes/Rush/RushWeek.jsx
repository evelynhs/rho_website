import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RushCard from "../../components/RushCard/RushCard";
import "./RushWeek.css"

function RushWeek () {
  return (
    <>
      <Navbar/>
      <div className="space">
        <p></p>
      </div>
      <h1 className="banner">Fall '24 Rush Week</h1>
      <div className="rushevents">
        <RushCard
          // date="Monday"
          date2="August 26"
          event="Sand Volleyball Sisterhood"
          location="@ Parkwest Courts"
          time="7:00 - 8:00"
          info="Informational #1"
          infoloc="@ MSC 2500"
          infotime="8:30 - 9:30"
        />
        <RushCard
          //date="Tuesday"
          date2="August 27"
          event="Rho x BTO Pool Party"
          location="@ Campus Village"
          time="7:00 - 9:00"
        />
        <RushCard
          //date="Wednesday"
          date2="August 28"
          event="Root Beer Courage & Speed Dating"
          location="@ Junction Club House"
          time="6:30 - 8:00"
          info="Informational #2"
          infoloc="@ MSC 2500"
          infotime="8:30 - 9:30"
        />
        <RushCard
          //date="Thursday"
          date2="August 29"
          event="Rho x Chi Psi Bonfire"
          location="@ Chi Psi House"
          time="7:00 - 8:30"
        />
        <RushCard
          //date="Friday"
          date2="August 30"
          event="Spa & Craft Night Sisterhood"
          location="@ Berkeley House"
          time="7:00 - 8:30"
        />
      </div>
      <Footer/>
    </>
  )
}

export default RushWeek;