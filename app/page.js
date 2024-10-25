import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Feature from "@/components/sections/home1/Feature"
import Funfacts from "@/components/sections/home1/Funfacts"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Service from "@/components/sections/home1/Service"
import Video from "@/components/sections/home1/video"
import Brand from "@/components/sections/home1/Brand"
import Blog from "@/components/sections/home1/Blog"
import Faq from "@/components/sections/home1/Faq"
import Quote from "@/components/sections/home1/Quote"
import Testimonial from "@/components/sections/home1/Testimonial"
import Cta from "@/components/sections/home1/Cta"
import Portfolio from "@/components/sections/home1/Portfolio"
import Pricing from "@/components/sections/home1/Pricing"
import Team from "@/components/sections/home1/Team"
import News from "@/components/sections/home1/News"
import Appointment from "@/components/sections/home1/Appointment"
import Features from "@/components/sections/home1/Features"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Service />
                <Cta />
                <WhyChooseUs />
                <Portfolio />
                <Funfacts />
                <Pricing />
                <Testimonial />
                <Team />
                <Faq />
                <News />
                <Appointment />
                <Brand />
              
                
               
                
            </Layout>

        </>
    )
}