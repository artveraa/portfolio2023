import styles from '../styles/Banner.module.scss';
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SplitText} from "gsap/dist/SplitText";


const Banner = (props) => {

    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        setHasRendered(true);
    }, []);

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    }


    const introRef = useRef(null);
    const maskRef = useRef(null);
    //const containerImgRef = useRef(null);
    const banner = useRef(null);
    const leftTextRef = useRef(null);
    const surnameRef = useRef(null);
    const nameRef = useRef(null);
    const rightTextRef = useRef(null);
    const jobPart1Ref = useRef(null);
    const jobPart2Ref = useRef(null);

    useEffect(() => {
        if (hasRendered) {
            console.log(props)

            // const tl = gsap.timeline({
            // 	once: true,
            // });
            //
            // gsap.set(containerImgRef.current, {scale: 1.2});
            // gsap.set(introRef.current, { y:100, autoAlpha: 0});
            // gsap.set('#navbar', { y:-100, autoAlpha: 0});
            //
            // tl.to(containerImgRef.current, {scale: 1, duration: 1, ease: "power2.out"})
            // .to(introRef.current, {y: 0, autoAlpha: 1, duration: 1, ease: "power2.out"}, "-=.8")
            // .to('#navbar', {y: 0, autoAlpha: 1, duration: 1, ease: "power2.out"}, "-=.8")

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: banner.current,
                    start: 'bottom bottom',
                    end: '+=1000',
                    scrub: true,
                    // markers: true,
                    pin: true,
                    pinSpacing: true,
                },
            });

            gsap.set(leftTextRef.current, {autoAlpha: 0, y: 100});
            gsap.set(rightTextRef.current, {autoAlpha: 0, y: 100});

            tl2.to("#navbar", {y: -100, duration: .3, ease: "power2.out"})
                .to(introRef.current, {y: 100, duration: .3, autoAlpha: 0, ease: "power2.out"})
                .to(maskRef.current, {width: '50%', height: '50%', duration: .3, ease: "power2.out"})
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
                <div className={styles.mask} ref={maskRef}>
                    <div className={styles.imgContainer}>
                        <img src={props.banner.backgroundImage.url} alt="background"/>
                        {/*<video autoPlay muted loop id="myVideo">*/}
                        {/*    <source src="/videos/bg.mp4" type="video/mp4"/>*/}
                        {/*</video>*/}
                    </div>

                    <div className={styles.leftTextContainer} ref={leftTextRef}>
                        <div className={styles.surname} ref={surnameRef}>
                            {props.banner.surname}
                        </div>
                        <div className={styles.name} ref={nameRef}>
                            {props.banner.name}
                        </div>
                    </div>

                    <div className={styles.rightTextContainer} ref={rightTextRef}>
                        <div className={styles.jobPart1} ref={jobPart1Ref}>
                            {props.banner.job_part_1}
                        </div>

                        <div className={styles.jobPart2} ref={jobPart2Ref}>
                            {props.banner.job_part_2}
                        </div>
                    </div>
                </div>
                <div className={styles.intro} ref={introRef}>
                    <div className={styles.introText}>
                        {props.banner.introduction[0].text}
                    </div>
                </div>



            </div>
        </>
    );
}

export default Banner;

