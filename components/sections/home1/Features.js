import Link from "next/link"


export default function Features() {
    return (
        <>
        {/*Feature One Start */}
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="feature-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">FEATURES</p>
                                </div>
                                <h2 className="section-title__title">We are the best agency to improve your deals.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="feature-one__right">
                            <div className="row">
                                {/*Feature One Single Start*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                    <div className="feature-one__single">
                                        <div className="feature-one__single-hover-bg"
                                            style={{ backgroundImage: 'url(assets/images/resources/feature-1-1.jpg)' }} >
                                        </div>
                                        <div className="feature-one__icon">
                                            <span className="icon-business-advice"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link href="business-audit">Business Advice</Link>
                                        </h3>
                                        <p className="feature-one__text">We make the over insurance quoting purchasing.</p>
                                    </div>
                                </div>
                                {/*Feature One Single End*/}
                                {/*Feature One Single Start*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="feature-one__single">
                                        <div className="feature-one__single-hover-bg"
                                            style={{ backgroundImage: 'url(assets/images/resources/feature-1-1.jpg)' }} >
                                        </div>
                                        <div className="feature-one__icon">
                                            <span className="icon-financial-advice"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link href="financial-advices">Financial
                                                Advice</Link></h3>
                                        <p className="feature-one__text">We make the over insurance quoting purchasing.</p>
                                    </div>
                                </div>
                                {/*Feature One Single End*/}
                                {/*Feature One Single Start*/}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                                    <div className="feature-one__single">
                                        <div className="feature-one__single-hover-bg"
                                            style={{ backgroundImage: 'url(assets/images/resources/feature-1-1.jpg)' }} >
                                        </div>
                                        <div className="feature-one__icon">
                                            <span className="icon-risk-management"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link href="tax-strategy">Risk Management</Link>
                                        </h3>
                                        <p className="feature-one__text">We make the over insurance quoting purchasing.</p>
                                    </div>
                                </div>
                                {/*Feature One Single End*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Feature One Start */}
        </>
    )
}
