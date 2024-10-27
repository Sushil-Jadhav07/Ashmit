'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image"><img src="assets/images/resources/CA_logo.png" width="220px" alt=""  /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    {/* <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home One</Link></li>
                                        <li><Link href="index2">Home Two</Link></li>
                                        <li><Link href="index3">Home Three</Link></li>
                                        <li><Link href="index4">Home Four</Link></li>
                                    </ul> */}
                                    {/* <button className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button> */}
                                </li>
                                <li><Link href="/about/">About</Link></li>
                                {/* <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li><Link href="team">Team</Link></li>
                                        <li><Link href="team-carousel">Team Carousel</Link></li>
                                        <li><Link href="team-details">Team Details</Link></li>
                                        <li><Link href="portfolio">Portfolio</Link></li>
                                        <li><Link href="portfolio-carousel">Portfolio Carousel</Link></li>
                                        <li><Link href="portfolio-details">Portfolio Details</Link></li>
                                        <li><Link href="testimonial">Testimonials</Link></li>
                                        <li><Link href="testimonial-carousel">Testimonials Carousel</Link></li>
                                        <li><Link href="pricing">Pricing</Link></li>
                                        <li><Link href="pricing-carousel">Pricing Carousel</Link></li>
                                        <li><Link href="appointment">Appointment</Link></li>
                                        <li><Link href="/error">404 Error</Link></li>
                                    </ul>
                                    <button className={isActive.key == 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button>
                                </li> */}
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="services">Services</Link>
                                    {/* <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                                        <li><Link href="services">Services</Link></li>
                                        <li><Link href="services-carousel">Services Carousel</Link></li>
                                        <li><Link href="business-audit">Business Audit</Link></li>
                                        <li><Link href="business-planning">Business Planning</Link></li>
                                        <li><Link href="financial-advices">Financial Advices</Link></li>
                                        <li><Link href="tax-strategy">Tax Strategy</Link></li>
                                        <li><Link href="insurance-strategy">Insurance Strategy</Link></li>
                                        <li><Link href="start-ups">Start Ups</Link></li>
                                    </ul>
                                    <button className={isActive.key == 3 ? "expanded open" : ""} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></button> */}
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="blog">Career</Link>
                                    {/* <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                                        <li className={isActive.subMenuKey == 5 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">News Grid</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 5 ? "block" : "none"}` }}>
                                                <li><Link href="blog">No Sidebar</Link></li>
                                                <li><Link href="blog-left">Left Sidebar</Link></li>
                                                <li><Link href="blog-right">Right Sidebar</Link></li>
                                            </ul>
                                            <button className={isActive.subMenuKey == 5 ? "expanded open" : "expanded"} onClick={() => handleToggle(4, 5)}><span className="fa fa-angle-right" /></button>
                                        </li>
                                        <li className={isActive.subMenuKey == 6 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">News List One</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 6 ? "block" : "none"}` }}>
                                                <li><Link href="blog-list-1">No Sidebar</Link></li>
                                                <li><Link href="blog-list-one-left">Left Sidebar</Link></li>
                                                <li><Link href="blog-list-one-right">Right Sidebar</Link></li>
                                            </ul>
                                            <button className={isActive.subMenuKey == 6 ? "expanded open" : "expanded"} onClick={() => handleToggle(4, 6)}><span className="fa fa-angle-right" /></button>
                                        </li>
                                        <li className={isActive.subMenuKey == 7 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">News List Two</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 7 ? "block" : "none"}` }}>
                                                <li><Link href="blog-list-2">No Sidebar</Link></li>
                                                <li><Link href="blog-list-two-left">Left Sidebar</Link></li>
                                                <li><Link href="blog-list-two-right">Right Sidebar</Link></li>
                                            </ul>
                                            <button className={isActive.subMenuKey == 7 ? "expanded open" : "expanded"} onClick={() => handleToggle(4, 7)}><span className="fa fa-angle-right" /></button>
                                        </li>
                                        <li className={isActive.subMenuKey == 8 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">News List Three</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 8 ? "block" : "none"}` }}>
                                                <li><Link href="blog-list-3">No Sidebar</Link></li>
                                                <li><Link href="blog-list-three-left">Left Sidebar</Link></li>
                                                <li><Link href="blog-list-three-right">Right Sidebar</Link></li>
                                            </ul>
                                            <button className={isActive.subMenuKey == 8 ? "expanded open" : "expanded"} onClick={() => handleToggle(4, 8)}><span className="fa fa-angle-right" /></button>
                                        </li>
                                        <li><Link href="blog-carousel">News Carousel</Link></li>
                                        <li><Link href="blog-details">News details</Link></li>
                                    </ul>
                                    <button className={isActive.key == 4 ? "expanded open" : ""} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></button> */}
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:needhelp@elitecons.com">ashmitandassociates@gmail.com</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:+ 9 1 9 7 6 2 4 1 1 2 0 5">+ 9 1 9 7 6 2 4 1 1 2 0 5</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link href="#" className="fab fa-twitter"></Link>
                            <Link href="#" className="fab fa-facebook-square"></Link>
                            <Link href="#" className="fab fa-pinterest-p"></Link>
                            <Link href="#" className="fab fa-instagram"></Link>
                        </div>
                    </div>
                </div>
            </div>

          

        </>
    )
}
export default MobileMenu;
