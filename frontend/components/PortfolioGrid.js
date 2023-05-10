import styles from '@/styles/PortfolioGrid.module.scss';
import {Project} from "@/components/Project";
import {useState, useEffect, useRef} from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

const PortfolioGrid = ({projects, home}) => {

	const [hasRendered, setHasRendered] = useState(false);

	useEffect(() => {
		setHasRendered(true);
	});

	const gridRef = useRef(null);
	const gridItemRef = useRef(null);

	useEffect(() => {
		if (hasRendered) {
			const items = document.querySelectorAll('.item');


			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: items,
					start: 'top 80%',
					end: 'top -1000',
					scrub: true,
					// markers: true,
				},
			});

			items.forEach((item) => {
				gsap.set(item, {y: 100, autoAlpha: 0});
			});

			tl.to(gridRef.current, {backgroundColor: '#FFF', duration: 1, ease: "Power2.out"})
				.to(items, {y: 0, autoAlpha: 1, duration: 1.5, stagger: 1, ease: "Power2.easeInOut"})
		}
	}, [hasRendered]);

	return (
		<div className={styles.portfolioGrid} ref={gridRef}>
			{projects.map((project) => (
				<Project project={project} key={project.id}/>
			))}
			<Link className={styles.portfolioGrid__item} href={'mailto:arthurvera96@gmail.com'}>
				<div className={styles.inner}>
					<Image
						src={home.home_gif.url}
						alt={home.home_gif.url}
						width={home.home_gif.dimensions.width}
						height={home.home_gif.dimensions.height}
					/>
					<h1>Votre projet ?</h1>
				</div>
			</Link>
		</div>
	);
}

export default PortfolioGrid;
