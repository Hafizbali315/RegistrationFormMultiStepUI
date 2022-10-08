import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './containers/Layout'
import RegistrationForm from './containers/RegistrationForm'
import PersonalInfo from './containers/PersonalInfo'
import DeliveryInfo from './containers/DeliveryInfo'
import BuyInfo from './containers/BuyInfo'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<RegistrationForm />} />

						<Route path="register" element={<RegistrationForm />} />
						<Route path="personal-info" element={<PersonalInfo />} />
						<Route path="delivery-info" element={<DeliveryInfo />} />
						<Route path="buy-info" element={<BuyInfo />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
