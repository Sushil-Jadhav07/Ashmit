"use client";
import Link from "next/link";
import { useState } from "react";

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {/*Services Four Start*/}
      <section className="services-four">
        <div className="container">
          <div className="services-four__top">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="services-four__left">
                  <div className="section-title-three-text-left">
                    <div className="section-title-three__tagline-box">
                      <p className="section-title-three__tagline">
                        Service Line
                      </p>
                    </div>
                    <h2 className="section-title-three__title">
                      Check Our Best Services
                    </h2>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-6 col-lg-6">
                            <div className="services-four__right">
                                <p className="services-four__text">It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </div> */}
            </div>
          </div>

          <div className="services-four__bottom">
            <div className="services-four__main-tab tabs-box">
              <ul className="tab-buttons clearfix list-unstyled">
                <li
                  className={
                    activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"
                  }
                  onClick={() => handleOnClick(1)}
                >
                  <div className="services-four__tab-buttons-single">
                    <div className="services-four__tab-buttons-icon">
                      <span className="icon-assets"></span>
                    </div>
                    <h4 className="services-four__tab-buttons-title">
                      Income Tax
                    </h4>
                  </div>
                </li>
                <li
                  className={
                    activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"
                  }
                  onClick={() => handleOnClick(2)}
                >
                  <div className="services-four__tab-buttons-single">
                    <div className="services-four__tab-buttons-icon">
                      <span className="icon-icon-tax-strategy"></span>
                    </div>
                    <h4 className="services-four__tab-buttons-title">
                      Indirect Tax
                    </h4>
                  </div>
                </li>
                <li
                  className={
                    activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"
                  }
                  onClick={() => handleOnClick(3)}
                >
                  <div className="services-four__tab-buttons-single">
                    <div className="services-four__tab-buttons-icon">
                      <span className="icon-financial-advice"></span>
                    </div>
                    <h4 className="services-four__tab-buttons-title">Audits</h4>
                  </div>
                </li>
                {/* <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                <div className="services-four__tab-buttons-single">
                                    <div className="services-four__tab-buttons-icon">
                                        <span className="icon-icon-insurance-strategy"></span>
                                    </div>
                                    <h4 className="services-four__tab-buttons-title">Insurance Strategy</h4>
                                </div>
                            </li>
                            <li className={activeIndex == 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>
                                <div className="services-four__tab-buttons-single">
                                    <div className="services-four__tab-buttons-icon">
                                        <span className="icon-icon-start-ups"></span>
                                    </div>
                                    <h4 className="services-four__tab-buttons-title">Start Ups</h4>
                                </div>
                            </li>
                            <li className={activeIndex == 6 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(6)}>
                                <div className="services-four__tab-buttons-single">
                                    <div className="services-four__tab-buttons-icon">
                                        <span className="icon-icon-manage-investment"></span>
                                    </div>
                                    <h4 className="services-four__tab-buttons-title">Manage Investment</h4>
                                </div>
                            </li> */}
              </ul>
              <div className="tabs-content">
                {/*tab*/}
                <div
                  className={
                    activeIndex == 1
                      ? "tab fadeInUp animated show active-tab"
                      : "tab fadeInUp animated"
                  }
                >
                  <div className="services-four__tab-content-box">
                    <div className="row">
                      <div className="col-xl-5 col-lg-5">
                        <div className="services-four__tab-content-left">
                          <div className="services-four__tab-content-img">
                            <img
                              src="assets/images/services/services-four-tab-content-img-1-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7">
                        <div className="services-four__tab-content-right">
                          <h3 className="services-four__tab-content-title">
                            Income Tax
                          </h3>
                          {/* <p className="services-four__tab-content-text">
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour. Follow these 6 steps and you’ll get your Help
                            Scout account up and running in no time. Follow
                            these 6 steps and you’ll get your Help Scout account
                            up and running in no time. Follow these 6 steps and
                            you’ll get your Help Scout account up and running in
                            no time. If you'd like to get a full tour of Help
                            Scout and all its features, attend one of our weekly
                            live demos or take a video tour.
                          </p> */}
                          <div className="mt-4">
                            {/* <h4 className="text-2xl font-bold mb-3 ">
                              INDIVIDUAL
                            </h4> */}
                            <ul className="list-none p-0 m-0 flex flex-wrap gap-y-2">
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Computation of Income and Income tax returns
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Tax deducted at source compliance
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Advance Tax compliances
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Litigations [Assessments, CIT(Appeals)]
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Domestic and International Tax Advisory
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Foreign remittances (filing of 15 CA & 15 CB
                                  form)
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Tax planning and Opinions
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={
                    activeIndex == 2
                      ? "tab fadeInUp animated show active-tab"
                      : "tab fadeInUp animated"
                  }
                >
                  <div className="services-four__tab-content-box">
                    <div className="row">
                      <div className="col-xl-5 col-lg-5">
                        <div className="services-four__tab-content-left">
                          <div className="services-four__tab-content-img">
                            <img
                              src="assets/images/services/services-four-tab-content-img-1-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7">
                        <div className="services-four__tab-content-right">
                          <h3 className="services-four__tab-content-title">
                            Indirect Tax
                          </h3>
                          {/* <p className="services-four__tab-content-text">
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour. Follow these 6 steps and you’ll get your Help
                            Scout account up and running in no time. Follow
                            these 6 steps and you’ll get your Help Scout account
                            up and running in no time. Follow these 6 steps and
                            you’ll get your Help Scout account up and running in
                            no time. If you'd like to get a full tour of Help
                            Scout and all its features, attend one of our weekly
                            live demos or take a video tour.
                          </p> */}

                          <div className="mt-4">
                            {/* <h4 className="text-2xl font-bold mb-3 ">
                              INDIVIDUAL
                            </h4> */}
                            <ul className="list-none p-0 m-0 flex flex-wrap gap-y-2">
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  GST Registration
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  GST Returns and Compliances
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Opinion and Planning
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Application for Refunds claims, LUT (for
                                  exports and SEZ sale), surrender of GST,
                                  Certifications
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Domestic and International Tax Advisory
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">Litigations</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={
                    activeIndex == 3
                      ? "tab fadeInUp animated show active-tab"
                      : "tab fadeInUp animated"
                  }
                >
                  <div className="services-four__tab-content-box">
                    <div className="row">
                      <div className="col-xl-5 col-lg-5">
                        <div className="services-four__tab-content-left">
                          <div className="services-four__tab-content-img">
                            <img
                              src="assets/images/services/services-four-tab-content-img-1-3.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7">
                        <div className="services-four__tab-content-right">
                          <h3 className="services-four__tab-content-title">
                            Audits
                          </h3>
                          {/* <p className="services-four__tab-content-text">
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour. Follow these 6 steps and you’ll get your Help
                            Scout account up and running in no time. Follow
                            these 6 steps and you’ll get your Help Scout account
                            up and running in no time. Follow these 6 steps and
                            you’ll get your Help Scout account up and running in
                            no time. If you'd like to get a full tour of Help
                            Scout and all its features, attend one of our weekly
                            live demos or take a video tour.
                          </p> */}
                          <div className="mt-4">
                            {/* <h4 className="text-2xl font-bold mb-3 ">
                              INDIVIDUAL
                            </h4> */}
                            <ul className="list-none p-0 m-0 flex flex-wrap gap-y-2">
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">Tax Audits</span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Tax Audits GST Audits
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Statutory Audits
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Internal and Process Audits
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">
                                  Concurrent Audits{" "}
                                </span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">Stock Audits</span>
                              </li>
                              <li className="flex items-center w-full sm:w-1/2 text-black">
                                <span className="text-sm">Certification</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={
                    activeIndex == 4
                      ? "tab fadeInUp animated show active-tab"
                      : "tab fadeInUp animated"
                  }
                >
                  <div className="services-four__tab-content-box">
                    <div className="row">
                      <div className="col-xl-5 col-lg-5">
                        <div className="services-four__tab-content-left">
                          <div className="services-four__tab-content-img">
                            <img
                              src="assets/images/services/services-four-tab-content-img-1-4.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7">
                        <div className="services-four__tab-content-right px-3">
                          <h3 className="services-four__tab-content-title">
                            Insurance Strategy
                          </h3>
                          <p className="services-four__tab-content-text">
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour. Follow these 6 steps and you’ll get your Help
                            Scout account up and running in no time. Follow
                            these 6 steps and you’ll get your Help Scout account
                            up and running in no time. Follow these 6 steps and
                            you’ll get your Help Scout account up and running in
                            no time. If you'd like to get a full tour of Help
                            Scout and all its features, attend one of our weekly
                            live demos or take a video tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={
                    activeIndex == 5
                      ? "tab fadeInUp animated show active-tab"
                      : "tab fadeInUp animated"
                  }
                >
                  <div className="services-four__tab-content-box">
                    <div className="row">
                      <div className="col-xl-5 col-lg-5">
                        <div className="services-four__tab-content-left">
                          <div className="services-four__tab-content-img">
                            <img
                              src="assets/images/services/services-four-tab-content-img-1-5.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7">
                        <div className="services-four__tab-content-right">
                          <h3 className="services-four__tab-content-title">
                            Start Ups
                          </h3>
                          <p className="services-four__tab-content-text">
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour. Follow these 6 steps and you’ll get your Help
                            Scout account up and running in no time. Follow
                            these 6 steps and you’ll get your Help Scout account
                            up and running in no time. Follow these 6 steps and
                            you’ll get your Help Scout account up and running in
                            no time. If you'd like to get a full tour of Help
                            Scout and all its features, attend one of our weekly
                            live demos or take a video tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={
                    activeIndex == 6
                      ? "tab fadeInUp animated show active-tab"
                      : "tab fadeInUp animated"
                  }
                >
                  <div className="services-four__tab-content-box">
                    <div className="row">
                      <div className="col-xl-5 col-lg-5">
                        <div className="services-four__tab-content-left">
                          <div className="services-four__tab-content-img">
                            <img
                              src="assets/images/services/services-four-tab-content-img-1-6.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7">
                        <div className="services-four__tab-content-right">
                          <h3 className="services-four__tab-content-title">
                            Manage Investment
                          </h3>
                          <p className="services-four__tab-content-text">
                            Follow these 6 steps and you’ll get your Help Scout
                            account up and running in no time. If you'd like to
                            get a full tour of Help Scout and all its features,
                            attend one of our weekly live demos or take a video
                            tour. Follow these 6 steps and you’ll get your Help
                            Scout account up and running in no time. Follow
                            these 6 steps and you’ll get your Help Scout account
                            up and running in no time. Follow these 6 steps and
                            you’ll get your Help Scout account up and running in
                            no time. If you'd like to get a full tour of Help
                            Scout and all its features, attend one of our weekly
                            live demos or take a video tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Services Four End*/}
    </>
  );
}
