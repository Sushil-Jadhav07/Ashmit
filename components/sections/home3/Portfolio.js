// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})
export default function Portfolio() {
    return (
        <>      

        <section className="portfolio-three">
            <div className="portfolio-three__shape-1 zoominout">
                <img src="assets/images/shapes/portfolio-three-shape-1.png" alt=""/>
            </div>
            <div className="portfolio-three__shape-2 float-bob-y">
                <img src="assets/images/shapes/portfolio-three-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title-three text-center">
                    <div className="section-title-three__tagline-box">
                        <p className="section-title-three__tagline">RECENT CASE STUDIES</p>
                    </div>
                    <h2 className="section-title-three__title">We Are Specialist For Many <br/>Consulting Cases</h2>
                </div>
                <PortfolioFilter1/>
                
            </div>
        </section>
        
        </>
    )
}
