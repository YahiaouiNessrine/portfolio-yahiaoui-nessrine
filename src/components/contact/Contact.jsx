import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mmqdt0w', 'template_soxeyna', form.current, 'wRfHqM7rHbTPi3KXa')
    e.target.reset()
  }; 
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="fullname" placeholder='Your Full Name'  required/>
          <input type="email" name='mail' placeholder='Your E-mail' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact