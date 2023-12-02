import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yahiaoui-nessrine-a6460222a/" target='__blank'> <BsLinkedin/></a>
        <a href="https://github.com/YahiaouiNessrine" target='__blank'><BsGithub/></a>
        <a href="mailto:yh.nessrine@gmail.com" target='__blank'><BiLogoGmail/></a>
    </div>
  )
}

export default HeaderSocials