import {BiSolidCheckCircle} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development </h3>
          </div>
            <ul className="service__list">
              <li> <BiSolidCheckCircle className='service__icon' /> Building modern and interactive websites </li>
              <li> <BiSolidCheckCircle className='service__icon' /> Tailored development to meet your specific needs </li>
              <li> <BiSolidCheckCircle className='service__icon' /> Tailored development to meet your specific needs </li>
              <li> <BiSolidCheckCircle className='service__icon' /> Adding custom features to your site </li>
            </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Artificial Intelligence </h3>
          </div>
            <ul className="service__list">
              <li> <BiSolidCheckCircle className='service__icon' /> Developing AI solutions for real-world problems </li>
              <li> <BiSolidCheckCircle className='service__icon' /> Using AI to enhance operational efficiency and decision-making </li>
              <li> <BiSolidCheckCircle className='service__icon' /> Building machine learning models for data-driven insights </li>
              <li> <BiSolidCheckCircle className='service__icon' /> Using AI to analyze and generate content </li>
            </ul>
        </article>
      </div>
    </section>
  )
}

export default Services