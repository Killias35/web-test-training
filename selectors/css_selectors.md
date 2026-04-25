# Sélecteurs CSS

## 🔹 1. Sélecteurs simples

### Par tag
- div
- button
- input

### Par id
- #email
- #password
- #loginBtn

### Par class
- .product
- .cart-item
- .container

---

## 🔹 2. Sélecteurs intermédiaires

### Par attribut
- input[type="text"]
- input[type="password"]
- button[id="loginBtn"]

### Combinaisons
- div.product
- input#email
- button.primary

### Descendants
- div p
- .container input

---

## 🔹 3. Sélecteurs avancés

### Enfants directs
- div > p
- .product > button

### nth-child
- .product:nth-child(1)
- .product:nth-child(2)

### Attribut partiel
- input[id^="pass"]
- input[id$="word"]

### Attribut contient
- [id*="log"]

---

## 🔹 4. Bonnes pratiques

- Préférer les id uniques
- Utiliser des classes stables
- Éviter les sélecteurs trop longs
- Éviter les sélecteurs dépendants du style visuel

---

## 🔹 5. Mauvaises pratiques

❌ div > div > div > button  
❌ .container .product:nth-child(3) > button  
❌ utilisation excessive de nth-child