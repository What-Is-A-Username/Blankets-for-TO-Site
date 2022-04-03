const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
    const pageTemplate = path.resolve('./src/templates/page.js')
    const storeItemTemplate = path.resolve('./src/templates/store-item.js')
    const chapterTemplate = path.resolve('./src/templates/chapter.js')
    const episodeTemplate = path.resolve('./src/templates/episode.js')
      
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  slug
                }
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
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPostTemplate,
            context: {
              slug: post.node.slug
            },
          })
        })

        const pages = result.data.allContentfulPage.edges 
        pages.forEach((page) => {
          createPage({
            path: `/pages/${page.node.slug}/`,
            component: pageTemplate,
            context: {
              slug: page.node.slug
            },
          })
        })

        const storeItems = result.data.allContentfulMerchItem.edges 
        storeItems.forEach((item) => {
          createPage({
            path: `/store/${item.node.slug}/`,
            component: storeItemTemplate,
            context: {
              slug: item.node.slug
            },
          })
        })

        const chapters = result.data.allContentfulBtoChapter.edges 
        chapters.forEach((chapter) => {
          createPage({
            path: `/chapter/${chapter.node.slug}/`,
            component: chapterTemplate,
            context: {
              slug: chapter.node.slug
            },
          })
        })

        const episodes = result.data.allContentfulPodcast.edges 
        episodes.forEach((episode) => {
          createPage({
            path: `/podcasts/beyond-the-blankets/${episode.node.slug}/`,
            component: episodeTemplate,
            context: {
              slug: episode.node.slug
            },
          })
        })

      })
    )
  })
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