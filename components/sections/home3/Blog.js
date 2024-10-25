import Link from "next/link"
export default function Blog() {
    return (
        <>
          
        <section className="news-three">
            <div className="news-three__shape-1 img-bounce">
                <img src="assets/images/shapes/news-three-shape-1.png" alt=""/>
            </div>
            <div className="news-three__shape-2 float-bob-y">
                <img src="assets/images/shapes/news-three-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title-three text-center">
                    <div className="section-title-three__tagline-box">
                        <p className="section-title-three__tagline">Latest Blog</p>
                    </div>
                    <h2 className="section-title-three__title">Learn about our latest<br/> news from blog.</h2>
                </div>
                <div className="row">
                   
                    <div className="col-xl-4 col-lg-4">
                        <div className="news-three__single">
                            <div className="news-three__img-box">
                                <div className="news-three__img">
                                    <img src="assets/images/blog/news-3-1.jpg" alt=""/>
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
                                <h3 className="news-three__title"><Link href="news-details">We would love to share a
                                        similar experience</Link></h3>
                                <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.</p>
                                <div className="news-three__btn">
                                    <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4">
                        <div className="news-three__single">
                            <div className="news-three__img-box">
                                <div className="news-three__img">
                                    <img src="assets/images/blog/news-3-2.jpg" alt=""/>
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
                                <h3 className="news-three__title"><Link href="news-details">Ipsum is simply dummy text of
                                        the printing</Link></h3>
                                <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.</p>
                                <div className="news-three__btn">
                                    <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4">
                        <div className="news-three__single">
                            <div className="news-three__img-box">
                                <div className="news-three__img">
                                    <img src="assets/images/blog/news-3-3.jpg" alt=""/>
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
                                <h3 className="news-three__title"><Link href="news-details">Simply dummy text of the
                                        printing and
                                        typesetting</Link></h3>
                                <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.</p>
                                <div className="news-three__btn">
                                    <Link href="news-details">Learn More<span className="icon-right-arrow1"></span></Link>
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
