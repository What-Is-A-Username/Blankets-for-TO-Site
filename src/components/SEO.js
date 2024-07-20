import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO_Wrapper = ({childElements, title, description, metaImage, metaType, meta, useMailChimp, cannonical, doNotCrawl}) => 
{
	return(
		<SEO childElements={childElements}
		title={title}
		description={description}
		metaImage={metaImage}
		metaType={metaType}
		useMailChimp={useMailChimp}
		cannonical={cannonical}
		doNotCrawl={doNotCrawl}
		pathname={useLocation()}
		query={useStaticQuery(query)}/>
	)
}

class SEO extends React.Component {

	state = { domLoad: false}

	

	componentDidMount()
	{
		this.setState({domLoad: true})
	}

	render()
	{
		const facebookImageDimensions = {width: 1200, height: 630}
		const twitterImageDimensions = {width: 800, height: 418}

		const { site, contentfulOrganizationInformation } = this.props.query
		const {
			defaultTitle,
			titleTemplate,
			defaultDescription,
			siteUrl,
			defaultLang,
			keywords,
			twitterUsername,
		} = site.siteMetadata

		const {pathname, childElements, title, description, metaImage, metaType, meta, useMailChimp, cannonical, doNotCrawl} = this.props
		
		const seo = {
			title: title || defaultTitle,
			description: description || defaultDescription,
			url: `${siteUrl}${pathname.pathname}`,
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
				title={title === 'Home' ? 'Blankets for T.O.' : title}
				titleTemplate={title === 'Home' ? '%s' : titleTemplate}
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

			<link rel='icon' href='/favicon.ico' key='favicon'/>
			<link rel='canonical' href={cannonical ?? seo.url} key='canonical'/>

			{doNotCrawl && <meta name="robots" content="noindex"/>}
			{doNotCrawl && <meta name="googlebot" content="noindex"/>}

			{/* Termly Cookie Consent */}
			<script
				type="text/javascript"
				src="https://app.termly.io/embed.min.js"
				data-website-uuid={process.env.TERMLY_COOKIE_CONSENT}
			></script>

			{/* Global site tag (gtag.js) - Google Analytics */}
			{/* <script async src="https://www.googletagmanager.com/gtag/js?id=${G-E7KS17RLEB}"></script>
			<script>{"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} 	gtag('js', new Date()); gtag('config', 'G-E7KS17RLEB');"}</script> */}
			
			{/* Search Console */}
			<meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION}/>

			{/* MailChimp Mailing List */}
			{this.state.domLoad && useMailChimp && <script type="text/javascript" src={process.env.MAILCHIMP_MAILING_LIST_SCRIPT_SRC}></script>}
			{childElements}
			</Helmet>
		)
	}
}

SEO_Wrapper.defaultProps = {
	childElements: [],
	meta: [],
	description: ``,
	metaImage: undefined,
	metaType: `website`,
	useMailChimp: false,
	cannonical: undefined, 
	doNotCrawl: false, 
}

SEO_Wrapper.propTypes = {
	childElements: PropTypes.arrayOf(PropTypes.object), 
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	metaImage: PropTypes.string,
	metaType: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	useMailChimp: PropTypes.bool,
	cannonical: PropTypes.string,
	doNotCrawl: PropTypes.bool, 
}

export default SEO_Wrapper

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