import * as prismicH from '@prismicio/helpers'
import {createClient} from "@/prismicio";
import styles from "@/styles/Project.module.scss";
import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import {useEffect, useState, useRef} from "react";
import gsap from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const Project = ({project}) => {

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);
	}

	const [hasRendered, setHasRendered] = useState(false);

	useEffect(() => {
		setHasRendered(true);
	});

	const tagRef = useRef(null);
	const titleRef = useRef(null);
	const maskRef = useRef(null);
	const imgContainerRef = useRef(null);

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
	});


	return (
		<>
			<Layout>
				<div className={styles.projectContainer}>
					<div className={styles.projectHero}>
						<p className={styles.tag} ref={tagRef}>{project.data.category}</p>
						<h1 className={styles.title} ref={titleRef}>{project.data.title}</h1>
						<div className={styles.projectImage} ref={imgContainerRef}>
							<div className={styles.imgMask} ref={maskRef}></div>
							<img src={project.data.big_image.url}/>
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
