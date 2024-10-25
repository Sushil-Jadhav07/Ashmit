'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
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
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle=" News Carousel">
                
            
                <section className="news-carousel-page">
                    <div className="container">
                    <Swiper {...swiperOptions} className="news-carousel thm-owl__carousel owl-theme owl-carousel carousel-dot-style">
                            <SwiperSlide> 
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">We would love to
                                                share a
                                                similar experience</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>  
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">Ipsum is simply
                                                dummy text of
                                                the printing</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">Simply dummy text
                                                of the
                                                printing and
                                                typesetting</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-4.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">Quis nostrud
                                                exercitation ullamco laboris nisi</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-5.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">Ut aliquip ex ea
                                                commodo consequat.</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-6.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">Duis
                                                aute irure dolor in reprehenderit</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-7.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">In voluptate velit
                                                esse cillum dolore</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-8.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">Velit esse cillum
                                                dolore eu fugiat
                                                nulla</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-9.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">Reprehenderit in
                                                voluptate velit esse cillum</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="item">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-10.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">Irure dolor in
                                                reprehenderit in voluptate velit esse</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                        </div>
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