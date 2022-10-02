import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as styles from '../page-styles/about.module.css'
import HeaderImage from '../components/header-image'
import ContactForm from '../components/home/contact-form'
import { BLOCKS } from '@contentful/rich-text-types'

class Donate extends React.Component {

	// componentDidMount() {
		// for (let index = 0; index < 10000; index++) {
		// 	const element = document.getElementById("paragraph" + index.toString())
		// 	if (element) {
		// 		const newParent = document.getElementById("header" + index.toString())
		// 		newParent.appendChild(element)
		// 	} else {
		// 		break;
		// 	}
			
		// }
	// }

	render() {
		const imgFluid = get(this, 'props.data.allContentfulHeaderImage.nodes[0].image.gatsbyImageData')
		const headerTitle = 'Making donations'
		const headerSubtitle = ''
		
		const donatePageData = get(this, 'props.data.allContentfulPage.nodes[0].richTextBody')
		var last = 0;
		const options = {
			renderNode: {
				[BLOCKS.HEADING_2]: (node) => {
					return(
						<details id={"heading" + (last++).toString()}>
							<summary>{node.content[0].value}</summary>
						</details>
					)
				}
				// [BLOCKS.PARAGRAPH]: (node) => {
				// 	//return(documentToReactComponents(node, {}))
				// 	// return(<p id={"paragraph" + last.toString()}>{node.content[0].value}</p>)
				// }
			}
		}

		console.log(JSON.parse(donatePageData.raw))

		return (
			<Layout location={this.props.location}>
				<SEO title='Make a donation'
					description='Read more about how to make donations to Blankets for T.O.'/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					<div className="wrapper">
						<div className={"richText " + styles.description} >
							{donatePageData !== undefined ? documentToReactComponents(JSON.parse(donatePageData.raw), options) : <p>Error: Page data not found. Please let Blankets for T.O. know if this issue persists.</p>}
						</div>
					</div>
					<div id='contact-form'>
						<ContactForm/> 
					</div>
				</div> 
			</Layout>
		)
	}
}

export default Donate

export const donatePageQuery = graphql`
	query DonateQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulHeaderImage(filter: {pageName: {eq: "About"}}, limit: 1) {
			nodes {
				image {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
				}
			}
		}
        allContentfulPage(filter: {contentful_id: {eq: "aShHil3TM6Miht9DEJei3"}}) {
            nodes {
                richTextBody {
                    raw
                }
            }
        }
		
	}
`
