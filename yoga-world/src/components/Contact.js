import React from "react";

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <p>Feel free to reach out with any questions or comments.</p>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Message:</label>
      <textarea name="message" id="message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
