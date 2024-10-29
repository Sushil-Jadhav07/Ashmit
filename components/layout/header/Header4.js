import Menu from "../Menu"
import Link from "next/link"
import MobileMenu from "../MobileMenu"
export default function Header5({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>


        <header className="main-header-four">
            {/* <div className="main-header-four__top">
                <div className="main-header-four__top-inner">
                    <div className="main-header-four__top-left">
                        <ul className="list-unstyled main-header-four__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="text">
                                    <p>Mon to Fri: 9:00am to 6:00pm</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="mailto:help@company.com">help@company.com</Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-map-marker"></i>
                                </div>
                                <div className="text">
                                    <p>88 Broklyn Golden Street. New York</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="main-header-four__top-right">
                        <ul className="list-unstyled main-header-four__top-menu">
                            <li><Link href="about">About</Link></li>
                            <li><Link href="about">Faqs</Link></li>
                            <li><Link href="contact">Contact</Link></li>
                        </ul>
                        <div className="main-header-four__social">
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div> */}
            
            <nav className="main-menu main-menu-four">
                <div className="main-menu-four__wrapper">
                    <div className="main-menu-four__wrapper-inner">
                        <div className="main-menu-four__logo">
                            <Link href="/"><img src="assets/images/resources/CA_logo.png" alt="" /></Link>
                        </div>
                        <div className="main-menu-four__main-menu-box">
                            <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                            <Menu />
                        </div>
                        {/* <div className="main-menu-four__right">
                            <div className="main-menu-four__call">
                                <div className="main-menu-four__call-icon">
                                    <span className="icon-phone-call"></span>
                                </div>
                                <div className="main-menu-four__call-content">
                                    <p className="main-menu-four__call-sub-title">Have Question?</p>
                                    <h5 className="main-menu-four__call-number"><Link href="tel:9288009850">+92 (8800) -
                                            9850</Link>
                                    </h5>
                                </div>
                            </div>
                            <div className="main-menu-four__search-cart-box">
                                <div className="main-menu-four__search-box">
                                    <Link href="#" className="main-menu-four__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                                </div>
                                <div className="main-menu-four__cart-box">
                                    <Link href="#" className="main-menu-four__cart icon-shopping-cart"></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
        <div className={`stricky-header stricked-menu main-menu main-menu-four ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-four">
                    <div className="main-menu-four__wrapper">
                        <div className="main-menu-four__wrapper-inner">
                            <div className="main-menu-four__logo-mobile">
                                <Link href="/"><img src="assets/images/resources/CA_logo.png" alt=""/></Link>
                            </div>
                            <div className="main-menu-four__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                            {/* <div className="main-menu-four__right">
                                <div className="main-menu-four__call">
                                    <div className="main-menu-four__call-icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <div className="main-menu-four__call-content">
                                        <p className="main-menu-four__call-sub-title">Have Question?</p>
                                        <h5 className="main-menu-four__call-number"><Link href="tel:9288009850">+92 (8800) -
                                                9850</Link>
                                        </h5>
                                    </div>
                                </div>
                                <div className="main-menu-four__search-cart-box">
                                    <div className="main-menu-four__search-box">
                                        <Link href="#" className="main-menu-four__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                                    </div>
                                    <div className="main-menu-four__cart-box">
                                        <Link href="#" className="main-menu-four__cart icon-shopping-cart"></Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        </>
    )
}
