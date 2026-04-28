# Cypress `.should()` — Fiche de révision complète

## Syntaxe de base

```javascript
cy.get('selector').should('condition')
cy.get('selector').should('condition', 'value')
```

---

# 1. Visibilité / Existence

## Vérifier qu’un élément existe dans le DOM

```javascript
cy.get('.btn').should('exist')
```

## Vérifier qu’un élément n’existe pas

```javascript
cy.get('.btn').should('not.exist')
```

## Vérifier qu’un élément est visible

```javascript
cy.get('.btn').should('be.visible')
```

## Vérifier qu’un élément est caché

```javascript
cy.get('.btn').should('not.be.visible')
```

---

# 2. Texte / Contenu

## Vérifier un texte exact

```javascript
cy.get('.title').should('have.text', 'Bienvenue')
```

## Vérifier qu’un texte est contenu

```javascript
cy.get('.title').should('contain.text', 'Bienvenue')
```

## Version avec `contains`

```javascript
cy.contains('Bienvenue').should('be.visible')
```

## Vérifier qu’un élément est vide

```javascript
cy.get('.message').should('be.empty')
```

---

# 3. Classes / Attributs

## Vérifier une classe

```javascript
cy.get('.alert').should('have.class', 'active')
```

## Vérifier l’absence d’une classe

```javascript
cy.get('.alert').should('not.have.class', 'disabled')
```

## Vérifier un attribut

```javascript
cy.get('input').should('have.attr', 'placeholder', 'Email')
```

## Vérifier une valeur

```javascript
cy.get('input').should('have.value', 'test@test.com')
```

---

# 4. États des éléments

## Bouton activé

```javascript
cy.get('button').should('be.enabled')
```

## Bouton désactivé

```javascript
cy.get('button').should('be.disabled')
```

## Checkbox cochée

```javascript
cy.get(':checkbox').should('be.checked')
```

## Checkbox décochée

```javascript
cy.get(':checkbox').should('not.be.checked')
```

## Élément sélectionné

```javascript
cy.get('option:selected').should('have.text', 'France')
```

---

# 5. Taille / Nombre

## Vérifier le nombre d’éléments

```javascript
cy.get('li').should('have.length', 3)
```

# 6. URL / Navigation

## Vérifier l’URL complète

```javascript
cy.url().should('eq', 'https://mon-site.com/dashboard')
```

## Vérifier qu’une URL contient

```javascript
cy.url().should('include', '/dashboard')
```

---

# 7. API / Requêtes

## Vérifier le status code

```javascript
cy.request('/api/users')
  .its('status')
  .should('eq', 200)
```

## Vérifier une propriété

```javascript
cy.request('/api/users')
  .its('body')
  .should('have.property', 'users')
```

---

# 8. Assertions personnalisées utiles

## Vérifier plusieurs conditions

```javascript
cy.get('.card').should(($card) => {
  expect($card).to.be.visible
  expect($card.text()).to.contain('Produit')
})
```

---

# 9. Chaînage puissant

```javascript
cy.get('input')
  .should('be.visible')
  .and('have.attr', 'type', 'email')
```

---

# 10. `.should()` vs `.then()`

## `.should()`

* Retry automatique
* Idéal pour attendre un état

```javascript
cy.get('.loader').should('not.exist')
```

## `.then()`

* Pas de retry
* Pour manipuler une valeur finale

```javascript
cy.get('.price').then(($price) => {
  const text = $price.text()
})
```

---

# 11. Pièges fréquents

## Mauvais

```javascript
cy.get('.error').should('have.text', 'Erreur')
```

## Problème :

Échec si espaces ou texte additionnel.

## Mieux :

```javascript
cy.get('.error').should('contain.text', 'Erreur')
```

---

# 12. Conditions ultra utiles à mémoriser

## Les plus importantes :

```javascript
'exist'
'not.exist'
'be.visible'
'not.be.visible'
'have.text'
'contain.text'
'have.class'
'have.attr'
'have.value'
'be.checked'
'be.disabled'
'be.enabled'
'have.length'
'include'
'eq'
```

---

# 13. Règle d’or

## Préfère :

```javascript
should('contain.text')
```

## Évite sauf besoin strict :

```javascript
should('have.text')
```

---

# Résumé express

## DOM

* `exist`
* `be.visible`

## Texte

* `contain.text`
* `have.text`

## Formulaire

* `have.value`
* `be.checked`

## Navigation

* `include`
* `eq`

## Collections

* `have.length`

---
