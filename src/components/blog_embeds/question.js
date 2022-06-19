import React from 'react'
import { Check, X } from 'react-feather';
import styles from './question.module.css'

class QuestionEmbed extends React.Component 
{
    state = {answered: false, selection: undefined, submitted: false}

    onSelect = (x) => {
        if (this.state.submitted)
            return; 
        this.setState({selection: x, answered: true})
    }

    onSubmit = () => {
        this.setState({submitted: true})
    }

    render()
    {
        const data = this.props.node.data.target.fields
        const question = data.question['en-US']
        const answer = data.answer['en-US']
        const options = data.options['en-US']

        const colorOptionLabel = (index) => {
            if (!this.state.submitted || typeof this.state.selection === 'undefined') return('')
            else if (index + 1 === answer) return styles.correctOption 
            else if (index + 1 === this.state.selection) return styles.incorrectOption
            else return('')
        }

        return(
            <div className={styles.container}>
                <h1 className={styles.title}>Think you know the answer?</h1>
                <p className={styles.question}>{question}</p>
                <form>
                    <fieldset className={styles.optionSet}>
                    {
                        options.map((x, index) =>
                        {
                            return(
                                <React.Fragment>
                                    {
                                        this.state.submitted ? 
                                        <React.Fragment>
                                            <input disabled={true} key={x} className={styles.option} type="radio" id={`${question}_${x}`} name={question} value={x} checked={index + 1 === this.state.selection ? "checked" : ""}/>
                                            <label for={`${question}_${x}`} className={colorOptionLabel(index)}>{`${String.fromCharCode(65 + index)}. ${x}`}</label>
                                            <br/>
                                        </React.Fragment> 
                                        :
                                        <React.Fragment>
                                            <input key={x} className={styles.option} type="radio" id={`${question}_${x}`} name={question} value={x} onChange={() => this.onSelect(index + 1)} checked={index + 1 == this.state.selection ? "checked" : ""}/>
                                            <label for={`${question}_${x}`}>{`${String.fromCharCode(65 + index)}. ${x}`}</label>
                                            <br/>   
                                        </React.Fragment>
                                    }
                                    
                                </React.Fragment>
                            )
                        })
                    }
                    </fieldset>
                </form>
                <div className={styles.checkContainer}>
                    {!this.state.submitted && <button className={this.state.selection ? styles.checkSelected : styles.checkUnselected} onClick={() => this.onSubmit()}>Check your answer</button>}
                    {this.state.submitted && this.state.selection !== answer &&
                    <div className={styles.incorrectMessage}>
                        <X/>
                        <p>{`The correct answer is ${String.fromCharCode(64 + answer)}`}</p>
                    </div>
                    }
                    {this.state.submitted && this.state.selection === answer &&
                    <div className={styles.correctMessage}>
                        <Check/>
                        <p>{`Correct!`}</p>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default QuestionEmbed