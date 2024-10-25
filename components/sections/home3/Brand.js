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



}



export default function Brand() {
    return (
        <>
 
        {/*Brand Three Start*/}
        <section className="brand-one brand-three">
            <div className="container">
                <div className="brand-one__inner">
                <Swiper {...swiperOptions} className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel">

                        {/*Brand One Single*/}
                        <SwiperSlide>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <img src="assets/images/brand/brand-3-1.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand One Single*/}
                        {/*Brand One Single*/}
                        <SwiperSlide>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <img src="assets/images/brand/brand-3-2.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand One Single*/}
                        {/*Brand One Single*/}
                        <SwiperSlide>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <img src="assets/images/brand/brand-3-3.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand One Single*/}
                        {/*Brand One Single*/}
                        <SwiperSlide>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <img src="assets/images/brand/brand-3-4.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand One Single*/}
                        {/*Brand One Single*/}
                        <SwiperSlide>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <img src="assets/images/brand/brand-3-5.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand One Single*/}
                        {/*Brand One Single*/}
                        <SwiperSlide>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <img src="assets/images/brand/brand-3-4.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand One Single*/}
                        {/*Brand One Single*/}
                        <SwiperSlide>
                        <div className="brand-one__single">
                            <div className="brand-one__img">
                                <img src="assets/images/brand/brand-3-5.png" alt=""/>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Brand One Single*/}
                    </Swiper>
                    {/* If we need navigation buttons */}
                </div>
            </div>
        </section>
        {/*Brand Three End*/}
        
        
        </>
    )
}
