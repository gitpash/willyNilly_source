import React from "react";
import FaEnvelopeO from "react-icons/lib/fa/envelope-o";
import FaPhoneSquare from "react-icons/lib/fa/phone-square";
import FaPaperPlaneO from "react-icons/lib/fa/paper-plane-o";
import TiSocialInstagram from 'react-icons/lib/ti/social-instagram'
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-menu">
          <div className="contact-me">
            Hi, mail me <FaEnvelopeO size={20} />
            call me <FaPhoneSquare size={20} />
             telegram <FaPaperPlaneO size={20} />
          </div>
          <div className="socials">
          Stay in touch 
            <TiSocialInstagram size={30}/>
            <TiSocialFacebookCircular size={30}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
