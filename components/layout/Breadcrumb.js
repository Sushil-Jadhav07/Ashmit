import Link from "next/link"
export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
         
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/aboutpg-banner.png)' }} >
            </div>
            <div className="page-header__shape-1 float-bob-y">
                <img src="assets/images/shapes/page-header-shape-1.png" alt=""/>
            </div>
            <div className="page-header__shape-2 float-bob-x">
                <img src="assets/images/shapes/page-header-shape-2.png" alt=""/>
            </div>
            <div className="page-header__shape-3 float-bob-y">
                <img src="assets/images/shapes/page-header-shape-3.png" alt=""/>
            </div>
            <div className="page-header__shape-4 float-bob-x">
                <img src="assets/images/shapes/page-header-shape-4.png" alt=""/>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>{breadcrumbTitle}</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><Link href="/">Home</Link></li>
                        <li><span className="icon-down-arrow"></span></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>
      

        </>
    )
}
