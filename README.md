# Défi 1 : Déboguer le Tableau de Bord du Vaisseau Spatial

**Temps estimé :** 45 minutes  
**Difficulté :** Débutant  
**Thème :** Science-Fiction Spatiale (Star Trek / Battlestar Galactica)

---

## Scénario du Défi

🚨 **SIGNAL DE DÉTRESSE REÇU** 🚨

```
TRANSMISSION DE : U.S.S DIRO
DATE STELLAIRE : 2024.01.15
STATUT : DÉFAILLANCE CRITIQUE DES SYSTÈMES

Ceci est l'ordinateur du vaisseau. Nous subissons de multiples 
défaillances de systèmes sur le pont de commande. Le tableau de bord 
est non fonctionnel et nous ne pouvons pas évaluer le statut de notre vaisseau.

Systèmes critiques hors ligne :
- Affichage du Support Vital
- Statut du Générateur de Boucliers
- Interface de l'Ordinateur de Navigation
- Surveillance du Noyau Warp

Nous avons besoin d'un ingénieur pour restaurer ces systèmes immédiatement. 
Le code source est disponible, mais plusieurs composants sont cassés.

FIN DE TRANSMISSION
```

Vous êtes l'ingénieur répondant à ce signal de détresse. Votre mission est de réparer le tableau de bord de contrôle du vaisseau spatial cassé. Chaque bug que vous corrigez restaurera un système critique du vaisseau, ramenant le vaisseau à un statut opérationnel complet.

---

## Description du Code Source

Le code source contient une application React Native/Expo qui devrait afficher un tableau de bord de contrôle de vaisseau spatial. La structure de l'application est la suivante :

```
starship-dashboard/
├── App.tsx               # Point d'entrée principal de l'app (a des problèmes)
├── components/
│   ├── SystemStatus.tsx  # Composant pour les affichages de statut système (cassé)
│   ├── ShieldGauge.tsx   # Indicateur de niveau de bouclier (style cassé)
│   ├── LifeSupport.tsx   # Affichage du système de support vital (props non connectées)
│   └── NavigationPanel.tsx # Interface de l'ordinateur de navigation (imports manquants)
├── types/
│   └── index.ts         # Définitions de types TypeScript
├── assets/
│   └── images/          # Images et icônes du vaisseau
├── package.json         # Dépendances
├── tsconfig.json        # Configuration TypeScript
└── README.md           # Ce fichier (formaté comme signal de détresse)
```

### Problèmes Actuels dans le Code Source

1. **Imports Manquants** (`NavigationPanel.tsx`)
   - Composants React Native non importés
   - Composant Image manquant
   - StyleSheet non importé
   - Types TypeScript non importés

2. **Affichages de Statut Cassés** (`SystemStatus.tsx`)
   - Les composants se rendent mais affichent des données incorrectes
   - Les props ne sont pas passées correctement
   - Le rendu conditionnel ne fonctionne pas
   - Types de props TypeScript manquants ou incorrects

3. **Désastres de Style** (`ShieldGauge.tsx`)
   - Le texte d'avertissement est invisible (couleur correspond au fond)
   - Les jauges n'ont pas de dimensions (largeur/hauteur manquantes)
   - Mise en page cassée (flexbox non configuré)
   - Les couleurs ne correspondent pas à l'esthétique sci-fi

4. **Props Non Connectées** (`LifeSupport.tsx`, `App.tsx`)
   - Le nom du vaisseau passé en prop mais non affiché
   - Le nom du capitaine disponible mais non affiché
   - Les props de statut système existent mais les composants ne les utilisent pas

5. **Erreurs de Console**
   - Plusieurs erreurs "Cannot read property"
   - Erreurs "Component is not defined"
   - Avertissements liés au style

### Ce Qui Fonctionne

- La configuration de base d'Expo est correcte
- La structure de fichiers est en place
- Quelque style existe (nécessite des corrections)
- La structure des composants est globalement correcte (nécessite des connexions)

---

## Focus du Défi

Ce défi se concentre sur les éléments fondamentaux du développement React Native :

### 1. **Syntaxe JSX**
- Comprendre les éléments et la syntaxe JSX
- Balises auto-fermantes
- Intégrer des expressions JavaScript dans JSX

