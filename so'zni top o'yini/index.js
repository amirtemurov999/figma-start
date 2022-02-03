function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let bolalar = document.querySelectorAll(".klaviatura .c");
console.log(bolalar);

let matnlar = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
matnlar.forEach((matn, index) => {
  matn.split("").forEach((harf) => {
    bolalar[index].innerHTML += `<span class="tugma">${harf}</span>`;
  });
});

let tugmalar = {};
document.querySelectorAll(".tugma").forEach((tugma) => {
  tugmalar[tugma.innerText] = tugma;
});

console.log(tugmalar);
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
  let inputcha = document.createElement("input");
  inputcha.onkeydown = klavishBosilganda;
  inputcha.id = "harf" + index;
  inputcha.tabIndex = index;
  inputcha.value = harflar[index] == "^" ? harf : "";
  inputcha.readOnly = harflar[index] == "^";
  maydon.appendChild(inputcha);
});

function klavishBosilganda(key) {
  let id = key.target.tabIndex;
  if (key.target.value !== "" && key.which !== 8) {
    key.preventDefault();
  } else if (key.which == 8) {
    if (id > 0) {
      key.target.value = "";
      document.getElementById("harf" + (id - 1)).focus();
    }
  }
  key.target.value = key.key;
  document.getElementById("harf" + (id + 1)).focus();
}

window.addEventListener("keydown", (key) => {
  if (tugmalar[key.key]) {
    tugmalar[key.key].classList.add("down");
  }
});

window.addEventListener("keyup", (key) => {
  if (tugmalar[key.key]) {
    tugmalar[key.key].classList.remove("down");
  }
});
