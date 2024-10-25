'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Price">
        {/*Price Page Start*/}
        <section className="pricing-page">
            <div className="container">
                <h3 className="pricing-page-title">Offering Our Best Plan For Your
                    <br/> Business Purpose</h3>
                <div className="pricing-one__main-tab-box tabs-box">
                    <ul className="tab-buttons list-unstyled">
                        <li className={activeIndex == 1 ? "tab-btn active-btn tab-btn-one" : "tab-btn"} onClick={() => handleOnClick(1)}><span>Monthly</span></li>
                        <li onClick={() => handleOnClick(2)} className={activeIndex ==  2 ? "tab-btn active-btn tab-btn-two" : "tab-btn"}><span>Yearly</span></li>
                    </ul>
                    <div className="tabs-content">
                       {/*tab*/}
                        <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                            <div className="pricing-one__inner">
                                <div className="row">
                                   {/*Pricing Page Single Start*/}
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="pricing-one__single">
                                            <div className="pricing-one__single-inner">
                                                <div className="pricing-one__most-popular">
                                                    <p>Most Popular</p>
                                                </div>
                                                <div className="pricing-one__price-box">
                                                    <p className="pricing-one__price-title">Basic Plan</p>
                                                    <h3 className="pricing-one__price">$15<span>/montly</span></h3>
                                                    <p className="pricing-one__text">Popularised in the follower with
                                                        the etraset sheets containing.</p>
                                                </div>
                                                <ul className="list-unstyled pricing-one__points-list">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-check"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>Powerful Admin Panel
                                                            </p>
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
                                                </ul>
                                                <div className="pricing-one__btn-box">
                                                    <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                        Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   {/*Pricing Page Single End*/}
                                   {/*Pricing Page Single Start*/}
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="pricing-one__single pricing-one__single-2">
                                            <div className="pricing-one__single-inner">
                                                <div className="pricing-one__most-popular">
                                                    <p>Most Popular</p>
                                                </div>
                                                <div className="pricing-one__price-box">
                                                    <p className="pricing-one__price-title">Standard Plan</p>
                                                    <h3 className="pricing-one__price">$39<span>/montly</span></h3>
                                                    <p className="pricing-one__text">Popularised in the follower with
                                                        the etraset sheets containing.</p>
                                                </div>
                                                <ul className="list-unstyled pricing-one__points-list">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-check"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>Powerful Admin Panel
                                                            </p>
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
                                                </ul>
                                                <div className="pricing-one__btn-box">
                                                    <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                        Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   {/*Pricing Page Single End*/}
                                   {/*Pricing Page Single Start*/}
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="pricing-one__single pricing-one__single-3">
                                            <div className="pricing-one__single-inner">
                                                <div className="pricing-one__most-popular">
                                                    <p>Most Popular</p>
                                                </div>
                                                <div className="pricing-one__price-box">
                                                    <p className="pricing-one__price-title">Premium Plan</p>
                                                    <h3 className="pricing-one__price">$59<span>/montly</span></h3>
                                                    <p className="pricing-one__text">Popularised in the follower with
                                                        the etraset sheets containing.</p>
                                                </div>
                                                <ul className="list-unstyled pricing-one__points-list">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-check"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>Powerful Admin Panel
                                                            </p>
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
                                                </ul>
                                                <div className="pricing-one__btn-box">
                                                    <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                        Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   {/*Pricing Page Single End*/}
                                </div>
                            </div>
                        </div>
                       {/*tab*/}
                        <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                            <div className="pricing-one__inner">
                                <div className="row">
                                   {/*Pricing Page Single Start*/}
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="pricing-one__single">
                                            <div className="pricing-one__single-inner">
                                                <div className="pricing-one__most-popular">
                                                    <p>Most Popular</p>
                                                </div>
                                                <div className="pricing-one__price-box">
                                                    <p className="pricing-one__price-title">Basic Plan</p>
                                                    <h3 className="pricing-one__price">$15<span>/montly</span></h3>
                                                    <p className="pricing-one__text">Popularised in the follower with
                                                        the etraset sheets containing.</p>
                                                </div>
                                                <div className="pricing-one__points-box">
                                                    <ul className="list-unstyled pricing-one__points-list">
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p>Powerful Admin Panel
                                                                </p>
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
                                                    </ul>
                                                </div>
                                                <div className="pricing-one__btn-box">
                                                    <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                        Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   {/*Pricing Page Single End*/}
                                   {/*Pricing Page Single Start*/}
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="pricing-one__single pricing-one__single-2">
                                            <div className="pricing-one__single-inner">
                                                <div className="pricing-one__most-popular">
                                                    <p>Most Popular</p>
                                                </div>
                                                <div className="pricing-one__price-box">
                                                    <p className="pricing-one__price-title">Standard Plan</p>
                                                    <h3 className="pricing-one__price">$39<span>/montly</span></h3>
                                                    <p className="pricing-one__text">Popularised in the follower with
                                                        the etraset sheets containing.</p>
                                                </div>
                                                <ul className="list-unstyled pricing-one__points-list">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-check"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>Powerful Admin Panel
                                                            </p>
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
                                                </ul>
                                                <div className="pricing-one__btn-box">
                                                    <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                        Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   {/*Pricing Page Single End*/}
                                   {/*Pricing Page Single Start*/}
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="pricing-one__single pricing-one__single-3">
                                            <div className="pricing-one__single-inner">
                                                <div className="pricing-one__most-popular">
                                                    <p>Most Popular</p>
                                                </div>
                                                <div className="pricing-one__price-box">
                                                    <p className="pricing-one__price-title">Premium Plan</p>
                                                    <h3 className="pricing-one__price">$59<span>/montly</span></h3>
                                                    <p className="pricing-one__text">Popularised in the follower with
                                                        the etraset sheets containing.</p>
                                                </div>
                                                <ul className="list-unstyled pricing-one__points-list">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-check"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>Powerful Admin Panel
                                                            </p>
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
                                                </ul>
                                                <div className="pricing-one__btn-box">
                                                    <Link href="price" className="thm-btn pricing-one__btn">Buy
                                                        Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   {/*Pricing Page Single End*/}
                                </div>
                            </div>
                        </div>
                       {/*tab*/}
                    </div>
                </div>
            </div>
        </section>
       

            </Layout>
        </>
    )
}