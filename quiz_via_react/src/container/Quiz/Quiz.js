import React, { Component } from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    
    quiz: [
      {
        question: 'How do you feel?',
        rightAnswerId: 3,
        answers: [
          { text: 'Fine', id: 1 },
          { text: 'Great', id: 2 },
          { text: 'Awsome', id: 3 },
          { text: 'Green', id: 4 },
        ]
      }
    ]
  }

  onAnswearClickHandler = answerId => {
    console.log('Answer Id: ', answerId);
  }
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answear the question</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswearClick={this.onAnswearClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>

      </div>
    )
  }
}


export default Quiz