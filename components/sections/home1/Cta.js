import Link from "next/link"


export default function Cta() {
    return (
        <>
          
        <section className="cta-one">
            <div className="cta-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/cta-one-shape-1.png" alt=""/>
            </div>
            <div className="cta-one__shape-2 float-bob-y">
                <img src="assets/images/shapes/cta-one-shape-2.png" alt=""/>
            </div>
            <div className="cta-one__shape-3 shape-mover">
                <img src="assets/images/shapes/cta-one-shape-3.png" alt=""/>
            </div>
            <div className="cta-one__shape-4 img-bounce">
                <img src="assets/images/shapes/cta-one-shape-4.png" alt=""/>
            </div>
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__title-box">
                        <h3 className="cta-one__title">Let's discuss how can we help <br/> make your Business better</h3>
                        <p className="cta-one__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem <br/> Ipsum has been the industry's standard dummy</p>
                    </div>
                    <div className="cta-one__btn-box">
                        <Link href="about" className="cta-one__btn thm-btn">Let's Together Quotes</Link>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
