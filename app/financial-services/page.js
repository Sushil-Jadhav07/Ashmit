"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={4}
        breadcrumbTitle="Financial Services"
      >
        {/*Services Details Start*/}
        <section className="services-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <div className="services-details__left">
                  <div className="services-details__services-box">
                    <ul className="services-details__services-list list-unstyled">
                      <li>
                        <Link href="goods-service-tax">
                          Goods & Service Tax
                          <span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="cfo-services">
                          CFO Services
                          <span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="corporate-services">
                          Corporate Services
                          <span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="financial-services">
                          Financial Services
                          <span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="audit-assurance">
                          Audit & Assurance
                          <span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="accounting-services">
                          Accounting Services
                          <span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="income-tax">
                          Income Tax<span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="outsourcing">
                          Outsourcing<span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="tds">
                          TDS<span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="services-non-resident">
                          Services for Non-resident
                          <span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li >
                        <Link href="other-services">
                          Other Services
                          <span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="tax-representation-litigation">
                          Tax Representation & Litigation
                          <span className="icon-right-arrow1"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="services-details__contact">
                    <h3 className="services-details__contact-title">
                      Contact us
                    </h3>
                    <ul className="services-details__contact-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-location-1"></span>
                        </div>
                        <p>
                          Office no 40, 1st floor, Asiatic Arcade, <br />
                          Vartak Nagar, Thane (W) 400606
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-phone"></span>
                        </div>
                        <p>
                          <Link href="tel:9987703715">9987703715</Link>
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
                      <li>
                        <div className="icon">
                          <span className="icon-time"></span>
                        </div>
                        <p>
                          Mon - Sat: 9:00 AM - 5:00 PM
                          <br /> Sunday Close
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="services-details__right">
                  <div className="services-details__img">
                    <img
                      src="assets/images/services/Financial_services.png"
                      alt=""
                    />
                  </div>
                  <h3 className="services-details__title-1">
                    Project Finance & Funds Sourcing Services
                  </h3>
                  <p className="services-details__text-1">
                    Financial Management constitutes an important aspect of the
                    business. We offer the following services & assists
                    businesses in proper allocation and utilisation of its
                    finance.
                  </p>
                  <ul className="services-details__points list-unstyled">
                    <li>
                      <p>1. Preparations of Project Reports.</p>
                    </li>
                    <li>
                      <p>2. Preparation of CMA data for bank loans.</p>
                    </li>
                    <li>
                      <p>3. Bank Finance.</p>
                    </li>
                    <li>
                      <p>4. Loan against Property.</p>
                    </li>
                    <li>
                      <p>5. Unsecured Loans.</p>
                    </li>
                    <li>
                      <p>6. Offer Expertise</p>
                    </li>
                  </ul>
                  {/* <div className="services-details__img-and-feature">
                    <div className="services-details__feature-img">
                      <img
                        src="assets/images/services/services-details-img-2.jpg"
                        alt=""
                      />
                      <div className="services-details__video-link">
                        <a
                          onClick={() => setOpen(true)}
                          className="video-popup"
                        >
                          <div className="services-details__video-icon">
                            <span className="fa fa-play"></span>
                            <i className="ripple"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="services-details__feature">
                      <h3 className="services-details__feature-title">
                        Our Features:
                      </h3>
                      <p className="services-details__feature-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                      <ul className="services-details__feature-points list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-icon-business-consulting"></span>
                          </div>
                          <div className="content">
                            <h3>Best Business consulting</h3>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-icon-customer-support"></span>
                          </div>
                          <div className="content">
                            <h3>24/7 customer support</h3>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* <h3 className="services-details__title-2">
                    Benefits With Our Service:
                  </h3>
                  <p className="services-details__text-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Services Details End*/}

        {/*Appointment One Start*/}
        {/* <section className="appointment-one">
          <div className="appointment-one__inner">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div className="appointment-one__left">
                    <h3 className="appointment-one__title">
                      Book a Appointment
                    </h3>
                    <p className="appointment-one__text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="appointment-one__right">
                    <div className="appointment-one__form-box">
                      <form
                        action="assets/inc/sendemail.php"
                        className="appointment-one__form contact-form-validated"
                      >
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="appointment-one__input-box">
                              <h3 className="appointment-one__input-title">
                                Name *
                              </h3>
                              <input type="text" placeholder="" name="name" />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="appointment-one__input-box">
                              <h3 className="appointment-one__input-title">
                                Service Type
                              </h3>
                              <div className="appointment-one__showing-sort">
                                <select
                                  className="selectpicker"
                                  aria-label="Default select example"
                                >
                                  <option>Select ...</option>
                                  <option value="1">Sort by popular-01</option>
                                  <option value="2">Sort by popular-02</option>
                                  <option value="3">Sort by popular-03</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="appointment-one__input-box">
                              <h3 className="appointment-one__input-title">
                                Email *
                              </h3>
                              <input
                                type="email"
                                placeholder="e.g:"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="appointment-one__input-box text-message-box">
                              <h3 className="appointment-one__input-title">
                                Message
                                <span>(Oprional)</span>
                              </h3>
                              <textarea
                                name="message"
                                placeholder="Type here..."
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="appointment-one__input-box appointment-one__input-box-2">
                              <h3 className="appointment-one__input-title">
                                Phone Number *
                              </h3>
                              <input
                                type="text"
                                placeholder="+1 (00)"
                                name="email"
                              />
                            </div>
                            <div className="appointment-one__btn-box">
                              <button
                                type="submit"
                                className="thm-btn appointment-one__btn"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="result"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*Appointment One End*/}
      </Layout>
    </>
  );
}
