import React from 'react'

import google from '../../../assets/imgs/customers/tf-customers__contact__google.png'
import amazon from '../../../assets/imgs/customers/tf-customers__contact__amazon.png'
import atlassian from '../../../assets/imgs/customers/tf-customers__contact__atlassian.png'
import intel from '../../../assets/imgs/customers/tf-customers__contact__intel.png'

const ContactUs = () => {
  return (
    <section className='tf-contact-us section'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 py-5'>
            <h1>Contact Us</h1>
            <h4>If you have any questions about the subscription or are not sure which plan is right for you, contact our team and let’s schedule a call.</h4>

            <div className='tf-contact-us__btns'>
              <a className='btn btn-bg-blue' href="tel:=0000000000000">
                <span>Call us</span>
                <p>(00) 00 00000-0000</p>
              </a>
              
              <a className='btn btn-outline-blue' href="mailto:yourcontact@mail.com">
                <span>Email us</span>
                <p>yourcontact@mail.com</p>
              </a>
            </div>

            <div className='tf-contact-us__clients'>
              <img src={google} alt="Google logo" />
              <img src={amazon} alt="Amazon logo" />
              <img src={intel} alt="Intel logo" />
              <img src={atlassian} alt="Atlassian logo" />
            </div>
          </div>
          <div className='col-lg-6 py-5'>
            <h3>Let’s Talk 👋</h3>
            <h4>If you have any question or issue’s to use our product. Fill the form below. We’ll help you.</h4>

            <form className="needs-validation" novalidate>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationName">Name</label>
                  <input type="text" className="form-control" id="validationName"  required />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationEmail">Email</label>
                  <input type="email" className="form-control" id="validationEmail"  required />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className='col-12 mb-3'>
                  <label for="validationTopic">Choose Topic</label>
                  <select className="custom-select" id="validationTopic" required>
                    <option selected disabled value="">Choose...</option>
                    <option value="op1">Topic 1</option>
                    <option value="op2">Topic 2</option>
                    <option value="op3">Topic 3</option>
                    <option value="op4">Topic 4</option>
                    <option value="op5">Topic 5</option>
                  </select>
                  <div className="invalid-tooltip">
                    Please select a valid topic.
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className='col-12 mb-3'>
                  <label for="messageArea">Message</label>
                  <textarea required className="form-control" id="messageArea" rows="5"></textarea>
                </div>
              </div>
              <button className="btn btn-bg-blue" type="submit">Contact Us</button>
            </form>
          </div>
        </div>
      </div >
    </section >
  )
}

export default ContactUs
