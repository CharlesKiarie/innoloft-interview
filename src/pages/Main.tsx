import HeaderNav from "features/layout/HeaderNav";
import { Link } from "react-router-dom";


export default function Main() {
	return (
		<>
			<HeaderNav />
			<ul className="block md:hidden pl-4">
				<li><Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:dark:text-gray-900" to="/">Home</Link></li>
				<li><Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:dark:text-gray-900" to="/product">Product</Link></li>
			</ul>
		</>
	)
}
