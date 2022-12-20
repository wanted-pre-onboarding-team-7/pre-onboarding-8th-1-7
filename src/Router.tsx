import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './ui/pages/SignIn';
import SignUp from './ui/pages/SignUp';

const Router = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
);

export default Router;
