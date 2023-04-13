import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/imgs/planet-earth.png'
import Info from "../../components/Info";
import Quiz from '../../components/Quiz/Quiz'
import Suggestions from '../../components/Suggestions'
import Score from '../../components/Score'
import homepage from '../../assets/imgs/homepage.png'
import logout from '../../assets/imgs/logout.png'
import './home.css'
import { logOut } from "../../actions/authAction";

function Home() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)
    const [quizStart, setQuizStart] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(false)

    const handleHomePage = () => {
        if (quizStart) {
            setQuizStart(false)
            setShowSuggestions(false)
        } else if (showSuggestions) {
            setShowSuggestions(false)
        }
    }

    const handleLogout = () => {
        dispatch(logOut())
    }


    return (
        <div className="home">
            <header>
                <div>
                    <img className="logo" src={logo} alt='logo'></img>
                    {
                        quizStart ?
                            <h1>Quiz Time!</h1>
                            :
                            <h1>Welcome <br></br> {user.username}!</h1>
                    }
                    <div style={{ display: "flex", flexDirection: "column", gap: ".5rem", marginLeft: "1rem" }}>
                        <button className="main-button round-button" style={{ position: "static", margin: "0" }} onClick={handleHomePage}><img src={homepage} alt="homepage" /></button>
                        <button className="main-button round-button" style={{ position: "static", margin: "0" }} onClick={handleLogout}><img src={logout} alt="logout" /></button>
                    </div>
                </div>
            </header>
            <div className="containers">
                <Score showSuggestions={showSuggestions} setShowSuggestions={setShowSuggestions} />
                {
                    quizStart ?
                        <Quiz setQuizStart={setQuizStart} setShowSuggestions={setShowSuggestions} />
                        :
                        showSuggestions ?
                            <div className='quiz-main-container'>
                                <Suggestions setShowSuggestions={setShowSuggestions} />
                            </div>

                            :
                            <Info setQuizStart={setQuizStart} />
                }
            </div>
        </div>
    );
}

export default Home;
