
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Portfolio Details">
        {/*Portfolio Details Start*/}
        <section className="portfolio-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="portfolio-details__img">
                            <img src="assets/images/project/portfolio-details-img-1.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="portfolio-details__bottom">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="portfolio-details__left">
                                    <p className="portfolio-details__sub-title">Business Audit</p>
                                    <h3 className="portfolio-details__title">Our Business Growth</h3>
                                    <p className="portfolio-details__text-1">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                        id est laborum.</p>
                                    <p className="portfolio-details__text-2">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    <div className="portfolio-details__pagination-box">
                                        <ul className="portfolio-details__pagination list-unstyled clearfix">
                                            <li className="next">
                                                <Link href="#" aria-label="Previous"><i
                                                        className="icon-right-arrow"></i>Prev</Link>
                                            </li>
                                            <li className="previous">
                                                <Link href="#" aria-label="Next">Next<i className="icon-right-arrow1"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="portfolio-details__right">
                                    <div className="portfolio-details__information-box">
                                        <h3 className="portfolio-details__information-title">Project Information</h3>
                                        <ul className="portfolio-details__information list-unstyled">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user-2"></span>
                                                </div>
                                                <div className="content">
                                                    <p>Clients:</p>
                                                    <h4>Damien Wilson</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-category"></span>
                                                </div>
                                                <div className="content">
                                                    <p>Category:</p>
                                                    <h4>Business Audit</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-date11"></span>
                                                </div>
                                                <div className="content">
                                                    <p>Date:</p>
                                                    <h4>25 March, 2023</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-location11"></span>
                                                </div>
                                                <div className="content">
                                                    <p>Location:</p>
                                                    <h4>New York, NY, USA</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-website1"></span>
                                                </div>
                                                <div className="content">
                                                    <p>Website:</p>
                                                    <h4><Link href="#">https://busicon.com</Link></h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Portfolio Details End*/}

        {/*Portfolio Four Start*/}
        <section className="portfolio-four">
            <div className="container">
                <h3 className="portfolio-four__title">Related Portfolio</h3>
                <div className="row">
                    {/*POrtfolio Three Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__img-box">
                                <div className="portfolio-three__img">
                                    <img src="assets/images/project/portfolio-4-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="portfolio-three__content">
                                <p className="portfolio-three__sub-title">Business Audit</p>
                                <h3 className="portfolio-three__title"><Link href="portfolio-details">Our Business
                                        Growth</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*POrtfolio Three Single End*/}
                    {/*POrtfolio Three Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__img-box">
                                <div className="portfolio-three__img">
                                    <img src="assets/images/project/portfolio-4-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="portfolio-three__content">
                                <p className="portfolio-three__sub-title">Business Audit</p>
                                <h3 className="portfolio-three__title"><Link href="portfolio-details">Our Women’s
                                        Empowerment</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*POrtfolio Three Single End*/}
                    {/*POrtfolio Three Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="portfolio-three__single">
                            <div className="portfolio-three__img-box">
                                <div className="portfolio-three__img">
                                    <img src="assets/images/project/portfolio-4-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="portfolio-three__content">
                                <p className="portfolio-three__sub-title">Business Audit</p>
                                <h3 className="portfolio-three__title"><Link href="portfolio-details">Our Business
                                        Audit</Link></h3>
                            </div>
                        </div>
                    </div>
                    {/*POrtfolio Three Single End*/}
                </div>
            </div>
        </section>
        {/*Portfolio Four End*/}

            </Layout>
        </>
    )
}