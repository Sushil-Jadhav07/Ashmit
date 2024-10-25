'use client'
import Link from "next/link"



export default function Appointment() {
    
    return (
        <>
       
        <section className="appointment-two">
            <div className="appointment-two__shape-2 float-bob-x">
                <img src="assets/images/shapes/appointment-two-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="appointment-two__left">
                            <div className="appointment-two__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/appointment-two-img-1.jpg" alt=""/>
                                <div className="appointment-two__shape-1 float-bob-y">
                                    <img src="assets/images/shapes/appointment-two-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="appointment-two__right">
                            <h3 className="appointment-two__section-title">Book a Appointment</h3>
                            <p className="appointment-two__text">Perfect Solution for your company</p>
                            <div className="appointment-two__form-box">
                                <form action="assets/inc/sendemail.php"
                                    className="appointment-two__form contact-form-validated">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="appointment-two__input-box">
                                                <h3 className="appointment-two__input-title">Name *</h3>
                                                <input type="text" placeholder="John Smith" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="appointment-two__input-box">
                                                <h3 className="appointment-two__input-title">Email *</h3>
                                                <input type="email" placeholder="Email Address" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="appointment-two__input-box text-message-box">
                                                <h3 className="appointment-two__input-title">Message
                                                    <span>(Oprional)</span></h3>
                                                <textarea name="message" placeholder="Type here..."></textarea>
                                                <div className="appointment-two__btn-box">
                                                    <button type="submit" className="thm-btn-two appointment-two__btn">Let's
                                                        Quote</button>
                                                </div>
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
        </section>
      
        
        </>
    )
}
