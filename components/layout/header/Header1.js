import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            
        <header className="main-header">
            <div className="main-header__top">
                <div className="container">
                    <div className="main-header__top-inner">
                        <div className="main-header__top-left">
                            <ul className="list-unstyled main-header__contact-list">
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
                        <div className="main-header__top-right">
                            <ul className="list-unstyled main-header__top-menu">
                                <li><Link href="about">About</Link></li>
                                <li><Link href="about">Faqs</Link></li>
                                <li><Link href="contact">Contact</Link></li>
                            </ul>
                            <div className="main-header__social">
                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                <Link href="#"><i className="fab fa-facebook"></i></Link>
                                <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__logo">
                                <Link href="/"><img src="assets/images/resources/logo-1.png" alt="" /></Link>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__call">
                                    <div className="main-menu__call-icon">
                                        <span className="icon-phone"></span>
                                    </div>
                                    <div className="main-menu__call-content">
                                        <p className="main-menu__call-sub-title">Need help?</p>
                                        <h5 className="main-menu__call-number"><Link href="tel:1212333400">+1 212 333 400</Link>
                                        </h5>
                                    </div>
                                </div>
                                <div className="main-menu__btn-box">
                                    <Link href="contact" className="main-menu__btn thm-btn">Get Consulting</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-1.png" alt="" /></Link>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                                <div className="main-menu__right">
                                    <div className="main-menu__call">
                                        <div className="main-menu__call-icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <div className="main-menu__call-content">
                                            <p className="main-menu__call-sub-title">Need help?</p>
                                            <h5 className="main-menu__call-number"><Link href="tel:1212333400">+1 212 333 400</Link>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="main-menu__btn-box">
                                        <Link href="contact" className="main-menu__btn thm-btn">Get Consulting</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        </>
    )
}
