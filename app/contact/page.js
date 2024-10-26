
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Contact">
           
                {/* <section className="information">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="information__single">
                                    <div className="information__icon">
                                        <span className="icon-chat-1"></span>
                                    </div>
                                    <p className="information__text">Live Chat</p>
                                    <p className="information__number">Available 24/7</p>
                                    <Link href="" className="information__btn">Let’s Chat<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="information__single">
                                    <div className="information__icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <p className="information__text">Call Us</p>
                                    <p className="information__number"><Link href="tel:+12011234468">+1 (201) 123 4468</Link></p>
                                    <Link href="" className="information__btn">Call Us<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="information__single">
                                    <div className="information__icon">
                                        <span className="icon-gmail"></span>
                                    </div>
                                    <p className="information__text">Mail Us</p>
                                    <p className="information__number"><Link href="mailto:help@yourdomain.com">help@yourdomain.com</Link>
                                    </p>
                                    <Link href="" className="information__btn">Drop Us A Line<span
                                            className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="information__single">
                                    <div className="information__icon">
                                        <span className="icon-location-2"></span>
                                    </div>
                                    <p className="information__text">Office Address</p>
                                    <p className="information__number">915 Hill Street, USA</p>
                                    <Link href="" className="information__btn">Directions<span className="icon-right-arrow1"></span></Link>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section> */}
                
                <section className="contact-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__left">
                                    <h3 className="contact-page__title">Get in Touch</h3>
                                    <p className="contact-page__sub-title">LEAVE US A MESSAGE</p>
                                    <div className="contact-page__form-box">
                                        <form action="assets/inc/sendemail.php"
                                            className="contact-page__form contact-form-validated" >
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="contact-page__input-box">
                                                        <h3 className="contact-page__input-title">Full Name *</h3>
                                                        <input type="text" placeholder="Jhon Smith" name="name"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="contact-page__input-box">
                                                        <h3 className="contact-page__input-title">Email *</h3>
                                                        <input type="email" placeholder="e.g:" name="email"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="contact-page__input-box">
                                                        <h3 className="contact-page__input-title">Phone Number *</h3>
                                                        <input type="text" placeholder="+1 (00)" name="Phone"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="contact-page__input-box">
                                                        <h3 className="contact-page__input-title">subject*</h3>
                                                        <div className="contact-page__showing-sort">
                                                            <select className="selectpicker" aria-label="Default select example">
                                                                <option>Select ...</option>
                                                                <option value="1">Sort by popular-01</option>
                                                                <option value="2">Sort by popular-02</option>
                                                                <option value="3">Sort by popular-03</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="contact-page__input-box text-message-box">
                                                        <h3 className="contact-page__input-title">Message
                                                            <span>(Oprional)</span></h3>
                                                        <textarea name="message" placeholder="Type here..."></textarea>
                                                    </div>
                                                    <div className="contact-page__btn-box">
                                                        <button type="submit" className="thm-btn contact-page__btn"><span
                                                                className="fas fa-paper-plane"></span>SEND
                                                            MESSAGE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="result"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__right">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6942610965048!2d72.95918137520871!3d19.208551682023554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9ceb33ffadf%3A0x11f9fc4a5a571ac5!2sAshmit%20and%20Associates%20-%20Chartered%20Accountant!5e0!3m2!1sen!2sin!4v1702624068802!5m2!1sen!2sin"
                                        className="google-map__one"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        

            </Layout>
        </>
    )
}