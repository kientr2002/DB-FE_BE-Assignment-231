import { Pagination, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export const MemberDetail = ({ data }) => {
	// const firstRow = getFirstRow(data);
	// const secondRow = getSecondRow(data);
	// const thirdRow = getThirdRow(data);

	return (
		<div
			style={{
				backgroundColor: "white",
				boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
				borderRadius: "1rem",
				padding: "0 1.5rem 1.5rem 1.5rem",
			}}>

			<span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>{data.name}</span>
			{data.name === "Customer" || data.name === "Administrator" ? (
  <Table size="small" style={{ margin: "0.5rem 0" }}>
    <TableHead>
      <TableRow>
        {["ID", "Tên", "Địa chỉ", "SSN"].map((cell, index) => (
          <TableCell key={index} align="center" style={{ fontWeight: "bold", fontSize: "0.8rem", border: "solid 1px black", backgroundColor: "#DFDFDF" }}>
            {cell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.data.map((item, index) => (
        <TableRow key={index}>
          {[item.id, item.fullName, item.address, item.ssn].map((cell, cellIndex) => (
            <TableCell key={cellIndex} align="center" style={{ border: "solid 1px black", fontSize: "0.8rem" }}>
              {cell}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
) : data.name === "Driver" ? (
  <Table size="small" style={{ margin: "0.5rem 0" }}>
    <TableHead>
      <TableRow>
        {["ID", "Tên", "Địa chỉ", "SSN", "Partner_SSN", "Truck_ID"].map((cell, index) => (
          <TableCell key={index} align="center" style={{ fontWeight: "bold", fontSize: "0.8rem", border: "solid 1px black", backgroundColor: "#DFDFDF" }}>
            {cell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.data.map((item, index) => (
        <TableRow key={index}>
          {[item.id, item.fullName, item.address, item.ssn, item.partner_SSN, item.truck_id].map((cell, cellIndex) => (
            <TableCell key={cellIndex} align="center" style={{ border: "solid 1px black", fontSize: "0.8rem" }}>
              {cell}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
) : (
  <Table size="small" style={{ margin: "0.5rem 0" }}>
    <TableHead>
      <TableRow>
        {["ID", "Tên", "Địa chỉ", "SSN", "Storage ID", "Bike ID"].map((cell, index) => (
          <TableCell key={index} align="center" style={{ fontWeight: "bold", fontSize: "0.8rem", border: "solid 1px black", backgroundColor: "#DFDFDF" }}>
            {cell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.data.map((item, index) => (
        <TableRow key={index}>
          {[item.id, item.fullName, item.address, item.ssn, item.warehouse_id, item.bike_id].map((cell, cellIndex) => (
            <TableCell key={cellIndex} align="center" style={{ border: "solid 1px black", fontSize: "0.8rem" }}>
              {cell}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
)}
			<Pagination style={{ display: "flex", justifyContent: "center" }} count={10} color="primary" size="small" />
		</div>
	)
}