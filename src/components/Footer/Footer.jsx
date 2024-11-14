import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Rho Delta Chi</h1>
          <p>TEXAS A&M UNIVERSITY</p>
        </div>

        <div>
          <a href="https://www.facebook.com/tamurhos/" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/tamurhos/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@tamurhos" target="_blank">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Footer;