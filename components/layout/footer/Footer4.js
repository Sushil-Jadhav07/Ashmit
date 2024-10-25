import Link from "next/link"

export default function Footer4() {
    return (
        <>
            
        
        <footer className="site-footer-two site-footer-four">
            <div className="site-footer-two__shape-1 img-bounce">
                <img src="assets/images/shapes/site-footer-two-shape-1.png" alt=""/>
            </div>
            <div className="site-footer-two__shape-2 zoominout">
                <img src="assets/images/shapes/site-footer-two-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="site-footer-two__top">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget-two__column footer-widget-two__about">
                                <div className="footer-widget-two__logo">
                                    <a href="/"><img src="assets/images/resources/footer-logo-2.png"
                                            alt=""/></a>
                                </div>
                                <p className="footer-widget-two__about-text">We work with a passion of taking<br/> challenges
                                    and
                                    creating new ones in<br/> advertising sector.</p>
                                <div className="site-footer-two__social">
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget-two__column footer-widget-two__company">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">Company</h3>
                                </div>
                                <ul className="footer-widget-two__company-list list-unstyled">
                                    <li><a href="business-planning">Business planning</a></li>
                                    <li><a href="tax-strategy">Tax strategy
                                        </a></li>
                                    <li><a href="financial-advices">Financial advices
                                        </a></li>
                                    <li><a href="insurance-strategy">Insurance strategy
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget-two__column footer-widget-two__contact">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">Contact info</h3>
                                </div>
                                <ul className="footer-widget-two__contact-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location-1"></span>
                                        </div>
                                        <p>915 Hill Street, USA</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <p><a href="tel:+13330000000">+1(333) 000-0000</a></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <p><a href="mailto:example@email.com">example@email.com</a></p>
                                    </li>
                                </ul>
                                <div className="footer-widget-two__work-time">
                                    <div className="footer-widget-two__title-box">
                                        <h3 className="footer-widget-two__title">Working Time</h3>
                                    </div>
                                    <p className="footer-widget-two__work-time-text">Mon - Sat: 9:00 AM - 5:00 PM
                                        <br/> Sunday Close</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget-two__column footer-widget-two__portfolio">
                                <div className="footer-widget-two__title-box">
                                    <h3 className="footer-widget-two__title">Instagram</h3>
                                </div>
                                <ul className="footer-widget-two__portfolio-list list-unstyled clearfix">
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-1.jpg"
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-2.jpg"
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-3.jpg"
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-4.jpg"
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-5.jpg"
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget-two__portfolio-img">
                                            <img src="assets/images/project/footer-widget-two-portfolio-img-6.jpg"
                                                alt=""/>
                                            <a href="#"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer-two__bottom">
                <div className="container">
                    <div className="site-footer-two__bottom-inner">
                        <p className="site-footer__bottom-text">© Copyright bixola 2024. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
        

        </>
    )
}
