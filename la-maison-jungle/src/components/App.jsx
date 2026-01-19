import { useState } from 'react'
import logo from '../assets/logo.png'
import Banner from './Banner'
import Cart from './Cart.jsx'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

function App() {
	const [cart, setCart] = useState([]);
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} setCart={setCart} />
				<ShoppingList cart={cart} setCart={setCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App