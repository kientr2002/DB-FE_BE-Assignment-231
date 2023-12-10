import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/index';
import LoginLayout from './components/LoginLayout/index';
// components
import { MemberAndVehicle } from './pages/MemberAndVehicle';
import TaskAssign from './pages/TaskAssign';
import Calendar from './pages/Calendar';
// import {MapBox} from './pages/TaskAssign/Map';
import MCPs from './pages/MCPS';
import { Home } from './pages/Homepage';
import Login from './pages/Login/Login';
import LoginAfterClick from './pages/LoginInput/LoginAfterClick';

function App() {
  return (
    <div>

          <Routes>
            <Route path="/" element={
              <LoginLayout>
                <Login/>
              </LoginLayout>
            }/>
            <Route path="/login" element={
              <LoginLayout>
                <LoginAfterClick/>
              </LoginLayout>
            }/>            
            <Route path="/home" element={
              <Layout>
                <Home/>
              </Layout>}/>
            <Route path='/member' element={
              <Layout>
                <MemberAndVehicle type="member"/>
              </Layout>} />
            <Route path='/vehicle' element={
              <Layout>
                <MemberAndVehicle type="vehicle"/>
              </Layout>} />
            <Route path="/assign-task" element={
              <Layout>
                <TaskAssign />
              </Layout>} />
            <Route path="/calendar" element={
              <Layout>
                <Calendar />
              </Layout>} />
            <Route path="/mcp" element={
              <Layout>
                <MCPs/>
              </Layout>}/>
            <Route path="/product" element={
              <Layout>
                <MemberAndVehicle type="product"/>
              </Layout>}/>
            <Route path="/batch" element={
              <Layout>
                <MemberAndVehicle type="batch"/>
              </Layout>}/>
          </Routes>
          
    </div>
  )
}

export default App;