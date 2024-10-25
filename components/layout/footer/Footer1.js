import Link from "next/link"

export default function Footer1() {
    return (
        <>
           
        <footer className="site-footer">
            <div className="site-footer__shape-1 img-bounce">
                <img src="assets/images/shapes/site-footer-shape-1.png" alt=""/>
            </div>
            <div className="site-footer__shape-2 float-bob-y">
                <img src="assets/images/shapes/site-footer-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <a href="/"><img src="assets/images/resources/footer-logo.png" alt=""/></a>
                                </div>
                                <p className="footer-widget__about-text">Lorem Ipsum is simply dummy text of <br/> printing
                                    and typesetting industry.</p>
                                <div className="site-footer__social">
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__company">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Company</h3>
                                </div>
                                <ul className="footer-widget__company-list list-unstyled">
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
                            <div className="footer-widget__column footer-widget__contact">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">You’ve Questions</h3>
                                </div>
                                <ul className="footer-widget__contact-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location-1"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Location</h3>
                                            <p>915 Hill Street, USA</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Get a quote</h3>
                                            <p><a href="tel:+13330000000">+1(333) 000-0000</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Send a mail</h3>
                                            <p><a href="mailto:example@email.com">example@email.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__newsletter">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Newsletter</h3>
                                </div>
                                <p className="footer-widget__newsletter-text">Sign up for our latest news & articles. <br/>
                                    We
                                    won’t give you spam mails.</p>
                                <form className="footer-widget__newsletter-form mc-form" data-url="MC_FORM_URL">
                                    <div className="footer-widget__newsletter-form-input-box">
                                        <input type="email" placeholder="Enter email address" name="EMAIL"/>
                                        <button type="submit" className="footer-widget__newsletter-btn"><span
                                                className="fas fa-paper-plane"></span></button>
                                    </div>
                                </form>
                                <div className="mc-form__response"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">© Copyright bixola 2024. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
        
        </>
    )
}
