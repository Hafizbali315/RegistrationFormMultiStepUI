import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs'

const RegistrationForm = () => {
	return (
		<div className="container">
			<h1>Registration</h1>

			<form action="">
				<CustomInput type="email" label="E-mail" placeholder="username@gmail.com" />
				<CustomInput type="password" label="Password" placeholder="password" />

				<button onClick={(e) => e.preventDefault()}>
					<Link className="link" to="/personal-info">
						Next
					</Link>
				</button>

				<div className="sign_in_seperator">
					<div className="line"></div>
					<p>Sign in with</p>
					<div className="line"></div>
				</div>

				<ul className="social_row">
					<li>
						<a className="link" href="facebook.com" target="_blank">
							<FaFacebookF className="icon" />
						</a>
					</li>
					<li>
						<a className="link" href="instagram.com" target="_blank">
							<BsInstagram className="icon" />
						</a>
					</li>
					<li>
						<a className="link" href="twitter.com" target="_blank">
							<BsTwitter className="icon" />
						</a>
					</li>
				</ul>
			</form>
		</div>
	)
}

export default RegistrationForm
