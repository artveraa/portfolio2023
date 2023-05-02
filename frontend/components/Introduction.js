import styles from '../styles/Introduction.module.scss';
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SplitText} from "gsap/dist/SplitText";
import Image from "next/image";
import bg from '../public/images/bg.jpg';

const Introduction = (props) => {
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    }


    const introductionRef = useRef(null);
    const introductionContainerRef = useRef(null);
    const introductionTextRef = useRef(null);
    const introductionGridRef = useRef(null);
    const bigImgRef = useRef(null);
    const smallPRef = useRef(null);
    const rightContentRef = useRef(null);
    const twoImagesContainerRef = useRef(null);
    const firstImgRef = useRef(null);
    const secondImgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: introductionGridRef.current,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
                markers: true,
            }
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: twoImagesContainerRef.current,
                start: 'top 80%',
                end: 'top top',
                scrub: true,
                markers: true,
            }
        });

        //gsap.set(twoImagesContainerRef.current, {y: 100, autoAlpha: 0});
        gsap.set(firstImgRef.current, {y: 200, autoAlpha: .5});
        gsap.set(secondImgRef.current, {y: 300, autoAlpha: .5});

        tl.to(bigImgRef.current, {width: '40%', duration: 1}, "-=.3")
            .to(rightContentRef.current, {width: '60%', duration: 1}, "-=.3")

        tl2.to(firstImgRef.current, {y: 0, duration: 1, autoAlpha: 1}, )
            .to(secondImgRef.current, {y: 0, duration: 1, autoAlpha: 1}, "-=.8")

        // to(twoImagesContainerRef.current, {y: 0, duration: 1, autoAlpha: 1}, "-=.3")
    });


    return (
        <div className={styles.introduction} ref={introductionRef}>
            <div className={styles.introductionContainer} ref={introductionContainerRef}>
                <div className={styles.introductionText} ref={introductionTextRef}>
                    {props.introduction}
                </div>

                <div className={styles.introductionGrid} ref={introductionGridRef}>
                    <div className={styles.bigImg} ref={bigImgRef}>
                        <Image src={bg} alt="background" layout="fill"/>
                    </div>

                    <div className={styles.rightContent} ref={rightContentRef}>
                        <div className={styles.smallP} ref={smallPRef}>
                            I am excited to continue exploring new exciting opportunities in the field of web
                            development.
                        </div>
                        <div className={styles.twoImagesContainer} ref={twoImagesContainerRef}>
                            <div className={styles.firstImg} ref={firstImgRef}>
                                <Image src={bg} alt=""/>
                            </div>
                            <div className={styles.secondImg} ref={secondImgRef}>
                                <Image src={bg} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>

    );

}

export default Introduction;