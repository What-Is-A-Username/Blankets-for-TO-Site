import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, metaImage, metaType, meta }) => {

    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)
    const {
      defaultTitle,
      titleTemplate,
      defaultDescription,
      siteUrl,
      defaultImage,
      defaultLang,
      keywords,
      twitterUsername,
    } = site.siteMetadata

    const seo = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      url: `${siteUrl}${pathname}`,
      
      // Open Graph Meta Tags
      metaImage: metaImage && metaImage.src ? `${siteUrl}${metaImage.src}` : `${siteUrl}${defaultImage}`,
      metaType: metaType,
    }
    
    return (
        <Helmet
            htmlAttributes={{
                lang: defaultLang,
            }}
            title={title}
            titleTemplate={titleTemplate}
            
            meta={[
                {
                    name: `description`,
                    content: seo.description,
                },
                {
                    name: "keywords",
                    content: keywords.join(","),
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: seo.description,
                },
                {
                    property: `og:type`,
                    content: seo.metaType,
                },
                {
                    name: `twitter:creator`,
                    content: twitterUsername,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: seo.description,
                },
            ].concat(
                metaImage
                ? [
                    {
                      property: "og:image",
                      content: seo.metaImage,
                    },
                    {
                      property: "og:image:width",
                      content: metaImage.width,
                    },
                    {
                      property: "og:image:height",
                      content: metaImage.height,
                    },
                    {
                      name: "twitter:card",
                      content: "summary_large_image",
                    },
                  ]
                : [
                    {
                      name: "twitter:card",
                      content: "summary",
                    },
                  ]
            ).concat(meta)
            }
        >
            <link rel="icon" href='/favicon.ico'></link>
        </Helmet>
    )
}

SEO.defaultProps = {
    meta: [],
    description: ``,
    metaImage: null,
    metaType: `website`,
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    metaImage: PropTypes.shape({
        src: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }),
    metaType: PropTypes.string, 
    meta: PropTypes.arrayOf(PropTypes.object),
}
export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        author
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        defaultLang: lang
        keywords
        twitterUsername
      }
    }
  }
`