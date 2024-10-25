import Link from "next/link"
export default function Portfolio() {
    return (
    <>
            
          
        <section className="portfolio-one">
            <div className="portfolio-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/portfolio-one-shape-1.png" alt=""/>
            </div>
            <div className="portfolio-one__shape-2 rotate-me">
                <img src="assets/images/shapes/portfolio-one-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">Latest CASE STUDIES</p>
                    </div>
                    <h2 className="section-title__title">We Are Specialist For Many <br/> Consulting Cases</h2>
                </div>
                <div className="row">
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="portfolio-one__single">
                            <div className="portfolio-one__img-box">
                                <div className="portfolio-one__img">
                                    <img src="assets/images/project/portfolio-1-1.jpg" alt=""/>
                                </div>
                                <div className="portfolio-one__content">
                                    <p className="portfolio-one__sub-title">Business Audit</p>
                                    <h3 className="portfolio-one__title"><Link href="portfolio-details">Printing And
                                            Industry</Link></h3>
                                </div>
                                <div className="portfolio-one__arrow">
                                    <Link href="assets/images/project/portfolio-1-1.jpg" className="img-popup"><span
                                            className="icon-top-right-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="200ms">
                        <div className="portfolio-one__single">
                            <div className="portfolio-one__img-box">
                                <div className="portfolio-one__img">
                                    <img src="assets/images/project/portfolio-1-2.jpg" alt=""/>
                                </div>
                                <div className="portfolio-one__content">
                                    <p className="portfolio-one__sub-title">Business Audit</p>
                                    <h3 className="portfolio-one__title"><Link href="portfolio-details">Our Business
                                            Growth</Link></h3>
                                </div>
                                <div className="portfolio-one__arrow">
                                    <Link href="assets/images/project/portfolio-1-2.jpg" className="img-popup"><span
                                            className="icon-top-right-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="portfolio-one__single">
                            <div className="portfolio-one__img-box">
                                <div className="portfolio-one__img">
                                    <img src="assets/images/project/portfolio-1-3.jpg" alt=""/>
                                </div>
                                <div className="portfolio-one__content">
                                    <p className="portfolio-one__sub-title">Business Audit</p>
                                    <h3 className="portfolio-one__title"><Link href="portfolio-details">Industry's
                                            Standard</Link></h3>
                                </div>
                                <div className="portfolio-one__arrow">
                                    <Link href="assets/images/project/portfolio-1-3.jpg" className="img-popup"><span
                                            className="icon-top-right-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="400ms">
                        <div className="portfolio-one__single">
                            <div className="portfolio-one__img-box">
                                <div className="portfolio-one__img">
                                    <img src="assets/images/project/portfolio-1-4.jpg" alt=""/>
                                </div>
                                <div className="portfolio-one__content">
                                    <p className="portfolio-one__sub-title">Business Audit</p>
                                    <h3 className="portfolio-one__title"><Link href="portfolio-details">Business
                                            Consulting</Link></h3>
                                </div>
                                <div className="portfolio-one__arrow">
                                    <Link href="assets/images/project/portfolio-1-4.jpg" className="img-popup"><span
                                            className="icon-top-right-1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="portfolio-one__btn-box">
                    <Link href="portfolio" className="portfolio-one__btn thm-btn">See All Project</Link>
                </div>
            </div>
        </section>
        
        </>
    )
}
