import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {

  const {currentUser}=useContext(AuthContext);
  console.log('user from app: ',currentUser)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <ProtectedRoute>
            <SignInPage />
          </ProtectedRoute>
        } />
        <Route exact path="home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
