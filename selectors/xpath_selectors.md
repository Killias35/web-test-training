# Sélecteurs XPath

## 🔹 1. XPath simples

### Par tag
- //input
- //button

### Par attribut
- //input[@id='email']
- //button[@id='loginBtn']

---

## 🔹 2. XPath avec texte

- //button[text()='Se connecter']
- //h2[text()='Produits']

---

## 🔹 3. XPath avec contains

### Attribut
- //input[contains(@id, 'pass')]

### Texte
- //button[contains(text(), 'Ajouter')]

---

## 🔹 4. Navigation dans le DOM

### Parent
- //button/parent::div

### Enfant
- //div/button

### Frères (siblings)
- //input[@id='email']/following-sibling::input

---

## 🔹 5. XPath relatifs vs absolus

### Absolu (à éviter)
- /html/body/div/input

### Relatif (à privilégier)
- //input[@id='email']

---

## 🔹 6. Bonnes pratiques

- Toujours préférer XPath relatif
- Utiliser contains pour plus de robustesse
- Éviter les chemins longs

---

## 🔹 7. Mauvaises pratiques

❌ /html/body/div[2]/div[3]/button  
❌ XPath trop dépendant de la structure  
❌ XPath fragile avec index