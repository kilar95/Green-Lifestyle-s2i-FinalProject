import { useDispatch, useSelector } from 'react-redux'
import { updateUserData } from '../../actions/userAction'
import '../../assets/imgs/car.png'

const QuizButton = ({ label, icon, currentQuestion, setCurrentQuestion, handleSubmit, topic }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userReducer.authData)


    const handleClick = () => {
        const property = topic.toLowerCase()
        const value = label.toLowerCase()
        console.log(user._id, property, value);
        dispatch(updateUserData(user._id, property, value))
        if (currentQuestion < 7) {
            setCurrentQuestion(prev => prev + 1)
        } else {
            handleSubmit()
        }

    }


    return (
        <div className="grid-item" onClick={handleClick}>
            <img src={icon} alt={label} style={{ width: '60px' }} />
            <span><b>{label}</b></span>
        </div>
    )
}

export default QuizButton