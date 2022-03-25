import "./Contact.css";
import pixe from "../assets/bking-bg1.png";

const Contact = () => {
  return (
    <div className="contact">
            <div className="formset">

      <h1>CONTACT</h1>
      <p>We are super excited to hear from you!</p>

        <form>
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input
              name="fname"
              id="fname"
              type="text"
              placeholder="Please enter your first name here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input
              name="lname"
              id="lname"
              type="text"
              placeholder="Please enter your last name here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="text"
              placeholder="Please enter your email here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              type="text"
              placeholder="Please enter your message here"
              rows="10"
            />

<button id="submit" onClick={e => e.preventDefault()}>Send <i class="fa-solid fa-paper-plane"> </i></button>

          </div>
        </form>
        
      </div>
      <div className="formpix">
          <img src={pixe} alt="pixe" />
        </div>
    </div>
  );
};

export default Contact;
