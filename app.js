const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const inputTaille = document.querySelector("#inputTaille");
const inputPoids = document.querySelector("#inputPoids");
const bouton = document.querySelector("button");
let resultatIMC = document.querySelector(".resultat");

bouton.addEventListener("click", ()=> {
  let calculIMC = inputPoids.value / Math.pow((inputTaille.value / 100), 2)

  resultatIMC.innerHTML = `
    <p class="resultat">${calculIMC.toFixed(1)}</p>
  `

  
  for (const category of BMIData) {
    if (calculIMC >= category.range[0] && (category.range[1] === undefined || calculIMC < category.range[1])) {
      textIMC.innerHTML = `
        <p class="textResultat">Catégorie : ${category.name}</p>
      `;
      break; // Sortir de la boucle dès qu'une catégorie est trouvée
    }
  }

})

