// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter2 = dynamic(() => import('@/components/elements/PortfolioFilter2'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Portfolio Classic">
                {/*Portfolio Page Start*/}
                <section className="portfolio-page">
                    <div className="container">
                        <div className="portfolio-page__top">
                            <div className="portfolio-page__showing-box">
                                <span className="portfolio-page__showing-title">Short by:</span>
                                <div className="portfolio-page__showing-sort">
                                    <select className="selectpicker" aria-label="Default select example">
                                        <option>New project</option>
                                        <option value="1">Sort by popular-01</option>
                                        <option value="2">Sort by popular-02</option>
                                        <option value="3">Sort by popular-03</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <PortfolioFilter2/>
                    </div>
                </section>
                {/*Portfolio Page End*/}

                {/*Cta Four Start*/}
                <section className="cta-four">
                    <div className="container">
                        <div className="cta-four__inner">
                            <div className="cta-four__bg float-bob-x"
                                style={{ backgroundImage: 'url(assets/images/backgrounds/cta-four-bg.png)' }} >
                            </div>
                            <h3 className="cta-four__title">Let's discuss how can we help <br/> make your Business better</h3>
                            <div className="cta-four__btn-box">
                                <Link href="about" className="cta-four__btn thm-btn">Let's Together Quotes</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Cta Four End*/}

            </Layout>
        </>
    )
}