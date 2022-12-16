const planetContainer = document.getElementsByClassName('planetContainer')[0];
const planetImg = document.getElementsByClassName('planetImg')[0];
const select = document.getElementById('select');
const weightInformation = document.getElementsByClassName('weightInformation')[0];
const input = document.getElementsByClassName('input')[0];
const button = document.getElementsByClassName('button')[0];
const massRequire = document.getElementsByClassName("massRequire")[0];
const names = document.getElementsByClassName('name')[0];
const circle = document.getElementsByClassName('circle')[0];

const planetsName = {
    "MERCURY":3.7,
    "VENUS":8.87,
    "EARTH":9.798,
    "MARS":3.71,
    "JUPITER":24.92 ,
    "SETURN":10.44,
    "NEPTUNE":11.15,
    "URANUS":8.87,
    "PLUTO":0.58,
    "MOON":1.62
}

select.addEventListener('change',selectPlanet);

function selectPlanet (event) {
    const value = event.target.value;

    if(!value){
        planetContainer.style.display = "none";
        alert('Please Select A Planet')
    }else {
        planetContainer.style.display = 'flex';
        planetImg.setAttribute('src',`./${value}.png`);
        weightInformation.style.display = 'none';
    }
}

button.addEventListener('click',getAns);

function getAns(){
        weightInformation.style.display = "flex";
        names.innerText = select.value;
        circle.innerText = `${convertMassIntoWeight(input.value,select.value)} N`
}

function convertMassIntoWeight(mass, planet) {
    return (mass * planetsName[planet]).toFixed(2);
  }





