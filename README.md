# Droite d’Ajustement – Physique Appliquée

![Illustration graphique](screenshot.png)  

**Projet GitHub Pages** pour visualiser et comprendre la relation **Puissance × Temps = Énergie** avec une droite d’ajustement, destiné à un usage pédagogique dans les filières scientifiques et professionnelles.

---

## Objectif pédagogique

Ce projet permet de :  

1. **Visualiser des données expérimentales** en physique (puissance, temps, énergie).  
2. **Comprendre la relation linéaire** \(E = P \times t\) et son interprétation graphique.  
3. **Mettre en pratique des notions de régression linéaire** pour ajuster une droite à des données expérimentales.  
4. **Relier théorie et application concrète**, utile dans les filières techniques et professionnelles (énergie, électronique, électrotechnique, sciences de l’ingénieur).  

Ce projet transforme un **concept abstrait** en **outil interactif**, renforçant la compréhension par l’expérience directe.

---

## Fonctionnalités

- Entrée de valeurs de **temps** (s) et **puissance** (W) séparées par des virgules.
- Calcul automatique de l’**énergie reçue** \(E = P × t\) en joules.
- Calcul d’une **droite d’ajustement** par régression linéaire.
- Affichage de l’**équation de la droite** adaptée à la physique.
- Graphique interactif montrant :
  - Les **points expérimentaux**.
  - La **droite de régression**.

---

## Structure du projet
physics-regression/
│
├─ index.html # Page principale
├─ style.css # Styles visuels (sobres, naturels)
└─ script.js # Calculs, graphique et logique

---

## Utilisation

1. **Ouvrir** le projet sur GitHub Pages : `https://USERNAME.github.io/physics-regression/`
2. **Saisir les valeurs** :
   - Temps (en secondes) : `0, 1, 2, 3`
   - Puissance (en W) : `10, 15, 20, 25`
3. **Cliquer sur "Calculer"**.
4. Observer :
   - Les points représentant l’énergie expérimentale.
   - La droite d’ajustement et son équation.
5. Interpréter : la pente de la droite correspond à la puissance si l’intercept est proche de zéro.

---

## Concepts scientifiques appliqués

- **Énergie reçue \(E\)** : Joules (J), calculée par \(E = P \times t\).  
- **Puissance \(P\)** : Watts (W), mesure de l’énergie par unité de temps.  
- **Temps \(t\)** : secondes (s), durée de fonctionnement ou de transfert d’énergie.  
- **Régression linéaire** : méthode pour trouver la droite qui « s’ajuste » le mieux aux données.  

Cette application rend **concret le lien entre théorie et mesure expérimentale**, essentiel pour les formations techniques et scientifiques.

---

## Pour les enseignants et formateurs

- **Objectif didactique** : renforcer l’apprentissage par la manipulation interactive.
- **Activités possibles** :
  - Saisir différents scénarios de puissance et temps pour comparer les résultats.
  - Observer l’impact d’une erreur de mesure sur la droite d’ajustement.
  - Expliquer les notions de pente et d’intercept dans un contexte physique réel.
- **Adaptable** : peut être modifié pour d’autres grandeurs physiques (courant, tension, charge, etc.).

---

## Déploiement

1. Créer un dépôt sur GitHub : `physics-regression`.  
2. Ajouter les fichiers `index.html`, `style.css`, `script.js`.  
3. Ajouter ce `README.md`.  
4. Activer **GitHub Pages** dans les paramètres (`main` / `root`).  
5. Partager le lien pour utilisation immédiate dans un navigateur.

---

## Ressources complémentaires

- [Chart.js Documentation](https://www.chartjs.org/docs/latest/) – Pour personnaliser graphiques et visualisation.  
- [Régression linéaire en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) – Pour comprendre le calcul de la droite.  
- [Notions de physique sur l’énergie et la puissance](https://fr.wikipedia.org/wiki/Puissance_(physique)) – Rappel théorique.

---

## Design

- Palette naturelle et sobre pour favoriser la lecture et l’attention.  
- Interface simple et intuitive pour une manipulation pédagogique facile.  
- Compatible ordinateur et tablette pour un usage en classe ou atelier.



