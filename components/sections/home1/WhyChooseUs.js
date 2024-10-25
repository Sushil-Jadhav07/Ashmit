import Link from "next/link"

export default function WhyChooseUs() {
    return (
        <>
       
        <section className="why-choose-one">
            <div className="why-choose-one__shape-3 float-bob-y-2">
                <img src="assets/images/shapes/why-choose-one-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">Why Choose Us</p>
                                </div>
                                <h2 className="section-title__title">We are awards winning <br/> business consulting firms
                                </h2>
                            </div>
                            <p className="why-choose-one__text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-icon-business-consulting"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Best Business consulting</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-icon-customer-support"></span>
                                    </div>
                                    <div className="content">
                                        <h3>24/7 customer support</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="why-choose-one__btn-box">
                                <Link href="contact" className="why-choose-one__btn thm-btn">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-one__right">
                            <div className="why-choose-one__img wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="why-choose-one__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/why-choose-one-shape-1.png" alt=""/>
                                </div>
                                <div className="why-choose-one__shape-2 float-bob-y">
                                    <img src="assets/images/shapes/why-choose-one-shape-2.png" alt=""/>
                                </div>
                                <img src="assets/images/resources/why-choose-one-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
           
        </>
    )
}
