import '../styles/cart.css'

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return(
    <div className="lmj-cart">
        <h2>Panier d'achat 🛒</h2>
        <ul style={{listStyleType: 'none'}}>
            <li>Monstera: {monsteraPrice}€</li>
            <li>Lierre: {ivyPrice}€</li>
            <li>Fleur: {flowerPrice}€</li>
        </ul>
        TOTAL: {monsteraPrice + ivyPrice + flowerPrice}€
    </div>)
}
export default Cart