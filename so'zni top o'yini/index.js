function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// let name = prompt("Ismingiz Nima?");
// if (!name) {
//   while (!name) {
//     name = prompt("Ismingdi kiriteee");
//   }
// }

let ism = document.getElementById("nom");
ism.innerText = "Salom," + name;

let maydon = document.getElementById("maydon");

const baza = {
  baliq: "suvda yashaydi",
  mexanika: "Slishkim uzun so'z",
  timsoh: "suvda suzadi",
  futbol: "sport turi",
  gitara: "musiqa asbobi",
  BMW: "mashina brendi",
  ASUS: "kompyuter brendi",
  apple: "telefon brendi",
  olma: "meva turi",
  piyola: "suv ichadigan idish ",
  edifier: "noushnik brendi",
};

const baza1 = Object.keys(baza);

var a = baza1[getRandomInt(baza1.length)];

ism.innerHTML = baza[a];

let unlilar = "aouie".split("");
let harflar = a.split("");
let korinadiganHarflarSoni = Math.round(harflar.length * 0.3);
console.log(korinadiganHarflarSoni);

for (let i = 0; i < korinadiganHarflarSoni; i++) {
  let son = Math.round(Math.random() * (harflar.length - 1));
  if (harflar[son] !== "^") harflar[son] = "^";
  else i--;
}
console.log(a.split(""));
console.log(harflar);

a.split("").forEach((harf, index) => {
  maydon.innerHTML += `<span>${harflar[index] == "^" ? harf : "_"}</span>`;
});
