import React from 'react'
import saveThePlanet from '../assets/imgs/save-the-planet.png'
import greenPlant from '../assets/imgs/green-tea.png'
import { useDispatch, useSelector } from 'react-redux'
import { resetResults } from '../actions/userAction'

const Info = ({ setQuizStart }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)


    const handleClick = () => {
        if (user.result) {
            dispatch(resetResults(user._id))
        }
        setQuizStart(true)
    }

    return (
        <div className="main-container">
            <div>
                <h2>How green is your life?</h2>
                <img src={saveThePlanet} style={{ width: '60px' }} alt='icon'></img>
            </div>
            <div>
                Take the quiz to discover if your lifestyle is eco-friendly and what you can do to
                help the planet! <br></br>
                The goal of the app is to help you become more aware of your <b>environmental impact</b> and encourage you to make
                <b> sustainable choices</b>.
                The app would analyze various aspects of the your daily life, such as your <b>transportation</b>,
                <b> energy usage</b>, and consumption habits, and provide you a score that reflects how eco-friendly you lifestyle is.
                You could then use this information to make changes to your behavior in order to reduce your <b>carbon footprint</b>.
            </div>
            <div>
                <img src={greenPlant} alt="icon" style={{ width: '60px' }}></img>
                <h2>What is a green lifestyle?</h2>
            </div>
            <div>
                Do you prioritize sustainability? Do you seek to minimize harm to the environment? Then you are on the right track! <br></br>
                To conduct a green lifestyle means to make <b>conscious choices</b> in various areas of daily life, such as
                using eco-friendly transportation options, <b>reducing waste</b> and plastic use, eating a <b>plant-based</b> diet and more! <br></br>
                Adopting a green lifestyle can have a positive impact on both the individual and the planet, helping to reduce greenhouse
                gas emissions and preserve natural resources for future generations.
            </div>
            <button className="main-button" onClick={handleClick}>
                {user.result ?
                    "Take new quiz" :
                    "Take the quiz"
                }
            </button>
        </div>
    )
}

export default Info