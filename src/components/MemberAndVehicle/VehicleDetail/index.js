import { Pagination, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export const VehicleDetail = ({ data }) => {

	return (
		<div
			style={{
				backgroundColor: "white",
				boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
				borderRadius: "1rem",
				padding: "0 1.5rem 1.5rem 1.5rem"
			}}>

				<h3 style={{
				backgroundImage: "linear-gradient(#426DEC, #86C991)",
				color: "transparent",
				WebkitBackgroundClip: "text"
			}}>{data.name}</h3>


			{
				data.name==="Truck" ? (
					<Table size="small" style={{ margin: "0.5rem 0" }}>
				<TableHead>
					<TableRow>
						{["ID", "Mass", "Height", "Width", "Length", "Type"].map((cell) =>
							<TableCell align="center" style={{ fontWeight: "bold", fontSize: "0.8rem", border: "solid 1px black", backgroundColor: "#DFDFDF" }}>{cell}</TableCell>
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.data.map((item) =>
						<TableRow>
							{[item.id, item.mass, item.h, item.l, item.w, item.truckType].map((cell) =>
								<TableCell align="center" style={{ border: "solid 1px black", fontSize: "0.8rem" }}>{cell}</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
				) : (
<Table size="small" style={{ margin: "0.5rem 0" }}>
				<TableHead>
					<TableRow>
						{["ID", "Mass"].map((cell) =>
							<TableCell align="center" style={{ fontWeight: "bold", fontSize: "0.8rem", border: "solid 1px black", backgroundColor: "#DFDFDF" }}>{cell}</TableCell>
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.data.map((item) =>
						<TableRow>
							{[item.id, item.mass].map((cell) =>
								<TableCell align="center" style={{ border: "solid 1px black", fontSize: "0.8rem" }}>{cell}</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
				)
			}

			<Pagination style={{ display: "none", justifyContent: "center" }} count={10} color="primary" size="small" />
			
			<Pagination style={{ display: "none", justifyContent: "center" }} count={10} color="primary" size="small" />
		</div>
	)
}