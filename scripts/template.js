function getHtmlForGalaryObject(i){
    return
    `
    <div class="itemCard" onclick="openDialog(${i})">
                    <div class="cardHeader">
                        <p>#NR</p>
                        <p>name</p>
                    </div>
                    <div class="cardImg">
                        <img src="" alt="" srcset="">
                    </div>
                    <div class="elemntStyle">
                        <img src="" alt="" srcset="">
                    </div>
                </div>
    
    `;
}

function getHtmlForDialog(){
    return
    `
    <div class="cardHeader">
                    <p>#NR</p>
                    <p>name</p>
                </div>
                <div class="cardImg">
                    <img src="" alt="" srcset="">
                </div>
                <div class="elemntStyle">
                    <img src="" alt="" srcset="">
                </div>
            </div>
            <div class="cardMain">
                <div class="top">
                    <button id="about" class="menuBtn">About</button>
                    <button id="stats" class="menuBtn">Stats</button>
                    <button id="evolution" class="menuBtn">Evolution</button>
                </div>
                <div id="bottom" class="bottom">
                    <div id="aboutContent" class="contentMenu">
                        <p>Height: </p>
                        <p>Weight: </p>
                        <p>Category: </p>
                        <p>Abilities: </p>
                    </div>
                    <div id="statsContent" class="contentMenu">
                        <p>HP: </p>
                        <p>Attack: </p>
                        <p>Defense: </p>
                        <p>Speed: </p>
                    </div>
                    <div id="evolutionContent" class="contentMenu">
                        <img src="" alt="" srcset="">
                    </div>
                    <div class="btnMenu">
                        <button id="previousBtn" onclick="previousCard()">Previous</button>
                        <div id="pageNumber">Page: 1/12</div>
                        <button id="nextBtn" onclick="nextCard()">Next</button>
                    </div>
                </div>
    `;
}