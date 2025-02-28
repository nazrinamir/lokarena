import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import Matchmaking from './pages/Matchmaking/Matchmaking.tsx';
import NotFound from './pages/NotFound.tsx';
import Register from './pages/AuthenticationPages/Register.tsx';
import './App.css';
import ProtectedRoute from './contexts/ProtectedRoute.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import Login from './pages/AuthenticationPages/Loginuser.tsx';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider children={
        <div className="App">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute children={<Dashboard />} />} />
            <Route path="/matchmaking" element={<ProtectedRoute children={<Matchmaking />} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      } />
    </BrowserRouter>
  );
}

export default App;

