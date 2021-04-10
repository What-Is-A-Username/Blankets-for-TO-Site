import React from 'react'
import { graphql, navigate } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticleEntry from '../components/blog-list'
import SEO from '../components/SEO'
import QueryString from 'query-string'
import { SearchTools } from '../components/tag'
import styles from '../page-styles/blog.module.css'
import { search } from 'core-js/fn/symbol'
import { addLocale } from 'core-js'
import { filter } from 'lodash'

class BlogIndex extends React.Component {

  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const searchQuery = get(this, 'props.location.search');
    const searchParams = QueryString.parse(searchQuery); 

    const clickTag = (clicked) =>
    {
      if (searchParams.tags.includes(clicked)) // if unselecting 
        searchParams.tags = searchParams.tags.filter(tag => (tag != clicked)); 
      else 
        searchParams.tags.push(clicked); 
      let new_query = this.props.location.origin + this.props.location.pathname + "?" + QueryString.stringify({tags: searchParams.tags, sort: searchParams.sort}, {arrayFormat: 'comma'});
      navigate(new_query);
    }

    // filter only unique tags 
    // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    var allTags = []
    posts.forEach(post => allTags = allTags.concat(post.node.tags));
    const uniqueTags = allTags.filter((t, i, s) => s.indexOf(t) === i);

    if (searchParams['tags'] === undefined) searchParams['tags'] = [];
    else if (typeof(searchParams['tags']) === 'string') searchParams['tags'] = [searchParams['tags']] 
    if (searchParams['sort'] === undefined) searchParams['sort'] = 'recent'; 
    // only accept tags that exist in our posts
    searchParams.tags = searchParams.tags.filter(tag => uniqueTags.includes(tag)); 

    const meetsFilter = (post) => { 
      if (searchParams.tags.length == 0) return true;
      for (var i = 0; i < post.tags.length; i++)
        if (searchParams.tags.includes(post.tags[i])) return true;
      return false;
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

    const filterAndSort = (allPosts) => {
      return posts.filter(({node}) => meetsFilter(node)).sort(comparePosts)
    } 

    const onSelect = (data) => {
      searchParams.sort = data.value; 
      let new_query = this.props.location.origin + this.props.location.pathname + "?" + QueryString.stringify({tags: searchParams.tags, sort: searchParams.sort}, {arrayFormat: 'comma'});
      navigate(new_query);
    }

    return (
      <Layout location={this.props.location}>
        <SEO title="Updates"
          description="Browse articles published by Blankets for T.O., including summaries of past initiatives, photos of past events, and everything else associated with us." />
        <div className="white-background">
          <div style={{ padding: "20px" }}></div>
          <div className="wrapper">
            <h2 className={styles.sectionHeadline}>All Updates and Articles</h2>
            <SearchTools onDropdownChange={onSelect} dropdownPlaceholder={searchParams.sort} tags={uniqueTags} clickTagFunc={clickTag} activeTags={searchParams.tags}/>
            <div className={styles.blog_list}>
              {filterAndSort(posts).map(({ node }) => {
                return (
                  <div key={node.slug}>
                    <ArticleEntry article={node} />
                  </div>
                )
              })}
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