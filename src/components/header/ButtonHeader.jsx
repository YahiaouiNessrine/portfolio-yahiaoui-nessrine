import CV from '../../assets/Yahiaoui_Nessrine_CV.pdf'

const ButtonHeader = () => {
  return (
    <div className='ButtonHeader'>
        <a className="btn" href={CV} download>Download CV</a>
        <a href="#contact" className="btn btn-primary"> Let's Talk</a>
    </div>
  )
}

export default ButtonHeader