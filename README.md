# 🧪 Web Test Training Project

Projet pédagogique destiné à l’apprentissage des tests automatisés web avec **Selenium (JavaScript)** et **Cypress**, basé sur une application e-commerce simple.

---

# 📁 Structure du projet


#### web-test-training
#### /
#### │
#### ├── app/ # Application web à tester (HTML/CSS/JS simple)
#### ├── selectors/ # Guide des sélecteurs CSS / XPath / Cypress
#### ├── selenium/ # Tests Selenium + Page Object Model
#### ├── cypress/ # Tests Cypress
#### └── README.md


---

# ⚙️ Prérequis

Avant de commencer, installer :

## 1. Node.js
Télécharger et installer :
👉 https://nodejs.org/

Vérifier l’installation :

node -v
npm -v


---

# 🚀 Lancer l’application

L’application est statique (HTML), donc :

👉 Ouvrir simplement :

app/index.html


OU (recommandé pour éviter certains problèmes navigateur) :

Installer un serveur local :


npm install -g live-server


Puis lancer :

live-server app


---

# 🧪 Installation Selenium

## 1. Initialiser le projet

npm init -y


👉 Crée un fichier `package.json` (configuration du projet Node)

---

## 2. Installer les dépendances


npm install selenium-webdriver mocha chai


### Explication :

- **selenium-webdriver**  
  → Permet de piloter le navigateur

- **mocha**  
  → Framework de tests (structure les tests)

- **chai**  
  → Permet de faire des assertions (vérifications)

---

## 3. Lancer les tests


npx mocha tests/


👉 Exécute tous les tests du dossier `tests`

pour executer les tests de maniere plus simple, on vas modifier le fichier package.json

et remplacer "scripts" par

  "scripts": {
    "test": "mocha tests/"
  },


cela crée un raccourcis permettant de faire "npx mocha tests/" en écrivant juste "npm run test"

---

# 🧪 Installation Cypress

## 1. Initialiser (si nécessaire)


npm init -y


---

## 2. Installer Cypress


npm install cypress


---

## 3. Lancer Cypress


npx cypress open


👉 Ouvre l’interface graphique (Test Runner)

OU en mode headless :


npx cypress run


---

# 🧠 Concepts pédagogiques couverts

## 🔹 Selenium

- Localisateurs :
  - CSS
  - XPath

- Actions :
  - click
  - sendKeys

- Attentes :
  - implicit wait
  - explicit wait (simple)

- Page Object Model (POM)

---

## 🔹 Cypress

- cy.get()
- cy.contains()
- Assertions natives
- Automatic waiting
- Fixtures (JSON)
- Custom commands

---

# 🧪 Scénarios de test disponibles

## 🔐 Login
- Connexion valide
- Connexion invalide

## 🛒 Panier
- Ajouter un produit
- Vérifier présence dans le panier
- Supprimer un produit

## 💳 Commande
- Remplir formulaire
- Valider commande
- Vérifier confirmation

---

# 🧩 Application utilisée

Mini site e-commerce simulé avec :

- HTML
- CSS
- JavaScript (sans framework)

Fonctionnalités :
- Login simulé
- Ajout panier (localStorage)
- Commande simplifiée

---

# 📚 Sélecteurs

Voir dossier :


selectors/


Contient :
- CSS selectors
- XPath selectors
- Cypress best practices

---

# ⚠️ Bonnes pratiques

- Préférer les sélecteurs stables (id, data-*)
- Éviter les sélecteurs fragiles (nth-child)
- Séparer logique test / logique page (POM)
- Écrire des tests lisibles

---

# 📌 Notes

- Projet volontairement simple
- Aucun backend
- Données simulées en JavaScript
- Objectif : apprentissage, pas production

---


# Installation du CI/CD

crée le dossier .github a la racine puis workflow

mkdir .github
mkdir .github\workflows

puis le fichier de configuration

.github/workflows/e2e-tests.yml