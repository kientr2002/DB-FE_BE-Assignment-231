export const getFirstRow = (data) => [
	{
		field: "Tên",
		left: "35%",
		content: data.name
	},
	{
		field: "ID",
		left: "55%",
		content: data.id
	},
	{
		field: "Chức vụ",
		left: "70%",
		content: data.role
	},
	{
		field: "Tình trạng",
		left: "85%",
		content: data.status
	}
]

export const getSecondRow = (data) => [
	{
		field: "Giới tính",
		left: "35%",
		content: data.gender
	},
	{
		field: "Số điện thoại",
		left: "55%",
		content: data.phone
	},
	{
		field: "Email",
		left: "70%",
		content: data.email
	},
]

export const getThirdRow = (data) => [
	{
		field: "Địa chỉ",
		left: "35%",
		content: data.address
	},
]