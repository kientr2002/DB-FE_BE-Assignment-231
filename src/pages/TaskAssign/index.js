import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Collectors } from "../../components/TaskAssign/Collectors";
import { Janitors } from "../../components/TaskAssign/Janitors";
import TaskRoutes from "../../components/TaskAssign/TaskRoutes";
import MCPS from "../../components/TaskAssign/MCPS";
import ConfirmModal from "../../components/TaskAssign/ConfirmModal";
import "./Button.css";
import MapBox from "./Map";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles(() => ({
  container: {
    position: "fixed",
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
    paddingRight: "10px",
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
const TaskAssign = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(0); // mcp, assign , routes, map,
  const [employee, setEmployee] = useState("");
  const employeeList = ["Collectors", "Janitors"];
  const handleChange = (event) => {
    setEmployee(event.target.value);
  };
  const handleChangePage = () => {
    setPage((prev) => prev + 1);
    // setPage('routes')
  };
  return (
    <div className={styles.container}>
      {/* Assign task */}
      <>
        {/* Component Assign Page */}
        <div className={styles.components}>
          {page === 0 && <MCPS />}
          {page === 1 && (
            <>
              <div className={styles.header} style={{padding: "2rem"}}>
                <h3 className={styles.title}>Loại hình nhân viên: </h3>
                <FormControl>
                  <InputLabel id="chooseEmployee">Employee</InputLabel>
                  <Select
                    id="chooseEmployee"
                    value={employee}
                    label="Employee"
                    onChange={handleChange}
                    sx={{
                      borderRadius: "25px",
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    {employeeList.map((employee) => (
                      <MenuItem value={`${employee}`}>{employee}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              {employee === "Collectors" && <Collectors />}
              {employee === "Janitors" && <Janitors />}
            </>
          )}
          {page === 2 && <TaskRoutes handleChangePage={handleChangePage}/>}
          {page === 3 && <MapBox />}
          {page === 4 && <ConfirmModal />}
          {page === 5 && navigate('/')}

          <div class="confirmBtn" style={{userSelect: 'none'}}>
            <button class="confirm" href="" onClick={handleChangePage}>
              Xác nhận
            </button>
          </div>
        </div>
      </>
    </div>
  );
};
export default TaskAssign;
