import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProgressBar from 'react-animated-progress-bar';
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import {MCP} from './../../components/MCP';

const useStyles = makeStyles(() => ({
    container: {
      position: "fixed",
      top: "20%",
      left: "13%",
      width: "84%",
      height: "75%",
      maxWidth: "1300px",
    },
    components: {
        position: "relative",
        marginTop: "20px",
        height: "600px",
        borderRadius: "25px",
        boxShadow: "5px 5px 25px 10px rgba(0, 0, 0, 0.1)",
    }
}))

const MCPs = () =>  {
    const styles = useStyles();
    return(
        <div className={styles.container}>
        <MCP />
        </div>
    )
} 
export default MCPs
