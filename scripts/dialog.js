
let myDialogContent = document.getElementById("dialogContent");
let myDialogOpener = document.getElementById("dialogFunction");


function openDialog(i){  
    currentImage = i;         
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
        openDialog(myPhotosArray.length-1);
    }
}