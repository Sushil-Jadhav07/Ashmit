import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Appointment">
                
                <section className="appointment-page">
                    <div className="container">
                        <div className="appointment-page__top">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="appointment-page__top-left">
                                        <h3 className="appointment-page__top-title">Talk With expert <br/> Peoples</h3>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="appointment-page__top-right">
                                        <p className="appointment-page__top-text">Excepteur Sint Occaecat Cupidatat Non Proident,
                                            Sunt In Coulpa Qui Official Modeserunt Mollit Anim Id Est Laborum 20 Years
                                            Experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                            aute irure dolor in reprehenderit in voluptate velit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="appointment-page__bottom">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5">
                                    <div className="appointment-page__left">
                                        <div className="appointment-page__img">
                                            <img src="assets/images/resources/appointment-page-img-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7">
                                    <div className="appointment-page__right">
                                        <div className="appointment-page__form-box">
                                            <h3 className="appointment-page__title">Book a Appointment</h3>
                                            <p className="appointment-page__text">Lorem Ipsum is simply dummy text of the printing
                                                and typesetting industry.</p>
                                            <form action="assets/inc/sendemail.php"
                                                className="appointment-page__form contact-form-validated" >
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="appointment-page__input-box">
                                                            <h3 className="appointment-page__input-title">Name *</h3>
                                                            <input type="text" placeholder="John Smith" name="name"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="appointment-page__input-box">
                                                            <h3 className="appointment-page__input-title">Email *</h3>
                                                            <input type="email" placeholder="e.g:" name="email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="appointment-page__input-box">
                                                            <h3 className="appointment-page__input-title">Phone Number *</h3>
                                                            <input type="text" placeholder="+1 (00)" name="email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="appointment-page__input-box">
                                                            <h3 className="appointment-page__input-title">Service Type</h3>
                                                            <div className="appointment-page__showing-sort">
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
                                                    <div className="col-xl-3">
                                                        <div className="appointment-page__input-box">
                                                            <h3 className="appointment-page__input-title">Date *</h3>
                                                            <input type="text" name="date" placeholder="DD/MM/YYYY"
                                                                id="datepicker"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3">
                                                        <div className="appointment-page__input-box">
                                                            <h3 className="appointment-page__input-title">Time *</h3>
                                                            <input type="text" name="time" placeholder="Select time"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="appointment-page__input-box text-message-box">
                                                            <h3 className="appointment-page__input-title">Message
                                                                <span>(Oprional)</span></h3>
                                                            <textarea name="message" placeholder="Type here..."></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="appointment-page__btn-box">
                                                            <button type="submit"
                                                                className="thm-btn appointment-page__btn">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        

            </Layout>
        </>
    )
}