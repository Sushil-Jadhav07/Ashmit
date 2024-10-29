"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandSlider from "@/components/slider/BrandSlider";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={4} footerStyle={3} breadcrumbTitle="About company">
        {/*About Two Start */}
        <section className="about-two">
          <div className="about-two__shape-2 zoominout">
            <img src="assets/images/shapes/about-two-shape-2.png" alt="" />
          </div>
          <div className="about-two__shape-3 float-bob-y">
            <img src="assets/images/shapes/about-two-shape-3.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="about-two__left">
                  <h3 className="about-two__title">About Us</h3>
                  <p className="about-two__text">
                    Founded & lead by CA Ashmit Jhunjhunwala. We along with our
                    team of professionals have established our presence in the
                    related professional ﬁelds. From the day of its existence,
                    we have started growing into a multi faceted Chartered
                    Accountancy ﬁrm offering broad spectrum of services to our
                    diverse clientele
                  </p>

                  <h3 className="about-two__title">Qualiﬁcation</h3>
                  <p className="about-two__text-2">
                    Introducing CA Ashmit Jhunjhunwala, a highly skilled
                    Chartered Accountant with a remarkable history of delivering
                    top-tier ﬁnancial solutions. With qualiﬁcations from the
                    esteemed Institute of Chartered Accountants of India (ICAI)
                    and the Institute of Chartered Accountants in England and
                    Wales (ICAEW, UK), Ashmit offers unmatched proﬁciency in
                    Accounting, Audit & Assurance, Taxation, Company
                    Structuring, and Litigation Support.
                  </p>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="about-two__right">
                  <div
                    className="about-two__img wow slideInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                  >
                    <div className="about-two__shape-1 img-bounce">
                      <img
                        src="assets/images/shapes/about-two-shape-1.png"
                        alt=""
                      />
                    </div>
                    <img
                      src="assets/images/resources/aboutpg-img1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About Two End */}

        {/* {about} */}
        <div className="container">
          <h3 className="section__title-two text-center">
            Our Business & Financial Consulting <br /> Services
          </h3>
          <div className="services-two__bottom">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img
                        src="assets/images/resources/aboutImg-1-1.png"
                        alt="Firm's Strategy Image"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title">
                      <Link href="">Firm’s Strategy</Link>
                    </h3>
                    <p className="services-two__text">
                      To reach new heights and add feathers to our wisdom & to
                      mark our presence worldwide, by providing best class
                      services to our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img
                        src="assets/images/resources/aboutImg-2.png"
                        alt="Our Values Image"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title">
                      <Link href="">Our Values</Link>
                    </h3>
                    <p className="services-two__text">
                      At ASHMIT & ASSOCIATES, we deliver all services with
                      quality and the highest standards of ethics, offering
                      value and transparent communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img
                        src="assets/images/resources/aboutImg-3.png"
                        alt="Our Mission Image"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title">
                      <Link href="">Our Mission</Link>
                    </h3>
                    <p className="services-two__text">
                      To become a leading firm of Chartered Accountants known
                      for integrity, providing value-based taxation and advisory
                      services across various sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Process One Start */}

        {/*Feature One Start */}
        <section className="services-carousel-page py-5">
          <div className="container">
            <div className="services-four__top text-center mb-4">
              <div className="row">
                <div className="col-12">
                  <div className="services-four__left">
                    <div className="section-title-three-text-left">
                      <div className="section-title-three__tagline-box">
                        <p className="section-title-three__tagline text-uppercase mb-2">
                          Why Us
                        </p>
                      </div>
                      <h2 className="section-title-three__title">
                        Why we are the best
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services items */}
            <div className="row">
              {/* Service Item 1 */}
              <div className="col-md-4 mb-4">
                <div className="services-page__single ">
                  <h3 className="services-page__title">
                    <Link href="">SERVICES</Link>
                  </h3>
                  <div className="services-page__icon mb-3">
                    <span className="icon-report"></span>
                  </div>
                  <p className="services-page__text">
                    All types of industries, services, and operational levels,
                    we help our clients ensure excellence by leveraging our
                    experience since 2019.
                  </p>
                  <div className="services-page__btn mt-3">
                    <Link href="contact" className="text-primary">
                      Learn More <span className="icon-right-arrow1"></span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service Item 2 */}
              <div className="col-md-4 mb-4">
                <div className="services-page__single">
                  <h3 className="services-page__title">
                    <Link href="">EXPERTISE</Link>
                  </h3>
                  <div className="services-page__icon mb-3">
                    <span className="icon-planning"></span>
                  </div>
                  <p className="services-page__text">
                    We simplify complex information for clients, even if they do
                    not have a finance or tax background.
                  </p>
                  <div className="services-page__btn mt-3">
                    <Link href="contact" className="text-primary">
                      Learn More <span className="icon-right-arrow1"></span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service Item 3 */}
              <div className="col-md-4 mb-4">
                <div className="services-page__single ">
                  <h3 className="services-page__title">
                    <Link href="">WORK</Link>
                  </h3>
                  <div className="services-page__icon mb-3">
                    <span className="icon-financial-advices11"></span>
                  </div>
                  <p className="services-page__text">
                    Ashmit & Associates specialize in Audit & Assurance and
                    Taxation Consultancy, customizing services based on client
                    needs.
                  </p>
                  <div className="services-page__btn mt-3">
                    <Link href="contact" className="text-primary">
                      Learn More <span className="icon-right-arrow1"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Feature One Start */}

        {/*Feature One Start */}
        {/* <section className="feature-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="feature-one__left">
                  <div className="section-title text-center text-lg-start">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">Why us</p>
                    </div>
                    <h2 className="section-title__title">
                      Why we are the best.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="feature-one__right">
                  <div className="row">

                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
                      data-wow-delay="100ms"
                    >
                      <div className="feature-one__single">
                        <div
                          className="feature-one__single-hover-bg"
                          style={{
                            backgroundImage:
                              "url(assets/images/resources/feature-1-1.jpg)",
                          }}
                        ></div>
                        <div className="feature-one__icon">
                          <span className="icon-business-advice"></span>
                        </div>
                        <h3 className="feature-one__title">
                          <Link href="business-audit">SERVICES</Link>
                        </h3>
                        <p className="feature-one__text">
                          All type of industries, services, and operational
                          levels, we help our clients ensure excellence by
                          giving them the benefit into this field since 2019
                          years of experience
                        </p>
                      </div>
                    </div>
               

                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay="200ms"
                    >
                      <div className="feature-one__single">
                        <div
                          className="feature-one__single-hover-bg"
                          style={{
                            backgroundImage:
                              "url(assets/images/resources/feature-1-1.jpg)",
                          }}
                        ></div>
                        <div className="feature-one__icon">
                          <span className="icon-financial-advice"></span>
                        </div>
                        <h3 className="feature-one__title">
                          <Link href="financial-advices">EXPERTISE</Link>
                        </h3>
                        <p className="feature-one__text">
                          Our expertise is to simplify and interpret, complex
                          information to be understood, by the client who is not
                          of the, finance and tax background.
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
            

                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
                      data-wow-delay="300ms"
                    >
                      <div className="feature-one__single">
                        <div
                          className="feature-one__single-hover-bg"
                          style={{
                            backgroundImage:
                              "url(assets/images/resources/feature-1-1.jpg)",
                          }}
                        ></div>
                        <div className="feature-one__icon">
                          <span className="icon-risk-management"></span>
                        </div>
                        <h3 className="feature-one__title">
                          <Link href="tax-strategy">WORK</Link>
                        </h3>
                        <p className="feature-one__text">
                          Ashmit & Associates focus on Audit & Assurance,
                          Taxation Consultancy, Customizing our services based
                          on the clients requirements has been our key strength.
                        </p>
                      </div>
                    </div>
              

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/*Feature ends here */}

        {/*Process One End */}

        {/*Counter One Start */}
        {/* <section className="counter-one">
          <div className="container">
            <div className="counter-one__inner">
              <div
                className="counter-one__bg float-bob-y"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/counter-one-bg.png)",
                }}
              ></div>
              <ul className="counter-one__count-list list-unstyled">
                <li>
                  <div className="counter-one__icon">
                    <span className="icon-icon-years-experience"></span>
                  </div>
                  <div className="counter-one__count count-box">
                    <CounterUp end={10} />
                  </div>
                  <p className="counter-one__text">Years of Experience</p>
                </li>
                <li>
                  <div className="counter-one__icon">
                    <span className="icon-icon-team-members"></span>
                  </div>
                  <div className="counter-one__count count-box">
                    <CounterUp end={89} />
                  </div>
                  <p className="counter-one__text">Team members</p>
                </li>
                <li>
                  <div className="counter-one__icon">
                    <span className="icon-icon-successful-project"></span>
                  </div>
                  <div className="counter-one__count count-box">
                    <CounterUp end={789} />
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Successful Projects</p>
                </li>
                <li>
                  <div className="counter-one__icon">
                    <span className="icon-icon-satisfied-clients"></span>
                  </div>
                  <div className="counter-one__count count-box">
                    <CounterUp end={650} />
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Satisfied Clients</p>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        {/*Counter One End */}

        {/*Team Four Start*/}

        {/*Team Four End*/}

        {/*Testimonial Two Start */}
        <section className="testimonial-two testimonial-four">
          <div className="container">
            <h3 className="section__title-two text-center">Our Team</h3>
            <div className="testimonial-two__bottom row gap-10">
              {/* Testimonial Two Single Start */}
              <div className="testimonial-two__single col-12 col-md-5 col-lg-4 mb-4">
                <div className="testimonial-two__client-img text-center mb-3">
                  <img
                    src="assets/images/testimonial/testimonial-2-1.jpg"
                    alt="Client Image"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="testimonial-two__client-info text-center">
                  <h3>CA Ashmit Jhunjhunwala (ACA, DISA, B.Com)</h3>
                  <p>Founder’s Profile</p>
                </div>
                <p className="testimonial-two__text">
                  "Ashmit Jhunjhunwala is a qualified Chartered Accountant with
                  an experience of 5+ years. His expertise lies in Direct
                  Taxation & Audit and Assurance..."
                </p>
                <div className="testimonial-two__ratting text-center">
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                </div>
              </div>
              {/* Testimonial Two Single End */}

              {/* Testimonial Two Single Start */}
              <div className="testimonial-two__single col-12 col-md-5 col-lg-4 mb-4">
                <div className="testimonial-two__client-img text-center mb-3">
                  <img
                    src="assets/images/testimonial/testimonial-2-2.jpg"
                    alt="Client Image"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="testimonial-two__client-info text-center">
                  <h3>CA Sumit Anshani (ACA, B.Com)</h3>
                  <p>Associates</p>
                </div>
                <p className="testimonial-two__text">
                  "Sumit Anshani is a qualified Chartered Accountant with an
                  experience of 8+ years..."
                </p>
                <div className="testimonial-two__ratting text-center">
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                </div>
              </div>
              {/* Testimonial Two Single End */}

              {/* Testimonial Two Single Start */}
              <div className="testimonial-two__single col-12 col-md-5 col-lg-4 mb-4">
                <div className="testimonial-two__client-img text-center mb-3">
                  <img
                    src="assets/images/testimonial/testimonial-2-3.jpg"
                    alt="Client Image"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="testimonial-two__client-info text-center">
                  <h3>CA Sapna Anshani (ACA, B.Com)</h3>
                  <p>Associates</p>
                </div>
                <p className="testimonial-two__text">
                  "Sapna Anshani is a qualified Chartered Accountant with more
                  than 9 years of work experience..."
                </p>
                <div className="testimonial-two__ratting text-center">
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                  <span className="icon-star-1"></span>
                </div>
              </div>
              {/* Testimonial Two Single End */}
            </div>
          </div>
        </section>

        {/*Testimonial Two End */}

        {/*Brand Three Start*/}
        {/* <section className="brand-one brand-three">
          <div className="container">
            <div className="brand-one__inner">
              <BrandSlider />
            </div>
          </div>
        </section> */}
        {/*Brand Three End*/}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
