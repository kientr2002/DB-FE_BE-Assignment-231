import React, { useState } from "react";
import { ListItem } from "./../../components/MemberAndVehicle/ListItem";
import { MemberDetail } from "./../../components/MemberAndVehicle/MemberDetail";
import { VehicleDetail } from "./../../components/MemberAndVehicle/VehicleDetail";
import { ProductDetail } from "../../components/MemberAndVehicle/ProductDetail";
import { BatchDetail } from "../../components/MemberAndVehicle/BatchDetail";
import { memberData, vehicleData } from "./const";

export const MemberAndVehicle = ({ type }) => {
	const data = type === "member" ? memberData :  type === "vehicle" ? vehicleData : type === "product" ? memberData :  memberData;
	const [chosen, setChosen] = useState(0);

	return (
		<div
			style={{
				position: "absolute",
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
				: type === "vehicle" 
					? <VehicleDetail data={data[chosen]} />
					: type === "product" 
						? <ProductDetail data={data[chosen]}/>
						: <BatchDetail data={data[chosen]}/> }
		</div>
	);
}