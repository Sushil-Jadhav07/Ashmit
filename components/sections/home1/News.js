import Link from "next/link"
export default function News() {
    return (
        <>
           
        <section className="news-one">
            <div className="news-one__shape-1 img-bounce">
                <img src="assets/images/shapes/news-one-shape-1.png" alt=""/>
            </div>
            <div className="news-one__shape-2 float-bob-y">
                <img src="assets/images/shapes/news-one-shape-2.png" alt=""/>
            </div>
            <div className="news-one__shape-3 rotate-me">
                <img src="assets/images/shapes/news-one-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">Latest Blog</p>
                    </div>
                    <h2 className="section-title__title">Learn about our latest <br/> news from blog.</h2>
                </div>
                <div className="row">
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="news-one__single">
                            <div className="news-one__img-box">
                                <div className="news-one__img">
                                    <img src="assets/images/blog/news-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="news-one__content">
                                <div className="news-one__content-top">
                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                    <h3 className="news-one__title"><Link href="news-details">We would love to share a
                                            similar
                                            experience</Link></h3>
                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing and
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
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="news-one__single">
                            <div className="news-one__img-box">
                                <div className="news-one__img">
                                    <img src="assets/images/blog/news-1-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="news-one__content">
                                <div className="news-one__content-top">
                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                    <h3 className="news-one__title"><Link href="news-details">What activities are done in
                                            the development?</Link></h3>
                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing and
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
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="news-one__single">
                            <div className="news-one__img-box">
                                <div className="news-one__img">
                                    <img src="assets/images/blog/news-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="news-one__content">
                                <div className="news-one__content-top">
                                    <p className="news-one__sub-title">INBOUND MARketing</p>
                                    <h3 className="news-one__title"><Link href="news-details">What is the most important
                                            thing in a designing?</Link></h3>
                                    <p className="news-one__text">Lorem Ipsum is simply dummy text of the printing and
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
                    
                </div>
            </div>
        </section>
        
        </>
    )
}
