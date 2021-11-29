import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUsForm.css';

export const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'test_template', form.current, 'user_ndZKEDaxn9hHCXBedYIaH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder="Name"/><br/><br/>
      <input type="email" name="user_email" placeholder="Email"/><br/><br/>
      <textarea name="message" placeholder="Message"/><br/><br/>
      <input type="submit" value="Send" />
    </form>
  );
};
export default ContactUsForm;