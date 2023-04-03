import styles from '@/styles/PortfolioGrid.module.scss';
import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SplitText} from "gsap/dist/SplitText";
import Link from "next/link";


const PortfolioGrid = ({slice}) => {

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    }

    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        setHasRendered(true);
    });

    const gridRef = useRef(null);
    const gridItemRef = useRef(null);

    useEffect(() => {
        if (hasRendered) {
            const items = gridRef.current.querySelectorAll('.item');

            console.log(slice)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top bottom',
                    end: 'top -=1000',
                    scrub: true,
                    markers: true,
                },
            });

            items.forEach((item) => {
                gsap.set(item, {y: 150, autoAlpha: 0});
            });

            tl.to(items, {y: 0, autoAlpha: 1, duration: 1.5, stagger: 1, ease: "Power2.easeInOut"})
        }
    }, [hasRendered]);


    return (
        <>
            <h2>Projects</h2>
            <div className={styles.portfolioGrid} ref={gridRef}>
                {
                    slice.items.map((project) => {
                        return (

                            <Link key={project.title} href={`projets/${project.uid}`}
                                  className={styles.portfolioGrid__item + ' item'}
                                  ref={gridItemRef}>
                                <div className={styles.inner}>
                                    <img src={project.main_image.url} alt=""/>
                                    <h3>{project.title}</h3>
                                </div>
                            </Link>

                        )

                    })
                }
            </div>
        </>
    );
}

export default PortfolioGrid;
