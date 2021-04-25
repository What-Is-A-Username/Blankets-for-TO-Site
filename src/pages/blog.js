import React from 'react'
import { graphql, navigate, navigateTo } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticleEntry from '../components/blog-list'
import SEO from '../components/SEO'
import QueryString from 'query-string'
import { SearchTools } from '../components/tag'
import styles from '../page-styles/blog.module.css'
import { search } from 'core-js/fn/symbol'
import { addLocale } from 'core-js'
import { clamp, filter, range } from 'lodash'
import { ceil } from 'lodash'
import PageControls from '../components/page-controls'


class BlogIndex extends React.Component {

	

	render() {
		const posts = get(this, 'props.data.allContentfulBlogPost.edges')
		let filteredPosts = [] 
		let visiblePosts = []
		const searchQuery = get(this, 'props.location.search');
		const searchParams = QueryString.parse(searchQuery);
		const postsPerPage = 10;
		let numberOfPages = 1;

		var allTags = []
		posts.forEach(post => allTags = allTags.concat(post.node.tags));
		const uniqueTags = allTags.filter((t, i, s) => s.indexOf(t) === i);

		if (searchParams['tags'] === undefined) searchParams['tags'] = [];
		else if (typeof (searchParams['tags']) === 'string') searchParams['tags'] = [searchParams['tags']]
		if (searchParams['sort'] === undefined || typeof (searchParams['sort']) !== 'string') searchParams['sort'] = 'recent';
		searchParams.tags = searchParams.tags.filter(tag => uniqueTags.includes(tag));
		if (searchParams['page'] === undefined || typeof (searchParams['page']) !== 'string') searchParams['page'] = "1"; 
		searchParams.page = parseInt(searchParams.page); 

		const meetsFilter = (post) => {
			if (searchParams.tags.length == 0) return true;
			for (var i = 0; i < searchParams.tags.length; i++)
				if (!post.tags.includes(searchParams.tags[i])) return false;
			return true;
		}

		const comparePosts = (a, b) => {
			a = a.node; b = b.node;
			if (searchParams.sort === 'recent')
				return b.publishDateValue.localeCompare(a.publishDateValue);
			else if (searchParams.sort === 'oldest')
				return a.publishDateValue.localeCompare(b.publishDateValue);
			if (searchParams.sort === 'titleaz')
				return a.title.localeCompare(b.title);
			else if (searchParams.sort === 'titleza')
				return b.title.localeCompare(a.title);
			else
				return 0;
		}

		const filterPages = (filteredAndSortedPosts) => {
			return filteredAndSortedPosts.filter((node, index) => node !== undefined && (searchParams.page-1) * postsPerPage <= index && index < (searchParams.page) * postsPerPage)
		}

		const filterAndSort = (allPosts) => {
			return allPosts.filter(({ node }) => meetsFilter(node)).sort(comparePosts);
		}

		const navigateToQuery = () => {
			let new_query = `/blog/` + "?" + QueryString.stringify({ tags: searchParams.tags, sort: searchParams.sort, page: searchParams.page }, { arrayFormat: 'comma' });
			navigate(new_query);
		}

		// on change sorting method
		const onSelect = (data) => {
			searchParams.sort = data.value;
			navigateToQuery(); 
		}

		// on post tag click
		const onClickTag = (clicked) => {
			if (searchParams.tags.includes(clicked)) // if unselecting 
				searchParams.tags = searchParams.tags.filter(tag => (tag != clicked));
			else
				searchParams.tags.push(clicked);
			navigateToQuery(); 
		}

		const onPageClick = (newPage) => {
			searchParams.page = newPage;
			navigateToQuery(); 
		}

		filteredPosts = filterAndSort(posts);
		numberOfPages = ceil((filteredPosts.length)/postsPerPage);
		searchParams.page = clamp(searchParams.page, 1, numberOfPages); 		
		visiblePosts = filterPages(filteredPosts); 
		
		return (
			<Layout location={this.props.location}>
				<SEO title="Updates"
					description="Browse articles published by Blankets for T.O., including summaries of past initiatives, photos of past events, and everything else associated with us." />
				<div className="white-background">
					<div className="wrapper">
						<h2>All Updates and Articles</h2>
						<SearchTools onDropdownChange={onSelect} dropdownPlaceholder={searchParams.sort} tags={uniqueTags} clickTagFunc={onClickTag} activeTags={searchParams.tags} />
						<PageControls numPages={numberOfPages} onPageClick={onPageClick} currentPage={searchParams.page}/>
						<div className={styles.blog_list}>
							{visiblePosts.map(({ node }) => {
								return (
									<div key={node.slug}>
										<ArticleEntry article={node} />
									</div>
								)
							})}
						</div>
						<PageControls numPages={numberOfPages} onPageClick={onPageClick} currentPage={searchParams.page}/>
					</div>
				</div>
			</Layout>
		)
	}
}

export default BlogIndex

export const blogPageQuery = graphql`
	query BlogIndexQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 20, filter: {articleType: {ne: "Page"}}) {
			edges {
				node {
					title
					slug
					richTextBody {
						json
					}
					publishDateValue : publishDate
					publishDate(formatString: "MMMM Do, YYYY")      
					description {
						childMarkdownRemark {
							html
						}
					}
					tags
					imagePreview {
						fixed(
							width: 300
							height: 300
							quality: 0
							resizingBehavior: FILL
							background: "rgb:000000"
							) {
								src
							}
							description
						}
					}
				}
			}
		}
`

			//   heroImage {
			//     fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
			//       ...GatsbyContentfulFluid_tracedSVG
			//     }
			//   }