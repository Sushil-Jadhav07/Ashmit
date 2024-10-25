
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="News Left">
                {/*News Left Start*/}
                <section className="news-left">
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
                                <div className="row">
                                    {/*News One Single Start*/}
                                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                                        <div className="news-one__single">
                                            <div className="news-one__img-box">
                                                <div className="news-one__img">
                                                    <img src="assets/images/blog/news-1-1.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="news-one__content">
                                                <div className="news-one__content-top">
                                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                                    <h3 className="news-one__title"><Link href="news-details">We would love to
                                                            share a
                                                            similar
                                                            experience</Link></h3>
                                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                        and
                                                        typesetting industry...</p>
                                                </div>
                                                <div className="news-one__person-and-date">
                                                    <div className="news-one__person">
                                                        <div className="news-one__person-img">
                                                            <img src="assets/images/blog/news-one-person-img.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-one__person-text">
                                                            <p>by John Carry on</p>
                                                        </div>
                                                    </div>
                                                    <div className="news-one__date">
                                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*News One Single End*/}
                                    {/*News One Single Start*/}
                                    <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="news-one__single">
                                            <div className="news-one__img-box">
                                                <div className="news-one__img">
                                                    <img src="assets/images/blog/news-1-2.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="news-one__content">
                                                <div className="news-one__content-top">
                                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                                    <h3 className="news-one__title"><Link href="news-details">What activities are
                                                            done in
                                                            the development?</Link></h3>
                                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                        and
                                                        typesetting industry...</p>
                                                </div>
                                                <div className="news-one__person-and-date">
                                                    <div className="news-one__person">
                                                        <div className="news-one__person-img">
                                                            <img src="assets/images/blog/news-one-person-img-2.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-one__person-text">
                                                            <p>by John Carry on</p>
                                                        </div>
                                                    </div>
                                                    <div className="news-one__date">
                                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*News One Single End*/}
                                    {/*News One Single Start*/}
                                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
                                        <div className="news-one__single">
                                            <div className="news-one__img-box">
                                                <div className="news-one__img">
                                                    <img src="assets/images/blog/news-1-3.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="news-one__content">
                                                <div className="news-one__content-top">
                                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                                    <h3 className="news-one__title"><Link href="news-details">What is the most
                                                            important
                                                            thing in a designing?</Link></h3>
                                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                        and
                                                        typesetting industry...</p>
                                                </div>
                                                <div className="news-one__person-and-date">
                                                    <div className="news-one__person">
                                                        <div className="news-one__person-img">
                                                            <img src="assets/images/blog/news-one-person-img-3.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-one__person-text">
                                                            <p>by John Carry on</p>
                                                        </div>
                                                    </div>
                                                    <div className="news-one__date">
                                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*News One Single End*/}
                                    {/*News One Single Start*/}
                                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="400ms">
                                        <div className="news-one__single">
                                            <div className="news-one__img-box">
                                                <div className="news-one__img">
                                                    <img src="assets/images/blog/news-1-4.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="news-one__content">
                                                <div className="news-one__content-top">
                                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                                    <h3 className="news-one__title"><Link href="news-details">We would love to
                                                            share a
                                                            similar
                                                            experience</Link></h3>
                                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                        and
                                                        typesetting industry...</p>
                                                </div>
                                                <div className="news-one__person-and-date">
                                                    <div className="news-one__person">
                                                        <div className="news-one__person-img">
                                                            <img src="assets/images/blog/news-one-person-img.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-one__person-text">
                                                            <p>by John Carry on</p>
                                                        </div>
                                                    </div>
                                                    <div className="news-one__date">
                                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*News One Single End*/}
                                    {/*News One Single Start*/}
                                    <div className="col-xl-6 wow fadeInUp" data-wow-delay="500ms">
                                        <div className="news-one__single">
                                            <div className="news-one__img-box">
                                                <div className="news-one__img">
                                                    <img src="assets/images/blog/news-1-5.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="news-one__content">
                                                <div className="news-one__content-top">
                                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                                    <h3 className="news-one__title"><Link href="news-details">What activities are
                                                            done in
                                                            the development?</Link></h3>
                                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                        and
                                                        typesetting industry...</p>
                                                </div>
                                                <div className="news-one__person-and-date">
                                                    <div className="news-one__person">
                                                        <div className="news-one__person-img">
                                                            <img src="assets/images/blog/news-one-person-img-2.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-one__person-text">
                                                            <p>by John Carry on</p>
                                                        </div>
                                                    </div>
                                                    <div className="news-one__date">
                                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*News One Single End*/}
                                    {/*News One Single Start*/}
                                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="600ms">
                                        <div className="news-one__single">
                                            <div className="news-one__img-box">
                                                <div className="news-one__img">
                                                    <img src="assets/images/blog/news-1-6.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="news-one__content">
                                                <div className="news-one__content-top">
                                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                                    <h3 className="news-one__title"><Link href="news-details">What is the most
                                                            important
                                                            thing in a designing?</Link></h3>
                                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                        and
                                                        typesetting industry...</p>
                                                </div>
                                                <div className="news-one__person-and-date">
                                                    <div className="news-one__person">
                                                        <div className="news-one__person-img">
                                                            <img src="assets/images/blog/news-one-person-img-3.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-one__person-text">
                                                            <p>by John Carry on</p>
                                                        </div>
                                                    </div>
                                                    <div className="news-one__date">
                                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*News One Single End*/}
                                    {/*News One Single Start*/}
                                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                                        <div className="news-one__single">
                                            <div className="news-one__img-box">
                                                <div className="news-one__img">
                                                    <img src="assets/images/blog/news-1-1.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="news-one__content">
                                                <div className="news-one__content-top">
                                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                                    <h3 className="news-one__title"><Link href="news-details">We would love to
                                                            share a
                                                            similar
                                                            experience</Link></h3>
                                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                        and
                                                        typesetting industry...</p>
                                                </div>
                                                <div className="news-one__person-and-date">
                                                    <div className="news-one__person">
                                                        <div className="news-one__person-img">
                                                            <img src="assets/images/blog/news-one-person-img.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-one__person-text">
                                                            <p>by John Carry on</p>
                                                        </div>
                                                    </div>
                                                    <div className="news-one__date">
                                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*News One Single End*/}
                                    {/*News One Single Start*/}
                                    <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="news-one__single">
                                            <div className="news-one__img-box">
                                                <div className="news-one__img">
                                                    <img src="assets/images/blog/news-1-2.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="news-one__content">
                                                <div className="news-one__content-top">
                                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                                    <h3 className="news-one__title"><Link href="news-details">What activities are
                                                            done in
                                                            the development?</Link></h3>
                                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing
                                                        and
                                                        typesetting industry...</p>
                                                </div>
                                                <div className="news-one__person-and-date">
                                                    <div className="news-one__person">
                                                        <div className="news-one__person-img">
                                                            <img src="assets/images/blog/news-one-person-img-2.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-one__person-text">
                                                            <p>by John Carry on</p>
                                                        </div>
                                                    </div>
                                                    <div className="news-one__date">
                                                        <p><span className="icon-icon-calendar"></span>Oct 01, 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*News One Single End*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*News Left End*/}

            </Layout>
        </>
    )
}