
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

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

    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="main-slider">
                <Swiper {...swiperOptions} className="main-slider__carousel">
                    <SwiperSlide>
                            <div className="item main-slider__slide-1">
                            <div className="main-slider__bg"
                                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-1.jpg)' }} ></div>
                            

                            <div className="main-slider__shape-1 rotate-me">
                                <img src="assets/images/shapes/main-slider-shape-1.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-2 float-bob-x">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt=""/>
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <p className="main-slider__sub-title">WE CREAT DIGITAL PRODUCT</p>
                                    <h2 className="main-slider__title">Get more of what <br/> you want from your <br/> business</h2>
                                    <p className="main-slider__text">Lorem Ipsum is simply dummy text of the printing and <br/>
                                        typesetting industry. Lorem Ipsum has been.</p>
                                    <div className="main-slider__btn-and-video-box">
                                        <div className="main-slider__btn-box">
                                            <Link href="contact" className="thm-btn main-slider__btn">Get Consulting</Link>
                                        </div>
                                        <div className="main-slider__video-link">
                                            <a onClick={() => setOpen(true)} className="video-popup">
                                                <div className="main-slider__video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                            <h4 className="main-slider__video-text">Watch Video</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className="item main-slider__slide-2">
                            <div className="main-slider__bg"
                                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-2.jpg)' }} ></div>
                            

                            <div className="main-slider__shape-1 rotate-me">
                                <img src="assets/images/shapes/main-slider-shape-1.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-2 float-bob-x">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt=""/>
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <p className="main-slider__sub-title">WE CREAT DIGITAL PRODUCT</p>
                                    <h2 className="main-slider__title">Get more of what <br/> you want from your <br/> business</h2>
                                    <p className="main-slider__text">Lorem Ipsum is simply dummy text of the printing and <br/>
                                        typesetting industry. Lorem Ipsum has been.</p>
                                    <div className="main-slider__btn-and-video-box">
                                        <div className="main-slider__btn-box">
                                            <Link href="contact" className="thm-btn main-slider__btn">Get Consulting</Link>
                                        </div>
                                        <div className="main-slider__video-link">
                                            <a onClick={() => setOpen(true)} className="video-popup">
                                                <div className="main-slider__video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                            <h4 className="main-slider__video-text">Watch Video</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item main-slider__slide-3">
                            <div className="main-slider__bg"
                                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-3.jpg)' }} ></div>
                        

                            <div className="main-slider__shape-1 rotate-me">
                                <img src="assets/images/shapes/main-slider-shape-1.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-2 float-bob-x">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt=""/>
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <p className="main-slider__sub-title">WE CREAT DIGITAL PRODUCT</p>
                                    <h2 className="main-slider__title">Get more of what <br/> you want from your <br/> business</h2>
                                    <p className="main-slider__text">Lorem Ipsum is simply dummy text of the printing and <br/>
                                        typesetting industry. Lorem Ipsum has been.</p>
                                    <div className="main-slider__btn-and-video-box">
                                        <div className="main-slider__btn-box">
                                            <Link href="contact" className="thm-btn main-slider__btn">Get Consulting</Link>
                                        </div>
                                        <div className="main-slider__video-link">
                                            <a onClick={() => setOpen(true)} className="video-popup">
                                                <div className="main-slider__video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                            <h4 className="main-slider__video-text">Watch Video</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

            </section>

            

       


        
        </>
    )
}
