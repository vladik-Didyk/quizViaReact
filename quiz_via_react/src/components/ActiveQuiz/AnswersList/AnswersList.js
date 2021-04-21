import React from 'react'
import classes from './AnswersList.module.scss'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => (

  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index)=>{
      return(
        <AnswerItem
          key={index}
          answer={answer}
          onAnswearClick={props.onAnswearClick}
        />
      )
    }) }
  </ul>

)



export default AnswersList