import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({childElements, title, description, metaImage, metaType, meta, useMailChimp, useCurator, useSharing, cannonical, doNotCrawl}) => {
	const facebookImageDimensions = {width: 1200, height: 630}
	const twitterImageDimensions = {width: 800, height: 418}

	const { pathname } = useLocation()
	const { site, contentfulOrganizationInformation } = useStaticQuery(query)
	const {
		defaultTitle,
		titleTemplate,
		defaultDescription,
		siteUrl,
		defaultLang,
		keywords,
		twitterUsername,
	} = site.siteMetadata
	
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname}`,
		keywords: keywords,
		// Open Graph Meta Tags
		metaImage: metaImage ? `https:${metaImage}` : `${contentfulOrganizationInformation.defaultPreviewImage.file.url}`,
		metaType: metaType,
		twitterUsername: twitterUsername,
	}
	
	return (
		<Helmet
			htmlAttributes={{
				lang: defaultLang,
			}}
			title={title}
			titleTemplate={titleTemplate}
			key={title}>

		<meta name='description' content={seo.description}/>
		<meta name='keywords' content={seo.keywords.join(",")}/>

		{/* <!-- Facebook Meta Tags --> */}
		<meta property="og:url" content={seo.url}/>
		<meta property="og:type" content={seo.metaType}/>
		<meta property="og:title" content={seo.title}/>
		<meta property="og:description" content={seo.description}/>
		<meta property="og:image" content={`${seo.metaImage}?w=${facebookImageDimensions.width}&h=${facebookImageDimensions.height}&bg=rgb%3Affffff`}/>

		{/* <!-- Twitter Meta Tags --> */}
		<meta name="twitter:card" content='summary'/>
		<meta property="twitter:url" content={seo.url}/>
		<meta name="twitter:title" content={seo.title}/>
		<meta name="twitter:description" content={seo.description}/>
		<meta name="twitter:image" content={`${seo.metaImage}?w=${twitterImageDimensions.width}&h=${twitterImageDimensions.height}&bg=rgb%3Affffff`}/>
		<meta name="twitter:site" content={seo.twitterUsername}/>
		<meta name="twitter:creator" content={seo.twitterUsername}/>

		<link rel='icon' href='/favicon.ico'/>
		<link rel='canonical' href={cannonical ?? seo.url}/>

		{doNotCrawl && <meta name="robots" content="noindex"/>}
		{doNotCrawl && <meta name="googlebot" content="noindex"/>}

		<script
			type="text/javascript"
			src="https://app.termly.io/embed.min.js"
			data-auto-block="on"
			data-website-uuid="01a08857-e482-4377-85cd-f142d9dba419"
		></script>

		{/* JQuery */}
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

		{/* Global site tag (gtag.js) - Google Analytics */}
		{/* <script async src="https://www.googletagmanager.com/gtag/js?id=${G-E7KS17RLEB}"></script>
       	<script>{"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} 	gtag('js', new Date()); gtag('config', 'G-E7KS17RLEB');"}</script> */}
		
		{/* Search Console */}
		{/* <meta name="google-site-verification" content="H85FiZN3YyU6tHavccegyjHzxSSC6kc_7d22i6IDx2Y" /> */}

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
	doNotCrawl: false, 
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
	doNotCrawl: PropTypes.bool, 
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
			defaultLang: lang
			keywords
			twitterUsername
		}
	}
	contentfulOrganizationInformation {
		defaultPreviewImage {
			file {
				url
			}
		}
	}
}
`