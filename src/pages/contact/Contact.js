import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import "./contact.scss";
import Pagetop from "../../comp/pagetop/Pagetop";

// AOS and React Helmet imports
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import { Helmet } from "react-helmet"; // for SEO

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function Submit(e) {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbzwymTH9QNPF94p9a293wh3kDHZve_HjxGcLJwy_57G9uusV2grUxHikP75HpUR5Uit/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setIsSubmitting(false); // Reset submitting state
        showModal(); // Show success modal
        formEle.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false); // Reset submitting state even on error
        alert("Something went wrong. Please try again.");
      });
  }

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: 'ease-in-out', // easing effect
      once: true, // animation runs only once
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Gandhi Travels</title>
        <meta
          name="description"
          content="Contact Gandhi Travels for all your travel and booking inquiries. Fill out the form below and we will get back to you."
        />
        <meta
          name="keywords"
          content="contact, travel inquiries, booking, Gandhi Travels, car rental, consultation"
        />
        <link rel="canonical" href="https://gandhitravels.co.in/contactus" />
      </Helmet>

      <Pagetop pagetop_text="Contact Us" />

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
              <form onSubmit={(e) => Submit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    id="firstname"
                    name="Firstname"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    id="lastname"
                    name="Lastname"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    id="mobile"
                    name="Mobile"
                    placeholder="Mobile Number"
                    required
                  />
                </div>

                <textarea
                  id="Message"
                  name="Message"
                  placeholder="Your Message"
                  required
                />

                <button className="btn-active" type="submit" disabled={isSubmitting}>
                  <div className="btn_text">
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        title="Success"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>Your message has been sent successfully!</p>
        <button
          className="btn-activated green-btn"
          onClick={handleOk}
        >
          <div className="btn_text" style={{ fontSize: "20px" }}>OK</div>
        </button>
      </Modal>
    </>
  );
};

export default Contact;
