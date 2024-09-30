import "./footer.css";

import { SiInstagram } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content-container">
        <h3 className="footer-heading">Services</h3>
        <ul className="footer-services-list footer-list">
          <li className="footer-list-item">Webdevelopment & Design</li>
          <li className="footer-list-item">Ad Campeign Creation</li>
          <li className="footer-list-item">Content Creation and Copywriting</li>
          <li className="footer-list-item">Social Media Management</li>
        </ul>
      </div>
      <div className="footer-content-container">
        <h3 className="footer-heading">Contactus</h3>
        <ul className="footer-contact footer-list">
          <li>+91 9271114642</li>
          <li>+91 7720960310</li>
        </ul>
      </div>
      <div className="footer-content-container">
        <h3 className="footer-heading">Socials</h3>
        <ul className="socials footer-list">
          <li>
            <SiInstagram />
            <span>Instagram</span>
          </li>
          <li>
            <IoLogoLinkedin />
            <span>Linkdlen</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
