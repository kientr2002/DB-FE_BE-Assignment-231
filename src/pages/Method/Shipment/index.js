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
const Shipment = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(0); // mcp, assign , routes, map,
  const [employee, setEmployee] = useState("");
  const employeeList = ["Collectors", "Janitors"];
  const handleInserShipment = () => {
    navigate('/insertshipment');
  };
  const handleInsertOutragneShipment = () => {
     navigate('/insertoutrangeshipment');
  }
  const handleInsertShipmentBatch = () => {
    navigate('/insertshipmentbatchshipment');
  }
  const handleUpdatePickUpMan = () => {
    navigate('/updatepickupman');
  }
  const handleUpdateDeliveryMan = () => {
    navigate('/updatedeliveryman');
  }
  const handleUpdateStatus = () => {
    navigate('/updatestatus');
  }
  const handleShipmentBatchId = () => {
    navigate('/updateshipmentbatchid');
  }
  const handleUpdatePickUpDate = () => {
    navigate('/updatepickupdate');
  }
  const handleUpdateDateDeliveryMan = () => {
    navigate('/updatedatedeliveryman');
  }
  const handleUpdateDeleteShipment = () => {
    navigate('/deleteshipment');
  }
  const handleUpdateDeleteShipmentBatch = () => {
    navigate('/deleteshipmentbatch');
  }
  const handleUpdateDeleteOutrangeShipment = () => {
    navigate('/deleteoutrangeshipment');
  }

  return (
    <div className={styles.container}>
      {/* Assign task */}
      <>
        {/* Component Assign Page */}
        <div className={styles.components}>
          <div className={styles.header} style={{padding: "2rem"}}>
            <h3 className={styles.title}>Shipment</h3>
          </div>
          <Grid
            container
            spacing={5}
            columns={16}
            justifyContent="center"
            flexDirection="row"
            columnSpacing={10}
          ><Grid item>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleInserShipment}>Insert Shipment</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdatePickUpMan}>Update pickup man</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdateDeliveryMan}>Update delivery-man</button></CardContent>
          </Grid>
          <Grid item>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdateStatus}>Update status</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdateDeleteShipment}>Delete shipment</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdateDeleteOutrangeShipment}>Delete outrange-shipments</button></CardContent>
          </Grid>
          <Grid item>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleInsertOutragneShipment}>Insert outrange-shipments</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleShipmentBatchId}>Update shipment-batch-id</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleInsertShipmentBatch}>Insert shipment-batchs</button></CardContent>
          </Grid>
          <Grid item>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdatePickUpDate}>Update pick-up-date</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdateDateDeliveryMan}>Update deliveryMan</button></CardContent>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleUpdateDeleteShipmentBatch}>Delete shipment-batchs</button></CardContent>
          </Grid>
          {/* <Grid item>
            <CardContent style={{ userSelect: "none" }}><button class="confirm" href="" onClick={handleChangePage}>Person</button></CardContent>
          </Grid> */}
          </Grid>
        </div>
      </>
    </div>
  );
};
export default Shipment;
