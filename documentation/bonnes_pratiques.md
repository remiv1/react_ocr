# Bonnes pratiques React

## Structure React + Vite

```txt
src/
│
├── components/
│     ├── ui/               → petits composants génériques (Button, Card…)
│     ├── layout/           → Header, Footer, Sidebar…
│     └── features/         → composants liés à une fonctionnalité
│
├── pages/                  → pages complètes (Home, About…)
│
├── hooks/                  → hooks personnalisés
│
├── utils/                  → fonctions utilitaires (formatage, dates…)
│
├── assets/                 → images, icônes, fonts
│
├── styles/                 → styles globaux, variables CSS
│
├── App.jsx
└── main.jsx
```

## Nommage des fichiers et composants

- Utiliser le PascalCase pour les noms de composants et de fichiers (ex : `MyComponent.jsx`).
- Utiliser le camelCase pour les noms de variables et de fonctions (ex : `myFunction`).
- Nommer les fichiers de composants avec le même nom que le composant qu'ils contiennent.
- Utiliser des noms descriptifs et significatifs.
- Éviter les abréviations ambiguës.
- Utiliser des suffixes pour indiquer le type de composant si nécessaire (ex : `ButtonPrimary.jsx`, `HeaderMain.jsx`).
- Organiser les composants dans des dossiers selon leur fonctionnalité ou leur type.
- Utiliser des index.js pour regrouper les exports de plusieurs composants dans un même dossier.
- Documenter les composants avec des commentaires JSDoc si nécessaire.
- Respecter une convention de nommage cohérente dans tout le projet.
- Utiliser des noms en anglais pour une meilleure collaboration internationale.
- Éviter les noms trop longs ou complexes.
- Utiliser des noms uniques pour éviter les conflits.
- Mettre à jour les noms de fichiers et de composants lors de la refactorisation du code.
- Utiliser des outils de linting pour vérifier la conformité aux conventions de nommage.
- Impliquer l'équipe dans la définition des conventions de nommage pour assurer une adoption cohérente.
- Réviser régulièrement les conventions de nommage pour les adapter aux évolutions du projet.
- Utiliser des conventions de nommage spécifiques.

## Documentation

Il est important de documenter. Pour ça, il faut une vision d'ensemble du projet (avec le README.md d'entrée) et le document d'ensemble renvera vers des documents plus spécifiques (comme celui-ci).
Chaque document doit avoir une structure claire avec des titres et sous-titres, des exemples de code, et des explications concises.
