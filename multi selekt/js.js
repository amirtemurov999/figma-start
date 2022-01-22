let list = document.getElementById("mbody");
let zona = document.getElementById("zona");
let listItems='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo facilis mollitia, minima obcaecati quam?'.split(' ')

listItems.forEach((item,index)=>{
    list.innerHTML+=`<div><input type="checkbox" id="id${index}"/><label for="id${index}">${item}</label></div>`
})

zona.onclick = function () {
  if (list.classList.contains("Show")) {
    list.classList.remove("Show");
  } else list.classList.add("Show");
};


