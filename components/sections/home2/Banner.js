
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

        
        <section className="main-slider-two">
        <Swiper {...swiperOptions} className="main-slider-two__carousel owl-carousel owl-theme thm-owl__carousel">
                <SwiperSlide>
                <div className="item main-slider-two__slide-1">
                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-2-1.jpg)' }} >
                    </div>

                    <div className="main-slider-two__shape-1 float-bob-y">
                        <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-2 img-bounce">
                        <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="main-slider-two__content">
                            <h2 className="main-slider-two__title">We grow & manage <br/> your business</h2>
                            <p className="main-slider-two__text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting.</p>
                            <div className="main-slider-two__btn-box">
                                <Link href="contact" className="thm-btn main-slider-two__btn">Find Consultant</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-two__slide-2">
                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-2-2.jpg)' }} >
                    </div>

                    <div className="main-slider-two__shape-1 float-bob-y">
                        <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-2 img-bounce">
                        <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="main-slider-two__content">
                            <h2 className="main-slider-two__title">We grow & manage <br/> your business</h2>
                            <p className="main-slider-two__text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting.</p>
                            <div className="main-slider-two__btn-box">
                                <Link href="contact" className="thm-btn main-slider-two__btn">Find Consultant</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-two__slide-3">
                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-2-3.jpg)' }} >
                    </div>

                    <div className="main-slider-two__shape-1 float-bob-y">
                        <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-2 img-bounce">
                        <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                    </div>

                    <div className="container">
                        <div className="main-slider-two__content">
                            <h2 className="main-slider-two__title">We grow & manage <br/> your business</h2>
                            <p className="main-slider-two__text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting.</p>
                            <div className="main-slider-two__btn-box">
                                <Link href="contact" className="thm-btn main-slider-two__btn">Find Consultant</Link>
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
