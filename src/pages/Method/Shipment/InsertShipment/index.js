import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; // Import axios
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
const InsertShipment = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fromStorage_id: "",
    sender_SSN: "",
    receiver_SSN: "",
    product_type: "",
  });
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
//ham nay chua test do khong biet trigger nao support cho cai nay
const handleSuccessClick = async () => {
  try {
    const response = await axios.post("http://localhost:8080/api/v1/shipments/insert", formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Extract code from the response
    const { code, message } = response.data;

    // Display alert with the code
    if(code === '3000'){
      alert('success!')
      navigate('/shipment');
    } else {
      alert(message)
    }

  } catch (error) {
    console.error("Error while sending data:", error);
    // Handle errors here
  }
};


  return (
    <div className={styles.container}>
      {/* Assign task */}
      <>
        {/* Component Assign Page */}
        <div className={styles.components}>
          <div className={styles.header} style={{padding: "2rem"}}>
            <h3 className={styles.title}>Insert Shipment</h3>
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
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="fromStorage_id"
                  value={formData.fromStorage_id}
                  onChange={(e) =>
                    handleInputChange("fromStorage_id", e.target.value)
                  }
                />
              </CardContent>
              <CardContent style={{ userSelect: "none" }}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="sender_SSN"
                  value={formData.sender_SSN}
                  onChange={(e) =>
                    handleInputChange("sender_SSN", e.target.value)
                  }
                />
              </CardContent>
              <CardContent style={{ userSelect: "none" }}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="receiver_SSN"
                  value={formData.receiver_SSN}
                  onChange={(e) =>
                    handleInputChange("receiver_SSN", e.target.value)
                  }
                />
              </CardContent>
              <CardContent style={{ userSelect: "none" }}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="product_type"
                  value={formData.product_type}
                  onChange={(e) =>
                    handleInputChange("product_type", e.target.value)
                  }
                />
              </CardContent>
              <CardContent style={{ userSelect: "none" }}>
                <Button variant="success" onClick={handleSuccessClick}>
                  OK
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </div>
      </>
    </div>
  );
};
export default InsertShipment;
