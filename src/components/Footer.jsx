import React from "react";
import "./../styles/webdev-project2.scss";
import "./../styles/webdev-project2-css-variables.scss";
import { MdAlternateEmail } from "react-icons/md";
function Footer() {
  return (
    <div className="page-footer-box">
      mailto
      <address>
        <a href="mailto:ido.leshkowitz@gmail.com">
          <MdAlternateEmail />
        </a>
      </address>
    </div>
  );
}

export default Footer;
