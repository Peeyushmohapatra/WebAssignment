
const button  = document.getElementById("button");
const audio   = document.getElementById("audio");
const meaning = document.getElementById("meaning");
const input   = document.getElementById("input");

button.addEventListener("click",fetchData)

async function fetchData () {
    
    if(input.value){
        const data = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input.value}?key=7b4de7eb-c775-44f0-bf41-9e9875c345bd`);
        const steData = await data.text();
        const jsonData = JSON.parse(steData)
        // console.log(jsonData)
        const means = jsonData[0].shortdef[0];
        meaning.innerText = means;
        const audioName = jsonData[0].hwi.prs[0].sound.audio;
        console.log(audioName)
        const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${getAudioSubdirectory(audioName)}/${audioName}.mp3`;
        audio.setAttribute("src",audioUrl)
    }
    
}

function getAudioSubdirectory(audioName) {
    if (audioName.startsWith('bix')) {
        return 'bix'
    } else if (audioName.startsWith('gg')) {
        return 'gg'
    } else if (!isNaN(audioName[0])) {
        return 'number'
    } else {
        return audioName[0]
    }
}