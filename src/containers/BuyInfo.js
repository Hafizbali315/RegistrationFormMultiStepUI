import { FaApplePay, FaCcPaypal } from 'react-icons/fa'
import { SiGooglepay, SiVisa, SiMastercard } from 'react-icons/si'
import CustomInput from './../components/CustomInput'
import { Link } from 'react-router-dom'

const BuyInfo = () => {
	return (
		<div className="container">
			<h1>Buy Informations</h1>

			<form action="">
				<div className="sign_in_seperator">
					<div className="line"></div>
					<p>Select a paymemt method</p>
					<div className="line"></div>
				</div>

				<ul className="payment_methods_row">
					<li>
						<FaApplePay className="icon" />
					</li>
					<li>
						<SiGooglepay className="icon" />
					</li>
					<li>
						<SiVisa className="icon" />
					</li>
					<li>
						<FaCcPaypal className="icon" />
					</li>
					<li>
						<SiMastercard className="icon" />
					</li>
				</ul>

				<CustomInput type="text" label="Card Number" placeholder="- - - -  - - - -  - - - -  - - - -" />

				<div className="form_row">
					<div className="form_left">
						<CustomInput type="text" label="Expiry Date" placeholder="mm/yy" />
					</div>
					<div className="form_right">
						<CustomInput type="text" label="CVV Number" placeholder="cvv" />
					</div>
				</div>

				<button onClick={(e) => e.preventDefault()}>
					<Link className="link" to="/signup">
						Signup
					</Link>
				</button>
			</form>
		</div>
	)
}

export default BuyInfo
