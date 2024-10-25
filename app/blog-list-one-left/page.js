
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="News List One Left">
           
                <section className="news-page news-list-one-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar sidebar--two">
                                    <div className="sidebar__single sidebar__search">
                                        <div className="sidebar__title-box">
                                            <h3 className="sidebar__title">Search Here</h3>
                                        </div>
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Enter Keyword"/>
                                            <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                    <div className="sidebar__single sidebar__category">
                                        <div className="sidebar__title-box">
                                            <h3 className="sidebar__title">Categories</h3>
                                        </div>
                                        <ul className="sidebar__category-list list-unstyled">
                                            <li>
                                                <Link href="news-details">Business Consulting<span
                                                        className="icon-right-arrow1"></span></Link>
                                            </li>
                                            <li>
                                                <Link href="news-details">Strategy Growth<span
                                                        className="icon-right-arrow1"></span></Link>
                                            </li>
                                            <li>
                                                <Link href="news-details">Finance Solutions<span
                                                        className="icon-right-arrow1"></span></Link>
                                            </li>
                                            <li>
                                                <Link href="news-details">Text Management<span
                                                        className="icon-right-arrow1"></span></Link>
                                            </li>
                                            <li>
                                                <Link href="news-details">Investment<span
                                                        className="icon-right-arrow1"></span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__post">
                                        <div className="sidebar__title-box">
                                            <h3 className="sidebar__title">Recent Post</h3>
                                        </div>
                                        <ul className="sidebar__post-list list-unstyled">
                                            <li>
                                                <div className="sidebar__post-image">
                                                    <img src="assets/images/blog/news-lp-1.jpg" alt=""/>
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h3 className="sidebar__post-title"><Link href="news-details">We would love to
                                                            share a similar experience</Link></h3>
                                                    <p className="sidebar__post-date"><span className="icon-time"></span>10 Oct, 2022
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image">
                                                    <img src="assets/images/blog/news-lp-2.jpg" alt=""/>
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h3 className="sidebar__post-title"><Link href="news-details">We would love to
                                                            share a similar experience</Link></h3>
                                                    <p className="sidebar__post-date"><span className="icon-time"></span>10 Oct, 2022
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image">
                                                    <img src="assets/images/blog/news-lp-3.jpg" alt=""/>
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h3 className="sidebar__post-title"><Link href="news-details">We would love to
                                                            share a similar experience</Link></h3>
                                                    <p className="sidebar__post-date"><span className="icon-time"></span>10 Oct, 2022
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image">
                                                    <img src="assets/images/blog/news-lp-4.jpg" alt=""/>
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h3 className="sidebar__post-title"><Link href="news-details">We would love to
                                                            share a similar experience</Link></h3>
                                                    <p className="sidebar__post-date"><span className="icon-time"></span>10 Oct, 2022
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__tag">
                                        <div className="sidebar__title-box">
                                            <h3 className="sidebar__title">Tags</h3>
                                        </div>
                                        <div className="sidebar__tag-list">
                                            <Link href="news-details">Business</Link>
                                            <Link href="news-details">Services</Link>
                                            <Link href="news-details">Solution</Link>
                                            <Link href="news-details">Finance</Link>
                                            <Link href="news-details">Technolagy</Link>
                                            <Link href="news-details">Strategy</Link>
                                            <Link href="news-details">UI/UX Design</Link>
                                            <Link href="news-details">Consulting</Link>
                                        </div>
                                    </div>
                                    <div className="sidebar__single sidebar__gallery">
                                        <div className="sidebar__title-box">
                                            <h3 className="sidebar__title">Gallery</h3>
                                        </div>
                                        <ul className="sidebar__gallery-list list-unstyled clearfix">
                                            <li>
                                                <div className="sidebar__gallery-img">
                                                    <img src="assets/images/blog/sitebar-gallery-img-1.jpg" alt=""/>
                                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__gallery-img">
                                                    <img src="assets/images/blog/sitebar-gallery-img-2.jpg" alt=""/>
                                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__gallery-img">
                                                    <img src="assets/images/blog/sitebar-gallery-img-3.jpg" alt=""/>
                                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__gallery-img">
                                                    <img src="assets/images/blog/sitebar-gallery-img-4.jpg" alt=""/>
                                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__gallery-img">
                                                    <img src="assets/images/blog/sitebar-gallery-img-5.jpg" alt=""/>
                                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__gallery-img">
                                                    <img src="assets/images/blog/sitebar-gallery-img-6.jpg" alt=""/>
                                                    <Link href="#"><span className="fab fa-instagram"></span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7">
                                <div className="news-page__left">
                                    <div className="row">
                                        
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="100ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="300ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="400ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="500ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="600ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="700ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="800ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="900ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="1000ms">
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
                                                        <Link href="news-details">Learn More<span
                                                                className="icon-right-arrow1"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className="portfolio-page__pagination">
                                        <ul className="pg-pagination list-unstyled">
                                            <li className="prev">
                                                <Link href="portfolio-details" aria-label="Prev"><i
                                                        className="fa fa-angle-left"></i></Link>
                                            </li>
                                            <li className="count"><Link href="portfolio-details">1</Link></li>
                                            <li className="count"><Link href="portfolio-details">2</Link></li>
                                            <li className="count"><Link href="portfolio-details">3</Link></li>
                                            <li className="next">
                                                <Link href="portfolio-details" aria-label="Next"><i
                                                        className="fa fa-angle-right"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        

            </Layout>
        </>
    )
}