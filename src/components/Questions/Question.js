import React from 'react'
import "./QuestionList.css"
const Question = ({url}) => {
    return (
        <div>
            <img className="postImg" src={url} alt="Desire To Learn" />
        </div>
    )
}

export default Question
