import Link from "next/link"
export default function Service() {
    return (
        <>
        {/*Services One Start */}
        <section className="services-one">
            <div className="services-one__shape-3 zoominout">
                <img src="assets/images/shapes/services-one-shape-3.png" alt=""/>
            </div>
            <div className="services-one__shape-4 shape-mover">
                <img src="assets/images/shapes/services-one-shape-4.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">FEATURED SERVICES</p>
                    </div>
                    <h2 className="section-title__title">What services we provide to our <br/> customers business</h2>
                </div>
                <div className="row">
                     {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__single-hover-bg"
                                style={{ backgroundImage: 'url(assets/images/services/services-one-hover-img.jpg)' }} ></div>
                            <div className="services-one__icon">
                                <span className="icon-icon-business-audit"></span>
                                <div className="services-one__shape-1">
                                    <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
                                </div>
                                <div className="services-one__shape-2">
                                    <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="business-audit">Business Audit</Link></h3>
                                <p className="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div className="services-one__read-more">
                                    <Link href="business-audit">Learn More<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/*Services One Single End*/}
                     {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-one__single">
                            <div className="services-one__single-hover-bg"
                                style={{ backgroundImage: 'url(assets/images/services/services-one-hover-img.jpg)' }} ></div>
                            <div className="services-one__icon">
                                <span className="icon-icon-tax-strategy"></span>
                                <div className="services-one__shape-1">
                                    <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
                                </div>
                                <div className="services-one__shape-2">
                                    <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="tax-strategy">Tax Strategy</Link></h3>
                                <p className="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div className="services-one__read-more">
                                    <Link href="tax-strategy">Learn More<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/*Services One Single End*/}
                     {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__single-hover-bg"
                                style={{ backgroundImage: 'url(assets/images/services/services-one-hover-img.jpg)' }} ></div>
                            <div className="services-one__icon">
                                <span className="icon-financial-advice"></span>
                                <div className="services-one__shape-1">
                                    <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
                                </div>
                                <div className="services-one__shape-2">
                                    <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="financial-advices">Financial Advices</Link>
                                </h3>
                                <p className="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div className="services-one__read-more">
                                    <Link href="financial-advices">Learn More<span
                                            className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/*Services One Single End*/}
                     {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                        <div className="services-one__single">
                            <div className="services-one__single-hover-bg"
                                style={{ backgroundImage: 'url(assets/images/services/services-one-hover-img.jpg)' }} ></div>
                            <div className="services-one__icon">
                                <span className="icon-icon-insurance-strategy"></span>
                                <div className="services-one__shape-1">
                                    <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
                                </div>
                                <div className="services-one__shape-2">
                                    <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="insurance-strategy">Insurance Strategy</Link>
                                </h3>
                                <p className="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div className="services-one__read-more">
                                    <Link href="insurance-strategy">Learn More<span
                                            className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/*Services One Single End*/}
                     {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="services-one__single">
                            <div className="services-one__single-hover-bg"
                                style={{ backgroundImage: 'url(assets/images/services/services-one-hover-img.jpg)' }} ></div>
                            <div className="services-one__icon">
                                <span className="icon-icon-start-ups"></span>
                                <div className="services-one__shape-1">
                                    <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
                                </div>
                                <div className="services-one__shape-2">
                                    <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="start-ups">Start Ups</Link></h3>
                                <p className="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div className="services-one__read-more">
                                    <Link href="start-ups">Learn More<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/*Services One Single End*/}
                     {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="services-one__single">
                            <div className="services-one__single-hover-bg"
                                style={{ backgroundImage: 'url(assets/images/services/services-one-hover-img.jpg)' }} ></div>
                            <div className="services-one__icon">
                                <span className="icon-icon-manage-investment"></span>
                                <div className="services-one__shape-1">
                                    <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
                                </div>
                                <div className="services-one__shape-2">
                                    <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <h3 className="services-one__title"><Link href="tax-strategy">Manage Investment</Link>
                                </h3>
                                <p className="services-one__text">Lorem Ipsum is simply dummy text of the printing industry.
                                    The industry's standard dummy</p>
                                <div className="services-one__read-more">
                                    <Link href="tax-strategy">Learn More<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/*Services One Single End*/}
                </div>
            </div>
        </section>
         {/*Services One End */}
    
        </>
    )
}
