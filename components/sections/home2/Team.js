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

export default function Team() {
    return (
        <>
        
        <section className="team-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="team-two__left">
                            <h3 className="section__title-two">Meet our team of creative experts</h3>
                            <p className="team-two__text">Lorem ipsum dolor sit amet labore et consectetuer adipiscing elit
                                sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="team-two__right">
                        <Swiper {...swiperOptions} className="team-two__carousel owl-carousel owl-theme thm-owl__carousel">
                                <SwiperSlide> 
                                <div className="item">
                                    <div className="team-two__single">
                                        <div className="team-two__img-box">
                                            <div className="team-two__img">
                                                <img src="assets/images/team/team-2-1.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="team-two__content">
                                            <div className="team-two__name-box">
                                                <h3 className="team-two__name"><Link href="team-details">Choi Ming Suk</Link>
                                                </h3>
                                                <p className="team-two__sub-title">Co-Founder</p>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                                <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                                <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide> 
                                <SwiperSlide> 
                                <div className="item">
                                    <div className="team-two__single">
                                        <div className="team-two__img-box">
                                            <div className="team-two__img">
                                                <img src="assets/images/team/team-2-2.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="team-two__content">
                                            <div className="team-two__name-box">
                                                <h3 className="team-two__name"><Link href="team-details">Abral Asha</Link>
                                                </h3>
                                                <p className="team-two__sub-title">Co-Founder</p>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                                <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                                <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide> 
                                <SwiperSlide> 
                                <div className="item">
                                    <div className="team-two__single">
                                        <div className="team-two__img-box">
                                            <div className="team-two__img">
                                                <img src="assets/images/team/team-2-3.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="team-two__content">
                                            <div className="team-two__name-box">
                                                <h3 className="team-two__name"><Link href="team-details">Alisha Martin</Link>
                                                </h3>
                                                <p className="team-two__sub-title">Co-Founder</p>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                                <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                                <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide> 
                                <SwiperSlide> 
                                <div className="item">
                                    <div className="team-two__single">
                                        <div className="team-two__img-box">
                                            <div className="team-two__img">
                                                <img src="assets/images/team/team-2-1.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="team-two__content">
                                            <div className="team-two__name-box">
                                                <h3 className="team-two__name"><Link href="team-details">Choi Ming Suk</Link>
                                                </h3>
                                                <p className="team-two__sub-title">Co-Founder</p>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                                <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                                <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide> 
                                <SwiperSlide> 
                                <div className="item">
                                    <div className="team-two__single">
                                        <div className="team-two__img-box">
                                            <div className="team-two__img">
                                                <img src="assets/images/team/team-2-2.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="team-two__content">
                                            <div className="team-two__name-box">
                                                <h3 className="team-two__name"><Link href="team-details">Abral Asha</Link>
                                                </h3>
                                                <p className="team-two__sub-title">Co-Founder</p>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                                <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                                <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide> 
                                <SwiperSlide> 
                                <div className="item">
                                    <div className="team-two__single">
                                        <div className="team-two__img-box">
                                            <div className="team-two__img">
                                                <img src="assets/images/team/team-2-3.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="team-two__content">
                                            <div className="team-two__name-box">
                                                <h3 className="team-two__name"><Link href="team-details">Alisha Martin</Link>
                                                </h3>
                                                <p className="team-two__sub-title">Co-Founder</p>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                                <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                                <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                            </div>
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
