require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Blankets for T.O.',
    author: 'Blankets for T.O.', 
    titleTemplate: '%s | Blankets for T.O.', 
    description: 'A student organization at UTSC aimed at helping and advocating for the homeless of Toronto, through awareness initiatives and donations.',
    url: 'https://blanketsforto.ca',
    lang: 'en',
    keywords: [ 
      'Blankets for T.O.', 'BTO', 'blanketsforto.ca', 'Blankets for TO', 'Blankets for Toronto', 'homeless', 'UTSC'
    ],
    twitterUsername: '@blanketsforto',
  },
  pathPrefix: '',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `dir`,
      }
    }
    ]
}
