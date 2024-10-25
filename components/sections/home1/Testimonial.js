'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
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
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 2,
            
        },
        1350: {
            slidesPerView: 2,
            
        },
    }



}


export default function Testimonial() {
    return (
        <>

        
        <section className="testimonial-one">
            <div className="testimonial-one__bg float-bob-x"
                style={{ backgroundImage: 'url(assets/images/backgrounds/testimonial-one-bg.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="testimonial-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">Testimonials</p>
                                </div>
                                <h2 className="section-title__title">What our client's <br/> says about our
                                    <br/> best work.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="testimonial-one__right">
                        <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel">
                            <SwiperSlide>
                                <div className="testimonial-one__single">
                                    <p className="testimonial-one__text">"I am really satisfied with it. I'm good to go. It
                                        really saves me time and effort. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. It's is exactly what our business has been
                                        lacking. "</p>
                                    <div className="testimonial-one__client-info-and-img">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <h3>Jacob Jones</h3>
                                            <p>President of Sales</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-one__single">
                                    <p className="testimonial-one__text">"I am really satisfied with it. I'm good to go. It
                                        really saves me time and effort. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. It's is exactly what our business has been
                                        lacking. "</p>
                                    <div className="testimonial-one__client-info-and-img">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/testimonial-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <h3>Micle Deno</h3>
                                            <p>President of Sales</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide> 
                            <SwiperSlide>
                                <div className="testimonial-one__single">
                                    <p className="testimonial-one__text">"I am really satisfied with it. I'm good to go. It
                                        really saves me time and effort. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. It's is exactly what our business has been
                                        lacking. "</p>
                                    <div className="testimonial-one__client-info-and-img">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <h3>Jacob Jones</h3>
                                            <p>President of Sales</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide> 
                            <SwiperSlide>   
                                <div className="testimonial-one__single">
                                    <p className="testimonial-one__text">"I am really satisfied with it. I'm good to go. It
                                        really saves me time and effort. Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. It's is exactly what our business has been
                                        lacking. "</p>
                                    <div className="testimonial-one__client-info-and-img">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/testimonial-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <h3>Micle Deno</h3>
                                            <p>President of Sales</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide> 
                        </Swiper> 
                    </div>
                </div>
            </div>
        </div>
        </section>
       

            
        </>
    )
}
