import { Pagination, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { getFirstRow, getSecondRow, getThirdRow } from "./const";

export const ProductDetail = ({ data }) => {
	const firstRow = getFirstRow(data);
	const secondRow = getSecondRow(data);
	const thirdRow = getThirdRow(data);

	return (
		<div
			style={{
				backgroundColor: "white",
				boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
				borderRadius: "1rem",
				padding: "0 1.5rem 1.5rem 1.5rem",
			}}>
			<h3 style={{
				backgroundImage: "linear-gradient(#426DEC, #86C991)",
				color: "transparent",
				WebkitBackgroundClip: "text"
			}}>Thông tin của {data.name}</h3>
			<div style={{ height: "20%", display: "grid", fontSize: "0.9rem" }}>
				{[firstRow, secondRow, thirdRow].map((row) =>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						{row.map((item) =>
							<div>
								<span style={{ fontWeight: "bold" }}>{item.field}: </span>{item.content}
							</div>
						)}
					</div>
				)}
			</div>
			<span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Lịch sử công việc: </span>
			<Table size="small" style={{ margin: "0.5rem 0" }}>
				<TableHead>
					<TableRow>
						{["ID", "MCP", "Thời gian bắt đầu", "Thời gian kết thúc", "Tình trạng", "Ghi chú"].map((cell) =>
							<TableCell align="center" style={{ fontWeight: "bold", fontSize: "0.8rem", border: "solid 1px black", backgroundColor: "#DFDFDF" }}>{cell}</TableCell>
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.historyWorking.map((item) =>
						<TableRow>
							{[item.id, item.mcp, item.startTime, item.endTime, item.status, item.note].map((cell) =>
								<TableCell align="center" style={{ border: "solid 1px black", fontSize: "0.8rem" }}>{cell}</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
			<Pagination style={{ display: "flex", justifyContent: "center" }} count={10} color="primary" size="small" />
		</div>
	)
}