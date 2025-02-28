import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../components/button';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
      <ButtonPrimary children={"Go back to the home page"} onClick={() => navigate("/")}></ButtonPrimary>
    </div>
  );
}

export default NotFound; 