import Link from "next/link";

export default function Industries() {
  return (
    <>
      {/*Industries Served Start*/}
      <section className="industries-served">
        <div className="container">
          <div className="industries-served__top">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="industries-served__left">
                  <div className="section-title-three text-center text-lg-start">
                    <div className="section-title-three__tagline-box">
                      <p className="section-title-three__tagline">Industries</p>
                    </div>
                    <h2 className="section-title-three__title">
                      Industry Experience
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="industries-served__right">
                  <p className="industries-served__text">
                    Ashmit since 2011 have catered to wide field of clients like
                    Insurance & Investment Advisory, NBFC, Manufacturing &
                    Traders, Service Oriented businesses, Ecommerce.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="industries-served__bottom">
            <div className="row">
              {/*Industries Served Single Start*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="industries-served__single">
                  <div className="industries-served__inner">
                    <div className="industries-served__icon">
                      <span className="icon-bank-building"></span>
                    </div>
                    <h3 className="industries-served__title">
                      <Link href="business-planning">
                      Accounting
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Industries Served Single End*/}
              {/*Industries Served Single Start*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="industries-served__single">
                  <div className="industries-served__inner">
                    <div className="industries-served__icon">
                      <span className="icon-icon-business-audit"></span>
                    </div>
                    <h3 className="industries-served__title">
                      <Link href="business-audit">
                      Audit & Assurance
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Industries Served Single End*/}
              {/*Industries Served Single Start*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="industries-served__single">
                  <div className="industries-served__inner">
                    <div className="industries-served__icon">
                      <span className="icon-financial-advice"></span>
                    </div>
                    <h3 className="industries-served__title">
                      <Link href="tax-strategy">
                      Taxation
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Industries Served Single End*/}
              {/*Industries Served Single Start*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="industries-served__single">
                  <div className="industries-served__inner">
                    <div className="industries-served__icon">
                      <span className="icon-icon-insurance-strategy"></span>
                    </div>
                    <h3 className="industries-served__title">
                      <Link href="insurance-strategy">
                      Business Planning <br/>
                      & Structuring
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Industries Served Single End*/}
              {/*Industries Served Single Start*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="industries-served__single">
                  <div className="industries-served__inner">
                    <div className="industries-served__icon">
                      <span className="icon-icon-start-ups"></span>
                    </div>
                    <h3 className="industries-served__title">
                      <Link href="financial-advices">
                      Litigation
                      Support
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/*Industries Served Single End*/}
              {/*Industries Served Single Start*/}
              {/* <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="industries-served__single">
                  <div className="industries-served__inner">
                    <div className="industries-served__icon">
                      <span
                        className="icon-icon-manage-investment
                                        "
                      ></span>
                    </div>
                    <h3 className="industries-served__title">
                      <Link href="tax-strategy">
                        Manage &<br />
                        Investment
                      </Link>
                    </h3>
                  </div>
                </div>
              </div> */}
              {/*Industries Served Single End*/}
            </div>
          </div>
        </div>
      </section>
      {/*Industries Served  End*/}
    </>
  );
}
