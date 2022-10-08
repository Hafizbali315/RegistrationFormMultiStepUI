import DropDownInput from './../components/DropDownInput'
import CustomInput from './../components/CustomInput'
import { Link } from 'react-router-dom'

const DeliveryInfo = () => {
	return (
		<div className="container">
			<h1>Delivery Information</h1>

			<form>
				<DropDownInput label="Country" dropdown="" placeholder="Ukraine" type="text" />
				<CustomInput type="text" label="City" placeholder="kyiv" />
				<CustomInput type="text" label="Street" placeholder="Platon mayobaa Street" />

				<div className="form_row">
					<div className="form_left">
						<CustomInput type="text" label="Home" placeholder="25" />
					</div>
					<div className="form_right">
						<CustomInput type="text" label="Flat" placeholder="6" />
					</div>
				</div>

				<button onClick={(e) => e.preventDefault()}>
					<Link className="link" to="/buy-info">
						Next
					</Link>
				</button>
			</form>
		</div>
	)
}

export default DeliveryInfo
