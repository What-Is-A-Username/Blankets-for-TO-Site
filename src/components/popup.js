import React from 'react'
import styles from './popup.module.css'

export default class Popup extends React.Component {

    state = { open: true, visible: true }

    close = () => {
        if (!this.state.open) return; 
        this.setState({ open: false });
        this.turnoff = setTimeout(() => {
            this.setState({
                open: false,
                visible: false,
            });
        }, 1900);
    }

    componentDidMount() {
        // var visitedBefore = localStorage.getItem('firstentry') 
        // if (!visitedBefore)
        //     localStorage.setItem('firstentry', 'true')
        // else if (visitedBefore !== 'true')
        //     localStorage.setItem('firstentry', 'true')
        // else 
        //     this.setState({open: false, visible: false})
        // console.log('Not new visitor to site? ' + visitedBefore + '. Welcome.');
      }

    render() {
        return (
            <div className={styles.popupBlocker + ' ' + (this.state.open ? styles.open : styles.closed) + ' ' + (this.state.visible ? '' : styles.invisible)}>
                <div className={styles.popup}>
                {/* {console.log("rendering")} */}
                    <h2>Sign up to our newsletter for updates on our latest updates.</h2>
                        <form action="https://us1.list-manage.com/contact-form?u=abe6f10b44a3ec1a18292149f&form_id=6ec166e1addeeda3c5f7a56d6b12b26d" method="POST">
                            <input type="hidden" name="u" value="abe6f10b44a3ec1a18292149f" />
                            <input type="hidden" name="id" value="990e8d7286" />
                            <div id="mergeTable" className="mergeTable">
                                <div className="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
                                    <label for="fields.134">Email Address <span class="req asterisk">*</span></label>
                                    <div className={"field-group " + styles.emailBox}>
                                        <input type="email" autocapitalize="none" autocorrect="off" name="fields.134" id="fields.134"/>
                                    </div>
                                </div>
                                    <input className={'formEmailButton ' + styles.button} type="submit" name="submit" value="Subscribe"/>
                            </div>
                        </form>
                        <div style={{display:'flex', justifyContent:'right'}}>
                            <a className={styles.escapeButton} onClick={() => this.close()}>Maybe later...</a>
                        </div>
                </div>
            </div>
        )
    }
}