import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './containers/Layout'
import RegistrationForm from './components/RegistrationForm'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<RegistrationForm />} />

						<Route path="register" element={<RegistrationForm />} />
						<Route path="personal-info" element={<h1>Personal Information</h1>} />
						<Route path="delivery-info" element={<h1>Delivery Information</h1>} />
						<Route path="buy-info" element={<h1>Buy Information</h1>} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
