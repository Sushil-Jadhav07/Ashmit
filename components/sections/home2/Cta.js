import Link from "next/link"


export default function Cta() {
    return (
        <>
        
        <section className="cta-two">
            <div className="container">
                <div className="cta-two__inner">
                    <div className="cta-two__shape-1 img-bounce">
                        <img src="assets/images/shapes/cta-two-shape-1.png" alt=""/>
                    </div>
                    <div className="cta-two__shape-2 float-bob-y">
                        <img src="assets/images/shapes/cta-two-shape-2.png" alt=""/>
                    </div>
                    <h3 className="cta-two__title">Sign up for our newsletter to receive<br/> special offers, news, and more!
                    </h3>
                    <form className="cta-two__form">
                        <div className="cta-two__input-box">
                            <input type="email" placeholder="Enter your email" name="email"/>
                            <button type="submit" className="cta-two__btn thm-btn-two">Subscribe</button>
                        </div>
                    </form>
                    <div className="checked-box">
                        <input type="checkbox" name="skipper1" id="skipper"/>
                        <label><span className="icon-down-arrow"></span>I agree to 
                        <Link href="about">Privacy Policy</Link> and <Link href="about">Term of Conditions.</Link></label>
                    </div>
                </div>
            </div>
        </section>
       
        </>
    )
}
