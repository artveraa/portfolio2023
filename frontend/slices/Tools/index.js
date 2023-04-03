import styles from '@/styles/Tools.module.scss';
import React, {useEffect, useState, useRef} from "react";
import gsap from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SplitText} from "gsap/dist/SplitText";
import {PrismicRichText} from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ToolsSlice} ToolsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ToolsSlice>} ToolsProps
 * @param { ToolsProps }
 */
const Tools = ({slice}) => {
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    }

    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        setHasRendered(true);
    });

    const toolsContainer = useRef(null);

    useEffect(() => {
        const tools = document.querySelectorAll('.tool');

        if (hasRendered) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: toolsContainer.current,
                    start: 'top 80%',
                    end: 'bottom bottom',
                    scrub: 1,
                    markers: true,
                }
            });

            tools.forEach((tool) => {
                gsap.set(tool, {autoAlpha: 0, x: -70});
            })

            tl.to(tools, {autoAlpha: 1, x: 0, duration: 0.5, stagger: 1, ease: 'power2.out'});
        }
    }, [hasRendered]);


    return (
        <section className={styles.toolsContainer} ref={toolsContainer}>
            <h2>
                {
                    slice.primary.introduction ?
                        <PrismicRichText field={slice.primary.introduction}/>
                        : <h2>Template slice, update me!</h2>
                }
            </h2>
            <div className={styles.toolsGrid}>
                {
                    slice.items.map((tool) => {
                        return (
                            <div className={styles.tool + ' tool'} key={tool.title}>
                                <img src={tool.icon.url}/>
                            </div>
                        )

                    })
                }
            </div>
        </section>
    )
}

export default Tools