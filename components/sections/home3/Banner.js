
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>
             
        <section className="main-slider-three">
        <Swiper {...swiperOptions} className="main-slider-three__carousel owl-carousel owl-theme thm-owl__carousel"
                data-owl-options='{"loop": true, "items": 1, "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"], "margin": 0, "dots": true, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'>
                <SwiperSlide>
                <div className="item main-slider-three__slide-1">

                    <div className="main-slider-three__img">
                        <img src="assets/images/resources/main-slider-three-img-1.png" alt=""/>
                    </div>

                    <div className="main-slider-three__shape-1 rotate-me">
                        <img src="assets/images/shapes/main-slider-three-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2 img-bounce">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-3 shape-mover">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="main-slider-three__content">
                            <h2 className="main-slider-three__title">Get more of what <br/> you want from your <br/> business
                            </h2>
                            <p className="main-slider-three__text">Lorem Ipsum is simply dummy text of the printing</p>
                            <div className="main-slider-three__btn-box">
                                <Link href="contact" className="thm-btn main-slider__btn-1">Get Consulting</Link>
                                <Link href="about" className="thm-btn main-slider__btn-2">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-three__slide-2">

                    <div className="main-slider-three__img">
                        <img src="assets/images/resources/main-slider-three-img-1.png" alt=""/>
                    </div>

                    <div className="main-slider-three__shape-1 rotate-me">
                        <img src="assets/images/shapes/main-slider-three-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2 img-bounce">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-3 shape-mover">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="main-slider-three__content">
                            <h2 className="main-slider-three__title">Get more of what <br/> you want from your <br/> business
                            </h2>
                            <p className="main-slider-three__text">Lorem Ipsum is simply dummy text of the printing</p>
                            <div className="main-slider-three__btn-box">
                                <Link href="contact" className="thm-btn main-slider__btn-1">Get Consulting</Link>
                                <Link href="about" className="thm-btn main-slider__btn-2">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-three__slide-3">

                    <div className="main-slider-three__img">
                        <img src="assets/images/resources/main-slider-three-img-1.png" alt=""/>
                    </div>

                    <div className="main-slider-three__shape-1 rotate-me">
                        <img src="assets/images/shapes/main-slider-three-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2 img-bounce">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-3 shape-mover">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="main-slider-three__content">
                            <h2 className="main-slider-three__title">Get more of what <br/> you want from your <br/> business
                            </h2>
                            <p className="main-slider-three__text">Lorem Ipsum is simply dummy text of the printing</p>
                            <div className="main-slider-three__btn-box">
                                <Link href="contact" className="thm-btn main-slider__btn-1">Get Consulting</Link>
                                <Link href="about" className="thm-btn main-slider__btn-2">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            </Swiper>
        </section>

        
        
            
        </>
    )
}
