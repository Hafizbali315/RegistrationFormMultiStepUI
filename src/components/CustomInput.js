const CustomInput = ({ label, type, placeholder }) => {
	return (
		<div className="input_container">
			<label htmlFor="">{label}</label>
			<input type={type} placeholder={placeholder} />
		</div>
	)
}

export default CustomInput
