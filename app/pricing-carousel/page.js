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
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Pricing">
            {/*Price Page Start*/}
                <section className="pricing-carousel-page">
                    <div className="container">
                    <Swiper {...swiperOptions} className="pricing-carousel thm-owl__carousel owl-theme owl-carousel carousel-dot-style"
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
                            {/*Pricing Page Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__most-popular">
                                            <p>Most Popular</p>
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-title">Basic Plan</p>
                                            <h3 className="pricing-one__price">$15<span>/montly</span></h3>
                                            <p className="pricing-one__text">Popularised in the follower with
                                                the etraset sheets containing.</p>
                                        </div>
                                        <ul className="list-unstyled pricing-one__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Powerful Admin Panel
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>3 Native Android App</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Multi-Language Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Support via E-mail and Phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Pricing Page Single End*/}
                            {/*Pricing Page Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="pricing-one__single pricing-one__single-2">
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__most-popular">
                                            <p>Most Popular</p>
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-title">Standard Plan</p>
                                            <h3 className="pricing-one__price">$39<span>/montly</span></h3>
                                            <p className="pricing-one__text">Popularised in the follower with
                                                the etraset sheets containing.</p>
                                        </div>
                                        <ul className="list-unstyled pricing-one__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Powerful Admin Panel
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>3 Native Android App</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Multi-Language Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Support via E-mail and Phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Pricing Page Single End*/}
                            {/*Pricing Page Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="pricing-one__single pricing-one__single-3">
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__most-popular">
                                            <p>Most Popular</p>
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-title">Premium Plan</p>
                                            <h3 className="pricing-one__price">$59<span>/montly</span></h3>
                                            <p className="pricing-one__text">Popularised in the follower with
                                                the etraset sheets containing.</p>
                                        </div>
                                        <ul className="list-unstyled pricing-one__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Powerful Admin Panel
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>3 Native Android App</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Multi-Language Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Support via E-mail and Phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Pricing Page Single End*/}
                            {/*Pricing Page Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__most-popular">
                                            <p>Most Popular</p>
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-title">Basic Plan</p>
                                            <h3 className="pricing-one__price">$15<span>/montly</span></h3>
                                            <p className="pricing-one__text">Popularised in the follower with
                                                the etraset sheets containing.</p>
                                        </div>
                                        <ul className="list-unstyled pricing-one__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Powerful Admin Panel
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>3 Native Android App</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Multi-Language Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Support via E-mail and Phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Pricing Page Single End*/}
                            {/*Pricing Page Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="pricing-one__single pricing-one__single-2">
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__most-popular">
                                            <p>Most Popular</p>
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-title">Standard Plan</p>
                                            <h3 className="pricing-one__price">$39<span>/montly</span></h3>
                                            <p className="pricing-one__text">Popularised in the follower with
                                                the etraset sheets containing.</p>
                                        </div>
                                        <ul className="list-unstyled pricing-one__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Powerful Admin Panel
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>3 Native Android App</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Multi-Language Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Support via E-mail and Phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Pricing Page Single End*/}
                            {/*Pricing Page Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="pricing-one__single pricing-one__single-3">
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__most-popular">
                                            <p>Most Popular</p>
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-title">Premium Plan</p>
                                            <h3 className="pricing-one__price">$59<span>/montly</span></h3>
                                            <p className="pricing-one__text">Popularised in the follower with
                                                the etraset sheets containing.</p>
                                        </div>
                                        <ul className="list-unstyled pricing-one__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Powerful Admin Panel
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>3 Native Android App</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Multi-Language Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Support via E-mail and Phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Pricing Page Single End*/}
                            {/*Pricing Page Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__most-popular">
                                            <p>Most Popular</p>
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-title">Basic Plan</p>
                                            <h3 className="pricing-one__price">$15<span>/montly</span></h3>
                                            <p className="pricing-one__text">Popularised in the follower with
                                                the etraset sheets containing.</p>
                                        </div>
                                        <ul className="list-unstyled pricing-one__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Powerful Admin Panel
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>3 Native Android App</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Multi-Language Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Support via E-mail and Phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Pricing Page Single End*/}
                            {/*Pricing Page Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="pricing-one__single pricing-one__single-2">
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__most-popular">
                                            <p>Most Popular</p>
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-title">Standard Plan</p>
                                            <h3 className="pricing-one__price">$39<span>/montly</span></h3>
                                            <p className="pricing-one__text">Popularised in the follower with
                                                the etraset sheets containing.</p>
                                        </div>
                                        <ul className="list-unstyled pricing-one__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Powerful Admin Panel
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>3 Native Android App</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Multi-Language Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Support via E-mail and Phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            {/*Pricing Page Single End*/}
                            {/*Pricing Page Single Start*/}
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="item">
                                <div className="pricing-one__single pricing-one__single-3">
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__most-popular">
                                            <p>Most Popular</p>
                                        </div>
                                        <div className="pricing-one__price-box">
                                            <p className="pricing-one__price-title">Premium Plan</p>
                                            <h3 className="pricing-one__price">$59<span>/montly</span></h3>
                                            <p className="pricing-one__text">Popularised in the follower with
                                                the etraset sheets containing.</p>
                                        </div>
                                        <ul className="list-unstyled pricing-one__points-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Powerful Admin Panel
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>3 Native Android App</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Multi-Language Support</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check"></i>
                                                </div>
                                                <div className="text">
                                                    <p>Support via E-mail and Phone</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pricing-one__btn-box">
                                            <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Pricing Page Single End*/}
                        </Swiper> 
                    </div>
                </section>
                {/*Price Page End*/}  

            </Layout>
        </>
    )
}