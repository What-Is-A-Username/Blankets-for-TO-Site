import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import SEO from '../components/SEO'

import ArticleEntry from '../components/blog-list'
import HeaderImage from '../components/header-image'
import PageControls from '../components/blog_search/page-controls'
import QueryString from 'query-string'
import SearchTools from '../components/blog_search/search-tools'

import _, { clamp, ceil } from 'lodash'
import * as styles from '../page-styles/blog.module.css'

class BlogIndex extends React.Component {

	constructor(props) {
		super(props)
		
		this.sortSettings = ['recent', 'oldest', 'titleaz', 'titleza']

		var searchParams = QueryString.parse(get(this, 'props.location.search'));
		
		// validate all tags
		this.posts = get(this, 'props.data.allContentfulBlogPost.edges')
		// get a list of unique tags
		this.uniqueTags = this.posts.map(post => post.node.tags === null ? [] : post.node.tags).flat().filter((t, i, s) => s.indexOf(t) === i);

		if (_.has(searchParams, 'tags') && _.isArray(searchParams.tags)) {
			searchParams.tags = searchParams.tags.filter(tag => this.uniqueTags.includes(tag))
		} else {
			searchParams.tags = []
		}
		if (!_.has(searchParams, 'sort') || !_.isString(searchParams.sort) || !(searchParams.sort in this.sortSettings)) {
			searchParams.sort = this.sortSettings[0]
		}
		if (_.has(searchParams, 'page') && _.isInteger(searchParams.page)) {
			searchParams.page = _.parseInt(searchParams.page, 10)
		} else {
			searchParams.page = 1
		}

		// bind event handlers
		this.meetsFilter = this.meetsFilter.bind(this)
		this.comparePosts = this.comparePosts.bind(this)
		this.onClickTag = this.onClickTag.bind(this)
		this.onSelect = this.onSelect.bind(this)
		
		// set ref to scroll to
		this.scrollRef = React.createRef()

		this.state = searchParams

		// update the page url if anything was invalid
		let new_query = `/blog/?${QueryString.stringify({ tags: this.state.tags, sort: this.state.sort, page: this.state.page }, { arrayFormat: 'comma' })}`;
		if (typeof window !== 'undefined')
			window.history.replaceState({}, '', new_query);

	}

	componentDidUpdate() {
		let new_query = `/blog/?${QueryString.stringify({ tags: this.state.tags, sort: this.state.sort, page: this.state.page }, { arrayFormat: 'comma' })}`;
		if (typeof window !== 'undefined') {
			window.history.replaceState({}, '', new_query);
			this.scrollRef.current.scrollIntoView()
		}
	}

	// determine whether the post meets the tag filter
	meetsFilter(post) {
		if (this.state.tags.length === 0) return true;
		if (post.tags === null) return false;
		for (var i = 0; i < this.state.tags.length; i++)
			if (!post.tags.includes(this.state.tags[i])) return false;
		return true;
	}
		
	// sort the posts by their title name or date depending on current settings
	comparePosts(a, b) {
		a = a.node; b = b.node;
		if (this.state.sort === 'recent')
			return b.publishDateValue.localeCompare(a.publishDateValue);
		else if (this.state.sort === 'oldest')
			return a.publishDateValue.localeCompare(b.publishDateValue);
		if (this.state.sort === 'titleaz')
			return a.title.localeCompare(b.title);
		else if (this.state.sort === 'titleza')
			return b.title.localeCompare(a.title);
		else
			return 0;
	}

	// on post tag click
	onClickTag(clicked) {
		if (this.state.tags.includes(clicked)) {
			this.setState({tags: this.state.tags.filter(old_tag => old_tag !== clicked)})
		} else {
			this.setState({tags: [...this.state.tags, clicked]})
		}
	}

	// change sorting method
	onSelect(event) {
		this.setState({sort: event.target.value, page: 1})
	}

	// update the url with the current state parameters, without reloading the page
	updateQuery() {
		let new_query = `/blog/?${QueryString.stringify({ tags: this.state.tags, sort: this.state.sort, page: this.current_page }, { arrayFormat: 'comma' })}`;
		if (typeof window !== 'undefined')
			window.history.replaceState({}, '', new_query); 
	}

	onPageClick = (newPage) => {
		this.setState({page: newPage})
	}

	render() {
		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
        const headerSubtitle = ''
        const headerTitle = 'Blankets for T.O. Blog'
		
		// sort and filter posts
		var visiblePosts = this.posts;
		visiblePosts = this.posts.filter(({ node }) => this.meetsFilter(node))
		visiblePosts = visiblePosts.sort(this.comparePosts)
		
		// calculate the pages to display
		const postsPerPage = 10
		const numberOfPages = ceil((visiblePosts.length / postsPerPage))
		var current_page = clamp(this.state.page, 1, numberOfPages)
		var pagePosts = visiblePosts.filter((n, index) => index >= (current_page - 1) * postsPerPage && index < current_page * postsPerPage)
		
		return(
			<Layout location={this.props.location}>
	 			<SEO title='Updates and Blog'
					description='Browse articles published by Blankets for T.O., including summaries of past events and informational articles about homelessness.'/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<div className='richText'>
							<p>
								Welcome to the Blankets for T.O blog, where we post updates on our recent and upcoming events as well as original articles educating the public about homelessness.
							</p>
						</div>
						<div ref={this.scrollRef}>
							<SearchTools onDropdownChange={this.onSelect} dropdownPlaceholder={this.state.sort} tags={this.uniqueTags} clickTagFunc={this.onClickTag} activeTags={this.state.tags} />
							{numberOfPages === 0 && <div>No results match your filter query.</div>}
							<PageControls numPages={numberOfPages} onPageClick={this.onPageClick} currentPage={current_page}/>
							<div className={styles.blog_list}>
								{pagePosts.map(({node}, i) => {
									return (
										<div key={node.slug}>
											<ArticleEntry article={node} />
										</div>
									)
								})}
							</div>
							<PageControls numPages={numberOfPages} onPageClick={this.onPageClick} currentPage={current_page}/>
						</div>
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
		allContentfulHeaderImage(filter: {pageName: {eq: "Blog"}}, limit: 1) {
            nodes {
				image {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
				}
			}
		}
		allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, filter: {articleType: {ne: "Page"}, previewOnly: {ne: true}},) {
			edges {
				node {
					title
					slug
					richTextBody {
						raw
					}
					publishDateValue : publishDate
					publishDate(formatString: "MMMM Do, YYYY")      
					description {
						childMarkdownRemark {
							html
						}
					}
					articleType
					authorName
					tags
					imagePreview {
						description
						gatsbyImageData(
							width: 400,
							height: 400,
							layout: CONSTRAINED	
							placeholder: BLURRED				
						)
					}
				}
			}
		}
	}
`
