import * as prismic from '@prismicio/client'
import sm from '../sm.json'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import {useEffect, useState} from "react";
import gsap from "gsap";
import Introduction from "@/components/Introduction";
import PortfolioGrid from "@/components/PortfolioGrid";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import {SliceZone} from "@prismicio/react";
import {components} from "@/slices";
import {log} from "next/dist/server/typescript/utils";


export default function Home({home, projects, skills, tools}) {

    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        setHasRendered(true);
    }, []);

    // if (typeof window !== 'undefined') {
    //     gsap.registerPlugin();
    // }

    return (
        <>
            <Head>
                <title>Arthur Vera - Portfolio</title>
                <meta name="description" content="First portfolio with Next.js"/>
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

            <Layout>
                <Banner banner={home}/>
                {/*<SliceZone slices={home.data.slices} components={components}/>*/}
                <Skills skills={skills}/>
                <PortfolioGrid projects={projects}/>
                <Tools tools={tools}/>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const client = prismic.createClient(sm.apiEndpoint)

    const home = await client.getSingle('home')
    const projects = await client.getAllByType('project')


    return {
        props: {
            skills: home.data.slices[0],
            tools: home.data.slices[1],
            home: home.data,
            projects: projects
        }
    }

}


