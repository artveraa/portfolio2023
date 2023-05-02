import styles from '@/styles/Tools.module.scss';
import React, {useEffect, useState, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SplitText} from "gsap/dist/SplitText";
import {PrismicRichText} from "@prismicio/react";
import {log} from "next/dist/server/typescript/utils";

const Tools = ({tools}) => {
	// if (typeof window !== 'undefined') {
	//     gsap.registerPlugin(ScrollTrigger, SplitText);
	// }

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
					// markers: true,
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
					tools.primary.introduction ?
						<PrismicRichText field={tools.primary.introduction}/>
						: <h2>Template tools, update me!</h2>
				}
			</h2>
			<div className={styles.toolsGrid}>
				{
					tools.items.map((tool, index) => {

						return (
							<div className={styles.tool + ' tool'} key={index}>
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
