
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
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
        
       {/* Main Sllider Start */}
        <section className="main-slider-four">
            <Swiper {...swiperOptions} className="main-slider-four__carousel owl-carousel owl-theme thm-owl__carousel"
                data-owl-options='{"loop": true, "items": 1, "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"], "margin": 0, "dots": true, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'>
                <SwiperSlide>
                <div className="item main-slider-four__slide-1">

                    <div className="main-slider-four__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/banner-img.png)' }} >
                    </div>{/*slider-one__bg */}

                    <div className="main-slider-four__shape-1 float-bob-y">
                        <img src="assets/images/shapes/main-slider-four-shape-1.png" alt=""/>
                    </div>

                    <div className="main-slider-four__shape-2 float-bob-x">
                        <img src="assets/images/shapes/main-slider-four-shape-2.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="main-slider-four__content">
                            <h2 className="main-slider-four__title">Get more of what <br/> you want from your <br/> business
                            </h2>
                            <p className="main-slider-four__text">Lorem Ipsum is simply dummy text of the printing and <br/>
                                typesetting industry. Lorem Ipsum has been.</p>
                            <div className="main-slider-four__btn-and-video-box">
                                <div className="main-slider-four__btn-box">
                                    <Link href="contact" className="thm-btn main-slider-four__btn">Get Consulting</Link>
                                </div>
                                {/* <div className="main-slider-four__video-link">
                                    <Link href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="main-slider-four__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </Link>
                                    <h4 className="main-slider-four__video-text">Watch Video</h4>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-four__slide-2">

                    <div className="main-slider-four__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-2.jpg)' }} >
                    </div>{/*slider-one__bg */}

                    <div className="main-slider-four__shape-1 float-bob-y">
                        <img src="assets/images/shapes/main-slider-four-shape-1.png" alt=""/>
                    </div>

                    <div className="main-slider-four__shape-2 float-bob-x">
                        <img src="assets/images/shapes/main-slider-four-shape-2.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="main-slider-four__content">
                            <h2 className="main-slider-four__title">Get more of what <br/> you want from your <br/> business
                            </h2>
                            <p className="main-slider-four__text">Lorem Ipsum is simply dummy text of the printing and <br/>
                                typesetting industry. Lorem Ipsum has been.</p>
                            <div className="main-slider-four__btn-and-video-box">
                                <div className="main-slider-four__btn-box">
                                    <Link href="contact" className="thm-btn main-slider-four__btn">Get Consulting</Link>
                                </div>
                                <div className="main-slider-four__video-link">
                                    <Link href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="main-slider-four__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </Link>
                                    <h4 className="main-slider-four__video-text">Watch Video</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-four__slide-3">

                    <div className="main-slider-four__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-3.jpg)' }} >
                    </div>{/*slider-one__bg */}

                    <div className="main-slider-four__shape-1 float-bob-y">
                        <img src="assets/images/shapes/main-slider-four-shape-1.png" alt=""/>
                    </div>

                    <div className="main-slider-four__shape-2 float-bob-x">
                        <img src="assets/images/shapes/main-slider-four-shape-2.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="main-slider-four__content">
                            <h2 className="main-slider-four__title">Get more of what <br/> you want from your <br/> business
                            </h2>
                            <p className="main-slider-four__text">Lorem Ipsum is simply dummy text of the printing and <br/>
                                typesetting industry. Lorem Ipsum has been.</p>
                            <div className="main-slider-four__btn-and-video-box">
                                <div className="main-slider-four__btn-box">
                                    <Link href="contact" className="thm-btn main-slider-four__btn">Get Consulting</Link>
                                </div>
                                <div className="main-slider-four__video-link">
                                    <Link href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="main-slider-four__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </Link>
                                    <h4 className="main-slider-four__video-text">Watch Video</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

            </Swiper>
        </section>
       {/*Main Sllider Start */}

        </>
    )
}
