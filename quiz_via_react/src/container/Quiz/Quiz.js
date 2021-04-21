import React, { Component } from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question: 'How do you feel?',
        rightAnswerId: 3,
        answers: [
          { text: 'Fine', id: 1 },
          { text: 'Great', id: 2 },
          { text: 'Awsome', id: 3 },
          { text: 'Green', id: 4 },
        ]
      },
      {
        id: 2,
        question: 'How much is 1 * 1?',
        rightAnswerId: 1,
        answers: [
          { text: '1', id: 1 },
          { text: '2', id: 2 },
          { text: '3.14', id: 3 },
          { text: '1.16', id: 4 },
        ]
      },
    ]
  }

  onAnswearClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      
        if (this.state.answerState[key] === 'true') {
          return
        }
    }
    console.log('Answer Id: ', answerId);

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {

      this.setState({
        answerState: { [answerId]: 'true' }
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished');
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      this.setState({
        answerState: { [answerId]: 'false' }
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answear the question</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswearClick={this.onAnswearClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>

      </div>
    )
  }
}


export default Quiz