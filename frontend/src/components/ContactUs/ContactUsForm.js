import React, { useRef } from 'react';

import { message } from 'antd';
import emailjs from 'emailjs-com';

import './ContactUsForm.css';

// Creates ContactUs form for ContactUs page.
export const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    /* On form submission, if all required fields are filled, send user a Success Message.
    Send email to developers' email. */
    message.success('Message sent');
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
      <input type="text" name="from_name" placeholder="Name" required/><br/><br/>
      <input type="email" name="user_email" placeholder="Email" required/><br/><br/>
      <textarea name="message" placeholder="Message" required/><br/><br/>
      <input type="submit" value="Send" />
    </form>
  );
};
export default ContactUsForm;