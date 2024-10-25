import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="News Details">
    
        <section className="news-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="news-details__left">
                            <div className="news-details__img">
                                <img src="assets/images/blog/news-details-img-1.jpg" alt=""/>
                            </div>
                            <div className="news-details__author-and-meta">
                                <div className="news-details__author">
                                    <div className="news-details__author-img">
                                        <img src="assets/images/blog/news-details-author-img.jpg" alt=""/>
                                    </div>
                                    <p className="news-details__author-name">Jaxson Geidt</p>
                                </div>
                                <div className="news-details__meta">
                                    <p><span className="fas fa-calendar"></span>10 Oct, 2022</p>
                                    <p><span className="fas fa-tag"></span>Business Consulting</p>
                                </div>
                            </div>
                            <h3 className="news-details__title-1">We would love to share a similar experience</h3>
                            <p className="news-details__text-1">I believe in the power of design.</p>
                            <p className="news-details__text-2">Design brings ideas, messages, and emotions to life. Design
                                helps us communicate and connect in purpose-filled ways. Design influences what we think
                                and feel. Design informs the decisions we make. At our core, we all seek purpose. Many
                                of us want our daily decisions to help make the world a better place.</p>
                            <p className="news-details__text-3">Organizations that aspire to benefit humanity touch us. They
                                galvanize communities dedicated to good. Sometimes, they even launch extraordinary
                                movements.</p>
                            <div className="news-details__text-box">
                                <div className="news-details__quote">
                                    <span className="icon-quote11"></span>
                                </div>
                                <p>“We can easily manage if we will only take, each day, the burden appointed to it. But
                                    the load will be too heavy for us if we carry yesterday’s burden over again today,
                                    and then add the burden of the morrow.”</p>
                                <span>Bailey Dobson</span>
                            </div>
                            <h3 className="news-details__title-2">Discovering the power of purpose</h3>
                            <p className="news-details__text-4">It feels incredible to work for an organization focused on
                                solving a problem you deeply understand.</p>
                            <p className="news-details__text-5">When I first moved to Israel, I began working with an
                                organization that helps new immigrants find professional success by providing education
                                about the job market, courses, networking, and introductions to major companies. Our
                                goal was to create a new strategy and website that met their audience’s many needs.</p>
                            <p className="news-details__text-6">It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                opposed to using 'Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy.</p>
                            <div className="news-details__img-2">
                                <img src="assets/images/blog/news-details-img-2.jpg" alt=""/>
                            </div>
                            <h3 className="news-details__title-3">The power of designing for good</h3>
                            <p className="news-details__text-7">It feels incredible to work for an organization focused on
                                solving a problem you deeply understand.</p>
                            <p className="news-details__text-8">When I first moved to Israel, I began working with an
                                organization that helps new immigrants find professional success by providing education
                                about the job market, courses, networking, and introductions to major companies. Our
                                goal was to create a new strategy and website that met their audience’s many needs.</p>
                            <p className="news-details__text-9">It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                opposed to using 'Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy.</p>
                            <p className="news-details__text-10">And ever since then, we at Verticalloop have embraced our
                                mission to “design for good.”</p>
                            <div className="news-details__tag-and-social">
                                <div className="news-details__tag">
                                    <span>Tags:</span>
                                    <Link href="news-details">Design</Link>
                                    <Link href="news-details">Branding</Link>
                                    <Link href="news-details">Agency</Link>
                                </div>
                                <div className="news-details__social">
                                    <span>Share on:</span>
                                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                    <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="news-details__bottom">
                            <div className="news-details__comment-and-form">
                                <div className="comment-one">
                                    <h3 className="comment-one__title">3 Comments</h3>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src="assets/images/blog/comment-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Issac Wise</h3>
                                            <span>Jan 01, 2021at 2:14 pm</span>
                                            <p>Wouldn’t it be better practice to use get_the_title(..) in this case?
                                                directly accessing the post object’s data member would bypass applying
                                                filters and enforcing protected and private settings, unless that’s
                                                explicitly desired.</p>
                                        </div>
                                        <Link href="news-details" className="comment-one__btn">Reply<span
                                                className="icon-right-arrow1"></span></Link>
                                    </div>
                                    <div className="comment-one__single comment-one__single-2">
                                        <div className="comment-one__image">
                                            <img src="assets/images/blog/comment-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Ellen Ibarra</h3>
                                            <span>October 13, 2020</span>
                                            <p>Thenks Demo User for Wouldn’t it be better practice to use get_the_title.
                                            </p>
                                        </div>
                                        <Link href="news-details" className="comment-one__btn">Reply<span
                                                className="icon-right-arrow1"></span></Link>
                                    </div>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src="assets/images/blog/comment-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Tisa Person</h3>
                                            <span>October 13, 2020</span>
                                            <p>Wouldn’t it be better practice to use get_the_title(..) in this case?
                                                directly accessing the post object’s data member would bypass applying
                                                filters and enforcing protected and private settings, unless that’s
                                                explicitly desired.</p>
                                        </div>
                                        <Link href="news-details" className="comment-one__btn">Reply<span
                                                className="icon-right-arrow1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h3 className="comment-form__title">Leave a Reply </h3>
                                <p className="comment-form__text">Your email address will not be published. Required fields
                                    are marked *</p>
                                <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <div className="comment-form__input-box-name">
                                                    <p>Full Name</p>
                                                </div>
                                                <input type="text" placeholder="Type here" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <div className="comment-form__input-box-name">
                                                    <p>Email Address</p>
                                                </div>
                                                <input type="email" placeholder="Email" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box">
                                                <div className="comment-form__input-box-name">
                                                    <p>Website</p>
                                                </div>
                                                <input type="text" placeholder="Website (Optional)" name="website"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <div className="comment-form__input-box-name">
                                                    <p>Comment type</p>
                                                </div>
                                                <textarea name="message" placeholder="Comment type..."></textarea>
                                            </div>
                                            <div className="checked-box">
                                                <input type="checkbox" name="skipper1" id="skipper"/>
                                                <label><span></span>Save my name, email, and website in
                                                    this browser
                                                    for the next time I comment.</label>
                                            </div>
                                            <div className="comment-form__btn-box">
                                                <button type="submit" className="comment-form__btn">Post Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                        <h3 className="news-details__title-4">Related Posts</h3>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-7.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">We would love to share
                                                a similar experience</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span
                                                    className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="news-three__single">
                                    <div className="news-three__img-box">
                                        <div className="news-three__img">
                                            <img src="assets/images/blog/news-page-1-10.jpg" alt=""/>
                                        </div>
                                        <div className="news-three__date">
                                            <p>24 </p>
                                            <span>Sep 22</span>
                                        </div>
                                    </div>
                                    <div className="news-three__content">
                                        <ul className="news-three__meta list-unstyled">
                                            <li>
                                                <p><span className="icon-user"></span>Admin</p>
                                            </li>
                                            <li>
                                                <p><span className="icon-chat"></span>8 Comments</p>
                                            </li>
                                        </ul>
                                        <h3 className="news-three__title"><Link href="news-details">Irure dolor in
                                                reprehenderit in voluptate velit esse</Link></h3>
                                        <p className="news-three__text">Lorem Ipsum is simply dummy text of the printing
                                            and
                                            typesetting industry.</p>
                                        <div className="news-three__btn">
                                            <Link href="news-details">Learn More<span
                                                    className="icon-right-arrow1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Search Here</h3>
                                </div>
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Enter Keyword"/>
                                    <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div className="sidebar__single sidebar__category">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Categories</h3>
                                </div>
                                <ul className="sidebar__category-list list-unstyled">
                                    <li>
                                        <Link href="news-details">Business Consulting<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="news-details">Strategy Growth<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="news-details">Finance Solutions<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="news-details">Text Management<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="news-details">Investment<span
                                                className="icon-right-arrow1"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__post">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Recent Post</h3>
                                </div>
                                <ul className="sidebar__post-list list-unstyled">
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/news-lp-1.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3 className="sidebar__post-title"><Link href="news-details">We would love to
                                                    share a similar experience</Link></h3>
                                            <p className="sidebar__post-date"><span className="icon-time"></span>10 Oct, 2022
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/news-lp-2.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3 className="sidebar__post-title"><Link href="news-details">We would love to
                                                    share a similar experience</Link></h3>
                                            <p className="sidebar__post-date"><span className="icon-time"></span>10 Oct, 2022
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/news-lp-3.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3 className="sidebar__post-title"><Link href="news-details">We would love to
                                                    share a similar experience</Link></h3>
                                            <p className="sidebar__post-date"><span className="icon-time"></span>10 Oct, 2022
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/news-lp-4.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3 className="sidebar__post-title"><Link href="news-details">We would love to
                                                    share a similar experience</Link></h3>
                                            <p className="sidebar__post-date"><span className="icon-time"></span>10 Oct, 2022
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__tag">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Tags</h3>
                                </div>
                                <div className="sidebar__tag-list">
                                    <Link href="news-details">Business</Link>
                                    <Link href="news-details">Services</Link>
                                    <Link href="news-details">Solution</Link>
                                    <Link href="news-details">Finance</Link>
                                    <Link href="news-details">Technolagy</Link>
                                    <Link href="news-details">Strategy</Link>
                                    <Link href="news-details">UI/UX Design</Link>
                                    <Link href="news-details">Consulting</Link>
                                </div>
                            </div>
                            <div className="sidebar__single sidebar__gallery">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Gallery</h3>
                                </div>
                                <ul className="sidebar__gallery-list list-unstyled clearfix">
                                    <li>
                                        <div className="sidebar__gallery-img">
                                            <img src="assets/images/blog/sitebar-gallery-img-1.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__gallery-img">
                                            <img src="assets/images/blog/sitebar-gallery-img-2.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__gallery-img">
                                            <img src="assets/images/blog/sitebar-gallery-img-3.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__gallery-img">
                                            <img src="assets/images/blog/sitebar-gallery-img-4.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__gallery-img">
                                            <img src="assets/images/blog/sitebar-gallery-img-5.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__gallery-img">
                                            <img src="assets/images/blog/sitebar-gallery-img-6.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                </ul>
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