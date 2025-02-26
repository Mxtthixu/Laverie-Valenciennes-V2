let localisation = document.querySelectorAll(".adresse")
let quantite = document.querySelectorAll(".quantite")
let prix = document.querySelectorAll(".prix")
let poids = document.querySelectorAll(".poids")
let prixAuKilo = document.querySelectorAll(".prixkilo")

let tableau = [prix, poids, prixAuKilo]

let button = document.querySelectorAll(".sort-button")

let listeLocalisation = liste(data)[0]
let listeQuantite = liste(data)[1]
let listePrix = liste(data)[2]
let listePoids = liste(data)[3]
let listePrixAuKilo = liste(data)[4]

let ordre = 1

let ligne = document.querySelectorAll(".donnee")

button[0].addEventListener("click", function() {
  updateAllLists(listePrix)
  colorRank(0)
})

button[1].addEventListener("click", function() {
  updateAllLists(listePoids)
  colorRank(1)
})

button[2].addEventListener("click", function() {
  updateAllLists(listePrixAuKilo)
  colorRank(2)
  console.log(ligne[0].background)
})

updateAllLists(listePrix)
colorRank(0)