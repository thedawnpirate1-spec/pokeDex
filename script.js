let myPokeDex = [];
let currentImage = 0;
let myPhotoDiv = document.getElementById("mainContent");
let currentOffset = 0;



async function init(){
    await getCharacters();
    renderGalaray ();
}



async function getCharacters(){

    try{
        const pokeCard =  await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentOffset}`);
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
        let container = document.getElementById("mainContent");
        if (container) {
            container.innerHTML = "<p>SCHEIß SERVER</p>";
        }
    }
    renderGalaray();
}

async function loadMore() {
    currentOffset += 20;
    await getCharacters();
}

function renderGalaray(){
    let myCardDiv = document.getElementById("mainContent");
    if (!myCardDiv) return;
    
    myCardDiv.innerHTML = "";
    
    for( let i = 0; i < myPokeDex.length; i++){
        myCardDiv.innerHTML += getHtmlForGalaryObject(i); 
    }
}

function dexSearch(){
    let searchbar = document.getElementById("searchBar");
    let searchInput = searchbar.value.toLowerCase();
    let myCardDiv = document.getElementById("mainContent");
    myCardDiv.innerHTML = "";

    for(let i = 0; i < myPokeDex.length; i++){
        if(myPokeDex[i].name.includes(searchInput)){
            myCardDiv.innerHTML += getHtmlForGalaryObject(i);
        }
    }
    
}