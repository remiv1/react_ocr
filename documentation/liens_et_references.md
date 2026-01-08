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

## Commandes

### Commande de création de projet

```bash
yarn create vite < project-name > --template react
```

### Commande de démarrage du projet

```bash
yarn dev
```

### Commande de build du projet

```bash
yarn build
```

### Commande de prévisualisation du projet buildé

```bash
yarn preview
```

### Commande d'installation des dépendances

Dans le projet, j'ai eu à utiliser `prop-types` par exemple pour typer les props. Pour installer une dépendance, on utilise la commande suivante pour chaque dépendance.

```bash
yarn add < package-name >
```
