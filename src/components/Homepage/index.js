import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import {Link}  from "react-router-dom";
import { useState } from "react";
import { MCP } from '../../components/MCP';
import { ListItem } from '../../components/MemberAndVehicle/ListItem';
import { memberData, vehicleData } from "./const";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProgressBar from 'react-animated-progress-bar';
import { styled } from '@mui/material/styles';

const MCPSList = [
    { key: 1, name: "Dĩ An 3", percentage: "88", color_bar: '#D94949',
        ID: 333444555, year: 2021, status: "Đang sử dụng", capacity: "1500L", inUse: "1350L", color: "Vàng", address: "Đường N3, phường Dĩ An, thị xã Dĩ An, tỉnh Bình Dương", 
        columns: [{ headerName: "Id Task", field: 'id', width: "100", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian kết thúc', field: 'endtime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header'},
                { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header'}],
        data: [{
            "id":1234,
            "starttime":"12/10/2022 16:00",
            "endtime":"12/10/2022 17:00",
            "status":"Đang thực hiện",
            "note": ""
         },
         {
             "id":1231,
             "starttime":"11/10/2022 16:00",
             "endtime":"11/10/2022 17:00",
             "status":"Hoãn",
             "note": "Lý do thời tiết"
         },
         {
             "id":1220,
             "starttime":"11/10/2022 15:00",
             "endtime":"11/10/2022 16:00",
             "status":"Đã hoàn thành",
             "note": ""
         }]
    },
    { key: 2, name: "Thủ Đức 2", percentage: "40", color_bar: '#97E075',
    ID: 777888999, year: 2020, status: "Đang sử dụng", capacity: "1000L", inUse: "400L", color: "Xanh lá", address: "1 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh", 
        columns: [{ headerName: 'Id Task', field: 'id', width: "100", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian kết thúc', field: 'endtime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header'},
                { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header'}],
        data: [{
            "id":2232,
            "starttime":"13/11/2022 16:00",
            "endtime":"13/11/2022 17:00",
            "status":"Đang thực hiện",
            "note": ""
         },
         {
             "id":2230,
             "starttime":"12/11/2022 16:00",
             "endtime":"12/11/2022 17:00",
             "status":"Đã hoàn thành",
             "note": ""
         },
         {
             "id":2210,
             "starttime":"11/11/2022 16:00",
             "endtime":"11/11/2022 17:00",
             "status":"Đã hoàn thành",
             "note": ""
         }]
    },
    { key: 3, name: "Lý Thường Kiệt 14", percentage: "80", color_bar: '#D94949',
        ID: 123456789, year: 2018, status: "Đang sử dụng", capacity: "1000L", inUse: "800L", color: "Xanh lá", address: "268 Lý Thường Kiệt, Phường 14, Quận 10, TP. HCM", 
        columns: [{ headerName: 'Id Task', field: 'id', width: "100", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Thời gian kết thúc', field: 'endtime', width: "200", headerClassName: 'super-app-theme--header'},
                { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header'},
                { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header'}],
        data: [{
            "id":3210,
            "starttime":"13/11/2022 16:00",
            "endtime":"13/11/2022 17:00",
            "status":"Đang thực hiện",
            "note": ""
         },
         {
             "id":3200,
             "starttime":"12/11/2022 16:00",
             "endtime":"12/11/2022 17:00",
             "status":"Hoãn",
             "note": "Lý do thời tiết"
         },
         {
             "id":3190,
             "starttime":"11/11/2022 16:00",
             "endtime":"11/11/2022 17:00",
             "status":"Đã hoàn thành",
             "note": ""
         }]
    },
    
    
];

export const Homepage = () => {
    const [value, onChange] = useState(new Date());
    const CustomColor = styled('div')({
        background: 'linear-gradient(180deg, rgba(66,109,236,1) 0%, rgba(134,201,145,1) 100%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      
     });
     const [chosenMCP, setChosenMCP] = useState(MCPSList[0]);
    const [selected, setSelected] = useState(0);
    const handleClick = (divNum) => {
        setSelected(divNum);
    };

    return (
        <div className='container'>
            <div className='row1 row' >
                <div className='col1 col' style={{padding: "0"}}>
                    <Link to="/member" className='link'>
                        <ListItem type="member" data={memberData} chosen={null} setChosen={null} style={{padding: "0 1.2rem"}}/>
                    </Link>
                </div>
                <div className='col2 col' style={{padding: "0"}}>
                    <Link to="/vehicle" className='link'>
                        <ListItem type="vehicle" data={vehicleData} chosen={null} setChosen={null}/>
                    </Link>
                </div>
            </div>
            <div className='row2 row'>
                <div className='col1 col' style={{padding: "0"}}>
                    <Link to="/mcp" className='link'>
                        <Card style={{height: '268px', borderRadius: "1rem", boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.1)"}}>
                            <CardContent style={{padding: "1.3rem"}}>
                                <CustomColor>
                                    <Typography gutterBottom variant="h5" >
                                        <h3><strong>Kho</strong></h3>
                                    </Typography>
                                </CustomColor>
                                {MCPSList.map((info,index) => (
                                    <div key={index} 
                                        onClick={()=>{
                                            setChosenMCP(MCPSList[index]);
                                            handleClick(index);
                                        }}>
                                        <div style={{  paddingTop: '10px'}}>
                                            <Typography variant="body1" component="div" style={{ marginBottom: "-15px"}}>
                                                <strong>{info.name}</strong></Typography>
                                                <ProgressBar
                                                    width="auto"
                                                    height="9px"
                                                    rect
                                                    fontColor={info.color_bar}
                                                    percentage={info.percentage}
                                                    rectPadding="0px"
                                                    rectBorderRadius="20px"
                                                    trackPathColor="transparent"
                                                    bgColor="#D94949"
                                                    trackBorderColor="#b6b6b6"
                                                    defColor={{
                                                        fair: '#97E075',
                                                        good: '#FFE76B',
                                                        excellent: '#D94949',
                                                        poor: '#97E075',
                                                    }}
                                                ></ProgressBar>
                                        </div>
                                    </div>
                                ))} 
                            </CardContent>
                        </Card>
                    </Link>
                </div>
                <div className='col2 col' style={{padding: "0"}}>
                    <Link to="/calendar" className='link'>
                        <Calendar onChange={onChange} value={value} />
                    </Link>
                </div>
            </div>
        </div>
    )
}