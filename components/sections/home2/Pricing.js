'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        {/*Pricing Two Start */}
        <section className="pricing-two">
            <div className="pricing-two__shape-2 zoominout">
                <img src="assets/images/shapes/pricing-two-shape-2.png" alt=""/>
            </div>
            <div className="pricing-two__shape-3 rotate-me">
                <img src="assets/images/shapes/pricing-two-shape-3.png" alt=""/>
            </div>
            <div className="pricing-two__shape-4 rotate-me">
                <img src="assets/images/shapes/pricing-two-shape-4.png" alt=""/>
            </div>
            <div className="pricing-two__shape-5 img-bounce">
                <img src="assets/images/shapes/pricing-two-shape-5.png" alt=""/>
            </div>
            <div className="container">
                <h3 className="section__title-two">Our Best Plan For Your
                    Business </h3>
                <div className="pricing-two__save-box">
                    <div className="pricing-two__save">
                        <div className="pricing-two__shape-1">
                            <img src="assets/images/shapes/pricing-two-shape-1.png" alt=""/>
                        </div>
                        <p>Save 20%</p>
                    </div>
                </div>
                <div className="pricing-two__main-tab-box tabs-box">
                    <ul className="tab-buttons list-unstyled">
                        <li onClick={() => handleOnClick(1)} className={activeIndex == 1 ? "tab-btn active-btn tab-btn-one" : "tab-btn"}><span>Yearly</span></li>
                        <li onClick={() => handleOnClick(2)} className={activeIndex ==  2 ? "tab-btn active-btn tab-btn-two" : "tab-btn"}><span>Monthly</span></li>
                    </ul>
                    <div className="tabs-content">
                        {/*tab*/}
                        <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                            <div className="pricing-two__inner">
                                <div className="row">
                                    {/*Pricing Two Single Start*/}
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="pricing-two__single">
                                            <div className="pricing-two__single-left">
                                                <div className="pricing-two__price-box">
                                                    <p className="pricing-two__price-title">Free</p>
                                                    <h3 className="pricing-two__price">$0</h3>
                                                    <p className="pricing-two__text">Per Member , per yearly</p>
                                                </div>
                                                <div className="pricing-two__btn-box">
                                                    <Link href="price" className="thm-btn-two pricing-two__btn">Start
                                                        For Free</Link>
                                                </div>
                                            </div>
                                            <ul className="list-unstyled pricing-two__points-list">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Powerful Admin Panel</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>3 Native Android App</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Multi-Language Support</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Support via E-mail and Phone</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Support via E-mail and Phone</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*Pricing Two Single End*/}
                                    {/*Pricing Two Single Start*/}
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="pricing-two__single pricing-two__single-2">
                                            <div className="pricing-two__single-left">
                                                <div className="pricing-two__price-box">
                                                    <p className="pricing-two__price-title">Premium</p>
                                                    <h3 className="pricing-two__price">$39</h3>
                                                    <p className="pricing-two__text">Per Member , per yearly</p>
                                                </div>
                                                <div className="pricing-two__btn-box">
                                                    <Link href="price" className="thm-btn-two pricing-two__btn">Buy
                                                        Now</Link>
                                                </div>
                                            </div>
                                            <ul className="list-unstyled pricing-two__points-list">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Powerful Admin Panel</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>3 Native Android App</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Multi-Language Support</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Support via E-mail and Phone</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Support via E-mail and Phone</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*Pricing Two Single End*/}
                                </div>
                            </div>
                        </div>
                        {/*tab*/}
                        <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                            <div className="pricing-two__inner">
                                <div className="row">
                                    {/*Pricing Two Single Start*/}
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="pricing-two__single pricing-two__single-1">
                                            <div className="pricing-two__single-left">
                                                <div className="pricing-two__price-box">
                                                    <p className="pricing-two__price-title">Free</p>
                                                    <h3 className="pricing-two__price">$0</h3>
                                                    <p className="pricing-two__text">Per Member , per yearly</p>
                                                </div>
                                                <div className="pricing-two__btn-box">
                                                    <Link href="price" className="thm-btn-two pricing-two__btn">Start
                                                        For Free</Link>
                                                </div>
                                            </div>
                                            <ul className="list-unstyled pricing-two__points-list">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Powerful Admin Panel</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>3 Native Android App</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Multi-Language Support</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Support via E-mail and Phone</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Support via E-mail and Phone</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*Pricing Two Single End*/}
                                    {/*Pricing Two Single Start*/}
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="pricing-two__single pricing-two__single-2">
                                            <div className="pricing-two__single-left">
                                                <div className="pricing-two__price-box">
                                                    <p className="pricing-two__price-title">Premium</p>
                                                    <h3 className="pricing-two__price">$39</h3>
                                                    <p className="pricing-two__text">Per Member , per yearly</p>
                                                </div>
                                                <div className="pricing-two__btn-box">
                                                    <Link href="price" className="thm-btn-two pricing-two__btn">Buy
                                                        Now</Link>
                                                </div>
                                            </div>
                                            <ul className="list-unstyled pricing-two__points-list">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Powerful Admin Panel</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>3 Native Android App</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Multi-Language Support</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Support via E-mail and Phone</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Support via E-mail and Phone</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*Pricing Two Single End*/}
                                </div>
                            </div>
                        </div>
                        {/*tab*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Pricing Two End */}
        </>
    )
}
