import { FormEvent, useState } from "react";
import {
  MdCopyright,
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdSend,
} from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:vanshsaini8457@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>Contact</h3>
          <p className="contact-intro">
            Have a project in mind or want to connect? Share your details and
            I&apos;ll reach out soon.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-info-label">Reach Me</p>

            <div className="contact-detail-card">
              <span className="contact-detail-icon">
                <MdEmail />
              </span>
              <div>
                <h4>Email</h4>
                <a href="mailto:vanshsaini8457@gmail.com" data-cursor="disable">
                  vanshsaini8457@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail-card">
              <span className="contact-detail-icon">
                <MdPhone />
              </span>
              <div>
                <h4>Phone</h4>
                <a href="tel:+917895745198" data-cursor="disable">
                  +91 7895745198
                </a>
              </div>
            </div>

            <div className="contact-detail-card">
              <span className="contact-detail-icon">
                <MdLocationOn />
              </span>
              <div>
                <h4>Location</h4>
                <p>Roorkee, Uttarakhand, India</p>
              </div>
            </div>

            <div className="contact-socials">
              <p className="contact-info-label">Social</p>
              <div className="contact-social-row">
                <a
                  href="https://github.com/vanshsaini"
                  target="_blank"
                  data-cursor="disable"
                  className="contact-social-btn"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/vansh-saini-a0bb19382"
                  target="_blank"
                  data-cursor="disable"
                  className="contact-social-btn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="contact-form-head">
              <h4>Send a Message</h4>
              <p>Fill the form — name, email, mobile & your message.</p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              data-cursor="disable"
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Mobile Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                <MdSend />
                Contact Me
              </button>

              {submitted && (
                <p className="contact-success">
                  Almost done — your email app will open. Hit send there to
                  deliver your message.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <p className="contact-footer-text">
            Thoughtfully <span>Designed</span>, <span>Developed</span> &{" "}
            <span>Crafted</span> with passion by{" "}
            <strong>Vansh Saini</strong>
          </p>
          <p className="contact-footer-copy">
            <MdCopyright /> 2026 — All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
