
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Appointment from "@/components/sections/home2/Appointment"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Brand from "@/components/sections/home2/Brand"
import Cta from "@/components/sections/home2/Cta"
import Faq from "@/components/sections/home2/Faq"
import Funfacts from "@/components/sections/home2/Funfacts"
import Portfolio from "@/components/sections/home2/Portfolio"
import Pricing from "@/components/sections/home2/Pricing"
import Process from "@/components/sections/home2/Process"
import Quote from "@/components/sections/home2/Quote"
import Services from "@/components/sections/home2/Services"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <About />
                <Services />
                <Funfacts />
                <Portfolio />
                <Appointment />
                <Process />
                <Pricing />
                <Testimonial />
                <Brand />
                <Team />
                <Faq />
                <Blog />
                <Cta />
            </Layout>
        </>
    )
}