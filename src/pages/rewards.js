import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade'
import styles from '../page-styles/rewards.module.css'
import RewardsTask from '../components/rewards/rewards-task'
import rewardsInfo from './rewards.json'
import { Award, Edit2, Edit3, Video, Gift, MessageCircle, PenTool, Share, UserCheck, UserPlus, Users, Link, Package, CheckCircle, Send, BarChart } from 'react-feather'
import RewardsPrize from '../components/rewards/rewards-prize'
import StyledButton from '../components/styled-button'

export default class Store extends React.Component {
	render() {
        const getIcon = (iconName) => 
        {
            var svgSize = 64; 
            switch (iconName) {
                case "UsersPlus":
                    return <UserPlus size={svgSize}/>
                case "Share":
                    return <Share size={svgSize}/>
                case "Users":
                    return <Users size={svgSize}/>
                case "Edit2":
                    return <Edit2 size={svgSize}/>
                case "UserCheck":
                    return <UserCheck size={svgSize}/>
                case "Package":
                    return <Package size={svgSize}/>
                case "Gift":
                    return <Gift size={svgSize}/>
                case "MessageCircle":
                    return <MessageCircle size={svgSize}/>
                case "Video":
                    return <Video size={svgSize}/>
                case "Edit3":
                    return <Edit3 size={svgSize}/>
                case "PenTool":
                    return <PenTool size={svgSize}/>
                case "Link":
                    return <Link size={svgSize}/>
                default:
                    return <Award size={svgSize}/>
            }
        }

        const rewardsPrizes = get(this, 'props.data.allContentfulRewardsPrize.nodes')
        const instructionIconSize = '80px'
        const instructionIconStrokeWidth = 1.5;

        const taskVerificationLink = 'https://forms.gle/zLAq7ijrUsUtJ4hU6'

		return (
			<Layout location={this.props.location}>
				<SEO 
                    title='Member Rewards'
                    description='The Member Rewards system recognizes members for their involvement in the community. View recognized tasks and reward prizes here.'/>
				<div className="white-background">
					<div className="wrapper" styles={{width: '80%'}}>
						<h2>Member Rewards</h2>
                        <div className='richText'>
                            <p>
                                The Blankets for T.O. Member Rewards system aims to recognize members for all the hard work and commitment they have dedicated to our mission of eradicating homelessness.
                            </p>
                            <p>
                                This system is only available to Blankets for T.O. members. Information on how to become a member can be found <a href='/positions'>here</a>.
                            </p>
                        </div>
                        <div id='info'>
                            <h3 className={styles.taskTitle} style={{fontSize: '3.0em'}}> How does it work?</h3>
                        </div>
                        <div className={styles.instructionsList}>
                            <Fade delay={0} left>
                                <div className={styles.instructionPanel}>
                                    <p className={styles.instructionNumber}>Step 1</p>
                                    <CheckCircle size={instructionIconSize} strokeWidth={instructionIconStrokeWidth}/>
                                    <p className={styles.instructionDescription}> 
                                        Contribute to Blankets for T.O. by completing any of the designated tasks below.
                                    </p>
                                </div>
                            </Fade>
                            <Fade delay={300} left>
                                <div className={styles.instructionPanel}> 
                                    <p className={styles.instructionNumber}>Step 2</p>
                                    <Send size={instructionIconSize} strokeWidth={instructionIconStrokeWidth}/>
                                    <p className={styles.instructionDescription}>
                                        Verify completed tasks by providing supporting proof like screenshots or files to our Executive Team so that we can record it.
                                    </p >
                                </div>
                            </Fade>
                            <Fade delay={600} left>
                                <div className={styles.instructionPanel}>
                                    <p className={styles.instructionNumber}>Step 3</p>
                                    <BarChart size={instructionIconSize} strokeWidth={instructionIconStrokeWidth}/>
                                    <p className={styles.instructionDescription}>
                                        Continue completing tasks and gathering points. Use our spreadsheet, updated by our Executive Team, to keep updated on your points total!
                                    </p>
                                </div>
                            </Fade>
                            <Fade delay={900} left>
                                <div className={styles.instructionPanel}>
                                    <p className={styles.instructionNumber}>Step 4</p>
                                    <Gift size={instructionIconSize} strokeWidth={instructionIconStrokeWidth}/>
                                    <p className={styles.instructionDescription}>
                                        Spend your rewards points to redeem for our prizes, which include drones, cameras, and speakers!
                                    </p>
                                </div>
                            </Fade>
                        </div>
                        <div id='tasks'>
                            <h3 className={styles.taskTitle}>What tasks can I complete?</h3>
                        </div>
                        <div className={styles.taskList} id='tasks'>
                            {rewardsInfo.tasks.map(task =>
                                {
                                    return(<RewardsTask rewardItem={task} icon={getIcon(task.icon)}/>)
                                })
                            }
                        </div>
                        <p className={styles.notes}>** This activity can only be done once by a member each month</p>
                        <div id='submission' style={{textAlign:'center'}}>
                            <h3 className={styles.taskTitle}>How do I get my tasks verified?</h3>
                            <p style={{fontSize:'18px'}}>In order to be rewarded points for each task you complete, you must submit supporting proof of the task completion. This may include screenshots, digital media or written material.</p>
                            <p style={{fontWeight: 'bold', fontSize:'18px'}}>To submit tasks for the months of October 2021 and November 2021, please follow the link below to fill out the Google Form:</p>
                            <StyledButton buttonText='Submit task for verification' link={taskVerificationLink} openInNewTab/> 
                            <a></a>
                        </div>
                        <div id='prizes'>
                            <h3 className={styles.prizeTitle}>What rewards can I earn?</h3>
                        </div>
                        <div className={styles.prizeList} >
                            {rewardsPrizes.map(prize =>
                                {
                                    return(<RewardsPrize rewardPrize={prize}/>)
                                }
                            )}
                        </div>
                        <div id='check' style={{textAlign:'center'}}>
                            <h3 className={styles.taskTitle}>How can I check my points?</h3>
                            <p style={{fontSize:'18px'}}>
                                View your points by opening our spreadsheet document, which is currently still under construction. This document will be maintained by our Executive Team. Additionally, we are currently working on allowing members of our Discord server to specialized bot commands to view their points total.
                            </p>
                        </div>
					</div>
				</div>
			</Layout>
		)
	}
}

export const RewardsQuery = graphql`
    query RewardsQuery {
        allContentfulRewardsPrize(sort: {fields: pointsRequired}) {
            nodes {
                name
                pointsRequired
                description {
                    description
                  }
            }
        }
    }
`  
