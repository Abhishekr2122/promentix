import "./header.css";
import Navbar from "./Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Header() {
  return (
    <div className="header">
      <h1 className="logo">Promentix</h1>
      <Navbar />
      <div className="header-socials-container">
        <FaLinkedin />
        <FaInstagram />
        <FaFacebookSquare />
        <IoLogoWhatsapp />
      </div>
    </div>
  );
}
