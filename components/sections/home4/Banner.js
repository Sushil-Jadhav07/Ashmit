"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      {/* Main Sllider Start */}
      <section className="main-slider-three">
        <Swiper
          {...swiperOptions}
          className="main-slider-three__carousel owl-carousel owl-theme thm-owl__carousel"
          data-owl-options='{"loop": true, "items": 1, "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"], "margin": 0, "dots": true, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'
        >
          <SwiperSlide>
            <div className="item main-slider-three__slide-1">
              <div className="main-slider-three__img">
                <img src="assets/images/resources/banner-home.png" alt="" />
              </div>

              <div className="main-slider-three__shape-1 rotate-me">
                <img
                  src="assets/images/shapes/main-slider-three-shape-1.png"
                  alt=""
                />
              </div>
              <div className="main-slider-three__shape-2 img-bounce">
                <img
                  src="assets/images/shapes/main-slider-three-shape-2.png"
                  alt=""
                />
              </div>
              <div className="main-slider-three__shape-3 shape-mover">
                <img
                  src="assets/images/shapes/main-slider-three-shape-3.png"
                  alt=""
                />
              </div>

              <div className="container">
                <div className="main-slider-three__content">
                  <h2 className="main-slider-three__title">
                  Empowering Global <br className="banner_break" /> Growth with Expert <br className="banner_break" /> Financial Solutions
                  </h2>
                  <p className="main-slider-three__text ">
                    To become a globally recognized consulting and <br className="banner_break" /> accounting
                    firm, delivering innovative, reliable, and <br className="banner_break" />client-focused
                    financial solutions that drive <br className="banner_break" />sustainable  growth and
                    success.
                  </p>
                  <div className="main-slider-three__btn-box">
                    <Link href="contact" className="thm-btn main-slider__btn-1">
                      Get Consulting
                    </Link>
                    {/* <Link href="about" className="thm-btn main-slider__btn-2">Learn More</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/*Main Sllider Start */}
    </>
  );
}
