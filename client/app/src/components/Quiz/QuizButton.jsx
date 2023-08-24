import { useDispatch, useSelector } from 'react-redux'
import { updateUserData } from '../../actions/userAction'
import '../../assets/imgs/car.png'

const QuizButton = ({ label, icon, currentQuestion, setCurrentQuestion, handleSubmit, topic }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)


    const handleClick = () => {
        let property = topic.toLowerCase()
        let value = label.toLowerCase()
        if (property.includes(' ')) {
            property = property.replace(/\s+\w/g, (match) =>
                match.toUpperCase().replace(/\s+/g, '')
            );
        }
        if (value.includes(' ')) {
            value = value.replace(/\s+\w/g, (match) =>
                match.toUpperCase().replace(/\s+/g, '')
            )
        }
        dispatch(updateUserData(user._id, property, value))


        if (currentQuestion < 7) {
            setCurrentQuestion(prev => prev + 1)
        } else {
            handleSubmit()
        }

    }


    return (
        <div className='quiz-button' onClick={handleClick}>
            <img src={icon} alt={label} style={{ width: '60px' }} />
            <span><b>{label}</b></span>
        </div>
    )
}

export default QuizButton