import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    top: "20%",
    left: "13%",
    width: "84%",
    height: "75%",
    maxWidth: "1300px",
    backgroundColor: "#ffffff",
  },
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
  components: {
    position: "relative",
    marginTop: "20px",
    height: "600px",
    borderRadius: "25px",
    boxShadow: "5px 5px 25px 10px rgba(0, 0, 0, 0.1)",
    margin: '20px',
  },
}));
const Vehicle = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(0); // mcp, assign , routes, map,
  const [employee, setEmployee] = useState("");
  const employeeList = ["Collectors", "Janitors"];
  const handleInsertBike = () => {
    navigate('/insertbike');
  };
  const handleUpdateBike = () => {
    navigate('/updatebike');
  }
  const handleDeleteBike = () => {
    navigate('/deletebike');
  }
  const handleInsertTruck = () => {
    navigate('/inserttruck');
  }
  const handleUpdateTruck = () => {
    navigate('/updatetruck');
  }
  const handleDeleteTruck = () => {
    navigate('/deletetruck');
  }

  return (
    <div className={styles.container}>
      {/* Assign task */}
      <>
        {/* Component Assign Page */}
        <div className={styles.components}>
          <div className={styles.header} style={{padding: "2rem"}}>
            <h3 className={styles.title}>Vehicle</h3>
          </div>
          <Grid
            container
            spacing={5}
            columns={16}
            justifyContent="center"
            flexDirection="row"
            columnSpacing={10}
          ><Grid item>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleInsertBike}>Insert Bike</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdateBike}>Update Bike</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleDeleteBike}>Delete Bike</button></CardContent>
          </Grid>
          <Grid item>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleInsertTruck}>Insert Truck</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdateTruck}>Update Truck</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleDeleteTruck}>Delete Truck</button></CardContent>
          </Grid>
          {/* <Grid item>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleChangePage}>Vehicle</button></CardContent>
          </Grid> */}
          </Grid>
        </div>
      </>
    </div>
  );
};
export default Vehicle;
