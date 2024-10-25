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
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Testimonial() {
    return (
        <>



        {/*Testimonial Three STart */}
        <section className="testimonial-three">
            <div className="testimonial-three__shape-1 float-bob-x">
                <img src="assets/images/shapes/testimonial-three-shape-1.png" alt=""/>
            </div>
            <div className="testimonial-three__shape-2 float-bob-x">
                <img src="assets/images/shapes/testimonial-three-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title-three text-center">
                    <div className="section-title-three__tagline-box">
                        <p className="section-title-three__tagline">Testimonials</p>
                    </div>
                    <h2 className="section-title-three__title">What our client's says <br/> about our work.</h2>
                </div>
                <div className="testimonial-three__bottom">
                    <Swiper {...swiperOptions} className="testimonial-three__carousel owl-carousel owl-theme thm-owl__carousel" data-owl-options='{
                        "loop": true,
                        "autoplay": true,
                        "margin": 70,
                        "nav": false,
                        "dots": true,
                        "smartSpeed": 500,
                        "autoplayTimeout": 10000,
                        "navText": ["<span className=\"icon-right-arrow\"></span>","<span className=\"icon-right-arrow1\"></span>"],
                        "responsive": {
                            "0": {
                                "items": 1
                            },
                            "768": {
                                "items": 2
                            },
                            "992": {
                                "items": 2
                            },
                            "1200": {
                                "items": 3
                            }
                        }
                    }'>
                        {/*Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__quote">
                                <span className="icon-quote11"></span>
                            </div>
                            <p className="testimonial-three__text">Divided by arches into stiff sections. The bedding
                                was
                                hardly able to cover it and seemed ready to slide off any momentMagazine and
                                housed in a
                                nice, gilded frame.</p>
                            <div className="testimonial-three__client-info">
                                <h3>Micle Deno</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Three Single End*/}
                        {/*Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__quote">
                                <span className="icon-quote11"></span>
                            </div>
                            <p className="testimonial-three__text">Divided by arches into stiff sections. The bedding
                                was
                                hardly able to cover it and seemed ready to slide off any momentMagazine and
                                housed in a
                                nice, gilded frame.</p>
                            <div className="testimonial-three__client-info">
                                <h3>Jerome Bell</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Three Single End*/}
                        {/*Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__quote">
                                <span className="icon-quote11"></span>
                            </div>
                            <p className="testimonial-three__text">Divided by arches into stiff sections. The bedding
                                was
                                hardly able to cover it and seemed ready to slide off any momentMagazine and
                                housed in a
                                nice, gilded frame.</p>
                            <div className="testimonial-three__client-info">
                                <h3>Kristin Watson</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Three Single End*/}
                        {/*Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__quote">
                                <span className="icon-quote11"></span>
                            </div>
                            <p className="testimonial-three__text">Divided by arches into stiff sections. The bedding
                                was
                                hardly able to cover it and seemed ready to slide off any momentMagazine and
                                housed in a
                                nice, gilded frame.</p>
                            <div className="testimonial-three__client-info">
                                <h3>Nikolo Vali</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Three Single End*/}
                        {/*Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__quote">
                                <span className="icon-quote11"></span>
                            </div>
                            <p className="testimonial-three__text">Divided by arches into stiff sections. The bedding
                                was
                                hardly able to cover it and seemed ready to slide off any momentMagazine and
                                housed in a
                                nice, gilded frame.</p>
                            <div className="testimonial-three__client-info">
                                <h3>Harbert Spen</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Three Single End*/}
                        {/*Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__quote">
                                <span className="icon-quote11"></span>
                            </div>
                            <p className="testimonial-three__text">Divided by arches into stiff sections. The bedding
                                was
                                hardly able to cover it and seemed ready to slide off any momentMagazine and
                                housed in a
                                nice, gilded frame.</p>
                            <div className="testimonial-three__client-info">
                                <h3>David Kapor</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Three Single End*/}
                        {/*Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__quote">
                                <span className="icon-quote11"></span>
                            </div>
                            <p className="testimonial-three__text">Divided by arches into stiff sections. The bedding
                                was
                                hardly able to cover it and seemed ready to slide off any momentMagazine and
                                housed in a
                                nice, gilded frame.</p>
                            <div className="testimonial-three__client-info">
                                <h3>Alisha Martin</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Three Single End*/}
                        {/*Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__quote">
                                <span className="icon-quote11"></span>
                            </div>
                            <p className="testimonial-three__text">Divided by arches into stiff sections. The bedding
                                was
                                hardly able to cover it and seemed ready to slide off any momentMagazine and
                                housed in a
                                nice, gilded frame.</p>
                            <div className="testimonial-three__client-info">
                                <h3>Harbi Shaien</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Three Single End*/}

                        {/*Testimonial Three Single Start */}
                        <SwiperSlide>
                        <div className="testimonial-three__single">
                            <div className="testimonial-three__quote">
                                <span className="icon-quote11"></span>
                            </div>
                            <p className="testimonial-three__text">Divided by arches into stiff sections. The bedding
                                was
                                hardly able to cover it and seemed ready to slide off any momentMagazine and
                                housed in a
                                nice, gilded frame.</p>
                            <div className="testimonial-three__client-info">
                                <h3>Jena Armi</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Three Single End*/}
                    </Swiper>
                </div>
            </div>
        </section>
        {/*Testimonial Three End */}
        

            
        </>
    )
}
