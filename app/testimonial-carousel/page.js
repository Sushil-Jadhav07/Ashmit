'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Testimonials">
                {/*Testimonials Page Start*/}
                <section className="testimonials-carousel-page">
                    <div className="container">
                        <Swiper {...swiperOptions} className="testimonials-carousel-style thm-owl__carousel owl-theme owl-carousel carousel-dot-style">
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__client-img">
                                        <img src="assets/images/testimonial/testimonial-2-1.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <h3>Jacob Jones</h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                    <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                        saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry."</p>
                                    <div className="testimonial-two__ratting">
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__client-img">
                                        <img src="assets/images/testimonial/testimonial-2-2.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <h3>Devon Lane</h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                    <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                        saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry."</p>
                                    <div className="testimonial-two__ratting">
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__client-img">
                                        <img src="assets/images/testimonial/testimonial-2-3.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <h3>Chieko Chute</h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                    <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                        saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry."</p>
                                    <div className="testimonial-two__ratting">
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__client-img">
                                        <img src="assets/images/testimonial/testimonial-2-1.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <h3>Jacob Jones</h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                    <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                        saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry."</p>
                                    <div className="testimonial-two__ratting">
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__client-img">
                                        <img src="assets/images/testimonial/testimonial-2-2.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <h3>Devon Lane</h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                    <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                        saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry."</p>
                                    <div className="testimonial-two__ratting">
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__client-img">
                                        <img src="assets/images/testimonial/testimonial-2-3.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <h3>Chieko Chute</h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                    <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                        saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry."</p>
                                    <div className="testimonial-two__ratting">
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__client-img">
                                        <img src="assets/images/testimonial/testimonial-2-1.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <h3>Jacob Jones</h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                    <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                        saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry."</p>
                                    <div className="testimonial-two__ratting">
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__client-img">
                                        <img src="assets/images/testimonial/testimonial-2-2.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <h3>Devon Lane</h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                    <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                        saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry."</p>
                                    <div className="testimonial-two__ratting">
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__client-img">
                                        <img src="assets/images/testimonial/testimonial-2-3.jpg" alt=""/>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <h3>Chieko Chute</h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                    <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                        saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry."</p>
                                    <div className="testimonial-two__ratting">
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                        <span className="icon-star-1"></span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                        </Swiper>
                    </div>
                </section>
                {/*Testimonials Page End*/}

            </Layout>
        </>
    )
}