import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import { LoginPage } from "./Components/LoginPage";
import RegisterPage from "./Components/RigisterPage";
import ProfileView from "./Components/ProfileView";
import Footer from "./Components/Footer";
import { PageProvider } from "./Components/hook/PageContext"; // <== Yeh line add karo

const App = () => {
  return (
    <PageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
        <Footer />
      </Router>
    </PageProvider>
  );
};

export default App;
