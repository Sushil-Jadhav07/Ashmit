import Link from "next/link"

export default function About() {
    return (
        <>
        
        <section className="about-one">
            <div className="about-one__shape-3 float-bob-y">
                <img src="assets/images/shapes/about-one-shape-3.png" alt=""/>
            </div>
            <div className="about-one__shape-4 img-bounce">
                <img src="assets/images/shapes/about-one-shape-4.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-one__img">
                                    <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-one__img-2">
                                    <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-one__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
                                </div>
                                <div className="about-one__shape-2 float-bob-y">
                                    <img src="assets/images/shapes/about-one-shape-2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">ABOUT US</p>
                                </div>
                                <h2 className="section-title__title">We are the best agency <br/> to improve your deals.</h2>
                            </div>
                            <p className="about-one__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                <br/> industry. Lorem Ipsum has been the industry's standard dummy <br/> text ever since
                                the 1500s,
                                when an unknown printer.</p>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <div className="text">
                                        <p>Business And Consulting Agency</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <div className="text">
                                        <p>Awards Winning Business Comapny</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="about-one__btn-box">
                                <Link href="about" className="about-one__btn thm-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
