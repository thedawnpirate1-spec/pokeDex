let myPokeDex = [];
let currentImage = 0;
let myPhotoDiv = document.getElementById("mainContent");


async function init(){
    await getCharacters();
    renderGalaray ();
}



async function getCharacters(){

    try{
        const pokeCard =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        let cardSet=  await pokeCard.json();
        console.log(pokeCard);
        for(let i = 0; i< cardSet.results.length; i++){
            
            const pokeCardDetails =  await fetch(cardSet.results[i].url);
            let pokeCardDetailsJson =  await pokeCardDetails.json();
            myPokeDex.push(pokeCardDetailsJson);
        }
    }
    catch(error){
        console.error("fetch-fehler");
        if (container) {
            container.innerHTML = "<p>SCHEIß SERVER</p>";
        }
    }
    renderGalaray();
}

function renderGalaray(){
    let myCardDiv = document.getElementById("mainContent");
    if (!myCardDiv) return;
    
    myCardDiv.innerHTML = "";
    
    for( let i = 0; i < myPokeDex.length; i++){
        myCardDiv.innerHTML += getHtmlForGalaryObject(i); 
    }
}