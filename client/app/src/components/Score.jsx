import React from 'react'
import { useSelector } from 'react-redux'

const Score = ({ showSuggestions, setShowSuggestions }) => {
    const user = useSelector(state => state.userReducer.user)

    return (
        <div className="score-container">
            {
                user.result &&
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    <h1 style={{ margin: 0 }}>Current score: <span style={{ color: `${user.result < 20 ? 'red' : 'green'}` }}> {user.result}</span></h1>
                    {
                        !showSuggestions &&
                        <button className="main-button" onClick={() => setShowSuggestions(true)}>Useful tips</button>
                    }
                </div>
            }
            {
                !user.result &&
                <div>
                    <h3 style={{ paddingInline: "20px", textTransform: "uppercase", textAlign: "center" }}>Take the quiz to discover your lifestyle score!</h3>
                </div>
            }

        </div>
    )
}

export default Score