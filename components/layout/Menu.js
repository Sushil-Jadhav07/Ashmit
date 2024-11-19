import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="main-menu__list">
                <li className="dropdown">
                    <Link href="/">Home</Link>
                    {/* <ul>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="index2">Home Two</Link></li>
                        <li><Link href="index3">Home Three</Link></li>
                        <li><Link href="index4">Home Four</Link></li>
                    </ul> */}
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                {/* <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-carousel">Team Carousel</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="portfolio">Portfolio</Link></li>
                        <li><Link href="portfolio-carousel">Portfolio Carousel</Link></li>
                        <li><Link href="portfolio-details">Portfolio Details</Link></li>
                        <li><Link href="testimonial">Testimonials</Link></li>
                        <li><Link href="testimonial-carousel">Testimonials Carousel</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="pricing-carousel">Pricing Carousel</Link></li>
                        <li><Link href="appointment">Appointment</Link></li>
                        <li><Link href="/error">404 Error</Link></li>
                    </ul>
                </li> */}
                <li className="dropdown">
                    <Link href="services">Services</Link>
                    <ul>
                        {/* <li><Link href="services">Services</Link></li>
                        <li><Link href="services-carousel">Services Carousel</Link></li> */}
                        <li><Link href="goods-service-tax">Goods & Service Tax</Link></li>
                        <li><Link href="business-planning">CFO Services</Link></li>
                        <li><Link href="financial-advices">Corporate Services</Link></li>
                        <li><Link href="tax-strategy">Financial Services</Link></li>
                        <li><Link href="audit-assurance">Audit & Assurance</Link></li>
                        <li><Link href="insurance-strategy">Accounting Services</Link></li>
                        <li><Link href="start-ups">Income Tax</Link></li>
                        <li><Link href="outsourcing">Outsourcing</Link></li>
                        <li><Link href="tds">TDS</Link></li>
                        <li><Link href="tax-representation-litigation">Tax Representation & Litigation</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="career">Career</Link>
                    {/* <ul className="sub-menu">
                        <li className="dropdown">
                            <Link href="#">News Grid</Link>
                            <ul>
                                <li><Link href="blog">No Sidebar</Link></li>
                                <li><Link href="blog-left">Left Sidebar</Link></li>
                                <li><Link href="blog-right">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">News List One</Link>
                            <ul>
                                <li><Link href="blog-list-1">No Sidebar</Link></li>
                                <li><Link href="blog-list-one-left">Left Sidebar</Link></li>
                                <li><Link href="blog-list-one-right">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">News List Two</Link>
                            <ul>
                                <li><Link href="blog-list-2">No Sidebar</Link></li>
                                <li><Link href="blog-list-two-left">Left Sidebar</Link></li>
                                <li><Link href="blog-list-two-right">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">News List Three</Link>
                            <ul>
                                <li><Link href="blog-list-3">No Sidebar</Link></li>
                                <li><Link href="blog-list-three-left">Left Sidebar</Link></li>
                                <li><Link href="blog-list-three-right">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li><Link href="blog-carousel">News Carousel</Link></li>
                        <li><Link href="blog-details">News details</Link></li>
                    </ul> */}
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
