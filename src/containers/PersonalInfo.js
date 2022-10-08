import ImageInput from './../components/ImageInput'
import CustomInput from './../components/CustomInput'
import DropDownInput from './../components/DropDownInput'
import { Link } from 'react-router-dom'

const PersonalInfo = () => {
	return (
		<div className="container">
			<h1>Personal Information</h1>

			<form>
				<div className="form_row">
					<div className="form_left">
						<ImageInput label="Your Photo" />
					</div>
					<div className="form_right">
						<CustomInput type="text" placeholder="Mark" label="Name" />
						<CustomInput type="text" placeholder="Kim" label="Surname" />
					</div>
				</div>

				<DropDownInput label="Phone number" dropdown="+283" placeholder="(___) ___ ___" type="text" />

				<div className="personal_info_row">
					<DropDownInput label="Day" dropdown="" placeholder="04" type="text" />
					<DropDownInput label="Month" dropdown="" placeholder="11" type="text" />
					<DropDownInput label="Year" dropdown="" placeholder="2000" type="text" />
				</div>

				<button>
					<Link className="link" to="/delivery-info">
						Next
					</Link>
				</button>
			</form>
		</div>
	)
}

export default PersonalInfo
