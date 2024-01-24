import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_zq63swx";
    const templateId = "template_kcidiug";
    const publicKey = "J1QlXnsY1YtAnLhe5";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Nikola Hadzhiev",
      message: message,
      subject: subject
    };

    if(name.trim().length !== 0 && email.trim().length !== 0 && message.trim().length !== 0 && subject.trim().length !== 0) {
      emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      })
    }else {
      alert("Can't have empty values in the inputs")
    }
  
  }

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don&apos;t be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am aways open to discussing new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">nikihad2012@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+359885255645</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100006187568698"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/off_be_nikola/"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/nikola-hadzhiev/"
              className="contact__social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/NikolaHadzhiev"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
