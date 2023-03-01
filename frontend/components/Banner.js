import styles from '../styles/Banner.module.scss';
import bg from '../public/images/bg.jpg';
import vera from '../public/vera.svg';
import Image from "next/image";
import {useEffect, useRef} from "react";
import gsap from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SplitText} from "gsap/dist/SplitText";


const Banner = () => {

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    }

    const introRef = useRef(null);
    const containerImgRef = useRef(null);
    const banner = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: banner.current,
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: true,
                markers: true,
                pin: true,
            },
        });

        tl.set(introRef.current, {autoAlpha: 1})

        tl.to("#navbar", {y: -100, duration: .3, ease: "power2.out"})
            .to(introRef.current, {y: 100, duration: .3, autoAlpha: 0, ease: "power2.out"})
            .to(containerImgRef.current, {scale: .7, duration: .3, ease: "power2.out"})

    }, []);



    return (
        <>
            <div className={styles.banner} ref={banner}>
                <div className={styles.imgContainer} ref={containerImgRef}>
                    <Image src={bg} alt="background" layout="fill"/>
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
            </div>
        </>
    );
}

export default Banner;