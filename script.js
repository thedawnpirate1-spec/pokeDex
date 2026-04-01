

let myDialogOpener = document.getElementById("dialogFunction");

function init(){

}

function openDialog(i){  
    currentImage = i;         
    myDialogContent.innerHTML = ` <div id="nameAndClose">
                <h2 id="dialogFotoName">${myPhotoNames[i]}</h2> 
                <button id="closeBtn" onclick="closeDialog()">close</button>
            </div>
            <img src='${myPhotosArray[i]}'></img>
            <div>
                <button onclick="previousPicture()">Links</button>
                <div>Page:${currentImage +1}/12</div>
                <button onclick="nextPicture()">Rechts</button>
            </div>`
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
    if(currentImage < myPhotosArray.length){
        openDialog(currentImage)
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