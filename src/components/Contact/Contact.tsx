import React, { useState } from "react";
import { sendMail } from "../../redux/actions/emailSlice";
import { useAppDispatch } from "../../redux/hooks";
const Contact = () => {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState({
    emailId: "",
    message: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendMail(formValues));
  };
  return (
    <article className="contact" id="contact-form">
      <hgroup className="contact__heading">
        <h2 className="section-heading">Contact Me</h2>
        <p>
          Please contact me directly at{" "}
          <a href="mailto:saitejaj07@gmail.com"> saitejaj07@gmail.com</a> or
          through the form below.
        </p>
      </hgroup>
      <section className="contact__wrapper">
        <form className="contact__form" onSubmit={handleSubmitForm}>
          <input
            className="contact__input input__sender"
            type="email"
            placeholder="Email"
            required
            name="emailId"
            onChange={handleInputChange}
          />
          <textarea
            className="contact__input input__message"
            rows={7}
            placeholder="Type your message here"
            name="message"
            onChange={handleInputChange}
          />
          <button className="section-btn input__button">
            Send Email
            <img src="/assets/image/send.png" width={20} height={18} />
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
