import { Component } from "react"
import "./Navbar.css"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <>
      <div className="nav">
        <a href="/"><h1>Rho Delta Chi</h1></a>
        <p>TEXAS A&M UNIVERSITY</p>
      </div>
      <nav className="NavbarItems">

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
                {item.submenu && (
                  <ul className={this.state.clicked ? "submenu active" : "submenu"}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link className={subItem.cName} to={subItem.url} target={subItem.targ}>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      </>
    );
  }
}

export default Navbar;