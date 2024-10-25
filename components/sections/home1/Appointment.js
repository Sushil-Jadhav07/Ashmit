'use client'
import Link from "next/link"



export default function Appointment() {
    
    return (
        <>
           <section className="appointment-one">
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
                                        className="appointment-one__form contact-form-validated">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="appointment-one__input-box">
                                                    <h3 className="appointment-one__input-title">Name *</h3>
                                                    <input type="text" placeholder="John Smith" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="appointment-one__input-box">
                                                    <h3 className="appointment-one__input-title">Service Type</h3>
                                                    <div className="appointment-one__showing-sort">
                                                        <select className="selectpicker"
                                                            aria-label="Default select example">
                                                            <option >Select ...</option>
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
                                                    <input type="email" placeholder="e.g:" name="email" />
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
        </section>
        </>
    )
}
