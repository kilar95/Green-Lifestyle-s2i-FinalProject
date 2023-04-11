import { useState } from 'react'
import Logo from '../../assets/imgs/planet-earth.png'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../actions/authAction.js'
import './auth.css'


const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.userReducer.loading)

    const [isSignUp, setIsSignUp] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmpass: '',
    })
    const [confirmPass, setConfirmPass] = useState(true)

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (isSignUp) {
            formData.password === formData.confirmpass ?
                dispatch(signUp(formData)) :
                setConfirmPass(false)
        } else {
            dispatch(logIn(formData))
        }
    }

    function resetForm() {
        setConfirmPass(true)
        setFormData({
            username: '',
            password: '',
            confirmpass: '',
        })
    }

    return (
        <div className='auth'>

            <div className='auth-container'>
                <div className='authPage-descr'>
                    <img className="logo" src={Logo} alt='logo' />
                    <div className='descr'>
                        <h1 style={{ fontSize: '30px' }}>How green is your lifestyle?</h1>
                        <h5>Discover how much your daily habits impact the environment.</h5>
                    </div>
                </div>

                <div className="auth-form">
                    <form className="infoForm" onSubmit={handleSubmit}>
                        <h3>{isSignUp ? "Signup" : "Log In"}</h3>

                        <div>
                            <label for="username"> Username: </label>
                            <input
                                type="text"
                                className="infoInput"
                                name="username"
                                placeholder="Username"
                                onChange={handleChange}
                                value={formData.username}

                            />
                        </div>

                        <div>
                            <label for="password"> Password: </label>

                            <input
                                type="password"
                                className="infoInput"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                value={formData.password}
                            />
                            {isSignUp &&
                                <>
                                    <label for="password"> Confirm Password: </label>
                                    <input
                                        type="password"
                                        className="infoInput"
                                        name="confirmpass"
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                        value={formData.confirmpass}
                                    />
                                </>
                            }

                        </div>
                        <span style=
                            {{
                                display: confirmPass ? 'none' : 'block',
                                color: 'red',
                                fontSize: '12px',
                                alignSelf: 'flex-end',
                                marginRight: '5px'
                            }}>
                            * The passwords don't match
                        </span>
                        <div>
                            <span style={{ fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => { setIsSignUp(prev => !prev); resetForm() }}>
                                {isSignUp ? "Already have an account? Login" : "Don't have an account? Signup"}
                            </span>
                        </div>
                        <button className="main-button" type="submit" disabled={loading}>
                            {loading ? "Loading..." : isSignUp ? "Signup" : "Login"}
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Auth