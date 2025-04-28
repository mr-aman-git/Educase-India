import WelcomePage from "./Components/WelcomePage";
import {LoginPage} from "./Components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App