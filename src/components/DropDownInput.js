import { IoIosArrowDown } from 'react-icons/io'

const DropDownInput = ({ label, type, placeholder, dropdown }) => {
	return (
		<div className="dropdown_input">
			<label>{label}</label>

			<div className="dropdown_input_container">
				<IoIosArrowDown className="dropdown_icon" />
				<select>
					<option selected>{dropdown}</option>
				</select>
				<div className="vr"></div>
				<input type={type} placeholder={placeholder} />
			</div>
		</div>
	)
}

export default DropDownInput
