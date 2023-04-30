import * as prismicH from '@prismicio/helpers'
import {createClient} from "@/prismicio";
import styles from "@/styles/Project.module.scss";
import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import {useEffect, useState, useRef} from "react";
import gsap from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {ScrollSmoother} from "gsap/dist/ScrollSmoother";
import {PrismicRichText} from "@prismicio/react";
import Image from "next/image";

const Project = ({project}) => {

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    }

    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        setHasRendered(true);
    });

    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const maskRef = useRef(null);
    const imgContainerRef = useRef(null);
    const projectIntroRef = useRef(null);
    const projectBigImageRef = useRef(null);
    const projectTextRef = useRef(null);
    const projectSecondImageRef = useRef(null);
    const projectContentRef = useRef(null);

    useEffect(() => {
        if (hasRendered) {
            console.log(project)

            gsap.set('#navbar', {position: 'relative'});
            gsap.from(tagRef.current, {
                y: -100,
                autoAlpha: 0,
                duration: .5,
                ease: "power2.out"
            });
            gsap.from(titleRef.current, {
                y: -100,
                autoAlpha: 0,
                delay: .1,
                duration: .5,
                ease: "power2.out"
            });

            gsap.to(maskRef.current, {
                y: '100%',
                duration: 1,
                delay: .5,
                ease: "power2.out",

            });


        }
    }, [hasRendered]);

    useEffect(() => {
            if (hasRendered) {
                ScrollTrigger.create({
                        trigger: projectIntroRef.current,
                        start: 'top 80%',
                        end: 'bottom bottom',
                        scrub: 1,
                        // markers: true,
                    },
                    gsap.from(projectIntroRef.current, {
                        autoAlpha: 0,
                        y: 100,
                        duration: 1,
                        ease: "power2.out",
                    })
                );

                ScrollTrigger.create({
                        trigger: projectBigImageRef.current,
                        start: 'top 80%',
                        end: 'bottom bottom',
                        scrub: 1,
                        // markers: true,
                    },
                    gsap.from(projectBigImageRef.current, {
                        autoAlpha: 0,
                        y: 100,
                        duration: 1,
                        ease: "power2.out",
                    })
                );




                const contentTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: projectContentRef.current,
                        start: 'top 80%',
                        end: 'bottom bottom',
                        scrub: 1,
                        markers: true,
                    }
                });

                contentTl.from(projectSecondImageRef.current, {autoAlpha: 0, y: 100, duration: 1, ease: "power2.out",})
                    .from(projectTextRef.current, {autoAlpha: 0, y: 100, duration: 1, delay: .1, ease: "power2.out",});
            }
        }
    )
    ;


    return (
        <>
            <Layout>
                <div className={styles.projectContainer}>
                    <div className={styles.projectHero}>
                        <p className={styles.tag} ref={tagRef}>{project.data.category}</p>
                        <h1 className={styles.title} ref={titleRef}>{project.data.title}</h1>
                        <div className={styles.projectImage} ref={imgContainerRef}>
                            <div className={styles.imgMask} ref={maskRef}></div>
                            <Image
                                src={project.data.side_image.url}
                                alt={project.data.side_image.alt}
                                width={project.data.side_image.dimensions.width}
                                height={project.data.side_image.dimensions.height}
                            />

                        </div>
                    </div>

                    <div className={styles.projectIntroduction} ref={projectIntroRef}>
                        <PrismicRichText field={project.data.introduction}/>
                    </div>

                    <div className={styles.projectBigImage} ref={projectBigImageRef}>
                        <Image
                            data-speed='auto'
                            data-lag='0'
                            src={project.data.big_image.url}
                            alt={project.data.big_image.alt}
                            width={project.data.big_image.dimensions.width}
                            height={project.data.big_image.dimensions.height}
                        />
                    </div>

                    <div className={styles.projectContent} ref={projectContentRef}>
                        <div className={styles.projectSecondImageInner}>
                            <Image
                                src={project.data.second_image.url}
                                data-speed='auto'
                                data-lag='0'
                                width={project.data.second_image.dimensions.width}
                                height={project.data.second_image.dimensions.height}
                                alt={project.data.second_image.alt}
                            />
                        </div>
                        <div className={styles.projectText}>
                            <PrismicRichText field={project.data.content}/>
                        </div>
                    </div>
                </div>
            </Layout>
        </>

    )


}

export default Project;


export async function getStaticProps({params, previewData}) {
    const client = createClient({previewData});

    const project = await client.getByUID("project", params.uid);


    return {
        props: {
            project,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const projects = await client.getAllByType("project");

    return {
        paths: projects.map((project) => prismicH.asLink(project)),
        fallback: false,
    };
}
