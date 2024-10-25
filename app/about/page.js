'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BrandSlider from '@/components/slider/BrandSlider'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

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
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="About company">
            
            {/*About Two Start */}
            <section className="about-two">
                <div className="about-two__shape-2 zoominout">
                    <img src="assets/images/shapes/about-two-shape-2.png" alt=""/>
                </div>
                <div className="about-two__shape-3 float-bob-y">
                    <img src="assets/images/shapes/about-two-shape-3.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-two__left">
                                <h3 className="about-two__title">We help to get Solutions!</h3>
                                <p className="about-two__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer.</p>
                                <p className="about-two__text-2">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <ul className="about-two__points list-unstyled">
                                    <li>
                                        <div className="about-two__count count-box">
                                            <h3>10</h3>
                                        </div>
                                        <p>Years Of <br/> Experience</p>
                                    </li>
                                    <li>
                                        <div className="about-two__count count-box">
                                            <h3>8</h3>
                                            <span>k</span>
                                        </div>
                                        <p>Completed <br/> project</p>
                                    </li>
                                </ul>
                                <div className="about-two__btn-box">
                                    <Link href="about" className="about-two__btn thm-btn-two">Learn About Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-two__right">
                                <div className="about-two__img wow slideInRight" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <div className="about-two__shape-1 img-bounce">
                                        <img src="assets/images/shapes/about-two-shape-1.png" alt=""/>
                                    </div>
                                    <img src="assets/images/resources/about-two-img-1.jpg" alt=""/>
                                    <div className="about-two__video-link">
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="about-two__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Two End */}

            {/*Process One Start */}
            <section className="process-one process-two">
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

            {/*Counter One Start */}
            <section className="counter-one">
                <div className="container">
                    <div className="counter-one__inner">
                        <div className="counter-one__bg float-bob-y"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/counter-one-bg.png)' }} ></div>
                        <ul className="counter-one__count-list list-unstyled">
                            <li>
                                <div className="counter-one__icon">
                                    <span className="icon-icon-years-experience"></span>
                                </div>
                                <div className="counter-one__count count-box">
                                <CounterUp end={10} />
                                </div>
                                <p className="counter-one__text">Years of Experience</p>
                            </li>
                            <li>
                                <div className="counter-one__icon">
                                    <span className="icon-icon-team-members"></span>
                                </div>
                                <div className="counter-one__count count-box">
                                <CounterUp end={89} />
                                </div>
                                <p className="counter-one__text">Team members</p>
                            </li>
                            <li>
                                <div className="counter-one__icon">
                                    <span className="icon-icon-successful-project"></span>
                                </div>
                                <div className="counter-one__count count-box">
                                    <CounterUp end={789} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Successful Projects</p>
                            </li>
                            <li>
                                <div className="counter-one__icon">
                                    <span className="icon-icon-satisfied-clients"></span>
                                </div>
                                <div className="counter-one__count count-box">
                                <CounterUp end={650} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Satisfied Clients</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*Counter One End */}

            {/*Team Four Start*/}
            <section className="team-four">
                <div className="team-four__shape-1 shape-mover">
                    <img src="assets/images/shapes/team-four-shape-1.png" alt=""/>
                </div>
                <div className="team-four__shape-2 zoominout">
                    <img src="assets/images/shapes/team-four-shape-2.png" alt=""/>
                </div>
                <div className="container">
                    <h3 className="section__title-two">Meet Our Experts</h3>
                    <div className="row">
                        {/*Team Four SIngle Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="team-four__single">
                                <div className="team-four__img-box">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-1-1.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <h3 className="team-four__name"><Link href="team-details">Aiyan Sakla</Link></h3>
                                        <p className="team-four__sub-title">Founder and CEO</p>
                                    </div>
                                    <div className="team-four__social">
                                        <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                        <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                        <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                        <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Team Four SIngle End*/}
                        {/*Team Four SIngle Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="team-four__single">
                                <div className="team-four__img-box">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <h3 className="team-four__name"><Link href="team-details">Susan Sarandom</Link></h3>
                                        <p className="team-four__sub-title">Founder and CEO</p>
                                    </div>
                                    <div className="team-four__social">
                                        <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                        <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                        <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                        <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Team Four SIngle End*/}
                        {/*Team Four SIngle Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="300ms">
                            <div className="team-four__single">
                                <div className="team-four__img-box">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-1-3.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <h3 className="team-four__name"><Link href="team-details">Jacika Brown</Link></h3>
                                        <p className="team-four__sub-title">Founder and CEO</p>
                                    </div>
                                    <div className="team-four__social">
                                        <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                        <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                        <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                        <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Team Four SIngle End*/}
                        {/*Team Four SIngle Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                            <div className="team-four__single">
                                <div className="team-four__img-box">
                                    <div className="team-four__img">
                                        <img src="assets/images/team/team-1-4.jpg" alt=""/>
                                    </div>
                                    <div className="team-four__content">
                                        <h3 className="team-four__name"><Link href="team-details">Alisha Martin</Link></h3>
                                        <p className="team-four__sub-title">Founder and CEO</p>
                                    </div>
                                    <div className="team-four__social">
                                        <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                        <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                        <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                        <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Team Four SIngle End*/}
                    </div>
                    <div className="team-four__btn-box">
                        <Link href="team" className="team-four__btn thm-btn">View All<span
                                className="icon-right-arrow1"></span></Link>
                    </div>
                </div>
            </section>
            {/*Team Four End*/}

            {/*Testimonial Two Start */}
            <section className="testimonial-two testimonial-four">
                <div className="container">
                    <h3 className="section__title-two">People talking about us</h3>
                    <div className="testimonial-two__bottom">
                    <Swiper {...swiperOptions} className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel">

                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__client-img">
                                    <img src="assets/images/testimonial/testimonial-2-1.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <h3>Jacob Jones</h3>
                                    <p>CEO & Co-Founder</p>
                                </div>
                                <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                    saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry."</p>
                                <div className="testimonial-two__ratting">
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__client-img">
                                    <img src="assets/images/testimonial/testimonial-2-2.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <h3>Devon Lane</h3>
                                    <p>CEO & Co-Founder</p>
                                </div>
                                <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                    saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry."</p>
                                <div className="testimonial-two__ratting">
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__client-img">
                                    <img src="assets/images/testimonial/testimonial-2-3.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <h3>Chieko Chute</h3>
                                    <p>CEO & Co-Founder</p>
                                </div>
                                <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                    saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry."</p>
                                <div className="testimonial-two__ratting">
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            <SwiperSlide> 
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__client-img">
                                    <img src="assets/images/testimonial/testimonial-2-2.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <h3>Devon Lane</h3>
                                    <p>CEO & Co-Founder</p>
                                </div>
                                <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                    saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry."</p>
                                <div className="testimonial-two__ratting">
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start */}
                            <SwiperSlide> 
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__client-img">
                                    <img src="assets/images/testimonial/testimonial-2-3.jpg" alt=""/>
                                </div>
                                <div className="testimonial-two__client-info">
                                    <h3>Chieko Chute</h3>
                                    <p>CEO & Co-Founder</p>
                                </div>
                                <p className="testimonial-two__text">"I am really satisfied with it. I'm good to go. It really
                                    saves me time and effort. Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry."</p>
                                <div className="testimonial-two__ratting">
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                    <span className="icon-star-1"></span>
                                </div>
                            </div>
                            </SwiperSlide> 
                            {/*Testimonial Two Single End*/}
                        </Swiper> 
                    </div>
                </div>
            </section>
            {/*Testimonial Two End */}

            {/*Brand Three Start*/}
            <section className="brand-one brand-three">
                <div className="container">
                    <div className="brand-one__inner">
                        <BrandSlider/> 
                    </div>
                </div>
            </section>
            {/*Brand Three End*/}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </Layout>
        </>
    )
}


