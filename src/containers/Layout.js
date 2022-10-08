import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
	const { pathname } = useLocation()

	const isActive = (pn) => {
		if (pn === pathname) {
			return 'active'
		}
	}

	return (
		<div className="layout">
			<div className="layout_left">
				<ul className="navigation">
					<li>
						<Link className={`link ${isActive('/register') || isActive('/')}`} to="/register">
							<div className="box"></div>
							<div className="vr"></div>
						</Link>
					</li>
					<li>
						<Link className={`link ${isActive('/personal-info')}`} to="/personal-info">
							<div className="box"></div>
							<div className="vr"></div>
						</Link>
					</li>
					<li>
						<Link className={`link ${isActive('/delivery-info')}`} to="/delivery-info">
							<div className="box"></div>
							<div className="vr"></div>
						</Link>
					</li>
					<li>
						<Link className={`link ${isActive('/buy-info')}`} to="/buy-info">
							<div className="box"></div>
						</Link>
					</li>
				</ul>

				<div className="circle_1"></div>
				<div className="circle_2"></div>
			</div>

			<div className="layout_right">
				<ul className="navigation">
					<li>
						<Link className={`link ${isActive('/register') || isActive('/')}`} to="/register">
							<div className="box"></div>
							<div className="vr"></div>
						</Link>
					</li>
					<li>
						<Link className={`link ${isActive('/personal-info')}`} to="/personal-info">
							<div className="box"></div>
							<div className="vr"></div>
						</Link>
					</li>
					<li>
						<Link className={`link ${isActive('/delivery-info')}`} to="/delivery-info">
							<div className="box"></div>
							<div className="vr"></div>
						</Link>
					</li>
					<li>
						<Link className={`link ${isActive('/buy-info')}`} to="/buy-info">
							<div className="box"></div>
						</Link>
					</li>
				</ul>

				<Outlet />
			</div>
		</div>
	)
}

export default Layout
