import * as prismic from '@prismicio/client'
import sm from '../sm.json'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import {ScrollSmoother} from "gsap/dist/ScrollSmoother";
import {useEffect} from "react";
import gsap from "gsap/dist/gsap";
import Introduction from "@/components/Introduction";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function Home({home}) {
    console.log(home.data.surname)
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollSmoother);
    }
    useEffect(() => {
        new ScrollSmoother.create({
            smooth: 1,
            effect: true,
            smoothTouch: .1,
        });
    })

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="preload"
                    href="/fonts/Mona-Sans.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
            </Head>

            <main id={'smooth-wrapper'}>
                <div id="smooth-content">
                    <Banner background={home.data.backgroundImage} introduction={home.data.introduction[0].text} surname={home.data.surname} name={home.data.name} jobPart1={home.data.job_part_1} jobPart2={home.data.job_part_2}/>
                    <PortfolioGrid/>
                </div>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const client = prismic.createClient(sm.apiEndpoint)

    const home = await client.getSingle('home')

    return {
        props: {
            home,
        }
    }

}


