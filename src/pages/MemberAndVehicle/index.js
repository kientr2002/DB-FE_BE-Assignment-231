import React, { useState } from "react";
import { ListItem } from "./../../components/MemberAndVehicle/ListItem";
import { MemberDetail } from "./../../components/MemberAndVehicle/MemberDetail";
import { VehicleDetail } from "./../../components/MemberAndVehicle/VehicleDetail";
import { memberData, vehicleData } from "./const";

export const MemberAndVehicle = ({ type }) => {
	const data = type === "member" ? memberData : vehicleData;
	const [chosen, setChosen] = useState(0);

	return (
		<div
			style={{
				position: "fixed",
				top: "20%",
				left: "13%",
				width: "84%",
				height: "75%",
				display: "grid",
				gridTemplateColumns: "1fr 2fr",
				columnGap: "2%",
			}}
			>
			<ListItem type={type} data={data} chosen={chosen} setChosen={setChosen} />
			{type === "member"
				? <MemberDetail data={data[chosen]} />
				: <VehicleDetail data={data[chosen]} />}
		</div>
	);
}