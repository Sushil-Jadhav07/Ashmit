import Link from "next/link";

export default function Footer3() {
  return (
    <>
      <footer className="site-footer-three">
        <div className="site-footer-three__shape-1 float-bob-y">
          <img
            src="assets/images/shapes/site-footer-three-shape-1.png"
            alt=""
          />
        </div>
        <div className="site-footer-three__shape-2 img-bounce">
          <img
            src="assets/images/shapes/site-footer-three-shape-2.png"
            alt=""
          />
        </div>
        <div className="site-footer-three__shape-3 zoominout">
          <img
            src="assets/images/shapes/site-footer-three-shape-3.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="site-footer-three__top">
            <ul className="site-footer-three__contact-list list-unstyled">
              <li>
                <div className="site-footer-three__contact-list-single">
                  <div className="icon">
                    <span className="icon-location-1"></span>
                  </div>
                  <div className="content">
                    <h3>Address: </h3>
                    <p>
                      Office no 40, 1st floor, Asiatic Arcade, <br /> Vartak
                      Nagar, Thane (W) 400606
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="site-footer-three__contact-list-single">
                  <div className="icon">
                    <span className="icon-phone"></span>
                  </div>
                  <div className="content">
                    <h3>Get a quote</h3>
                    <p>
                      <a href="tel:9762411205">9987703715</a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="site-footer-three__contact-list-single">
                  <div className="icon">
                    <span className="icon-time"></span>
                  </div>
                  <div className="content">
                    <h3>Working Time</h3>
                    <p>
                      Mon - Sat: 10:30 AM - 7:00 PM
                      <br /> Sunday Close
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="site-footer-three__middle justify-content-center">
            <div className="row">
              <div
                className="col-xl-5 col-lg-5 col-md-6 wow fadeInUp"
                style={{ textAlign: "center" }}
                data-wow-delay="100ms"
              >
                <div className="footer-widget-three__column footer-widget-three__about">
                  <div className="footer-widget-two__logo">
                    <a href="/">
                      <img
                        src="assets/images/resources/CA_logo.png"
                        width="60%"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="footer-widget-three__about-text ">
                    To become a globally recognized consulting and accounting
                    firm, delivering innovative, reliable, and client-focused
                    financial solutions that drive sustainable growth and
                    success.
                  </p>
                  <div
                    className="footer-widget-three__email"
                    style={{ textAlign: "center", justifyContent: "center" }}
                  >
                    <a href="mailto:info@ashmitassociates.com">
                      <span className="icon-gmail"></span>
                      info@ashmitassociates.com
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp "
                style={{ textAlign: "center" }}
                data-wow-delay="200ms"
              >
                <div className="footer-widget-three__column footer-widget-three__company">
                  <div className="footer-widget-three__title-box">
                    <h3 className="footer-widget-three__title">Quick Links</h3>
                  </div>
                  <ul className="footer-widget-three__company-list list-unstyled">
                    <li>
                      <a href="about">About</a>
                    </li>

                    <li>
                      <a href="portfolio">Services</a>
                    </li>
                    <li>
                      <a href="news-1">Career</a>
                    </li>
                    <li>
                      <a href="contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget-three__column footer-widget-three__post">
                                <div className="footer-widget-three__title-box">
                                    <h3 className="footer-widget-three__title">Latest Post</h3>
                                </div>
                                <ul className="footer-widget-three__post-list list-unstyled">
                                    <li>
                                        <div className="footer-widget-three__post-img">
                                            <img src="assets/images/resources/post-img-1.jpg" alt=""/>
                                        </div>
                                        <div className="footer-widget-three__post-content">
                                            <h3><a href="news-details">We would love to share a <br/>similar
                                                    experience</a></h3>
                                            <p><span className="icon-time"></span>10 Oct, 2022</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-three__post-img">
                                            <img src="assets/images/resources/post-img-2.jpg" alt=""/>
                                        </div>
                                        <div className="footer-widget-three__post-content">
                                            <h3><a href="news-details">Get the latest news, tips<br/> and latest
                                                    messages</a></h3>
                                            <p><span className="icon-time"></span>10 Oct, 2022</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                style={{ textAlign: "center" }}
                data-wow-delay="400ms"
              >
                <div className="footer-widget-three__column footer-widget-three__subscribe">
                  <div className="footer-widget-three__title-box">
                    <h3 className="footer-widget-three__title">
                      Subscribe Now
                    </h3>
                  </div>
                  <p className="footer-widget-three__subscribe-text text-justify">
                    Get the latest news, tips and latest messages, including
                    special offers
                  </p>
                  <form
                    className="footer-widget-three__subscribe-form mc-form"
                    data-url="MC_FORM_URL"
                  >
                    <div className="footer-widget-three__subscribe-form-input-box">
                      <input
                        type="email"
                        placeholder="Enter email address"
                        name="EMAIL"
                      />
                      <button
                        type="submit"
                        className="footer-widget-three__subscribe-btn"
                      >
                        <span className="fas fa-paper-plane"></span>
                      </button>
                    </div>
                  </form>
                  <div className="mc-form__response"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-three__bottom">
          <div className="container">
            <div className="site-footer-three__bottom-inner">
              <p className="site-footer-three__bottom-text">
                © 2024 Copyright www.ashmitassociates.com All rights reserved
              </p>
              <div className="site-footer-three__bottom-social">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
