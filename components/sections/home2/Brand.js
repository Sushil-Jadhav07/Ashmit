'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            slidesPerView: 2,
            
        },
        767: {
            slidesPerView: 3,
            
        },
        991: {
            slidesPerView: 3,
            
        },
        1199: {
            slidesPerView: 5,
            
        },
        1350: {
            slidesPerView: 5,
            
        },
    }



}



export default function Brand() {
    return (
        <>

        {/*Brand Two Start*/}
        <section className="brand-two">
            <div className="container">
                <div className="brand-two__inner">
                    <h3 className="section__title-two">Our Cliens</h3>
                    <Swiper {...swiperOptions} className="brand-two__carousel thm-owl__carousel owl-theme owl-carousel">
                        {/*Brand Two Single*/}
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-1-1.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand Two Single*/}
                        {/*Brand Two Single*/}
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-1-2.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand Two Single*/}
                        {/*Brand Two Single*/}
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-1-3.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand Two Single*/}
                        {/*Brand Two Single*/}
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-1-4.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand Two Single*/}
                        {/*Brand Two Single*/}
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-1-5.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand Two Single*/}
                        {/*Brand Two Single*/}
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-1-3.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand Two Single*/}
                        {/*Brand Two Single*/}
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-1-4.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand Two Single*/}
                        {/*Brand Two Single*/}
                        <SwiperSlide>
                        <div className="brand-two__single">
                            <div className="brand-two__img">
                                <img src="assets/images/brand/brand-1-5.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand Two Single*/}
                    </Swiper>
                    {/* If we need navigation buttons */}
                </div>
            </div>
        </section>
        {/*Brand Two End*/}
        
        </>
    )
}