**Documentation :**
- [Introduction React JSX](https://react.dev/learn/writing-markup-with-jsx)
- [Composants de Base React Native](https://reactnative.dev/docs/intro-react-native-components)

### 2. **Composants de Base (View, Text, Image)**
- Utiliser `View` comme conteneur
- Afficher du texte avec `Text`
- Rendre des images avec `Image`
- Composition de composants

**Documentation :**
- [Composant View](https://reactnative.dev/docs/view)
- [Composant Text](https://reactnative.dev/docs/text)
- [Composant Image](https://reactnative.dev/docs/image)

### 3. **Style de Base avec StyleSheet**
- Créer des styles avec `StyleSheet.create()`
- Appliquer des styles aux composants
- Comprendre les bases du flexbox
- Propriétés color, fontSize, margin, padding

**Documentation :**
- [React Native StyleSheet](https://reactnative.dev/docs/stylesheet)
- [Mise en Page avec Flexbox](https://reactnative.dev/docs/flexbox)
- [Référence des Couleurs](https://reactnative.dev/docs/colors)

### 4. **Props & Types TypeScript**
- Passer des props aux composants
- Accéder aux props dans les composants fonctionnels
- Utiliser les props pour afficher des données dynamiques
- Définir des interfaces TypeScript pour les props
- Sécurité de type avec TypeScript

**Documentation :**
- [Composants et Props React](https://react.dev/learn/passing-props-to-a-component)
- [Props React Native](https://reactnative.dev/docs/props)
- [TypeScript avec React](https://react-typescript-cheatsheet.netlify.app/)
- [Interfaces TypeScript](https://www.typescriptlang.org/docs/handbook/interfaces.html)

### 5. **Structure des Composants & TypeScript**
- Composants fonctionnels avec TypeScript
- Organisation des composants
- Structure de fichiers et imports
- Exporter des composants
- Annotations de type TypeScript
- React.FC et types de composants fonctionnels

**Documentation :**
- [Composants Fonctionnels React](https://react.dev/learn/your-first-component)
- [Composants React Native](https://reactnative.dev/docs/components-and-apis)
- [Aide-mémoire TypeScript React](https://react-typescript-cheatsheet.netlify.app/)
- [Manuel TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)

---

## Concepts Git Couverts

Ce défi vous présente le workflow Git complet :

1. **Forker un Dépôt**
   - Créer votre propre copie du dépôt de défi
   - Comprendre la relation de fork

2. **Cloner**
   - Cloner votre fork sur votre machine locale
   - Configurer le dépôt local

3. **Branches**
   - Créer une branche de fonctionnalité (`fix/critical-systems`)
   - Comprendre les conventions de nommage des branches
   - Travailler sur des changements isolés

4. **Commits**
   - Mettre en staging les changements (`git add`)
   - Écrire des messages de commit significatifs
   - Faire des commits atomiques (un système par commit)

5. **Push**
   - Pousser votre branche vers votre fork
   - Comprendre les dépôts distants

6. **Pull Requests**
   - Créer une PR depuis votre fork vers le dépôt original
   - Écrire des descriptions de PR
   - Comprendre le processus de revue

**Documentation Git :**
- [Manuel Git](https://guides.github.com/introduction/git-handbook/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Écrire de Bons Messages de Commit](https://cbea.ms/git-commit/)

---

## Liste de Tâches

Votre mission est de restaurer tous les systèmes critiques. Utilisez cette liste pour suivre votre progression :

### Tâches de Restauration des Systèmes

- [ ] **Support Vital En Ligne**
  - Corriger `LifeSupport.tsx` pour afficher le nom du vaisseau et du capitaine depuis les props
  - Définir l'interface TypeScript pour les props
  - S'assurer que les indicateurs de statut affichent les bonnes valeurs
  - Corriger le style pour rendre le texte visible

- [ ] **Générateurs de Boucliers Fonctionnels**
  - Corriger le style de `ShieldGauge.tsx` (ajouter des dimensions, corriger les couleurs)
  - Ajouter des types TypeScript pour les props de jauge
  - Rendre le texte d'avertissement visible
  - S'assurer que la jauge affiche le bon pourcentage de bouclier

- [ ] **Ordinateur de Navigation Répondant**
  - Corriger les imports manquants dans `NavigationPanel.tsx`
  - S'assurer que tous les composants sont correctement importés
  - Ajouter les définitions de types TypeScript
  - Corriger toutes les erreurs de console liées à la navigation

- [ ] **Noyau Warp Stable**
  - Corriger `SystemStatus.tsx` pour afficher correctement tous les statuts système
  - Connecter les props correctement avec les types TypeScript
  - Corriger le rendu conditionnel pour les états système

- [ ] **Console Propre**
  - Résoudre toutes les erreurs de console
  - Corriger tous les avertissements "undefined"
  - S'assurer qu'il n'y a pas de messages d'erreur rouges

### Tâches de Workflow Git

- [ ] Forker le dépôt
- [ ] Cloner votre fork localement
- [ ] Créer une branche de fonctionnalité : `fix/critical-systems`
- [ ] Faire au moins 4 commits (un par système restauré)
- [ ] Pousser votre branche vers votre fork
- [ ] Créer une Pull Request intitulée "Réparations d'Urgence Terminées"
- [ ] Écrire une description de PR expliquant quels systèmes ont été restaurés

---

## Vérification

Pour vérifier que votre solution fonctionne :

1. **Lancer l'application :**
   ```bash
   npm start
   # ou
   expo start
   ```

2. **Liste de Vérification Visuelle :**
   - [ ] Le nom du vaisseau et du capitaine sont visibles
   - [ ] Tous les indicateurs de statut système s'affichent correctement
   - [ ] La jauge de bouclier affiche le pourcentage avec un style approprié
   - [ ] Le panneau de navigation s'affiche sans erreurs
   - [ ] Aucune erreur ou avertissement dans la console
   - [ ] Tout le texte est lisible (couleurs et contraste appropriés)
   - [ ] La mise en page est correctement structurée (pas d'éléments qui se chevauchent)

3. **Qualité du Code :**
   - [ ] Tous les imports sont présents et corrects
   - [ ] Les props sont correctement passées et utilisées avec les types TypeScript
   - [ ] Interfaces TypeScript définies pour toutes les props de composants
   - [ ] Aucune erreur ou avertissement TypeScript
   - [ ] Les styles sont définis en utilisant StyleSheet
   - [ ] Pas de valeurs codées en dur (utiliser les props)
   - [ ] Le code est propre et lisible

---

## Ressources & Documentation

### Bases React Native
- [Démarrage React Native](https://reactnative.dev/docs/getting-started)
- [Documentation Expo](https://docs.expo.dev/)
- [Concepts de Base React Native](https://reactnative.dev/docs/getting-started)

### Composants
- [API View](https://reactnative.dev/docs/view)
- [API Text](https://reactnative.dev/docs/text)
- [API Image](https://reactnative.dev/docs/image)

### Style
- [API StyleSheet](https://reactnative.dev/docs/stylesheet)
- [Props de Mise en Page](https://reactnative.dev/docs/layout-props)
- [Guide Flexbox](https://reactnative.dev/docs/flexbox)

### Fondamentaux React
- [Démarrage Rapide React](https://react.dev/learn)
- [Composants et Props](https://react.dev/learn/passing-props-to-a-component)
- [Syntaxe JSX](https://react.dev/learn/writing-markup-with-jsx)

### TypeScript
- [Manuel TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript avec React](https://react-typescript-cheatsheet.netlify.app/)
- [Interfaces TypeScript](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript dans React Native](https://reactnative.dev/docs/typescript)

### Git & GitHub
- [Bases Git](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Guides GitHub](https://guides.github.com/)
- [Créer une Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

---

## Instructions de Soumission

1. **Compléter toutes les tâches de restauration système** de la liste ci-dessus

2. **Suivre les meilleures pratiques Git :**
   - Créer des messages de commit significatifs (par ex., "Restaurer les systèmes de support vital")
   - Faire des commits atomiques (un système par commit)
   - Pousser votre branche vers votre fork

3. **Créer une Pull Request :**
   - Titre : "Réparations d'Urgence Terminées"
   - La description doit inclure :
     - Quels systèmes ont été restaurés
     - Quels problèmes ont été corrigés
     - Tous les défis rencontrés
     - Des captures d'écran du tableau de bord fonctionnel (optionnel mais recommandé)

4. **Attendre la revue :**
   - Votre PR sera revue
   - Répondre à tout feedback si nécessaire
   - Une fois approuvée, votre mission est terminée ! 🎉

---

## Défis Bonus (Optionnels)

Si vous terminez tôt et voulez aller plus loin :

1. **Ajouter des animations :** Faire animer en douceur les changements de statut système
2. **Ajouter des effets sonores :** Jouer des sons d'alerte quand les systèmes se mettent en ligne
3. **Ajouter plus de systèmes :** Créer des systèmes de vaisseau supplémentaires (armes, capteurs, etc.)
4. **Améliorer le style :** Ajouter des dégradés, des ombres et plus d'esthétique sci-fi
5. **Ajouter de l'interactivité :** Créer des boutons qui peuvent activer/désactiver les systèmes

---

## Conseils & Indices

- **Lire attentivement les messages d'erreur :** Ils vous disent souvent exactement ce qui ne va pas
- **Vérifier la console :** Les erreurs React Native sont généralement très descriptives
- **Commencer par les imports :** Les imports manquants causent beaucoup d'erreurs
- **Corriger un système à la fois :** N'essayez pas de tout corriger en une fois
- **Tester fréquemment :** Lancer l'application après chaque correction pour voir votre progression
- **Utiliser la documentation :** Les liens ci-dessus sont vos meilleurs amis

---

**Bonne chance, Ingénieur ! Le vaisseau compte sur vous !** 🚀

