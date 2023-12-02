import React from 'react'
import './about.css'
import ME from '../../assets/me4.jpg'
import {FaAward} from 'react-icons/fa'
import {HiDesktopComputer} from 'react-icons/hi'



const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About_Me_IMAGE" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/> 
              <h5>Experience</h5>
              <small>+3 years</small>
            </article>

            <article className="about__card">
              <HiDesktopComputer className="about__icon"/> 
              <h5>Projects</h5>
              <small>+ 6 projects</small>
            </article>
          </div> */}

          <p>
          I am a passionate Software Engineer and Data Processing professional with a strong foundation 
          in web development. I thrive on creating interactive and dynamic websites that provide exceptional 
          user experiences. My journey into the world of technology has also led me to become an Artificial
          Intelligence enthusiast, where I am dedicated to continuously learning and applying cutting-edge
          technologies to drive meaningful change.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Tallk</a>
        </div>
      </div>
    </section>
  )
}

export default About