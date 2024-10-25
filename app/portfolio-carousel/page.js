'use client'
// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
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
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Portfolio Carousel">
           
            <section className="portfolio-carousel-page">
                <div className="container">
                <Swiper {...swiperOptions} className="portfolio-carousel thm-owl__carousel owl-theme owl-carousel carousel-dot-style"
                        data-owl-options='{
                        "items": 3,
                        "margin": 30,
                        "smartSpeed": 700,
                        "loop":true,
                        "autoplay": 6000,
                        "nav":false,
                        "dots":true,
                        "navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
                        "responsive":{
                            "0":{
                                "items":1
                            },
                            "768":{
                                "items":2
                            },
                            "992":{
                                "items": 3
                            }
                        }
                    }'>
                        <SwiperSlide> 
                        <div className="item">
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img src="assets/images/project/portfolio-page-1-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Business Audit</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Our Business
                                            Growth</Link></h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="item">
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img src="assets/images/project/portfolio-page-1-2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Business Audit</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Our Women’s
                                            Empowerment</Link></h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="item">
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img src="assets/images/project/portfolio-page-1-3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Business Audit</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Our Business
                                            Audit</Link></h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="item">
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img src="assets/images/project/portfolio-page-1-4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Business Audit</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Our Business
                                            Planning</Link></h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="item">
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img src="assets/images/project/portfolio-page-1-5.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Business Audit</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Our Financial
                                            Advices</Link></h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="item">
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img src="assets/images/project/portfolio-page-1-6.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Business Audit</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Our Tax Strategy</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="item">
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img src="assets/images/project/portfolio-page-1-7.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Business Audit</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Solutions Your
                                            Problem</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="item">
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img src="assets/images/project/portfolio-page-1-8.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Business Audit</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Identifying
                                            Problems</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> 
                        <SwiperSlide> 
                        <div className="item">
                            <div className="portfolio-three__single">
                                <div className="portfolio-three__img-box">
                                    <div className="portfolio-three__img">
                                        <img src="assets/images/project/portfolio-page-1-9.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="portfolio-three__content">
                                    <p className="portfolio-three__sub-title">Business Audit</p>
                                    <h3 className="portfolio-three__title"><Link href="portfolio-details">Research Your
                                            Problem</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> 
                    </Swiper> 
                </div>
            </section>
        

            </Layout>
        </>
    )
}