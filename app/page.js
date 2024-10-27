
import Layout from "@/components/layout/Layout"

import About from "@/components/sections/home4/About"
import Banner from "@/components/sections/home4/Banner"
import Blog from "@/components/sections/home4/Blog"
import Features from "@/components/sections/home4/Features"
import History from "@/components/sections/home4/History"
import Industries from "@/components/sections/home4/Industries"
import Team from "@/components/sections/home4/Team"
import Services from "@/components/sections/home4/Services"
import Feature from "@/components/sections/home1/Feature"


export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={3}>
                <Banner />
                <About />
                <Features />
                <Industries />
                <Services />
                <Feature/>
            
            </Layout>
        </>
    )
}