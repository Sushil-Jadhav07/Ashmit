import Link from "next/link"


export default function Features() {
    return (
        <>
           
        <section className="feature-two">
            <div className="container">
                <div className="row">
                   
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="feature-two__single">
                            <div className="feature-two__icon">
                                <span className="icon-business-advice"></span>
                            </div>
                            <h3 className="feature-two__title"><Link href="business-audit">Business Advice</Link></h3>
                            <p className="feature-two__text">We make the insurance quoting, purchasing, and claiming process
                                stress and hassle-free.</p>
                            <div className="feature-two__btn">
                                <Link href="business-audit">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="feature-two__single">
                            <div className="feature-two__icon">
                                <span className="icon-financial-advice"></span>
                            </div>
                            <h3 className="feature-two__title"><Link href="financial-advices">Financial Advice</Link></h3>
                            <p className="feature-two__text">We make the insurance quoting, purchasing, and claiming process
                                stress and hassle-free.</p>
                            <div className="feature-two__btn">
                                <Link href="financial-advices">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="feature-two__single">
                            <div className="feature-two__icon">
                                <span className="icon-risk-management"></span>
                            </div>
                            <h3 className="feature-two__title"><Link href="tax-strategy">Risk Management</Link></h3>
                            <p className="feature-two__text">We make the insurance quoting, purchasing, and claiming process
                                stress and hassle-free.</p>
                            <div className="feature-two__btn">
                                <Link href="tax-strategy">Learn More<span className="icon-right-arrow1"></span></Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
       
        
        </>
    )
}
