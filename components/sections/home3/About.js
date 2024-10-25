import CounterUp from "@/components/elements/CounterUp"
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


export default function About() {
    return (
        <>
        
        <section className="about-three">
            <div className="about-three__shape-5">
                <img src="assets/images/shapes/about-three-shape-5.png" alt=""/>
            </div>
            <div className="about-three__shape-3 float-bob-x">
                <img src="assets/images/shapes/about-three-shape-3.png" alt=""/>
            </div>
            <div className="about-three__shape-4 float-bob-y">
                <img src="assets/images/shapes/about-three-shape-4.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__left">
                            <div className="about-three__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/about-three-img-1.jpg" alt=""/>
                                <div className="about-three__experience">
                                    <div className="about-three__experience-count count-box">
                                        <h3>10</h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-three__experience-text">YEARS OF <br/> EXPERIENCES</p>
                                </div>
                                <div className="about-three__shape-1 zoominout">
                                    <img src="assets/images/shapes/about-three-shape-1.png" alt=""/>
                                </div>
                                <div className="about-three__shape-2 float-bob-y">
                                    <img src="assets/images/shapes/about-three-shape-2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three__right">
                            <div className="section-title-three text-left">
                                <div className="section-title-three__tagline-box">
                                    <p className="section-title-three__tagline">ABOUT US</p>
                                </div>
                                <h2 className="section-title-three__title">Busicon is One of The
                                    <br/> Best Business Consulting</h2>
                            </div>
                            <p className="about-three__text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="about-three__text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/> ad minim
                                veniam,
                                quis nostrud exercitation ullamco laboris nisi ut <br/>aliquip ex ea commodo consequat.
                            </p>
                            <ul className="about-three__points list-unstyled">
                                <li>
                                    <div className="about-three__points-count count-box">
                                        <h3> 5 </h3>
                                        <span>k</span>
                                    </div>
                                    <p className="about-three__points-text">Business Strategy <br/>Growth</p>
                                </li>
                                <li>
                                    <div className="about-three__points-count count-box">
                                        <h3>7</h3>
                                        <span>k</span>
                                    </div>
                                    <p className="about-three__points-text">Finance Valuable<br/> Ideas</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
