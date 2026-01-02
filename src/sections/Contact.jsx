import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-frame">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-form-card">
              <h2>Let&apos;s talk</h2>
              <p className="contact-lead">
                Let&apos;s create something beautiful together.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  required
                />

                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  required
                />

                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                />

                <button type="submit" className="contact-btn">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-info-row">
              <span>1(850)905-0948</span>
              <a href="mailto:hellomedici@gmail.com">
                hellomedici@gmail.com
              </a>
            </div>

            <h1 className="contact-heading">CONTACT</h1>
            <p className="contact-sub">
              Let&apos;s create something beautiful together.
            </p>

            <div className="contact-canvas">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
