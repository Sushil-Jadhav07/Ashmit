'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function Home() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    const [isOpen, setOpen] = useState(false)

    return (
        <>
        <Layout headerStyle={4} footerStyle={3} breadcrumbTitle="Goods & Service Tax">
                
        
        <section className="services-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="services-details__left">
                            <div className="services-details__services-box">
                                <ul className="services-details__services-list list-unstyled">
                                    <li >
                                        <Link href="goods-service-tax">Goods & Service Tax<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="cfo-services">CFO Services<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="corporate-services">Corporate Services<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="financial-services">Financial Services<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="accounting-services">Accounting Services<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="income-tax">Income Tax<span 
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li >
                                        <Link href="outsourcing">Outsourcing<span 
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="tds">TDS<span 
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="tax-representation-litigation">Tax Representation & Litigation<span 
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="services-details__contact">
                                <h3 className="services-details__contact-title">Contact us</h3>
                                <ul className="services-details__contact-list list-unstyled">
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
                                        <p><Link href="tel:+13330000000">+1(333) 000-0000</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <p><Link href="mailto:example@email.com">example@email.com</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-time"></span>
                                        </div>
                                        <p>Mon - Sat: 9:00 AM - 5:00 PM
                                            <br/> Sunday Close</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="services-details__right">
                            <div className="services-details__img">
                                <img src="assets/images/services/services-details-img-1.jpg" alt=""/>
                            </div>
                            <h3 className="services-details__title-1">Goods & Service Tax</h3>
                            <p className="services-details__text-1">GST implemented from July 2017 across India. We advise many companies for GST related compliances such as:</p>
                                <ul className="services-details__points list-unstyled pt-3">
                                <li>
                                    <p>1.  Registration and Cancellation under GST Act</p>
                                </li>
                                <li>
                                    <p>2. Consultancy for maintenance of proper records.</p>
                                </li>
                                <li>
                                    <p>3. Consultancy for proper accounting for GST.</p>
                                </li>
                                <li>
                                    <p>4. Consultancy on various issues relating to GST.</p>
                                </li>
                                <li>
                                    <p>5. Compilation of data of Input Tax credit.</p>
                                </li>
                                <li>
                                    <p>6. Preparation and filing of Returns.</p>
                                </li>
                                <li>
                                    <p>7. GST Audit</p>
                                </li>
                            </ul>
                            {/* <div className="services-details__img-and-feature">
                                <div className="services-details__feature-img">
                                    <img src="assets/images/services/services-details-img-2.jpg" alt=""/>
                                    <div className="services-details__video-link">
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="services-details__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="services-details__feature">
                                    <h3 className="services-details__feature-title">Our Features:</h3>
                                    <p className="services-details__feature-text">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor.</p>
                                    <ul className="services-details__feature-points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-icon-business-consulting"></span>
                                            </div>
                                            <div className="content">
                                                <h3>Best Business consulting</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-icon-customer-support"></span>
                                            </div>
                                            <div className="content">
                                                <h3>24/7 customer support</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <h3 className="services-details__title-2">Benefits With Our Service:</h3>
                            <p className="services-details__text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p> */}
                            
                            {/* <h3 className="services-details__title-3">Our Work process</h3>
                            <div className="process-four">
                                <div className="row">
                                    
                                    <div className="col-xl-3">
                                        <div className="process-four__single">
                                            <div className="process-four__shape-1">
                                                <img src="assets/images/shapes/process-four-shape-1.png" alt=""/>
                                            </div>
                                            <div className="process-four__count"></div>
                                            <h3 className="process-four__title">Identifying Problems</h3>
                                            <p className="process-four__text">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-3">
                                        <div className="process-four__single">
                                            <div className="process-four__shape-1">
                                                <img src="assets/images/shapes/process-four-shape-1.png" alt=""/>
                                            </div>
                                            <div className="process-four__count"></div>
                                            <h3 className="process-four__title">Research Your Problem</h3>
                                            <p className="process-four__text">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-3">
                                        <div className="process-four__single">
                                            <div className="process-four__shape-1">
                                                <img src="assets/images/shapes/process-four-shape-1.png" alt=""/>
                                            </div>
                                            <div className="process-four__count"></div>
                                            <h3 className="process-four__title">Solutions Your Problem</h3>
                                            <p className="process-four__text">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-3">
                                        <div className="process-four__single">
                                            <div className="process-four__count"></div>
                                            <h3 className="process-four__title">Consultation With Experts</h3>
                                            <p className="process-four__text">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <h3 className="services-details__title-4">Frequently asked questions</h3>
                            <div className="services-details__faq">
                                <div className="accrodion-grp services-details-accrodion" data-grp-name="services-details-accrodion">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4><span>Q1.</span>What activities are done in the development?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                    running in no time. If you'd like to get a full tour of Help Scout
                                                    and
                                                    all its features, attend one of our weekly live demos or take a
                                                    video
                                                    tour.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4><span>Q2.</span>How can i use landbook When should I use a Tag?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                    running in no time. If you'd like to get a full tour of Help Scout
                                                    and
                                                    all its features, attend one of our weekly live demos or take a
                                                    video
                                                    tour.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4><span>Q3.</span>Are social media good for the business growth?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                    running in no time. If you'd like to get a full tour of Help Scout
                                                    and
                                                    all its features, attend one of our weekly live demos or take a
                                                    video
                                                    tour.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4><span>Q4.</span>How often should i work on the digital marketing?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                    running in no time. If you'd like to get a full tour of Help Scout
                                                    and
                                                    all its features, attend one of our weekly live demos or take a
                                                    video
                                                    tour.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4><span>Q5.</span>What are the different types of marketing solutions?
                                            </h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Follow these 6 steps and you’ll get your Help Scout account up and
                                                    running in no time. If you'd like to get a full tour of Help Scout
                                                    and
                                                    all its features, attend one of our weekly live demos or take a
                                                    video
                                                    tour.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        {/* <section className="appointment-one">
            <div className="appointment-one__inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="appointment-one__left">
                                <h3 className="appointment-one__title">Book a Appointment</h3>
                                <p className="appointment-one__text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="appointment-one__right">
                                <div className="appointment-one__form-box">
                                    <form action="assets/inc/sendemail.php"
                                        className="appointment-one__form contact-form-validated" >
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="appointment-one__input-box">
                                                    <h3 className="appointment-one__input-title">Name *</h3>
                                                    <input type="text" placeholder="" name="name"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="appointment-one__input-box">
                                                    <h3 className="appointment-one__input-title">Service Type</h3>
                                                    <div className="appointment-one__showing-sort">
                                                        <select className="selectpicker"
                                                            aria-label="Default select example">
                                                            <option>Select ...</option>
                                                            <option value="1">Sort by popular-01</option>
                                                            <option value="2">Sort by popular-02</option>
                                                            <option value="3">Sort by popular-03</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="appointment-one__input-box">
                                                    <h3 className="appointment-one__input-title">Email *</h3>
                                                    <input type="email" placeholder="e.g:" name="email"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="appointment-one__input-box text-message-box">
                                                    <h3 className="appointment-one__input-title">Message
                                                        <span>(Oprional)</span></h3>
                                                    <textarea name="message" placeholder="Type here..."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="appointment-one__input-box appointment-one__input-box-2">
                                                    <h3 className="appointment-one__input-title">Phone Number *</h3>
                                                    <input type="text" placeholder="+1 (00)" name="email"/>
                                                </div>
                                                <div className="appointment-one__btn-box">
                                                    <button type="submit"
                                                        className="thm-btn appointment-one__btn">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        
            </Layout>
        </>
    )
}