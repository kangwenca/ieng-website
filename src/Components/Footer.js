import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Styles/Footer.css";
import MailIcon from "@material-ui/icons/Mail";

function Footer() {
  return (
    <div className= "footer">
        <div className = "Links">
          <a href="https://www.linkedin.com/in/kang-wen/">
                    <LinkedInIcon />
          </a>
          <a href= "mailto:kangwenca@gmail.com">
                    <MailIcon />
          </a>
            
        </div>
        <p> &copy; 2023 ieng.com</p>

        </div>
  );
}

export default Footer