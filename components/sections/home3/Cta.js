import Link from "next/link"


export default function Cta() {
    return (
        <>
        
        
        <section className="cta-three">
            <div className="cta-three__shape-2 float-bob-x">
                <img src="assets/images/shapes/cta-three-shape-2.png" alt=""/>
            </div>
            <div className="cta-three__shape-3 float-bob-y">
                <img src="assets/images/shapes/cta-three-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="cta-three__left">
                            <h3 className="cta-three__title">Request a Schedule For
                                <br/> Free Consultation</h3>
                            <div className="cta-three__btn">
                                <Link href="about">Request a Scheduel<span className="icon-right-arrow-11"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="cta-three__right">
                            <div className="cta-three__img">
                                <img src="assets/images/resources/cta-three-img-1.png" alt=""/>
                                <div className="cta-three__img-2">
                                    <img src="assets/images/resources/cta-three-img-2.png" alt=""/>
                                </div>
                                <div className="cta-three__shape-1 shape-mover">
                                    <img src="assets/images/shapes/cta-three-shape-1.png" alt=""/>
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
