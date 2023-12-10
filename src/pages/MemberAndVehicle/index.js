import React, { useState, useEffect } from "react";
import { ListItem } from "./../../components/MemberAndVehicle/ListItem";
import { MemberDetail } from "./../../components/MemberAndVehicle/MemberDetail";
import { VehicleDetail } from "./../../components/MemberAndVehicle/VehicleDetail";
import { ProductDetail } from "../../components/MemberAndVehicle/ProductDetail";
import { BatchDetail } from "../../components/MemberAndVehicle/BatchDetail";
import { memberData, vehicleData } from "./const";
import api from "../../api/axiosConfig"

export const MemberAndVehicle = ({ type }) => {

	const [admin, setAdmin] = useState([]);
	const [customer, setCustomer] = useState([]);
	const [driver, setDriver] = useState([]);
	const [shipper, setShipper] = useState([]);
	const [truck, setTruck] = useState([]);
	const [bike, setBike] = useState([]);



	const getAdmin = async () => {
		try {
		  const response = await api.get("/api/v1/people/get-all-admins");
		  const result = await response.data;
		  setAdmin(result);
		  console.log(result);
		} catch (error) {
		  console.log(error);
		}
	};
	
	const getCustomer = async () => {
		try {
			const response = await api.get("/api/v1/people/get-all-customers");
			const result = await response.data;
			setCustomer(result);
			console.log(result);
		  } catch (error) {
			console.log(error);
		  }
	};
	
	const getDriver = async () => {
		try {
			const response = await api.get("/api/v1/people/get-all-drivers");
			const result = await response.data;
			setDriver(result);
			console.log(result);
		  } catch (error) {
			console.log(error);
		  }
	};

	const getShipper = async () => {
		try {
			const response = await api.get("/api/v1/people/get-all-shippers");
			const result = await response.data;
			setShipper(result);
			console.log(result);
		  } catch (error) {
			console.log(error);
		  }
	};
	
	const getTruck = async () => {
		try {
			const response = await api.get("/api/v1/vehicles/trucks/get-all");
			const result = await response.data;
			setTruck(result);
			console.log(result);
		  } catch (error) {
			console.log(error);
		  }
	};

	const getBike = async () => {
		try {
			const response = await api.get("/api/v1/vehicles/bikes/get-all");
			const result = await response.data;
			setBike(result);
			console.log(result);
		  } catch (error) {
			console.log(error);
		  }
	};

	useEffect(() => {
		getAdmin();
		getCustomer();
		getDriver();
		getShipper();
		getTruck();
		getBike();
	}, []);

	const data = type === "member" ? [
		{
			name: "Administrator",
			data: admin
		},{
			name: "Shipper",
			data: shipper
		},{
			name: "Driver",
			data: driver
		},{
			name: "Customer",
			data: customer
		}] :  type === "vehicle" ? [
			{
				name: "Truck",
				data: truck
			},{
				name: "Bike",
				data: bike
			}
		] : memberData;
	
	
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