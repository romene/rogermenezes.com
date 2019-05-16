import React from 'react'
import WrapperSection from './Layout/WrapperSection'
import TitleSection from './Layout/TitleSection'
const Contact = () => {
  return (
    <WrapperSection>
      <TitleSection>Get in Touch</TitleSection>
      <div id="contact" className="col-8">
        <form className="contact-form">
          <div className="col-md-6 offset-md-3">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Address"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-12">
                <textarea
                  type="textarea"
                  className="form-control"
                  id="inputEmail4"
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

