import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();

  return (
    <footer className="footer bg-black flex flex-center" id="footer">
      <div className="container flex flex-center w-100">
        <div className="footer-content grid text-center">
          <p className="text">
            Design inspired by GeekProbin. All rights reserved.
            <br />
            <span className="text">
              &copy; {date.getFullYear()}
              {" JCYepesGarcia."}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
