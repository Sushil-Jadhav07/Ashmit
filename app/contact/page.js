"use client";
import Layout from "@/components/layout/Layout";

import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={3} breadcrumbTitle="Contact">
        {/* <section className="information">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="information__single">
                                    <div className="information__icon">
                                        <span className="icon-chat-1"></span>
                                    </div>
                                    <p className="information__text">Live Chat</p>
                                    <p className="information__number">Available 24/7</p>
                                    <Link href="" className="information__btn">Let’s Chat<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="information__single">
                                    <div className="information__icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <p className="information__text">Call Us</p>
                                    <p className="information__number"><Link href="tel:+12011234468">+1 (201) 123 4468</Link></p>
                                    <Link href="" className="information__btn">Call Us<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="information__single">
                                    <div className="information__icon">
                                        <span className="icon-gmail"></span>
                                    </div>
                                    <p className="information__text">Mail Us</p>
                                    <p className="information__number"><Link href="mailto:help@yourdomain.com">help@yourdomain.com</Link>
                                    </p>
                                    <Link href="" className="information__btn">Drop Us A Line<span
                                            className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="information__single">
                                    <div className="information__icon">
                                        <span className="icon-location-2"></span>
                                    </div>
                                    <p className="information__text">Office Address</p>
                                    <p className="information__number">915 Hill Street, USA</p>
                                    <Link href="" className="information__btn">Directions<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section> */}

        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__left bg-white p-4 rounded shadow-sm">
                  <h3 className="contact-page__title mb-3">Get in Touch</h3>
                  <p className="contact-page__sub-title mb-4">
                    LEAVE US A MESSAGE
                  </p>
                  <form
                    action="assets/inc/sendemail.php"
                    className="contact-page__form contact-form-validated"
                  >
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="name" className="form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3 ">
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="e.g: your@email.com"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3 px-2">
                        <label htmlFor="phone" className="form-label">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="form-control"
                          placeholder="+91 xxxxx xxxxx"
                          required
                        />
                      </div>
                      <div className="col-12 mb-3 ">
                        <label htmlFor="City" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          id="City"
                          className="form-control"
                          placeholder="Mumbai"
                        />
                      </div>

                      {/* Message field */}
                      <div className="col-12 mb-3">
                        <label htmlFor="message" className="form-label">
                          Message <span>(Optional)</span>
                        </label>
                        <textarea
                          id="message"
                          className="form-control"
                          placeholder="Type here..."
                          style={{ height: "160px" }}
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 mt-5 text-center">
                        <button type="submit" className="btn btn-primary">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__right">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6942610965048!2d72.95918137520871!3d19.208551682023554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9ceb33ffadf%3A0x11f9fc4a5a571ac5!2sAshmit%20and%20Associates%20-%20Chartered%20Accountant!5e0!3m2!1sen!2sin!4v1702624068802!5m2!1sen!2sin"
                    className="google-map__one"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
