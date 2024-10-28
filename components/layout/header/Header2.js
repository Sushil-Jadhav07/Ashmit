
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>

        <header className="main-header-two">
            <div className="main-header-two__top">
                <div className="main-header-two__top-inner">
                    <div className="main-header-two__text">
                        <p>Monday - Friday / 8AM - 11PM</p>
                    </div>
                    <div className="main-header-two__contact-and-social">
                        <ul className="list-unstyled main-header-two__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="mailto:email@example.com">email@example.com</Link></p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-location-1"></i>
                                </div>
                                <div className="text">
                                    <p>120 F 2th Yt, Melbone NY 1259</p>
                                </div>
                            </li>
                        </ul>
                        <div className="main-header-two__top-social">
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link href="/"><img src="assets/images/resources/logo-2.png" alt=""/></Link>
                            </div>
                            <div className="main-menu-two__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__search-cart-box">
                                <div className="main-menu-two__search-box">
                                    <Link href="#" className="main-menu-two__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                                </div>
                                <div className="main-menu-two__cart-box">
                                    <Link href="cart" className="main-menu-two__cart icon-shopping-cart"></Link>
                                </div>
                            </div>
                            <div className="main-menu-two__button-and-call-box">
                                <div className="main-menu-two__btn-box">
                                    <Link href="contact" className="main-menu-two__btn">Get Solution</Link>
                                </div>
                                <div className="main-menu-two__call">
                                    <div className="main-menu-two__call-icon">
                                        <span className="icon-phone"></span>
                                    </div>
                                    <div className="main-menu-two__call-content">
                                        <p className="main-menu-two__call-sub-title">Need help?</p>
                                        <h5 className="main-menu-two__call-number"><Link href="tel:1212333400">+1 212 333
                                                400</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__left">
                                <div className="main-menu-two__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-2.png" alt=""/></Link>
                                </div>
                                <div className="main-menu-two__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu-two__right">
                                <div className="main-menu-two__search-cart-box">
                                    <div className="main-menu-two__search-box">
                                        <Link href="#" className="main-menu-two__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                                    </div>
                                    <div className="main-menu-two__cart-box">
                                        <Link href="cart" className="main-menu-two__cart icon-shopping-cart"></Link>
                                    </div>
                                </div>
                                <div className="main-menu-two__button-and-call-box">
                                    <div className="main-menu-two__btn-box">
                                        <Link href="contact" className="main-menu-two__btn">Get Solution</Link>
                                    </div>
                                    <div className="main-menu-two__call">
                                        <div className="main-menu-two__call-icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <div className="main-menu-two__call-content">
                                            <p className="main-menu-two__call-sub-title">Need help?</p>
                                            <h5 className="main-menu-two__call-number"><Link href="tel:1212333400">+1 212 333
                                                    400</Link>
                                            </h5>
                                        </div>
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