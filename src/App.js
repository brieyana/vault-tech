import './App.css';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="forgot_password" element={<p>Forgot password page</p>} />
        <Route path="*" element={<p>No page placeholder</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
