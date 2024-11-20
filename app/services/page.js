"use client";

// import PortfolioFilter1 from ""
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Services from "@/components/sections/home4/Services";
import { GoLaw } from "react-icons/go";
import { MdCorporateFare } from "react-icons/md";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={3} breadcrumbTitle="Our services">
        {/*Feature Three Start */}
        {/*Feature Three Start */}
        <section className="feature-three">
            <div className="container">
                <div className="section-title-three text-center pb-5">
                    <div className="section-title-three__tagline-box">
                        <p className="section-title-three__tagline">Services</p>
                    </div>
                    {/* <h2 className="section-title-three__title">Grow Your Brand By Zeroing In On<br/> Your Target Market</h2> */}
                </div>
                <div className="row">
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-1.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span class="icon-report"></span>
                                
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="goods-service-tax">Goods & Service Tax</Link></h3>
                            <div className="feature-three__btn">
                               
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="200ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-2.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span className="icon-icon-start-ups"></span>
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="cfo-services">CFO Services</Link></h3>
                            <div className="feature-three__btn">
                               
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-3.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            
                            <span ><MdCorporateFare /></span>

                                
                            </div>

                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="corporate-services">Corporate Services</Link></h3>
                            <div className="feature-three__btn">
                               
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span className="icon-assets"></span>
                            
                                {/* <span className="icon-planning"></span> */}
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="financial-services">Financial Services</Link></h3>
                            <div className="feature-three__btn">
                                
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span className="icon-icon-business-audit"></span>
                                {/* <span className="icon-planning"></span> */}
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="audit-assurance">Audit & Assurance</Link></h3>
                            <div className="feature-three__btn">  
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span className="icon-icon-tax-strategy"></span>
                            
                                {/* <span className="icon-planning"></span> */}
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="accounting-services">Accounting Services</Link></h3>
                            <div className="feature-three__btn">  
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            
                            <span class="icon-tax-strategy11"></span>
                            
                                {/* <span className="icon-planning"></span> */}
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="income-tax">Income Tax</Link></h3>
                            <div className="feature-three__btn">  
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span class="icon-planning"></span>
                                {/* <span className="icon-planning"></span> */}
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="outsourcing">Outsourcing</Link></h3>
                            <div className="feature-three__btn">  
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span className="icon-financial-advice " ></span>
                            
                                {/* <span className="icon-planning"></span> */}
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="tds">TDS</Link></h3>
                            <div className="feature-three__btn">  
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span className="icon-bank-building"></span>
                            
                                {/* <span className="icon-planning"></span> */}
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="services-non-resident">Services for Non-resident</Link></h3>
                            <div className="feature-three__btn">  
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span class="icon-icon-customer-support"></span>
                                {/* <span className="icon-planning"></span> */}
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="other-services">Other Services</Link></h3>
                            <div className="feature-three__btn">  
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                    {/*Feature Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="feature-three__single">
                            <div className="feature-three__bg"
                                 style={{ backgroundImage: 'url(assets/images/backgrounds/feature-three-bg-4.jpg))' }} ></div>
                            <div className="feature-three__shape-1"></div>
                            <div className="feature-three__shape-2"></div>
                            <div className="feature-three__shape-3"></div>
                            <div className="feature-three__icon">
                            <span ><GoLaw/></span>
                            
                                {/* <span className="icon-planning"></span> */}
                            </div>
                            {/* <p className="feature-three__sub-title">Our Industries</p> */}
                            <h3 className="feature-three__title"><Link href="tax-representation-litigation">Tax Representation & Litigation Services</Link></h3>
                            <div className="feature-three__btn">  
                            </div>
                        </div>
                    </div>
                    {/*Feature Three Single End*/}
                </div>
                
            </div>
        </section>
        {/*Feature Three End*/}
        {/*Feature Three End*/}

        <Services />

        {/*Services Page Start*/}
        
        {/*Services Page End*/}

        {/*Process One Start */}
        
        {/*Process One End */}

        {/*Appointment One Start*/}
        
        {/*Appointment One End*/}

        
      </Layout>
    </>
  );
}
