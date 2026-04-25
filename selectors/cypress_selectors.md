# Sélecteurs Cypress

## 🔹 1. Sélecteurs de base

### Par id
cy.get('#email')

### Par class
cy.get('.product')

### Par tag
cy.get('button')

---

## 🔹 2. Sélecteurs avec texte

cy.contains('Se connecter')
cy.contains('Ajouter au panier')

---

## 🔹 3. Combinaisons

cy.get('.product button')
cy.get('#loginBtn')

---

## 🔹 4. Bonnes pratiques Cypress

### Utiliser des attributs dédiés

Exemple recommandé :
- data-cy="login-button"
- data-cy="product-card"

Sélecteur :
cy.get('[data-cy="login-button"]')

---

## 🔹 5. Exemple concrets

### Login
cy.get('#email').type('test@test.com')
cy.get('#password').type('1234')
cy.get('#loginBtn').click()

### Produits
cy.contains('Ajouter au panier').click()

---

## 🔹 6. Anti-patterns

❌ cy.get('div > div > button')  
❌ cy.get(':nth-child(3)')  
❌ sélecteurs trop liés au CSS  

---

## 🔹 7. Bonnes habitudes

- privilégier data-cy
- éviter nth-child
- utiliser contains pour lisibilité