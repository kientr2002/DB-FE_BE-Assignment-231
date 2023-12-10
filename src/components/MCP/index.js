import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProgressBar from 'react-animated-progress-bar';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import api from "../../api/axiosConfig"

const CustomColor = styled('div')({
    background: 'linear-gradient(180deg, rgba(66,109,236,1) 0%, rgba(134,201,145,1) 100%)',
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    
});

const MCPSList = [
    { key: 1, name: "Dĩ An 3", percentage: "88", color_bar: '#D94949',
        ID: 333444555, year: 2021, status: "Đang sử dụng", capacity: "1500L", inUse: "1350L", color: "Vàng", address: "Đường N3, phường Dĩ An, thị xã Dĩ An, tỉnh Bình Dương"
    },
    { key: 2, name: "Thủ Đức 2", percentage: "40", color_bar: '#97E075',
    ID: 777888999, year: 2020, status: "Đang sử dụng", capacity: "1000L", inUse: "400L", color: "Xanh lá", address: "1 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh"
    },
    { key: 3, name: "Lý Thường Kiệt 14", percentage: "80", color_bar: '#D94949',
        ID: 123456789, year: 2018, status: "Đang sử dụng", capacity: "1000L", inUse: "800L", color: "Xanh lá", address: "268 Lý Thường Kiệt, Phường 14, Quận 10, TP. HCM"
    },
    { key: 4, name: "Phường Lá Quận Hoa", percentage: "50", color_bar: '#FFE76B',
    ID: 444555999, year: 2020, status: "Đang sử dụng", capacity: "1000L", inUse: "500L", color: "Xanh lá", address: "59C Nguyễn Đình Chiểu, Quận 3, TP. HCM"
    },
    { key: 5, name: "Dĩ An 5", percentage: "20", color_bar: '#97E075',
    ID: 222333444, year: 2019, status: "Đang sử dụng", capacity: "1500L", inUse: "300L", color: "Xanh lá", address: "167 Lý Thường Kiệt, KP Thắng Lợi 2, P. Dĩ An, TX. Dĩ An, Bình Dương"
    }
];

const active = {backgroundColor: '#ECECEC', borderRadius: '1rem', height: '62px', width: '330px'}
const inactive = {}

export const MCP = () => {
    const [warehouse, setWarehouse] = useState([]);
    const [chosenMCP, setChosenMCP] = useState({});
    const [selected, setSelected] = useState(0);

    const handleClick = (divNum) => {
        setSelected(divNum);
    };

    

    const getWarehouse = async () => {
		try {
		  const response = await api.get("/api/v1/view-objects/get-all-storages");
		  const result = await response.data;
		  setWarehouse(result);
          console.log(result);
		} catch (error) {
		  console.log(error);
		}
	};

    useEffect(() => {
		getWarehouse();
	}, []);


    return (
        <div id="MCPSPage">
            <Box sx={{ flexGrow: 1 }} >
                <Grid 
                    container
                    spacing={5} 
                    columns={16}  
                    justifyContent="center"
                    flexDirection={{ xs: "column", sm: "row" }}
                    columnSpacing={3}
                >
                    <Grid item sm={6} xs={13} md={6} lg={4.7} >
                        <Card style={{height: '560px', borderRadius: "1rem", boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.1)"}}>
                                <CardContent >
                                    <CustomColor>
                                        <Typography gutterBottom variant="h5" >
                                            <strong>Kho</strong>
                                        </Typography>
                                    </CustomColor>
                                    {warehouse.map((info,index) => (
                                        <div key={index} style={(selected === index) ? active : inactive} 
                                            onClick={()=>{
                                                setChosenMCP(warehouse[index]);
                                                handleClick(index);
                                            }}>
                                            <div style={{ marginLeft: '12px', paddingTop: '10px'}}>
                                                <Typography variant="body1" component="div" style={{ marginBottom: "-15px", marginLeft: '1px'}}>
                                                    <strong>{info.warehouseName}</strong></Typography>
                                                    <ProgressBar
                                                        width="auto"
                                                        height="9px"
                                                        rect
                                                        fontColor="#D94949"
                                                        percentage="20"
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
                    </Grid>

                    <Grid item xs={15} sm={10} md={10} lg={11.2}>
                        <Card style={{height: '560px', borderRadius: "1rem", boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.1)"}}>
                                <CardContent>
                                <Grid container columns={9.5} spacing={5}>
                                    <Grid item container columns={9.5} spacing={2}>
                                        <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                                            <CustomColor>
                                                <Typography gutterBottom variant="h6" component="h5">
                                                    <strong>Thông tin Kho</strong>
                                                </Typography>
                                            </CustomColor>
                                        </Grid>
                                        <Grid item sm={2.75} md={2.75} xs={2.75} lg={2.75}>
                                            <Typography variant="body2" component="div">
                                                <strong>Tên: </strong> {chosenMCP.warehouseName}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                            <Typography variant="body2" component="div">
                                                <strong>ID: </strong> {chosenMCP.id}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                            <Typography variant="body2" component="div">
                                                <strong>Sức chứa: </strong> {chosenMCP.capacity}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                            <Typography variant="body2" component="div">
                                                <strong>Quản lý kho: </strong> {chosenMCP.admin_SSN}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                                            <Typography variant="body2" component="div">
                                                <strong>Địa chỉ: </strong> {chosenMCP.address}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}