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