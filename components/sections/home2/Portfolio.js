import Link from "next/link"
export default function Portfolio() {
    return (
    <>
           
        <section className="portfolio-two">
            <div className="portfolio-two__shape-1 float-bob-y">
                <img src="assets/images/shapes/portfolio-two-shape-1.png" alt=""/>
            </div>
            <div className="portfolio-two__shape-2 img-bounce">
                <img src="assets/images/shapes/portfolio-two-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <h3 className="section__title-two">our consulting case study</h3>
                <div className="row">
                   
                    <div className="col-xl-8 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="portfolio-two__single">
                            <div className="portfolio-two__img-box">
                                <div className="portfolio-two__img">
                                    <img src="assets/images/project/portfolio-2-1.jpg" alt=""/>
                                </div>
                                <div className="portfolio-two__content">
                                    <div className="portfolio-two__title-box">
                                        <h3 className="portfolio-two__title"><Link href="portfolio-details">Business
                                                Growth</Link></h3>
                                        <p className="portfolio-two__sub-title">Business Audit</p>
                                    </div>
                                    <div className="portfolio-two__arrow">
                                        <Link href="assets/images/project/portfolio-2-1.jpg" className="img-popup"><span
                                                className="icon-top-right-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="portfolio-two__single">
                            <div className="portfolio-two__img-box">
                                <div className="portfolio-two__img">
                                    <img src="assets/images/project/portfolio-2-2.jpg" alt=""/>
                                </div>
                                <div className="portfolio-two__content">
                                    <div className="portfolio-two__title-box">
                                        <h3 className="portfolio-two__title"><Link href="portfolio-details">Financial
                                                Advices</Link></h3>
                                        <p className="portfolio-two__sub-title">Business Audit</p>
                                    </div>
                                    <div className="portfolio-two__arrow">
                                        <Link href="assets/images/project/portfolio-2-2.jpg" className="img-popup"><span
                                                className="icon-top-right-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="portfolio-two__single">
                            <div className="portfolio-two__img-box">
                                <div className="portfolio-two__img">
                                    <img src="assets/images/project/portfolio-2-3.jpg" alt=""/>
                                </div>
                                <div className="portfolio-two__content">
                                    <div className="portfolio-two__title-box">
                                        <h3 className="portfolio-two__title"><Link href="portfolio-details">Tax
                                                Strategy</Link></h3>
                                        <p className="portfolio-two__sub-title">Business Audit</p>
                                    </div>
                                    <div className="portfolio-two__arrow">
                                        <Link href="assets/images/project/portfolio-2-3.jpg" className="img-popup"><span
                                                className="icon-top-right-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="portfolio-two__single">
                            <div className="portfolio-two__img-box">
                                <div className="portfolio-two__img">
                                    <img src="assets/images/project/portfolio-2-4.jpg" alt=""/>
                                </div>
                                <div className="portfolio-two__content">
                                    <div className="portfolio-two__title-box">
                                        <h3 className="portfolio-two__title"><Link href="portfolio-details">Consultation
                                                Experts</Link></h3>
                                        <p className="portfolio-two__sub-title">Business Audit</p>
                                    </div>
                                    <div className="portfolio-two__arrow">
                                        <Link href="assets/images/project/portfolio-2-4.jpg" className="img-popup"><span
                                                className="icon-top-right-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="portfolio-two__single">
                            <div className="portfolio-two__img-box">
                                <div className="portfolio-two__img">
                                    <img src="assets/images/project/portfolio-2-5.jpg" alt=""/>
                                </div>
                                <div className="portfolio-two__content">
                                    <div className="portfolio-two__title-box">
                                        <h3 className="portfolio-two__title"><Link href="portfolio-details">Identifying
                                                Problems</Link></h3>
                                        <p className="portfolio-two__sub-title">Business Audit</p>
                                    </div>
                                    <div className="portfolio-two__arrow">
                                        <Link href="assets/images/project/portfolio-2-5.jpg" className="img-popup"><span
                                                className="icon-top-right-1"></span></Link>
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
