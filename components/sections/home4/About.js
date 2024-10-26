import Link from "next/link"


export default function About() {
    return (
        <>

        {/*About Four Start*/}
        <section className="about-four">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-four__left">
                            <div className="about-four__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/about-img.png" alt=""/>
                                {/* <div className="about-four__experience">
                                    <div className="about-four__experience-count count-box">
                                        <h3> 25</h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-four__experience-text">YEARS OF EXPERIENCES</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-four__right">
                            <div className="section-title-three text-left">
                                <div className="section-title-three__tagline-box">
                                    <p className="section-title-three__tagline">ABOUT US</p>
                                </div>
                                <h2 className="section-title-three__title">Ashmit Jhunjhunwala</h2>
                            </div>
                            {/* <p className="about-four__text-1">With Solid Team</p> */}
                            {/* <p className="about-four__text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt</p> */}
                            <p className="about-four__text-3">Founded & lead by CA Ashmit Jhunjhunwala. We along with our team
                                of professionals have established our presence in the related professional fields. From the day of its existence, we have started
                                growing into a multi faceted Chartered Accountancy firm offering broad spectrum of services to our diverse clientele
                            </p>
                            {/* <div className="about-four__points-box">
                                <ul className="about-four__points list-unstyled">
                                    <li>
                                        <div className="about-four__points-shape-1"></div>
                                        <p>Core leve Design</p>
                                    </li>
                                    <li>
                                        <div className="about-four__points-shape-1"></div>
                                        <p>Pure Hand Work</p>
                                    </li>
                                </ul>
                                <ul className="about-four__points about-four__points-2 list-unstyled">
                                    <li>
                                        <div className="about-four__points-shape-1"></div>
                                        <p>Solid Metarial</p>
                                    </li>
                                    <li>
                                        <div className="about-four__points-shape-1"></div>
                                        <p>24/7 Online Support</p>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="about-four__btn-box">
                                <Link href="about" className="about-four__btn thm-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Four End*/}

        </>
    )
}
