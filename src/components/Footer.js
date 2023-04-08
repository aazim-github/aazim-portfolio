import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { GitHub, VerifiedUserRounded } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/aazim-athar/')}/>
        <GitHub onClick={() => window.open('https://github.com/aazim-github/')}/>
        <VerifiedUserRounded onClick={() => window.open('https://www.credly.com/users/aazim-athar')}/>
      </div>
    </div>
  );
}

export default Footer;
