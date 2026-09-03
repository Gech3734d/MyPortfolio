import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSent(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title reveal">
          <span>Contact Me</span>
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind? Send me a message.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info reveal">
            <h3>Get In Touch</h3>

            <p>
              I'm always interested in hearing about new
              projects and creative opportunities.
            </p>

            <div className="contact-item">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>

              <div>
                <small>Email</small>
                <strong>gech3734@gmail.com</strong>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <small>Phone</small>
                <strong>+251 937340588</strong>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div>
                <small>Location</small>
                <strong>Addis Ababa, Ethiopia</strong>
              </div>
            </div>
          </div>

          <form
            className="contact-form reveal"
            onSubmit={handleSubmit}
          >
            <h3>Send Message</h3>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              {sent ? (
                <>
                  Message Sent ✓
                </>
              ) : (
                <>
                  Send Message{" "}
                  <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;