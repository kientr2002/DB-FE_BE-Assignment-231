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
import Person from './pages/Method/Person';
import InsertPerson from './pages/Method/Person/InsertPerson';
import InsertDriver from './pages/Method/Person/InsertDriver';
import InsertShipper from './pages/Method/Person/InsertShipper';
import UpdatePerson from './pages/Method/Person/UpdatePersonInfo';
import UpdateDriver from './pages/Method/Person/UpdateDriverInfo';
import UpdateShipper from './pages/Method/Person/UpdateShipperInfo';
import DeletePerson from './pages/Method/Person/DeletePerson';
import Vehicle from './pages/Method/Vehicle';
import InsertBike from './pages/Method/Vehicle/InsertBike';
import UpdateBike from './pages/Method/Vehicle/UpdateBike';
import DeleteBike from './pages/Method/Vehicle/DeleteBike';
import InsertTruck from './pages/Method/Vehicle/InsertTruck';
import UpdateTruck from './pages/Method/Vehicle/UpdateTruck';
import DeleteTruck from './pages/Method/Vehicle/DeleteTruck';
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
            <Route path="/person" element={
              <Layout>
                <Person/>
              </Layout>}/> 
            <Route path="/insertperson" element={
              <Layout>
                <InsertPerson/>
              </Layout>}/> 
            <Route path="/insertdriver" element={
              <Layout>
                <InsertDriver/>
              </Layout>}/> 
            <Route path="/insertshipper" element={
              <Layout>
                <InsertShipper/>
              </Layout>}/> 
            <Route path="/updateperson" element={
              <Layout>
                <UpdatePerson/>
              </Layout>}/> 
            <Route path="/updatedriver" element={
              <Layout>
                <UpdateDriver/>
              </Layout>}/> 
            <Route path="/updateshipper" element={
              <Layout>
                <UpdateShipper/>
              </Layout>}/> 
            <Route path="/deleteperson" element={
              <Layout>
                <DeletePerson/>
              </Layout>}/>    
            <Route path="/vehiclemethod" element={
              <Layout>
                <Vehicle/>
              </Layout>}/>    
            <Route path="/insertbike" element={
              <Layout>
                <InsertBike/>
              </Layout>}/>    
            <Route path="/updatebike" element={
              <Layout>
                <UpdateBike/>
              </Layout>}/>    
            <Route path="/deletebike" element={
              <Layout>
                <DeleteBike/>
              </Layout>}/>    
            <Route path="/inserttruck" element={
              <Layout>
                <InsertTruck/>
              </Layout>}/>    
            <Route path="/updatetruck" element={
              <Layout>
                <UpdateTruck/>
              </Layout>}/>    
            <Route path="/deletetruck" element={
              <Layout>
                <DeleteTruck/>
              </Layout>}/>    
                                
          </Routes>
          
    </div>
  )
}

export default App;