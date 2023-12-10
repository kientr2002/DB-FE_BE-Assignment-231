import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ProgressBar from "react-animated-progress-bar";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { style } from "@mui/system";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: "middle",
    marginBottom: "20px",
  },
  title: {
    fontWeight: "700",
    background: "linear-gradient(180deg, #426DEC 0%, #86C991 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  filter: {
    position: "absolute",
    right: '3%',
    top : '3%',
  },
}));
//  data
const MCPSList = [
  { key: 1, name: "Dĩ An 3", percentage: "88", color_bar: "#D94949" },
  { key: 2, name: "Quận Con Gà", percentage: "40", color_bar: "#97E075" },
  { key: 3, name: "Lý Thường Kiệt 14", percentage: "80", color_bar: "#D94949" },
  {
    key: 4,
    name: "Phường Lá Quận Hoa",
    percentage: "50",
    color_bar: "#FFE76B",
  },
  { key: 5, name: "Dĩ An 1", percentage: "20", color_bar: "#97E075" },
];
const MCPSList2 = [
  { key: 6, name: "Dĩ An 2", percentage: "12", color_bar: "#97E075" },
  { key: 7, name: "Quận Cam", percentage: "40", color_bar: "#97E075" },
  { key: 8, name: "Lý Thường Kiệt 2", percentage: "90", color_bar: "#D94949" },
  {
    key: 19,
    name: "Phường Hoa Quận Lá",
    percentage: "50",
    color_bar: "#FFE76B",
  },
  
];

const active = { backgroundColor: "#d7d7d7", borderRadius: "26px" };
const inactive = {};

const MCPS = () => {
  const styles = useStyles();
  const [chosenMCP, setChosenMCP] = useState(MCPSList[0]);
  const [selected, setSelected] = useState(0);

  const [filter, setFilter] = useState();
  const filterList = ["< 50% capacity", "50 ~ 80% capacity", "> 80% capacity"];
  
  const handleClick = (divNum) => {
    setSelected(divNum);
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <div className={styles.header} style={{padding: "2rem"}}>
        <h3 className={styles.title}>Kho</h3>
      </div>
      <Grid
        container
        spacing={5}
        columns={16}
        justifyContent="center"
        flexDirection="row"
        columnSpacing={10}
      >
        <Grid item>
          <CardContent style={{ userSelect: "none" }}>
            {MCPSList.map((info, index) => (
              <div
                key={index}
                style={selected === index ? active : inactive}
                onClick={() => {
                  setChosenMCP(MCPSList[index]);
                  handleClick(index);
                }}
              >
                <div style={{ marginLeft: "12px", paddingTop: "10px" }}>
                  <Typography
                    variant="body1"
                    component="div"
                    style={{ marginBottom: "-15px", marginLeft: "1px" }}
                  >
                    <strong>{info.name}</strong>
                  </Typography>
                  <ProgressBar
                    width="450px"
                    height="12px"
                    rect
                    fontColor={info.color_bar}
                    percentage={info.percentage}
                    rectPadding="0px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#D94949"
                    trackBorderColor="#b6b6b6"
                    defColor={{
                      fair: "#97E075",
                      good: "#FFE76B",
                      excellent: "#D94949",
                      poor: "#97E075",
                    }}
                  ></ProgressBar>
                </div>
              </div>
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default MCPS;
