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
const DeletePerson = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    ssn: ""
  });
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

const handleSuccessClick = async () => {
  try {
    const response = await axios.post("http://localhost:8080/api/v1/people/delete-person", formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Extract code from the response
    const { code, message } = response.data;

    // Display alert with the code
    if(code === '3002'){
      alert('success!')
      navigate('/shipment');
    } else {
      alert(message)
    }

  } catch (error) {
    console.error("Error while sending data:", error);
  }
};


  return (
    <div className={styles.container}>
      {/* Assign task */}
      <>
        {/* Component Assign Page */}
        <div className={styles.components}>
          <div className={styles.header} style={{padding: "2rem"}}>
            <h3 className={styles.title}>Delete Person</h3>
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
                  placeholder="ssn"
                  value={formData.ssn}
                  onChange={(e) =>
                    handleInputChange("ssn", e.target.value)
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
export default DeletePerson;
