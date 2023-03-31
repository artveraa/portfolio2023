import {PrismicText, PrismicLink} from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import styles from '@/styles/PortfolioGrid.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Project = ({project}) => {

	return (
		<div className={styles.portfolioGrid__item + ' item'}>
			<Link href={`projets/${project.uid}`}>
				<div className={styles.inner}>
					<h1>{project.data.title}</h1>
					<img src={project.data.thumbnail.url}/>
					{/*<Image src={project.data.thumbnail.url} width={project.data.thumbnail.dimensions.width} height={project.data.thumbnail.dimensions.height} alt={project.data.thumbnail.alt}/>*/}
				</div>
			</Link>
		</div>
	);
}
