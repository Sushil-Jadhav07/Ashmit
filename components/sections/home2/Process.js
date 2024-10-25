'use client'
import Link from "next/link"



export default function Process() {
    
    return (
        <>
        
        {/*Process One Start */}
        <section className="process-one">
            <div className="container">
                <h3 className="section__title-two">Our Work process</h3>
                <div className="process-one__inner">
                    <div className="process-one__shape-1">
                        <img src="assets/images/shapes/process-one-shape-1.png" alt=""/>
                    </div>
                    <div className="row">
                        {/*Process One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="process-one__single">
                                <div className="process-one__count"></div>
                                <h3 className="process-one__title">Identifying Problems</h3>
                                <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                    eiusmod
                                    ut<br/>
                                    dolore magna aliqua.</p>
                            </div>
                        </div>
                        {/*Process One Single End*/}
                        {/*Process One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="process-one__single">
                                <div className="process-one__count"></div>
                                <h3 className="process-one__title">Research Your Problem</h3>
                                <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                    eiusmod
                                    ut<br/>
                                    dolore magna aliqua.</p>
                            </div>
                        </div>
                        {/*Process One Single End*/}
                        {/*Process One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="process-one__single">
                                <div className="process-one__count"></div>
                                <h3 className="process-one__title">Solutions Your Problem</h3>
                                <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                    eiusmod
                                    ut<br/>
                                    dolore magna aliqua.</p>
                            </div>
                        </div>
                        {/*Process One Single End*/}
                        {/*Process One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="process-one__single">
                                <div className="process-one__count"></div>
                                <h3 className="process-one__title">Consultation With Experts</h3>
                                <p className="process-one__text">Lorem ipsum dolor sit amet,<br/> adipiscing elit, sed do
                                    eiusmod
                                    ut<br/>
                                    dolore magna aliqua.</p>
                            </div>
                        </div>
                        {/*Process One Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Process One End */}
        
        </>
    )
}
