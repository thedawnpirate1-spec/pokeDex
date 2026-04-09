let myDialogContent = document.getElementById("dialogContent");
let myDialogOpener = document.getElementById("dialogFunction");
let currentArrayPosition = 0; // Speichert, an welcher Stelle im Array wir gerade sind

function openDialog(i){  
    currentCard = i; // Für eventuelle Kompatibilität
    
    // Finde heraus, an welcher Stelle das aufgerufene Pokémon im gefilterten Array steht
    for (let j = 0; j < currentDisplayedPokemon.length; j++) {
        if (currentDisplayedPokemon[j] === i) {
            currentArrayPosition = j;
        }
    }
    
    myDialogContent.innerHTML = getHtmlForDialog(i);
    myDialogOpener.showModal();
}

function closeDialog(){
    myDialogOpener.close();
} 

function protectionCloseDialog(event){
    event.stopPropagation();
}

function nextCard(){
    currentArrayPosition = currentArrayPosition + 1; // Gehe ein Bild weiter
    
    // Wenn wir am Ende der Liste sind, fange wieder von vorne an
    if(currentArrayPosition >= currentDisplayedPokemon.length){
        currentArrayPosition = 0; 
    }
    
    // Hole den Index aus dem Array und öffne den Dialog
    let nextIndex = currentDisplayedPokemon[currentArrayPosition];
    openDialog(nextIndex);
}

function previousCard(){
    currentArrayPosition = currentArrayPosition - 1; // Gehe ein Bild zurück
    
    // Wenn wir ganz am Anfang sind, springe zum letzten Bild
    if(currentArrayPosition < 0 ){
        currentArrayPosition = currentDisplayedPokemon.length - 1; 
    }
    
    // Hole den Index aus dem Array und öffne den Dialog
    let previousIndex = currentDisplayedPokemon[currentArrayPosition];
    openDialog(previousIndex);
}

function showTab(tabId) {
    document.getElementById('aboutContent').style.display = 'none';
    document.getElementById('statsContent').style.display = 'none';
    document.getElementById('evolutionContent').style.display = 'none';
    document.getElementById(tabId).style.display = 'block';
}