import WelcomePage from "./Components/WelcomePage";
import {LoginPage} from "./Components/LoginPage";
import RegisterPage from "./Components/RigisterPage"
import ProfileView from "./Components/ProfileView";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </Router>
    </>
  )
}

export default App