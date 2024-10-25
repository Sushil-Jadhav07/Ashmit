'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    
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

export default function Testimonial() {
    return (
        <>

        {/*Testimonial Two Start */}
        <section className="testimonial-two">
            <div className="container">
                <h3 className="section__title-two">People talking about us</h3>
                <div className="testimonial-two__bottom">
                <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel">
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide> 
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide> 
                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </section>
        {/*Testimonial Two End */}
            
        </>
    )
}
