const nom = document.querySelector('.nom')
const auteur ="alex"
const date = new Date()

console.log(date.getFullYear())


nom.textContent = auteur + " " +date.getFullYear()

