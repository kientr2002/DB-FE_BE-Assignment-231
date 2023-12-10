import { Button } from "@mui/material";
import React from "react";
import EmojiSunglasses from "./../../../assets/images/EmojiSunglasses.png";
import EmojiSunglassesChosen from "./../../../assets/images/EmojiSunglasses-chosen.png";
import DeliveryTruck from "./../../../assets/images/DeliveryTruck.png";
import DeliveryTruckChosen from "./../../../assets/images/DeliveryTruck-chosen.png";

export const ListItem = ({ type, data, chosen, setChosen }) => {
	return (
		<div
			style={{
				backgroundColor: "white",
				boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
				borderRadius: "1rem",
				padding: "1.5rem 1.5rem 1.5rem 1.5rem"
			}}>
			
			<h3 style={{
				fontWeight: "700",
				backgroundImage: "linear-gradient(180deg, rgba(66,109,236,1) 0%, rgba(134,201,145,1) 100%)",
				color: "transparent",
				WebkitBackgroundClip: "text"
			}}>{type === "member" ? "Nhân viên" : type=== "vehicle" ? "Phương tiện" : "Đơn hàng"}</h3>
			{data.map((item, index) =>
				<Button
					fullWidth
					startIcon={
						<img
							src={type === "member"
								? index === chosen
									? EmojiSunglassesChosen
									: EmojiSunglasses
								: index === chosen
									? DeliveryTruckChosen
									: DeliveryTruck}
							alt="img" style={{ width: "1rem" }}
						/>
					}
					style={{
						textTransform: "none",
						color: index === chosen ? "white" : "black",
						display: "flex",
						justifyContent: "flex-start",
						borderBottom: index === chosen ? "" : "solid 1px #B5D2E8",
					}}
					size="large"
					onClick={() => setChosen(index)}
					variant={index === chosen ? "contained" : "text"}
				>
					{item.name}
				</Button>
			)}
		</div>
	);
}