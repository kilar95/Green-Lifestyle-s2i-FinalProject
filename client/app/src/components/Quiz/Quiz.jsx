import React, { useState } from 'react'
import './quiz.css'
import QuizButton from './QuizButton'
import back from '../../assets/imgs/back.png'
import quizData from '../../quizData'
import { useDispatch, useSelector } from 'react-redux'
import { calculateResults } from '../../api/userAPI'

const Quiz = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userReducer.authData)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [readyToSubmit, setReadyToSubmit] = useState(false)

    const handleSubmit = async () => {
        dispatch(calculateResults(user._id))
    }

    const handleGoBack = () => {
        setCurrentQuestion(prev => prev - 1)
        if (readyToSubmit) setReadyToSubmit(false)
    }


    return (
        <div className='quiz-main-container'>
            {
                !user.result ?
                    <div className='quiz'>
                        {
                            currentQuestion >= 1 &&
                            <button className='main-button back-button' onClick={handleGoBack}><img src={back} alt='back' /></button>
                        }
                        <div className='topic'>
                            <h2>{quizData[currentQuestion].topic}</h2>
                            <h4>{quizData[currentQuestion].question}</h4>
                        </div>

                        <div className='quiz-grid'>
                            {
                                quizData[currentQuestion].options.map(option =>
                                    <QuizButton
                                        key={option.id}
                                        label={option.text}
                                        icon={option.icon}
                                        currentQuestion={currentQuestion}
                                        setCurrentQuestion={setCurrentQuestion}
                                        handleSubmit={handleSubmit}
                                        topic={quizData[currentQuestion].topic}
                                    />
                                )
                            }
                        </div>
                        {/* {
                            (currentQuestion === 7 && readyToSubmit) &&
                            <button className='main-button submit-button' type='submit' onSubmit={handleSubmit}>Submit</button>
                        } */}
                    </div>
                    :
                    <div className='results'>
                        {user.result}
                    </div>
            }

        </div>
    )
}

export default Quiz