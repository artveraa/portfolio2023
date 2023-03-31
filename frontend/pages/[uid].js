import * as prismicH from '@prismicio/helpers'
import { createClient } from '@/prismicio'

// Fetch content from prismic
export async function getStaticProps({ params, previewData }) {
	const client = createClient({ previewData })

	const page = await client.getByUID('page', params.uid)

	return {
		props: { page },
	}
}

// Define Paths
export async function getStaticPaths() {
	const client = createClient()

	const pages = await client.getAllByType('page')

	return {
		paths: pages.map((page) => prismicH.asLink(page)),
		fallback: true,
	}
}
