# Liens et références

## Lien CDN (Content Delivery Network) pour intégration partielle de react

Voici les deux liens qui permettent l'intégration de Réact et de Babel et un exemple de script babel

```html
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<script type="text/babel">
    ReactDOM.render(<div>Bonjour tout le monde !</div>)
</script>
```

## Commande de création de projet

```bash
yarn create vite < project-name > --template react
```
