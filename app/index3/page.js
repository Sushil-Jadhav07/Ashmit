
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"

import Banner from "@/components/sections/home3/Banner"

import Funfacts from "@/components/sections/home3/Funfacts"


import Services from "@/components/sections/home3/Services"
import Portfolio from "@/components/sections/home3/Portfolio"

import Blog from "@/components/sections/home3/Blog"

import Video from "@/components/sections/home3/video"
import Testimonial from "@/components/sections/home3/Testimonial"
import Quote from "@/components/sections/home3/Quote"
import Cta from "@/components/sections/home3/Cta"
import Features from "@/components/sections/home3/Features"
import WhyChooseUs from "@/components/sections/home3/WhyChooseUs"
import Team from "@/components/sections/home3/Team"
import Brand from "@/components/sections/home3/Brand"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Features />
                <About />
                <WhyChooseUs />
                <Services />
                <Portfolio />
                <Cta />
                <Team/>
                <Testimonial />
                <Blog />
                <Brand />
                
            </Layout>
        </>
    )
}