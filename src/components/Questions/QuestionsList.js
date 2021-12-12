import React from 'react'
import "./QuestionList.css"
import Question from './Question'
import {useState, useEffect } from 'react'
import MetaData from '../../Metadata'
const QuestionsList = () => {
    const [data, setdata] = useState([])
    const fetchData = async()=>{
        let x = await fetch("http://localhost:4000/api/v1/post");
        let parsedData = await x.json();
        // console.log(parsedData.posts)
        setdata(parsedData.posts)
    }
useEffect (() => {
   fetchData()
  
}, [])







    return (
        <>
        <MetaData title="Questions" />
          <div className="container">
            <h2 className="heading-mid currentAffairs mt-3 pt-3">Current Affairs!! </h2>  
            <div className="row">
            {data.map((element) => {
            return (
              <div className="col md-4" >
                <Question
                 key={element.url}
                url={element.imageUrl}
               
                />
              </div>
            );
          })}
          </div>
              
            </div>  
        </>
    )
}

export default QuestionsList
