import {RiHtml5Line} from 'react-icons/ri'
import {BsGraphUp} from 'react-icons/bs'
import {FaCss3Alt} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaPhp} from 'react-icons/fa'
import {FaBrain} from 'react-icons/fa'
import {FaLaravel} from 'react-icons/fa'
import {BiLogoDjango} from 'react-icons/bi'
import {GrMysql} from 'react-icons/gr'
import {SiPostgresql} from 'react-icons/si'
import {SiUml} from 'react-icons/si'
import {FaDiagramProject} from 'react-icons/fa6'
import {SiPython} from 'react-icons/si'
import {SiDeepin} from 'react-icons/si'
import {VscGraph} from 'react-icons/vsc'
import {SiKeras} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import {SiFoodpanda} from 'react-icons/si'
import {SiScikitlearn} from 'react-icons/si'





import './skills.css'

const Skills = () => {
  return (
    <section id="skills">
      <h5>The Skills I Have</h5>
      <h2>My Skills As</h2>
      <div className="container skills__container">
          <div className="fullstack_webdeveloper">
            <h3> Fullstack Web Developer </h3>
            <div className="skills__content_web">
              <article className='details'>
                <RiHtml5Line />
                <h4>HTML</h4>
              </article>
              <article className='details'>
                <FaCss3Alt/>
                <h4>CSS</h4>
              </article>
              <article className='details'>
                <FaBootstrap />
                <h4>Bootstrap</h4>
              </article>
              <article className='details'>
                <FaReact />
                <h4>ReactJs</h4>
              </article>
              <article className='details'>
                <FaPhp />
                <h4>Php</h4>
              </article>
              <article className='details'>
                <FaLaravel />
                <h4>Laravel</h4>
              </article>
              <article className='details'>
                <BiLogoDjango />
                <h4>Django</h4>
              </article>
              <article className='details'>
                <GrMysql />
                <h4>MySQL</h4>
              </article>
              <article className='details'>
                <SiPostgresql />
                <h4>PgSQL</h4>
              </article>
              <article className='details'>
                <SiUml />
                <h4>UML</h4>
              </article>
              <article className='details'>
                <FaDiagramProject />
                <h4>MERISE</h4>
              </article>
            </div>
          </div>
          <div className="ia_Enthusiast">
            <h3> Artificial Intelligence Enthusiast</h3>
            <div className="skills__content_ia">
              <article className='details'>
                <SiPython />
                <h4>Python</h4>
              </article>
              <article className='details'>
                <FaBrain />
                <h4>DeepLearning</h4>
              </article>
              <article className='details'>
                <SiDeepin />
                <h4>NLP</h4>
              </article>
              <article className='details'>
                <SiNumpy />
                <h4>Numpy</h4>
              </article>
              <article className='details'>
                <SiFoodpanda />
                <h4>Pandas</h4>
              </article>
              <article className='details'>
                <SiScikitlearn/>
                <h4>Sklearn</h4>
              </article>
              <article className='details'>
                <SiKeras />
                <h4>Keras</h4>
              </article>
              <article className='details'>
                <BsGraphUp />
                <h4>Matplotlib</h4>
              </article>
              <article className='details'>
                <VscGraph />
                <h4>Seaborn</h4>
              </article>
            </div>
          </div>
          <div className="fullstak_webdevelopper">
            
          </div>
      </div>
    </section>
  )
}

export default Skills