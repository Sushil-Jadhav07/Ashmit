import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer className="site-footer-two">
        <div className="site-footer-two__shape-1 img-bounce">
          <img src="assets/images/shapes/site-footer-two-shape-1.png" alt="" />
        </div>
        <div className="site-footer-two__shape-2 zoominout">
          <img src="assets/images/shapes/site-footer-two-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="site-footer-two__top">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget-two__column footer-widget-two__about">
                <div className="footer-widget-two__logo">
                    <a href="/">
                      <img
                        src="assets/images/resources/CA_logo.png"
                        width="60%"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="footer-widget-two__about-text">
                    We work with a passion of taking
                    <br /> challenges and creating new ones in
                    <br /> advertising sector.
                  </p>
                  <div className="site-footer-two__social">
                    <Link href="#">
                      <i className="fab fa-facebook"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget-two__column footer-widget-two__company">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Our Services</h3>
                  </div>
                  <ul className="footer-widget-two__company-list list-unstyled">
                    <li>
                      <Link href="goods-service-tax">Goods & Service Tax</Link>
                    </li>
                    <li>
                      <Link href="cfo-services">CFO Services</Link>
                    </li>
                    <li>
                      <Link href="corporate-services">Corporate Services</Link>
                    </li>
                    <li>
                      <Link href="financial-services">Financial Services</Link>
                    </li>
                    <li>
                      <Link href="audit-assurance">Audit & Assurance</Link>
                    </li>
                    <li>
                      <Link href="accounting-services">Accounting Services</Link>
                    </li>
                    <li>
                      <Link href="income-tax">Income Tax</Link>
                    </li>
                    <li>
                      <Link href="outsourcing">Outsourcing</Link>
                    </li>
                    <li>
                      <Link href="tds">TDS</Link>
                    </li>
                    <li>
                      <Link href="services-non-resident">
                        Services for Non-resident
                      </Link>
                    </li>
                    <li>
                      <Link href="other-services">Other Services</Link>
                    </li>
                    <li>
                      <Link href="tax-representation-litigation">
                        Tax Representation & Litigation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget-two__column footer-widget-two__company">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Quick Links</h3>
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
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget-two__column footer-widget-two__contact">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Contact info</h3>
                  </div>
                  <ul className="footer-widget-two__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-location-1"></span>
                      </div>
                      <p>
                        Office no 40, 1st floor, Asiatic Arcade, <br /> Vartak
                        Nagar, Thane (W) 400606
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-phone"></span>
                      </div>
                      <p>
                        <a href="tel:9987703715">9987703715</a>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope"></span>
                      </div>
                      <p>
                        <Link href="mailto:info@ashmitassociates.com">
                          info@ashmitassociates.com
                        </Link>
                      </p>
                    </li>
                  </ul>
                  <div className="footer-widget-two__work-time">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title">Working Time</h3>
                    </div>
                    <p className="footer-widget-two__work-time-text">
                      Mon - Sat: 9:00 AM - 5:00 PM
                      <br /> Sunday Close
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget-two__column footer-widget-two__portfolio">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">Instagram</h3>
                                </div>
                                <ul className="footer-widget-two__portfolio-list list-unstyled clearfix">
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-1.jpg"
                                                alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-2.jpg"
                                                alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-3.jpg"
                                                alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-4.jpg"
                                                alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-5.jpg"
                                                alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-6.jpg"
                                                alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
        <div className="site-footer-two__bottom">
          <div className="container">
            <div className="site-footer-two__bottom-inner">
              <p className="site-footer__bottom-text">
                © Copyright bixola 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
