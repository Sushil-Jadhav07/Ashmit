import Link from "next/link";


export default function Feature() {
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
                                    <p className="section-title__tagline">Why us</p>
                                </div>
                                <h2 className="section-title__title">Why we are the best.</h2>
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
                                        <h3 className="feature-one__title"><Link href="business-audit">SERVICES</Link>
                                        </h3>
                                        <p className="feature-one__text">All type of industries, services, and operational levels, we help our clients ensure excellence by giving them the benefit into this field since 2019 years of experience</p>
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
                                        <h3 className="feature-one__title"><Link href="financial-advices">EXPERTISE
                                        </Link></h3>
                                        <p className="feature-one__text">Our expertise is to simplify and interpret, complex information to be understood, by the client who is not of the, finance and tax background.<br/><br/></p>
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
                                        <h3 className="feature-one__title"><Link href="tax-strategy">WORK
                                        </Link>
                                        </h3>
                                        <p className="feature-one__text">Ashmit & Associates focus on Audit & Assurance, Taxation Consultancy, Customizing our services based on the clients requirements has been our key strength.</p>
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
