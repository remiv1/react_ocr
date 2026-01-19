import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../styles/cart.css';


function Cart({ cart, setCart }) {
	const [isOpen, setIsOpen] = useState(false);
	const total = cart.reduce((acc, plant) => acc + plant.price * plant.amount, 0);

	useEffect(() => {
		document.title = `LMJ: ${total.toFixed(2)}€ d'achats`;
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button className='btn' onClick={() => setIsOpen(false)}>Fermer le panier</button>
			<h2>Panier</h2>
			{cart.map(({ name, price, amount }, index) => (
				<div key={`${name}-${index}`} className='lmj-cart-item'>
					<span>{name} {price}€ x {amount}</span>
				</div>
			))}
			<h3>Total : {total.toFixed(2)}€</h3>
			<button className='btn' onClick={() => setCart(0)}>Vider le panier</button>
		</div>
	) : (
		<button className='btn' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
	)
}

Cart.propTypes = {
	cart: PropTypes.number.isRequired,
	setCart: PropTypes.func.isRequired,
};

export default Cart