import React from 'react'
import WrapperSection from './Layout/WrapperSection'
import TitleSection from './Layout/TitleSection'
const Contact = () => {
  return (
    <WrapperSection>
      <TitleSection>Get in Touch</TitleSection>
      <div id="contact" className="col-sm-12 col-md-8">
        <form name="contact" method="post" className="contact-form mb-5">
          <input type="hidden" name="form-name" value="contact" />
          <div className="col-md-6 offset-md-3">
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
                <button type="button" className=" button-contact">
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

