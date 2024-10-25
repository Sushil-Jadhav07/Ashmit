import Link from "next/link"


export default function Features() {
    return (
        <>
        {/*Feature Three Start */}
        <section className="feature-three">
            <div className="container">
                <div className="section-title-three text-center">
                    <div className="section-title-three__tagline-box">
                        <p className="section-title-three__tagline">Gamut of Services</p>
                    </div>
                    <h2 className="section-title-three__title">Grow Your Brand By Zeroing In On<br/> Your Target Market</h2>
                </div>
                <div className="row">
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-1.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                                <span className="icon-bank-building"></span>
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="business-planning">Management and Financial Advisory</Link></h3>
                            <div className="feature-three__btn">
                                <Link href="business-planning">Read more</Link>
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="200ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-2.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                                <span className="icon-financial-advice"></span>
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="financial-advices">Corporate Law Consultancy and Compliance Services</Link></h3>
                            <div className="feature-three__btn">
                                <Link href="financial-advices">Read more</Link>
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-3.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                                <span className="icon-assets"></span>
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="business-audit">Direct & Indirect <br/> Taxes Advisory </Link></h3>
                            <div className="feature-three__btn">
                                <Link href="business-audit">Read more</Link>
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                                <span className="icon-planning"></span>
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="tax-strategy">Audit & Assurance</Link></h3>
                            <div className="feature-three__btn">
                                <Link href="tax-strategy">Read more</Link>
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                                <span className="icon-planning"></span>
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="tax-strategy">ROC Compliances</Link></h3>
                            <div className="feature-three__btn">
                                <Link href="tax-strategy">Read more</Link>
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                </div>
                {/* <p className="feature-three__bottom-text">We help take your small business to the next level. Don't hesitate
                    to <Link href="contact">contact us.</Link></p> */}
            </div>
        </section>
        {/*Feature Three End*/}
        </>
    )
}
