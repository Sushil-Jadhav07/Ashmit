import Link from "next/link"
export default function Team() {
    return (
        <>

        <section className="team-one">
            <div className="team-one__shape-1 img-bounce">
                <img src="assets/images/shapes/team-one-shape-1.png" alt=""/>
            </div>
            <div className="team-one__shape-2 zoominout">
                <img src="assets/images/shapes/team-one-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">TEAM MEMBERS</p>
                    </div>
                    <h2 className="section-title__title">Meet Our Experts</h2>
                </div>
                <div className="row">
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-1.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Aiyan Sakla</Link></h3>
                                    <p className="team-one__sub-title">Founder and CEO</p>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                    <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                    <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                    <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-2.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Susan Sarandom</Link></h3>
                                    <p className="team-one__sub-title">Founder and CEO</p>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                    <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                    <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                    <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-3.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Jacika Brown</Link></h3>
                                    <p className="team-one__sub-title">Founder and CEO</p>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                    <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                    <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                    <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-4.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Alisha Martin</Link></h3>
                                    <p className="team-one__sub-title">Founder and CEO</p>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                    <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                    <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                    <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="team-one__btn-box">
                    <Link href="team" className="team-one__btn thm-btn">View All<span
                            className="icon-right-arrow1"></span></Link>
                </div>
            </div>
        </section>
        
            
        </>
    )
}
