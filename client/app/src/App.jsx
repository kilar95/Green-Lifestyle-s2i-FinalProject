import Home from './pages/Home/home'
import Auth from './pages/Auth/auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import './App.css'

function App() {
  const user = useSelector(state => state.userReducer.authData);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Navigate to='/home' /> : <Navigate to='/auth' />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to='/auth' />} />
        <Route path='/auth' element={user ? <Navigate to='/home' /> : <Auth />} />
      </Routes>
    </div>
  );
}

export default App;
