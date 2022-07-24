require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: false,
  },
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
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        defaults: {
          formats: [`auto`],
        },
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `dir`,  
      }
    }
  ],
};
