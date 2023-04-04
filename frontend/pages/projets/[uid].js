import * as prismicH from '@prismicio/helpers'
import {createClient} from "@/prismicio";
import styles from "@/styles/Project.module.scss";
import Layout from "@/components/Layout";

const Projet = ({project}) => {
	return (
		<Layout>
			<h1 className={styles.title}>{project.data.title}</h1>
		</Layout>
	)


}

export default Projet;


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
