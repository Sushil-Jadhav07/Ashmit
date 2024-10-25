'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    
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
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }



}

export default function Services() {
    return (
        <>
        
        <section className="services-two">
            <div className="services-two__shape-1 zoominout">
                <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <h3 className="section__title-two">Our Business & Financial Consulting <br/> Services</h3>
                <div className="services-two__bottom">
                <Swiper {...swiperOptions} className="services-two__carousel owl-carousel owl-theme thm-owl__carousel">
                       <SwiperSlide>
                        <div className="item">
                            <div className="services-two__single">
                                <div className="services-two__img-box">
                                    <div className="services-two__img">
                                        <img src="assets/images/services/services-2-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="services-two__content">
                                    <h3 className="services-two__title"><Link href="business-audit">Business Audit</Link>
                                    </h3>
                                    <p className="services-two__text">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    <div className="services-two__btn">
                                        <Link href="business-audit">Learn More<span
                                                className="icon-right-arrow1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="item">
                            <div className="services-two__single">
                                <div className="services-two__img-box">
                                    <div className="services-two__img">
                                        <img src="assets/images/services/services-2-2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="services-two__content">
                                    <h3 className="services-two__title"><Link href="tax-strategy">Tax Strategy</Link>
                                    </h3>
                                    <p className="services-two__text">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    <div className="services-two__btn">
                                        <Link href="tax-strategy">Learn More<span
                                                className="icon-right-arrow1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="item">
                            <div className="services-two__single">
                                <div className="services-two__img-box">
                                    <div className="services-two__img">
                                        <img src="assets/images/services/services-2-3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="services-two__content">
                                    <h3 className="services-two__title"><Link href="financial-advices">Financial
                                            Advices</Link>
                                    </h3>
                                    <p className="services-two__text">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                    <div className="services-two__btn">
                                        <Link href="financial-advices">Learn More<span
                                                className="icon-right-arrow1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        
        </>
    )
}
