import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import Matchmaking from './pages/Matchmaking.tsx';
import NotFound from './pages/NotFound.tsx';
import Register from './pages/AuthenticationPages/Register.tsx';
import './App.css';
import ProtectedRoute from './contexts/ProtectedRoute.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/matchmaking" element={<ProtectedRoute><Matchmaking /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

