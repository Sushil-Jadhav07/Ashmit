import Link from "next/link"
export default function Blog() {
    return (
        <>
        
        <section className="news-two">
            <div className="container">
                <h3 className="section__title-two">Busicon latest blog & news</h3>
                <div className="row">
                   
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="news-two__single">
                            <div className="news-two__img-box">
                                <div className="news-two__img">
                                    <img src="assets/images/blog/news-2-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="news-two__content">
                                <h3 className="news-two__title"><Link href="news-details">How to write a problem statement
                                        for root cause analysis</Link></h3>
                                <p className="news-two__text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry...</p>
                                <div className="news-two__btn-box">
                                    <Link href="news-details" className="news-two__btn thm-btn-two">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="news-two__single">
                            <div className="news-two__img-box">
                                <div className="news-two__img">
                                    <img src="assets/images/blog/news-2-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="news-two__content">
                                <h3 className="news-two__title"><Link href="news-details">How can i use landbook When
                                        should I use a Tag?</Link></h3>
                                <p className="news-two__text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry...</p>
                                <div className="news-two__btn-box">
                                    <Link href="news-details" className="news-two__btn thm-btn-two">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="news-two__single">
                            <div className="news-two__img-box">
                                <div className="news-two__img">
                                    <img src="assets/images/blog/news-2-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="news-two__content">
                                <h3 className="news-two__title"><Link href="news-details">Simply dummy text of the
                                        printing and
                                        typesetting</Link></h3>
                                <p className="news-two__text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry...</p>
                                <div className="news-two__btn-box">
                                    <Link href="news-details" className="news-two__btn thm-btn-two">Read More</Link>
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
