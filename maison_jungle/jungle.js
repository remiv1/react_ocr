function Header() {
    const maisonJungle = "la maison de la jungle"
    return <h1>{ maisonJungle.toUpperCase() }</h1>
}

function Description() {
    return(<p>Ici, achetez toutes les plantes dont vous avez toujours rêvé🌵🌱🎍</p>)
}

function Banner() {
    return (
    <div>
        <Header />
        <Description />
    </div>
    )
}

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return(<div>
    <h2>Panier d'achat 🛒</h2>
    <ul>
        <li>Monstera: {monsteraPrice}€</li>
        <li>Lierre: {ivyPrice}€</li>
        <li>Fleur: {flowerPrice}€</li>
    </ul>
    TOTAL: {monsteraPrice + ivyPrice + flowerPrice}€
    </div>)
}

ReactDOM.render(
    <React.Fragment><Banner /><Cart /></React.Fragment>,
    document.getElementById('root')
);