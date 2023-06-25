import React from 'react';

import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact__wrap">
      <div className="container" style={{paddingTop: '150px'}}>
        <div className="form__wrap">
          <h3 className="form__title mb">Contact Us</h3>

          <form className="form" onSubmit={e => e.preventDefault()}>
            <div className="mb">
              <input type="text" placeholder="name" name="name" />
            </div>

            <div className="mb">
              <input type="email" placeholder="Email" name="email" />
            </div>

            <div className="mb">
              <textarea placeholder="Write something..." name="message" />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;