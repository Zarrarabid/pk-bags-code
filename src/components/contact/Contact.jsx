import React, { useEffect } from "react";
import Navbar from "../../container/Navbar";
import { Link } from "react-router-dom";
import './contact.css'
import Footer from '../../container/Footer/Footer'
import phone from '../../images/phone.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
  useEffect(()=> {
    AOS.init();
  },[])
  return (
    <div>
      <Navbar />
      <section className="mb-5">
        <div className="container mt-5">
          <div className="contact__wrapper shadow-lg mt-n9">
            <div className="row no-gutters">
              
              <div className="col-lg-5 contact-info__wrapper bg-light p-5 order-lg-2">
              <img data-aos-duration="1500" data-aos="zoom-out-left"  src={phone} className="img-fluid" />
              </div>

              <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <form
                  action="#"
                  className="contact-form form-validate"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" for="firstName">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder="Zarrar"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label for="lastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder="Hussain Abid"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="required-field" for="email">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="store.pk@"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label for="phone">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="+92 XXXXXXXX"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label className="required-field" for="message">
                          How can we help?
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="4"
                          placeholder="Hi there, I would like to....."
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-sm-12 mb-3">
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
