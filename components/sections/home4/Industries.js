import Link from "next/link"


export default function Industries() {
    return (
        <>
        {/*Industries Served Start*/}
        <section className="industries-served">
            <div className="container">
                <div className="industries-served__top">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="industries-served__left">
                                <div className="section-title-three text-left">
                                    <div className="section-title-three__tagline-box">
                                        <p className="section-title-three__tagline">Industries</p>
                                    </div>
                                    <h2 className="section-title-three__title">Industries We Served</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="industries-served__right">
                                <p className="industries-served__text">When I first moved to Israel, I began working with an
                                    organization that helps new immigrants find professional success by providing
                                    education.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="industries-served__bottom">
                    <div className="row">
                        {/*Industries Served Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="industries-served__single">
                                <div className="industries-served__inner">
                                    <div className="industries-served__icon">
                                        <span className="icon-bank-building"></span>
                                    </div>
                                    <h3 className="industries-served__title"><Link href="business-planning">Banking &<br/>
                                            capital market</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*Industries Served Single End*/}
                        {/*Industries Served Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="industries-served__single">
                                <div className="industries-served__inner">
                                    <div className="industries-served__icon">
                                        <span className="icon-icon-business-audit"></span>
                                    </div>
                                    <h3 className="industries-served__title"><Link href="business-audit">Business <br/>
                                            Audit</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*Industries Served Single End*/}
                        {/*Industries Served Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="industries-served__single">
                                <div className="industries-served__inner">
                                    <div className="industries-served__icon">
                                        <span className="icon-financial-advice"></span>
                                    </div>
                                    <h3 className="industries-served__title"><Link href="tax-strategy">Identifying <br/>
                                            problems
                                            solutions</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*Industries Served Single End*/}
                        {/*Industries Served Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="industries-served__single">
                                <div className="industries-served__inner">
                                    <div className="industries-served__icon">
                                        <span className="icon-icon-insurance-strategy"></span>
                                    </div>
                                    <h3 className="industries-served__title"><Link href="insurance-strategy">Solutions
                                            <br/> your problem</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*Industries Served Single End*/}
                        {/*Industries Served Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                            <div className="industries-served__single">
                                <div className="industries-served__inner">
                                    <div className="industries-served__icon">
                                        <span className="icon-icon-start-ups"></span>
                                    </div>
                                    <h3 className="industries-served__title"><Link
                                            href="financial-advices">Consultation<br/> with our
                                            experts</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*Industries Served Single End*/}
                        {/*Industries Served Single Start*/}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="industries-served__single">
                                <div className="industries-served__inner">
                                    <div className="industries-served__icon">
                                        <span className="icon-icon-manage-investment
                                        "></span>
                                    </div>
                                    <h3 className="industries-served__title"><Link href="tax-strategy">Manage
                                            &<br/>Investment</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*Industries Served Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Industries Served  End*/}
        </>
    )
}
