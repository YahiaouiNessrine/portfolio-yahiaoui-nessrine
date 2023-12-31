import './header.css'
import ButtonHeader from "./ButtonHeader"
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Yahiaoui Nessrine</h1>
      <h5 className="text-light">Software Engineer | Fullstack web developer | Artificial Intelligence Enthusiast</h5>
      <ButtonHeader/>
      <HeaderSocials/>

      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
   </header>
  )
}

export default Header