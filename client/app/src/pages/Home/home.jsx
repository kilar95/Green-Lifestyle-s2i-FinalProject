import { useState } from "react";
import { useSelector } from "react-redux";
import logo from '../../assets/imgs/planet-earth.png'
import Info from "../../components/Info";
import Quiz from '../../components/Quiz/Quiz'
import './home.css'

function Home() {
    const { user } = useSelector(state => state.userReducer.authData)
    const state = useSelector(state => state)
    console.log(state);
    const [quizStart, setQuizStart] = useState(false)


    return (
        <div className="home">
            <header>
                <div>
                    <img className="logo" src={logo} alt='logo'></img>
                    <h1>Welcome <br></br> {user.username}!</h1>
                </div>
            </header>
            <div className="containers">
                <div className="score-container">
                    {
                        user.result &&
                        <div>
                            <h1>Current score: <span style={{ color: `${user.result > 30 ? 'red' : 'green'}` }}> {user.result}</span></h1>
                        </div>
                    }
                    {
                        !user.result &&
                        <div>
                            <h3 style={{ paddingInline: "20px", textTransform: "uppercase" }}>Take the quiz to discover your lifestyle score!</h3>
                        </div>
                    }

                </div>
                {
                    quizStart ?
                        <Quiz />
                        :
                        <Info setQuizStart={setQuizStart} />
                }

            </div>
        </div>
    );
}

export default Home;
