"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandSlider from "@/components/slider/BrandSlider";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Feature() {
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

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/*Feature One Start */}
      

      {/*Feature ends here */}

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
            <div className="col-md-4 mb-4 ">
              <div className="services-page__single ">
                <h3 className="services-page__title">
                  <Link href="">SERVICES</Link>
                </h3>
                <div className="services-page__icon mb-3">
                  <span className="icon-report"></span>
                </div>
                <p className="services-page__text">
                  All types of industries, services, and operational levels, we help
                  our clients ensure excellence by leveraging our experience since
                  2019.
                </p>
                <div className="services-page__btn mt-3">
                  <Link href="services" className="text-primary">
                    Learn More <span className="icon-right-arrow1"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="col-md-4 mb-4 ">
              <div className="services-page__single">
                <h3 className="services-page__title">
                  <Link href="">EXPERTISE</Link>
                </h3>
                <div className="services-page__icon mb-3">
                  <span className="icon-planning"></span>
                </div>
                <p className="services-page__text">
                  We simplify complex information for clients, even if they do not
                  have a finance or tax background.
                </p>
                <div className="services-page__btn mt-3">
                  <Link href="services" className="text-primary">
                    Learn More <span className="icon-right-arrow1"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="col-md-4 mb-4">
              <div className="services-page__single ">
                <h3 className="services-page__title">
                  <Link href="/financial-advices">WORK</Link>
                </h3>
                <div className="services-page__icon mb-3">
                  <span className="icon-financial-advices11"></span>
                </div>
                <p className="services-page__text">
                  Ashmit & Associates specialize in Audit & Assurance and Taxation
                  Consultancy, customizing services based on client needs.
                </p>
                <div className="services-page__btn mt-3">
                  <Link href="services" className="text-primary">
                    Learn More <span className="icon-right-arrow1"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
