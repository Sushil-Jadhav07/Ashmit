import Link from "next/link"

export default function Services() {
    return (
        <>
      
        <section className="services-three">
            <div className="services-three__shape-1 float-bob-y">
                <img src="assets/images/shapes/services-three-shape-1.png" alt=""/>
            </div>
            <div className="services-three__shape-2 zoominout">
                <img src="assets/images/shapes/services-three-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title-three text-center">
                    <div className="section-title-three__tagline-box">
                        <p className="section-title-three__tagline">What We Do</p>
                    </div>
                    <h2 className="section-title-three__title">What Services we Provide for <br/> Our Customers Business</h2>
                </div>
                <div className="row">
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="services-three__single">
                            <h3 className="services-three__title"><Link href="business-audit">Business Audit</Link></h3>
                            <div className="services-three__icon">
                                <span className="icon-report"></span>
                            </div>
                            <p className="services-three__text">Lorem Ipsum is simply dummy text of the printing industry.
                                The industry's standard dummy</p>
                            <div className="services-three__btn">
                                <Link href="business-audit">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="200ms">
                        <div className="services-three__single">
                            <h3 className="services-three__title"><Link href="business-planning">Business Planning</Link>
                            </h3>
                            <div className="services-three__icon">
                                <span className="icon-planning"></span>
                            </div>
                            <p className="services-three__text">Lorem Ipsum is simply dummy text of the printing industry.
                                The industry's standard dummy</p>
                            <div className="services-three__btn">
                                <Link href="business-planning">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="services-three__single">
                            <h3 className="services-three__title"><Link href="financial-advices">Financial Advices</Link>
                            </h3>
                            <div className="services-three__icon">
                                <span className="icon-financial-advices11"></span>
                            </div>
                            <p className="services-three__text">Lorem Ipsum is simply dummy text of the printing industry.
                                The industry's standard dummy</p>
                            <div className="services-three__btn">
                                <Link href="financial-advices">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="400ms">
                        <div className="services-three__single">
                            <h3 className="services-three__title"><Link href="tax-strategy">Tax Strategy</Link></h3>
                            <div className="services-three__icon">
                                <span className="icon-tax-strategy11"></span>
                            </div>
                            <p className="services-three__text">Lorem Ipsum is simply dummy text of the printing industry.
                                The industry's standard dummy</p>
                            <div className="services-three__btn">
                                <Link href="tax-strategy">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <p className="services-three__bottom-text">You Can Also <Link href="services" className="all-services">See All
                        Business<span className="icon-right-arrow-11"></span></Link> <Link href="services"
                        className="">Services</Link></p>
            </div>
        </section>
       
        </>
    )
}
