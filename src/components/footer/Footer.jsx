import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">YAHIAOUI NESSRINE</a>

      <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
          <a href="https://www.linkedin.com/in/yahiaoui-nessrine-a6460222a/"><BsLinkedin/></a>
          <a href="https://github.com/YahiaouiNessrine"><BsGithub/></a>
          <a href="#gmail"><BiLogoGmail/></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; Yahiaoui Nessrine 2023. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer