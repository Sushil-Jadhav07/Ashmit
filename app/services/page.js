'use client'

// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Our services">
                {/*Services Page Start*/}
                    <section className="services-page">
                        <div className="container">
                            <div className="row">
                                {/*Services Page Single Start*/}
                                <div className="col-xl-4 col-lg-6 col-md-6">
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
                                {/*Services Page Single End*/}
                                {/*Services Page Single Start*/}
                                <div className="col-xl-4 col-lg-6 col-md-6">
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
                                {/*Services Page Single End*/}
                                {/*Services Page Single Start*/}
                                <div className="col-xl-4 col-lg-6 col-md-6">
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
                                {/*Services Page Single End*/}
                                {/*Services Page Single Start*/}
                                <div className="col-xl-4 col-lg-6 col-md-6">
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
                                {/*Services Page Single End*/}
                                {/*Services Page Single Start*/}
                                <div className="col-xl-4 col-lg-6 col-md-6">
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
                                {/*Services Page Single End*/}
                                {/*Services Page Single Start*/}
                                <div className="col-xl-4 col-lg-6 col-md-6">
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
                                {/*Services Page Single End*/}
                            </div>
                        </div>
                    </section>
                    {/*Services Page End*/}

                    {/*Process One Start */}
                    <section className="process-one process-three">
                        <div className="container">
                            <h3 className="section__title-two">Our Work process</h3>
                            <div className="process-one__inner">
                                <div className="process-one__shape-1">
                                    <img src="assets/images/shapes/process-one-shape-1.png" alt=""/>
                                </div>
                                <div className="row">
                                    {/*Process One Single Start*/}
                                    <div className="col-xl-3 col-lg-6 col-md-6">
                                        <div className="process-one__single">
                                            <div className="process-one__count"></div>
                                            <h3 className="process-one__title">Identifying Problems</h3>
                                            <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                                eiusmod
                                                ut<br/>
                                                dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    {/*Process One Single End*/}
                                    {/*Process One Single Start*/}
                                    <div className="col-xl-3 col-lg-6 col-md-6">
                                        <div className="process-one__single">
                                            <div className="process-one__count"></div>
                                            <h3 className="process-one__title">Research Your Problem</h3>
                                            <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                                eiusmod
                                                ut<br/>
                                                dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    {/*Process One Single End*/}
                                    {/*Process One Single Start*/}
                                    <div className="col-xl-3 col-lg-6 col-md-6">
                                        <div className="process-one__single">
                                            <div className="process-one__count"></div>
                                            <h3 className="process-one__title">Solutions Your Problem</h3>
                                            <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                                eiusmod
                                                ut<br/>
                                                dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    {/*Process One Single End*/}
                                    {/*Process One Single Start*/}
                                    <div className="col-xl-3 col-lg-6 col-md-6">
                                        <div className="process-one__single">
                                            <div className="process-one__count"></div>
                                            <h3 className="process-one__title">Consultation With Experts</h3>
                                            <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                                eiusmod
                                                ut<br/>
                                                dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    {/*Process One Single End*/}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Process One End */}

                    {/*Appointment One Start*/}
                    <section className="appointment-one">
                        <div className="appointment-one__inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-5">
                                        <div className="appointment-one__left">
                                            <h3 className="appointment-one__title">Book a Appointment</h3>
                                            <p className="appointment-one__text">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="appointment-one__right">
                                            <div className="appointment-one__form-box">
                                                <form action="assets/inc/sendemail.php"
                                                    className="appointment-one__form contact-form-validated" >
                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="appointment-one__input-box">
                                                                <h3 className="appointment-one__input-title">Name *</h3>
                                                                <input type="text" placeholder="" name="name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="appointment-one__input-box">
                                                                <h3 className="appointment-one__input-title">Service Type</h3>
                                                                <div className="appointment-one__showing-sort">
                                                                    <select className="selectpicker"
                                                                        aria-label="Default select example">
                                                                        <option>Select ...</option>
                                                                        <option value="1">Sort by popular-01</option>
                                                                        <option value="2">Sort by popular-02</option>
                                                                        <option value="3">Sort by popular-03</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="appointment-one__input-box">
                                                                <h3 className="appointment-one__input-title">Email *</h3>
                                                                <input type="email" placeholder="e.g:" name="email"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="appointment-one__input-box text-message-box">
                                                                <h3 className="appointment-one__input-title">Message
                                                                    <span>(Oprional)</span></h3>
                                                                <textarea name="message" placeholder="Type here..."></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="appointment-one__input-box appointment-one__input-box-2">
                                                                <h3 className="appointment-one__input-title">Phone Number *</h3>
                                                                <input type="text" placeholder="+1 (00)" name="email"/>
                                                            </div>
                                                            <div className="appointment-one__btn-box">
                                                                <button type="submit"
                                                                    className="thm-btn appointment-one__btn">Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="result"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Appointment One End*/}

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
                                </Swiper>
                                {/* If we need navigation buttons */}
                            </div>
                        </div>
                    </section>
                    {/*Brand Three End*/}


            </Layout>
        </>
    )
}