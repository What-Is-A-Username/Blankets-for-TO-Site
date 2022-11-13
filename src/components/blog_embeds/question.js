import React from 'react'
import { Check, X } from 'react-feather';
import { correctOption, incorrectOption, container, title, questionStyle, optionSet, option, checkContainer, checkSelected, checkUnselected, incorrectMessage, correctMessage} from './question.module.css'

class QuestionEmbed extends React.Component 
{
    state = {answered: false, selection: undefined, submitted: false}

    onSelect = (x) => {
        if (this.state.submitted)
            return; 
        this.setState({selection: x, answered: true})
    }

    onSubmit = () => {
        if (this.state.selection !== undefined) 
        this.setState({submitted: true})
    }

    render()
    {
        const { question, answer, options } = this.props.data

        const colorOptionLabel = (index) => {
            if (!this.state.submitted || typeof this.state.selection === 'undefined') return('')
            else if (index + 1 === answer) return correctOption 
            else if (index + 1 === this.state.selection) return incorrectOption
            else return('')
        }

        return(
            <div className={container}>
                <h1 className={title}>Think you know the answer?</h1>
                <p className={questionStyle}>{question}</p>
                <form>
                    <fieldset>
                    {
                        options.map((x, index) =>
                        {
                            return(
                                <React.Fragment>
                                    {
                                        this.state.submitted ? 
                                        <React.Fragment>
                                            <input disabled={true} key={x} className={option} type="radio" id={`${question}_${x}`} name={question} value={x} checked={index + 1 === this.state.selection ? "checked" : ""}/>
                                            <label for={`${question}_${x}`} className={colorOptionLabel(index)}>{`${String.fromCharCode(65 + index)}. ${x}`}</label>
                                            <br/>
                                        </React.Fragment> 
                                        :
                                        <React.Fragment>
                                            <input key={x} className={option} type="radio" id={`${question}_${x}`} name={question} value={x} onChange={() => this.onSelect(index + 1)} checked={index + 1 === this.state.selection ? "checked" : ""}/>
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
                <div className={checkContainer}>
                    {!this.state.submitted && <button className={this.state.selection ? checkSelected : checkUnselected} onClick={() => this.onSubmit()}>Check your answer</button>}
                    {this.state.submitted && this.state.selection !== answer &&
                    <div className={incorrectMessage}>
                        <X/>
                        <p>{`Nice try! The answer was ${String.fromCharCode(64 + answer)}.`}</p>
                    </div>
                    }
                    {this.state.submitted && this.state.selection === answer &&
                    <div className={correctMessage}>
                        <Check/>
                        <p>{`Yes, the answer was ${String.fromCharCode(64 + answer)}. Great job!`}</p>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default QuestionEmbed