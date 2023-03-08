import styles from '../styles/Banner.module.scss';
import bg from '../public/images/bg.jpg';
import vera from '../public/vera.svg';
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SplitText} from "gsap/dist/SplitText";
import {createClient} from "next-sanity";


const Banner = ({heroData}) => {
    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        setHasRendered(true);
    }, []);

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    }

    const introRef = useRef(null);
    const containerImgRef = useRef(null);
    const banner = useRef(null);
    const leftTextRef = useRef(null);
    const surnameRef = useRef(null);
    const nameRef = useRef(null);
    const rightTextRef = useRef(null);
    const jobPart1Ref = useRef(null);
    const jobPart2Ref = useRef(null);

    useEffect(() => {
        if (hasRendered) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: banner.current,
                    start: 'bottom bottom',
                    end: '+=1000',
                    scrub: true,
                    markers: true,
                    pin: true,
                },
            });

            gsap.set(leftTextRef.current, {autoAlpha: 0, y: 100});
            gsap.set(rightTextRef.current, {autoAlpha: 0, y: 100});

            tl.to("#navbar", {y: -100, duration: .3, ease: "power2.out"})
                .to(introRef.current, {y: 100, duration: .3, autoAlpha: 0, ease: "power2.out"})
                .to(containerImgRef.current, {scale: .6, duration: .3, ease: "power2.out"})
                .to(leftTextRef.current, {y: 0, autoAlpha: 1, duration: .3, ease: "power2.out"})
                .from(surnameRef.current, {x: -20, duration: .3, ease: "power2.out"}, "-=.3")
                .from(nameRef.current, {x: 20, duration: .3, ease: "power2.out"}, "-=.3")
                .to(rightTextRef.current, {y: 0, autoAlpha: 1, duration: .3, ease: "power2.out"}, "-=.3")
                .from(jobPart1Ref.current, {x: -20, duration: .3, ease: "power2.out"}, "-=.3")
                .from(jobPart2Ref.current, {x: 20, duration: .3, ease: "power2.out"}, "-=.3")
        }

    }, [hasRendered]);


    return (
        <>
            <div className={styles.banner} ref={banner}>
                <div className={styles.imgContainer} ref={containerImgRef}>
                    <Image src={bg} alt="background" layout="fill"/>
                    {/*<video autoPlay muted loop id="myVideo">*/}
                    {/*    <source src="/videos/bg.mp4" type="video/mp4"/>*/}
                    {/*</video>*/}
                </div>
                <div className={styles.intro} ref={introRef}>
                    <div className={styles.introText}>
                        Newly graduated front-end developer based in Lyon, France. I am passionate about
                        creating attractive and functional websites, and I have expertise in programming
                        languages such as HTML, SCSS, JavaScript, as well as frameworks like React. My
                        expertise
                        also extends to accessibility, speed optimization, and cross-platform compatibility.
                    </div>
                </div>

                <div className={styles.leftTextContainer} ref={leftTextRef}>
                    <div className={styles.surname} ref={surnameRef}>
                        arthur
                    </div>
                    <div className={styles.name} ref={nameRef}>
                        vera
                    </div>
                </div>

                <div className={styles.rightTextContainer} ref={rightTextRef}>
                    <div className={styles.jobPart1} ref={jobPart1Ref}>
                        front-end
                    </div>

                    <div className={styles.jobPart2} ref={jobPart2Ref}>
                        developer
                    </div>
                </div>

            </div>
        </>
    );
}
export default Banner;

const client = createClient({
    projectId: 'vo0sd43w',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2021-10-21',
});

export async function getStaticProps() {


    const heroData = await client.fetch(`*[_type == "hero"][0]`);

    return {
        props: {
            heroData,
        },
    };
}



