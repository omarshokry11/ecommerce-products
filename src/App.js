import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<div className="main-app">
			<div className='container'>
				<Navbar />
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="product/:productId" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}