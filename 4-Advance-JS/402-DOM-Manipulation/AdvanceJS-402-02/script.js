const parent = document.getElementById('parent');
const button = document.getElementById("button");


button.addEventListener("click",()=>{
const h4 = document.createElement('h4');
h4.innerText = "Image Element Added";
h4.style.color = "rgb(8,131,25)"
const img = document.createElement('img');
img.setAttribute('src','download.png');
img.style.height = "50px";
img.style.width = "220px"
parent.append(h4);
parent.append(img);
})