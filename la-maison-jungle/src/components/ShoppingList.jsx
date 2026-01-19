import PropTypes from 'prop-types';
import { useState } from 'react';
import { plantList } from '../datas/plantList';
import '../styles/shopping-list.css';
import Categories from './Categories';
import PlantItem from './PlantItem';

function ShoppingList({ cart, setCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			setCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			setCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => (
					<div key={id}>
						<PlantItem
							key={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
							category={category}
							activeCategory={activeCategory}
						/>
						<button className='btn' onClick={() => addToCart(name, price)}>
							Ajouter au panier
						</button>
					</div>
				))}
			</ul>
		</div>
	)
}

ShoppingList.propTypes = {
	cart: PropTypes.array.isRequired,
	setCart: PropTypes.func.isRequired,
};

export default ShoppingList