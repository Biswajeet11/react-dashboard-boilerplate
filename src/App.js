import React from 'react';
import './App.scss';
import { CustomCard } from './components/card';
import { CustomNavBar } from './components/navbar';
import { SideBar } from './components/sidebar';
import  {BarChart}  from './components/barchart';
import { AreaChart } from './components/areachart';
import { CustomTable } from './components/table';
import { Dashboard } from './pages/dashboard/index';
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
