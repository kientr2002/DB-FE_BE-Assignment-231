export const getFirstRow = (data) => [
	{
		field: "Tên",
		content: data.name
	},
	{
		field: "ID",
		content: data.id
	},
	{
		field: "Tình trạng",
		content: data.status
	}
]

export const getSecondRow = (data) => [
	{
		field: "Số máy",
		content: data.engineNumber
	},
	{
		field: "Số khung",
		content: data.chassisNumber
	},
	{
		field: "Năm sản xuất",
		content: data.manufactureYear
	},
	{
		field: "Trọng lượng",
		content: data.weight
	}
]

export const getThirdRow = (data) => [
	{
		field: "Công suất",
		content: data.maxWattage
	},
	{
		field: "Mức tiêu hao nhiên liệu",
		content: data.fuelConsumptions
	},
	{
		field: "Dung tích thùng chứa",
		content: data.capacity
	},
]