import Link from "next/link"


export default function About() {
    return (
        <>

        {/*About Four Start*/}
        <section className="about-four">
            <div className="about-two__shape-2 zoominout">
                <img src="assets/images/shapes/about-two-shape-2.png" alt=""/>
            </div>
            <div className="about-two__shape-3 float-bob-y">
                <img src="assets/images/shapes/about-two-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-four__left">
                            <div className="about-four__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/ashmit_ca.png" alt=""/>
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
                        <div className="about-two__right">
                           
                                

                            </div>
                            <div className="section-title-three text-lg-start text-center">
                                <div className="section-title-three__tagline-box">
                                    {/* <p className="section-title-three__tagline ">ABOUT US</p> */}
                                </div>
                                <h2 className="section-title-three__title text-lg-start ">Ashmit Jhunjhunwala</h2>
                            </div>
                            {/* <p className="about-four__text-1">With Solid Team</p> */}
                            {/* <p className="about-four__text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt</p> */}
                            <p className="about-four__text-3">Ashmit Jhunjhunwala is a qualified Chartered Accountant with an experience of working into this field since 2019. His expertise lies in Direct Taxation & Audit and Assurance. Hands on experience in Income Tax and Statutory Auditing. He has advised clients with complex transactions across sectors including Manufacturing, Services and Information Technology.
                            His key areas of expertise also include Transaction Modeling, Accounting Advisory, DTAA treaties and NRI taxation matters, Tax Planning, Business Setup, Overseas Accounting, International tax advisory. He has been actively engaged in Companies and LLP Formations and holds a good command in Statutory Audits and Start up Advisory services.
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
                            <div className="about-four__btn-box text-lg-start text-center">
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
