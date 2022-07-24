const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
  const pageTemplate = path.resolve('./src/templates/page.js')
  const storeItemTemplate = path.resolve('./src/templates/store-item.js')
  const chapterTemplate = path.resolve('./src/templates/chapter.js')
  const episodeTemplate = path.resolve('./src/templates/episode.js')

  const result = await graphql(
    `
    {
      allContentfulBlogPost {
        nodes {
          title
          slug
        }
      }
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulMerchItem {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulBtoChapter {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulPodcast(filter: {podcastSeries: {eq: "Beyond the Blankets"}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
    
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

  // Generate standalone pages
  const pages = result.data.allContentfulPage.edges 
  if (pages.length > 0) {
    pages.forEach((page) => {
      createPage({
        path: `/pages/${page.node.slug}/`,
        component: pageTemplate,
        context: {
          slug: page.node.slug
        },
      })
    })
  }

  // Generate store item pages
  const storeItems = result.data.allContentfulMerchItem.edges 
  if (storeItems.length > 0) {
    storeItems.forEach((item) => {
      createPage({
        path: `/store/${item.node.slug}/`,
        component: storeItemTemplate,
        context: {
          slug: item.node.slug
        },
      })
    })
  }

  // Generate pages for each chapter
  const chapters = result.data.allContentfulBtoChapter.edges 
  if (chapters.length > 0) {
    chapters.forEach((chapter) => {
      createPage({
        path: `/chapter/${chapter.node.slug}/`,
        component: chapterTemplate,
        context: {
          slug: chapter.node.slug
        },
      })
    })
  }

  // Generate pages for each podcast episode
  const episodes = result.data.allContentfulPodcast.edges
  if (episodes.length > 0) {  
    episodes.forEach((episode) => {
      createPage({
        path: `/podcasts/beyond-the-blankets/${episode.node.slug}/`,
        component: episodeTemplate,
        context: {
          slug: episode.node.slug
        },
      })
    })
  }

}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null(),
          },
          {
            test: /leaflet-polylinedecorator/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
