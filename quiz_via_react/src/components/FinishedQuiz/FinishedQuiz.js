import React from 'react'
import classes from './FinishedQuiz.module.scss'



const FinishedQuiz = props => {
  return(
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          How are you
          <i className={'fa fa-times'}/>
        </li>
        <li>
          <strong>2. </strong>
          How are you
          <i className={'fa fa-check'}/>
        </li>
      </ul>

      <p>Answerd correct 4 from 10</p>

      <div>
        <button>To do again</button>
      </div>
    </div>
  )
}

export default FinishedQuiz