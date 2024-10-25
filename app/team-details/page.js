
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Member Details">
        {/*Team Details Start*/}
        <section className="team-details">
            <div className="container">
                <div className="team-details__inner">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="team-details__left">
                                <div className="team-details__img">
                                    <img src="assets/images/team/team-details-img-1.jpg" alt=""/>
                                </div>
                                <div className="team-details__contact-box">
                                    <h3 className="team-details__contact-title">Contact info</h3>
                                    <ul className="team-details__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <p><Link href="mailto:example@email.com">example@email.com</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-telephone"></span>
                                            </div>
                                            <p><Link href="tel:+13330000000">+1(333) 000-0000</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location11"></span>
                                            </div>
                                            <p>915 Hill Street, USA</p>
                                        </li>
                                    </ul>
                                    <div className="team-details__social">
                                        <Link href="#"><i className="fab fa-facebook"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team-details__right">
                                <h3 className="team-details__title-1">Susan Sarandom</h3>
                                <p className="team-details__sub-title">Founder and CEO</p>
                                <p className="team-details__text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla
                                    pariatur.</p>
                                <h3 className="team-details__title-2">Professional Skills</h3>
                                <p className="team-details__text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <ul className="team-details__progress-list list-unstyled">
                                    <li className="team-details__progress">
                                        <h4 className="team-details__progress-title">UI/IUX Design</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="90%" style={{ width: '90%' }}>
                                                <div className="count-text">90%</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="team-details__progress">
                                        <h4 className="team-details__progress-title">Web Design</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="85%" style={{ width: '85%' }}>
                                                <div className="count-text">85%</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="team-details__progress">
                                        <h4 className="team-details__progress-title">IT Consulting</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                                <div className="count-text">80%</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Team Details End*/}

        {/*Team Five Start*/}
        <section className="team-five">
            <div className="container">
                <h3 className="team-five__title">Other Team Members</h3>
                <div className="row">
                    {/*Team One SIngle Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-5-1.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Airiyan Khan</Link></h3>
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
                    {/*Team One SIngle End*/}
                    {/*Team One SIngle Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-5-2.jpg" alt=""/>
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
                    {/*Team One SIngle End*/}
                    {/*Team One SIngle Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-5-3.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Harbert Spensor</Link></h3>
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
                    {/*Team One SIngle End*/}
                    {/*Team One SIngle Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-5-4.jpg" alt=""/>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Aira Khanom</Link></h3>
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
                    {/*Team One SIngle End*/}
                </div>
            </div>
        </section>
        {/*Team Five End*/}

            </Layout>
        </>
    )
}