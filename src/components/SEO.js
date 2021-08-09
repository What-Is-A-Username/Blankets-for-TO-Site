import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({childElements, title, description, metaImage, metaType, meta, useMailChimp, useCurator, useSharing, useMaps, cannonical}) => {
	
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
		key="seo"
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
					content: seo.metaImage.src,
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
				
		link={[{
			rel: 'icon',
			href: '/favicon.ico',
		},
		{
			rel: 'canonical',
			href: cannonical ?? seo.url, 
		}]
	}
	>
		{/* JQuery */}
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

		{/* Global site tag (gtag.js) - Google Analytics */}
		<script async src="https://www.googletagmanager.com/gtag/js?id=${G-E7KS17RLEB}"></script>
       	<script>{"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} 	gtag('js', new Date()); gtag('config', 'G-E7KS17RLEB');"}</script>
		
		{/* Search Console */}
		<meta name="google-site-verification" content="H85FiZN3YyU6tHavccegyjHzxSSC6kc_7d22i6IDx2Y" />

		{/* Curator Social Media Embedding */}
		{useCurator && <script type="text/javascript" src="https://cdn.curator.io/published/18d8088e-b13e-4fbe-a348-e56d6fcbf0a6.js"></script>}

		{/* MailChimp Mailing List */}
		{useMailChimp && <script type="text/javascript" src="https://chimpstatic.com/mcjs-connected/js/users/c190e10f2b62c767274e1197b/52a4a6cc65ff988eefff98c51.js"></script>}
		{useMaps && <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
			integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
			crossorigin=""/>}
			{useMaps && <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
			integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
			crossorigin=""></script>}
		{childElements}
	</Helmet>
	)
}

SEO.defaultProps = {
	childElements: [],
	meta: [],
	description: ``,
	metaImage: null,
	metaType: `website`,
	useMailChimp: false,
	useCurator: false,
	useSharing: false,
	useMaps: false, 
	cannonical: undefined, 
}

SEO.propTypes = {
	childElements: PropTypes.arrayOf(PropTypes.object), 
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	metaImage: PropTypes.shape({
		src: PropTypes.string,
		height: PropTypes.number,
		width: PropTypes.number,
	}),
	metaType: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	useMailChimp: PropTypes.bool,
	useCurator: PropTypes.bool,
	useSharing: PropTypes.bool,
	useMaps: PropTypes.bool,
	cannonical: PropTypes.string,
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