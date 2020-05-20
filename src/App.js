import React from 'react';
import './App.scss';
import { CustomNavBar } from './components/navbar';
import { Dashboard } from './routes/pages/dashboard/index';
import { LoginForm } from './components/login';
import { RegisterForm } from './components/register';

function App() {
  return (
    <div>
      <CustomNavBar> 
      <Dashboard/>
      </CustomNavBar>
      {/* <LoginForm/> */}
      {/* <RegisterForm/> */}
    </div>
  );
}

export default App;
