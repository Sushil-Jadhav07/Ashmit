import Link from "next/link"


export default function Team() {
    return (
        <>
        
        
        <section className="team-three">
            <div className="team-three__shape-1 img-bounce">
                <img src="assets/images/shapes/team-three-shape-1.png" alt=""/>
            </div>
            <div className="team-three__shape-2 float-bob-y">
                <img src="assets/images/shapes/team-three-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title-three text-center">
                    <div className="section-title-three__tagline-box">
                        <p className="section-title-three__tagline">TEAM MEMBERS</p>
                    </div>
                    <h2 className="section-title-three__title">Meet Our Experts</h2>
                </div>
                <div className="row">
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-1.jpg" alt=""/>
                                </div>
                                <div className="team-three__social">
                                    <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                    <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                    <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                    <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                </div>
                            </div>
                            <div className="team-three__content">
                                <h3 className="team-three__title"><Link href="team-details">Susan Sarandom</Link></h3>
                                <p className="team-three__sub-title">Founder and CEO</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-2.jpg" alt=""/>
                                </div>
                                <div className="team-three__social">
                                    <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                    <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                    <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                    <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                </div>
                            </div>
                            <div className="team-three__content">
                                <h3 className="team-three__title"><Link href="team-details">Ralph Edwards</Link></h3>
                                <p className="team-three__sub-title">Founder and CEO</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="300ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-3.jpg" alt=""/>
                                </div>
                                <div className="team-three__social">
                                    <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                    <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                    <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                    <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                </div>
                            </div>
                            <div className="team-three__content">
                                <h3 className="team-three__title"><Link href="team-details">Savannah Nguyen</Link></h3>
                                <p className="team-three__sub-title">Founder and CEO</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-4.jpg" alt=""/>
                                </div>
                                <div className="team-three__social">
                                    <Link href="team-details"><span className="fab fa-facebook"></span></Link>
                                    <Link href="team-details"><span className="fab fa-twitter"></span></Link>
                                    <Link href="team-details"><span className="fab fa-instagram"></span></Link>
                                    <Link href="team-details"><span className="fab fa-linkedin"></span></Link>
                                </div>
                            </div>
                            <div className="team-three__content">
                                <h3 className="team-three__title"><Link href="team-details">Theresa Webb</Link></h3>
                                <p className="team-three__sub-title">Founder and CEO</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="team-three__btn-box">
                    <div className="team-three__btn">
                        <Link href="team">View All<span className="icon-right-arrow1"></span></Link>
                    </div>
                </div>
            </div>
        </section>
        
      
        </>
    )
}
