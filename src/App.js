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
//Method
import Method from './pages/Method';
import InsertShipment from './pages/Method/Shipment/InsertShipment';
import Shipment from './pages/Method/Shipment';
import InsertOutRangeShipment from './pages/Method/Shipment/InsertOutrangeShipment';
import InsertShipmentBatch from './pages/Method/Shipment/InsertShipmentBatch';
import UpdatePickUpMan from './pages/Method/Shipment/UpdatePickUpMan';
import UpdateDeliveryMan from './pages/Method/Shipment/UpdateDeliveryMan';
import UpdateStatus from './pages/Method/Shipment/UpdateStatus';
import UpdateShipmentBatchId from './pages/Method/Shipment/UpdateShipmentBatchId';
import UpdatePickUpDate from './pages/Method/Shipment/UpdatePickupDate';
import UpdateDateDeliveryMan from './pages/Method/Shipment/UpdateDateDeliveryMan';
import DeleteShipmentBatch from './pages/Method/Shipment/DeleteShipmentBatch';
import DeleteShipment from './pages/Method/Shipment/DeleteShipment';
import DeleteOutrangeShipment from './pages/Method/Shipment/DeleteOutrangeShipment';
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
            <Route path="/method" element={
              <Layout>
                <Method/>
              </Layout>}/>
            <Route path="/insertshipment" element={
              <Layout>
                <InsertShipment/>
              </Layout>}/>          
            <Route path="/shipment" element={
              <Layout>
                <Shipment/>
              </Layout>}/> 
            <Route path="/insertoutrangeshipment" element={
              <Layout>
                <InsertOutRangeShipment/>
              </Layout>}/>   
            <Route path="/insertshipmentbatchshipment" element={
              <Layout>
                <InsertShipmentBatch/>
              </Layout>}/>    
            <Route path="/updatepickupman" element={
              <Layout>
                <UpdatePickUpMan/>
              </Layout>}/>
            <Route path="/updatedeliveryman" element={
              <Layout>
                <UpdateDeliveryMan/>
              </Layout>}/> 
            <Route path="/updatestatus" element={
              <Layout>
                <UpdateStatus/>
              </Layout>}/>                 
              <Route path="/updateshipmentbatchid" element={
              <Layout>
                <UpdateShipmentBatchId/>
              </Layout>}/>                  
            <Route path="/updatepickupdate" element={
              <Layout>
                <UpdatePickUpDate/>
              </Layout>}/>              
            <Route path="/updatedatedeliveryman" element={
              <Layout>
                <UpdateDateDeliveryMan/>
              </Layout>}/>
            <Route path="/deleteshipment" element={
              <Layout>
                <DeleteShipment/>
              </Layout>}/>
            <Route path="/deleteoutrangeshipment" element={
              <Layout>
                <DeleteOutrangeShipment/>
              </Layout>}/>
            <Route path="/deleteshipmentbatch" element={
              <Layout>
                <DeleteShipmentBatch/>
              </Layout>}/>
                        
          </Routes>
          
    </div>
  )
}

export default App;