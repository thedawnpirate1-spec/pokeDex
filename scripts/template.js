function getHtmlForGalaryObject(i){
    const pokemon = myPokeDex[i];
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id;
    const imgUrl = pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default;
    const type = pokemon.types[0].type.name;

    return `
    <div class="itemCard" onclick="openDialog(${i})">
        <div class="cardHeader">
            <p>#${id}</p>
            <p>${name}</p>
        </div>
        <div class="cardImg">
            <img src="${imgUrl}" alt="${name}">
        </div>
        <div class="elemntStyle">
            <span class="typeBadge">${type}</span>
        </div>
    </div>
    `;
}

function getHtmlForDialog(i){
    const pokemon = myPokeDex[i];
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id;
    const imgUrl = pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default;
    const type = pokemon.types[0].type.name;
    
    // About
    const heightMeters = (pokemon.height / 10).toFixed(1);
    const weightKg = (pokemon.weight / 10).toFixed(1);
    const abilities = pokemon.abilities.map(a => a.ability.name).join(', ');
    const category = pokemon.types.map(t => t.type.name).join(', '); // Typ als Fallback für Kategorie
    
    // Stats
    const hp = pokemon.stats.find(s => s.stat.name === 'hp').base_stat;
    const attack = pokemon.stats.find(s => s.stat.name === 'attack').base_stat;
    const defense = pokemon.stats.find(s => s.stat.name === 'defense').base_stat;
    const speed = pokemon.stats.find(s => s.stat.name === 'speed').base_stat;
    
    return `
    <div class="cardHeader">
        <p>#${id}</p>
        <p>${name}</p>
    </div>
    <div class="cardImg">
        <img src="${imgUrl}" alt="${name}">
    </div>
    <div class="elemntStyle">
        <span class="typeBadge">${type}</span>
    </div>
    <div class="cardMain">
        <div class="top">
            <button id="about" class="menuBtn" onclick="showTab('aboutContent')">About</button>
            <button id="stats" class="menuBtn" onclick="showTab('statsContent')">Stats</button>
            <button id="evolution" class="menuBtn" onclick="showTab('evolutionContent')">Evolution</button>
        </div>
        <div id="bottom" class="bottom">
            <div id="aboutContent" class="contentMenu">
                <p>Height: <span>${heightMeters} m</span></p>
                <p>Weight: <span>${weightKg} kg</span></p>
                <p>Category: <span>${category}</span></p>
                <p>Abilities: <span>${abilities}</span></p>
            </div>
            <div id="statsContent" class="contentMenu" style="display: none;">
                <div class="statRow"><span class="statName">HP:</span> <progress value="${hp}" max="150"></progress> <span>${hp}</span></div>
                <div class="statRow"><span class="statName">Attack:</span> <progress value="${attack}" max="150"></progress> <span>${attack}</span></div>
                <div class="statRow"><span class="statName">Defense:</span> <progress value="${defense}" max="150"></progress> <span>${defense}</span></div>
                <div class="statRow"><span class="statName">Speed:</span> <progress value="${speed}" max="150"></progress> <span>${speed}</span></div>
            </div>
            <div id="evolutionContent" class="contentMenu" style="display: none;">
                <img src="" alt="" srcset="">
            </div>
            <div class="btnMenu">
                <button id="previousBtn" onclick="previousCard()">Previous</button>
                <div id="pageNumber">Page: ${i + 1}/${myPokeDex.length}</div>
                <button id="nextBtn" onclick="nextCard()">Next</button>
            </div>
        </div>
    </div>
    `;
}