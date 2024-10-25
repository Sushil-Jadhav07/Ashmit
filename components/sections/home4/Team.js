import Link from "next/link"
export default function Team() {
    return (
        <>
            {/*Team Six Start*/}
        <section className="team-six">
            <div className="container">
                <div className="team-six__top">
                    <div className="team-six__left">
                        <div className="section-title-three text-left">
                            <div className="section-title-three__tagline-box">
                                <p className="section-title-three__tagline">Team Member</p>
                            </div>
                            <h2 className="section-title-three__title">Our Awesome Creative<br/> Team Member</h2>
                        </div>
                    </div>
                    <div className="team-six__btn-box">
                        <Link href="team" className="team-six__btn thm-btn">Join Our Team</Link>
                    </div>
                </div>
                <div className="team-six__bottom">
                    <div className="row">
                        {/*Team Six Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="team-six__single">
                                <div className="team-six__img-box">
                                    <div className="team-six__img">
                                        <img src="assets/images/team/team-6-1.jpg" alt=""/>
                                        <div className="team-six__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-six__content">
                                    <h3 className="team-six__title"><Link href="team-details">David Malaan</Link></h3>
                                    <p className="team-six__sub-title">Ceo</p>
                                </div>
                            </div>
                        </div>
                        {/*Team Six Single End*/}
                        {/*Team Six Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="team-six__single">
                                <div className="team-six__img-box">
                                    <div className="team-six__img">
                                        <img src="assets/images/team/team-6-2.jpg" alt=""/>
                                        <div className="team-six__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-six__content">
                                    <h3 className="team-six__title"><Link href="team-details">Robert Hardson</Link></h3>
                                    <p className="team-six__sub-title">Director</p>
                                </div>
                            </div>
                        </div>
                        {/*Team Six Single End*/}
                        {/*Team Six Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="300ms">
                            <div className="team-six__single">
                                <div className="team-six__img-box">
                                    <div className="team-six__img">
                                        <img src="assets/images/team/team-6-3.jpg" alt=""/>
                                        <div className="team-six__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-six__content">
                                    <h3 className="team-six__title"><Link href="team-details">Alisha Martin</Link></h3>
                                    <p className="team-six__sub-title">Fouinder</p>
                                </div>
                            </div>
                        </div>
                        {/*Team Six Single End*/}
                        {/*Team Six Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                            <div className="team-six__single">
                                <div className="team-six__img-box">
                                    <div className="team-six__img">
                                        <img src="assets/images/team/team-6-4.jpg" alt=""/>
                                        <div className="team-six__social">
                                            <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                            <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                            <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                            <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-six__content">
                                    <h3 className="team-six__title"><Link href="team-details">Jemes Mark</Link></h3>
                                    <p className="team-six__sub-title">Manager</p>
                                </div>
                            </div>
                        </div>
                        {/*Team Six Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Team Six End*/}
        </>
    )
}
