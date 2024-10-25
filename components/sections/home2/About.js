'use client'
import Link from "next/link"
import { useState } from "react"

export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        <section className="about-two">
            <div className="about-two__shape-2 zoominout">
                <img src="assets/images/shapes/about-two-shape-2.png" alt=""/>
            </div>
            <div className="about-two__shape-3 float-bob-y">
                <img src="assets/images/shapes/about-two-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-two__left">
                            <h3 className="about-two__title">We help to get Solutions!</h3>
                            <p className="about-two__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer.</p>
                            <p className="about-two__text-2">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            <ul className="about-two__points list-unstyled">
                                <li>
                                    <div className="about-two__count count-box">
                                        <h3> 10 </h3>
                                    </div>
                                    <p>Years Of <br/> Experience</p>
                                </li>
                                <li>
                                    <div className="about-two__count count-box">
                                        <h3> 8 </h3>
                                        <span>k</span>
                                    </div>
                                    <p>Completed <br/> project</p>
                                </li>
                            </ul>
                            <div className="about-two__btn-box">
                                <Link href="about" className="about-two__btn thm-btn-two">Learn About Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-two__right">
                            <div className="about-two__img wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-two__shape-1 img-bounce">
                                    <img src="assets/images/shapes/about-two-shape-1.png" alt=""/>
                                </div>
                                <img src="assets/images/resources/about-two-img-1.jpg" alt=""/>
                                <div className="about-two__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="about-two__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
