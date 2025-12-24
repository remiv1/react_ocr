function HelloWorld() {
    return <>
        <h2>Bonjour, monde !</h2>
        <p>Ceci est un text pour ajouter de la difficulté</p>
    </>
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);