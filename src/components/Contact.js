import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-heading">Let’s Work Together</h2>
      <form
        className="contact-form"
        onSubmit={function (e) {
          e.preventDefault();
        }}
      >
        <label>Name :-</label>
        <input type="text" name="name" id="name" className="input" />
        <label>Email :-</label>
        <input type="email" name="email" id="email" className="input" />
        <label>Phone :-</label>
        <input type="number" name="number" id="number" className="input" />
        <label>Company :-</label>
        <input type="text" name="company" id="company" className="input" />
        <label>Message :-</label>
        <textarea />
        <button type="submit" className="contact-form-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
