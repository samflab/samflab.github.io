import emailjs from "emailjs-com";
import "../styles/Contact.scss";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r26azg2",
        "template_joii25r",
        e.target,
        "user_Ok12WTP0cvyrzSFOEutop"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="ContactMe" id="contact">
      <h1 className="contact-header">Contact Me</h1>
      <hr className="contact-divider" />
      <div className="contact-content">
        <div className="form-group-total">
          <form onSubmit={sendEmail}>
            <div class="row">
              <div class="form-group name1 col-md-6">
                <input
                  type="text"
                  className="form-control form-control-md"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  required="required"
                />
              </div>
              <br />
              <div class="form-group name1 col-md-6">
                <input
                  type="text"
                  className="form-control form-control-md"
                  id="email"
                  placeholder="Your email address"
                  name="email"
                  required="required"
                />
              </div>
            </div>
            <br />
            <input
              type="text"
              className="form-control form-control-md"
              id="discussion-title"
              placeholder="Enter the discussion title"
              name="subject"
              required="required"
            />
            <br />
            <textarea
              className="form-control"
              name="message"
              id="message"
              style={{ height: 100 }}
              placeholder="Write your message"
              required="required"
            ></textarea>
            <br />
            <button type="submit" className="contact-button">
              Send Message Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
