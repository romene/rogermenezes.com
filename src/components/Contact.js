import React from 'react'
import WrapperSection from './Layout/WrapperSection'
import TitleSection from './Layout/TitleSection'
const Contact = () => {
  return (
    <WrapperSection>
      <TitleSection>Get in Touch</TitleSection>
      <div id="contact" className="col-sm-12 col-md-8">
      <form
        name="contact" 
        method="post" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />  
          <div className="col-md-8 offset-md-2">
            <div className="form-row">
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-12">
                <textarea
                  type="textarea"
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  rows="5"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-12">
                <button type="submit" className=" button-contact">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </WrapperSection>
  )
}

export default Contact

