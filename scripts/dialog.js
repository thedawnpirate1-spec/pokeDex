
let myDialogContent = document.getElementById("dialogContent");
let myDialogOpener = document.getElementById("dialogFunction");

function openDialog(i){  
    currentCard = i;         
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
currentCard = currentCard+1; 
    if(currentCard < myPokeDex.length){
        openDialog(currentCard);
    }
    else {
        openDialog(0);
    }
}

function previousCard(){
currentCard = currentCard-1; 
    if(currentCard >=0 ){
        openDialog(currentCard);
    }
    else {
        openDialog(myPokeDex.length-1);
    }
}

function showTab(tabId) {
    document.getElementById('aboutContent').style.display = 'none';
    document.getElementById('statsContent').style.display = 'none';
    document.getElementById('evolutionContent').style.display = 'none';
    document.getElementById(tabId).style.display = 'block';
}