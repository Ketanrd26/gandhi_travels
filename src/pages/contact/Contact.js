import React from 'react'
import "./contact.scss"
import Pagetop from '../../comp/pagetop/Pagetop'
const Contact = () => {
  return (
    <>

<Pagetop pagetop_text="About Gandhi's Travels" />

       <div className="parent contact-parent">
        <div
          className="cont contact-cont"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="contact-left bg-img-cover"></div>
          <div className="contact-right">
            <div className="contact-top">
              <h3>Get In Touch</h3>
              <p>
                Got questions or want to book a consultation? Just fill out the
                form below, and we’ll get back to you soon. Can’t wait to chat!
              </p>
            </div>
            <div className="contact-bottom">
              <form >
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First Name"
                 
                    required
                  />
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                  
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                   
                  
                    required
                  />
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Contact"
                 
                    required
                  />
                </div>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  
                  required
                />

                <button className="btn-active" type="submit">
                  <div className="btn_text ">Submit</div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
