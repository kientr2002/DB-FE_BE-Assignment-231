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
		field: "Chức vụ",
		content: data.role
	},
	{
		field: "Tình trạng",
		content: data.status
	}
]

export const getSecondRow = (data) => [
	{
		field: "Giới tính",
		content: data.gender
	},
	{
		field: "Số điện thoại",
		content: data.phone
	},
	{
		field: "Email",
		content: data.email
	},
]

export const getThirdRow = (data) => [
	{
		field: "Địa chỉ",
		content: data.address
	},
]