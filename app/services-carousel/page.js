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
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Services Carousel">

        {/*Services Page Start*/}
        <section className="services-carousel-page">
            <div className="container">
                <Swiper {...swiperOptions} className="services-carousel thm-owl__carousel owl-theme owl-carousel carousel-dot-style">
                    {/*Services Page Single Start*/}
                    <SwiperSlide>
                    <div className="item">
                        <div className="services-page__single">
                            <h3 className="services-page__title"><Link href="business-audit">Business Audit</Link></h3>
                            <div className="services-page__icon">
                                <span className="icon-report"></span>
                            </div>
                            <p className="services-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="services-page__btn">
                                <Link href="business-audit">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/*Services Page Single End*/}
                    {/*Services Page Single Start*/}
                    <SwiperSlide>
                    <div className="item">
                        <div className="services-page__single">
                            <h3 className="services-page__title"><Link href="business-planning">Business Planning</Link></h3>
                            <div className="services-page__icon">
                                <span className="icon-planning"></span>
                            </div>
                            <p className="services-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="services-page__btn">
                                <Link href="business-planning">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/*Services Page Single End*/}
                    {/*Services Page Single Start*/}
                    <SwiperSlide>
                    <div className="item">
                        <div className="services-page__single">
                            <h3 className="services-page__title"><Link href="financial-advices">Financial Advices</Link></h3>
                            <div className="services-page__icon">
                                <span className="icon-financial-advices11"></span>
                            </div>
                            <p className="services-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="services-page__btn">
                                <Link href="financial-advices">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/*Services Page Single End*/}
                    {/*Services Page Single Start*/}
                    <SwiperSlide>
                    <div className="item">
                        <div className="services-page__single">
                            <h3 className="services-page__title"><Link href="tax-strategy">Tax Strategy</Link></h3>
                            <div className="services-page__icon">
                                <span className="icon-tax-strategy11"></span>
                            </div>
                            <p className="services-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="services-page__btn">
                                <Link href="tax-strategy">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/*Services Page Single End*/}
                    {/*Services Page Single Start*/}
                    <SwiperSlide>
                    <div className="item">
                        <div className="services-page__single">
                            <h3 className="services-page__title"><Link href="insurance-strategy">Insurance Strategy</Link>
                            </h3>
                            <div className="services-page__icon">
                                <span className="icon-icon-insurance-strategy"></span>
                            </div>
                            <p className="services-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="services-page__btn">
                                <Link href="insurance-strategy">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/*Services Page Single End*/}
                    {/*Services Page Single Start*/}
                    <SwiperSlide>
                    <div className="item">
                        <div className="services-page__single">
                            <h3 className="services-page__title"><Link href="start-ups">Start Ups</Link></h3>
                            <div className="services-page__icon">
                                <span className="icon-icon-start-ups"></span>
                            </div>
                            <p className="services-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="services-page__btn">
                                <Link href="start-ups">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/*Services Page Single End*/}
                    {/*Services Page Single Start*/}
                    <SwiperSlide>
                    <div className="item">
                        <div className="services-page__single">
                            <h3 className="services-page__title"><Link href="business-audit">Business Audit</Link></h3>
                            <div className="services-page__icon">
                                <span className="icon-report"></span>
                            </div>
                            <p className="services-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="services-page__btn">
                                <Link href="business-audit">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/*Services Page Single End*/}
                    {/*Services Page Single Start*/}
                    <SwiperSlide>
                    <div className="item">
                        <div className="services-page__single">
                            <h3 className="services-page__title"><Link href="business-planning">Business Planning</Link></h3>
                            <div className="services-page__icon">
                                <span className="icon-planning"></span>
                            </div>
                            <p className="services-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="services-page__btn">
                                <Link href="business-planning">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/*Services Page Single End*/}
                    {/*Services Page Single Start*/}
                    <SwiperSlide>
                    <div className="item">
                        <div className="services-page__single">
                            <h3 className="services-page__title"><Link href="financial-advices">Financial Advices</Link></h3>
                            <div className="services-page__icon">
                                <span className="icon-financial-advices11"></span>
                            </div>
                            <p className="services-page__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="services-page__btn">
                                <Link href="financial-advices">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    {/*Services Page Single End*/}
                </Swiper>
            </div>
        </section>
        {/*Services Page End*/}


            </Layout>
        </>
    )
}