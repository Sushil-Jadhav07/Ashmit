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
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Team Carousel">
                {/*Team Page Start*/}
                <section className="team-carousel-page">
                    <div className="container">
                        <Swiper {...swiperOptions} className="team-carousel thm-owl__carousel owl-theme owl-carousel carousel-dot-style">
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Airiya Khanom</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Susan Sarandom</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Naira Habek</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-4.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Robert Golbe</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-5.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Harbert Spenser</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-6.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Harlin Monak</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-7.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Abral Shaha</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-8.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">FOkrul Mona</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-9.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Maisha Kabir</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-10.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Aiyan Sakla</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-11.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Nabila Nur</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                            {/*Team One SIngle Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <img src="assets/images/team/team-page-1-12.jpg" alt=""/>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__name"><Link href="team-details">Aira Sakira</Link></h3>
                                            <p className="team-one__sub-title">Founder and CEO</p>
                                        </div>
                                        <div className="team-one__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team One SIngle End*/}
                        </Swiper>
                    </div>
                </section>
                {/*Team Page End*/}

            </Layout>
        </>
    )
}