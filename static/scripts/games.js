let games = JSON.parse(localStorage.getItem('games')) || [
    {
        name: '2048',
        url: 'https://2048.com',
        imgUrl: './static/images/icons/2048.png',
        isPinned: false
    },
    {
        name: '1v1lol',
        url: 'https://1v1.lol',
        imgUrl: './static/images/icons/1v1-lol.webp',
        isPinned: false
    },
    {
        name: 'Achievement Unlocked',
        url: 'https://armorgames.com/play/2893/achievement-unlocked',
        imgUrl: './static/images/icons/ach.jpg',
        isPinned: false
    },
    {
        name: 'A Dance of Fire and Ice',
        url: 'https://fizzd.itch.io/a-dance-of-fire-and-ice',
        imgUrl: './static/images/icons/adofai.png',
        isPinned: false
    },
    {
        name: 'Adrenaline Challenge',
        url: 'https://www.crazygames.com/game/adrenaline-challenge',
        imgUrl: './static/images/icons/adrchl.webp',
        isPinned: false
    },
    {
        name: 'Ages of Conflict',
        url: 'https://jokupelle.itch.io/ages-of-conflict',
        imgUrl: './static/images/icons/aoc.png',
        isPinned: false
    },
    {
        name: 'Amazing Strange Rope Police',
        url: 'https://www.crazygames.com/game/amazing-strange-rope-police-vice-spider',
        imgUrl: './static/images/icons/asrp.jpg',
        isPinned: false
    },
    {
        name: 'Amidst the Clouds',
        url: 'https://www.coolmathgames.com/0-amidst-the-sky',
        imgUrl: './static/images/icons/aos.png',
        isPinned: false
    },
    {
        name: 'Among Us',
        url: 'https://klopity.itch.io/among-us-single-player-fan-game',
        imgUrl: './static/images/icons/amongus.png',
        isPinned: false
    },
    {
        name: 'Angry Sharks',
        url: 'https://kizi.com/games/angry-sharks',
        imgUrl: './static/images/icons/as.jpeg',
        isPinned: false
    },
    {
        name: 'Aquapark Slides',
        url: 'https://www.miniplay.com/game/aquapark-io',
        imgUrl: './static/images/icons/aps.png',
        isPinned: false
    },
    {
        name: 'Avalanche',
        url: 'https://www.addictinggames.com/action/avalanche',
        imgUrl: './static/images/icons/av.jpeg',
        isPinned: false
    },
    {
        name: 'Backrooms',
        url: 'https://esyverse.itch.io/backrooms',
        imgUrl: './static/images/icons/bcrms.webp',
        isPinned: false
    },
    {
        name: 'Bacon May Die',
        url: 'https://poki.com/en/g/bacon-may-die',
        imgUrl: './static/images/icons/bmd.png',
        isPinned: false
    },
    {
        name: 'Baldi\'s Basics',
        url: 'https://basically-games.itch.io/baldis-basics',
        imgUrl: './static/images/icons/bbs.jpg',
        isPinned: false
    },
    {
        name: 'Ballistic Chickens',
        url: 'https://scratch.mit.edu/projects/780035707/',
        imgUrl: './static/images/icons/bc.png',
        isPinned: false
    },
    {
        name: 'Basketball Random',
        url: 'https://www.twoplayergames.org/game/basket-random',
        imgUrl: './static/images/icons/br.webp',
        isPinned: false
    },
    {
        name: 'Battle for Gondor',
        url: 'https://www.newgrounds.com/portal/view/254825',
        imgUrl: './static/images/icons/bfg.webp',
        isPinned: false
    },
    {
        name: 'Big Red Button',
        url: 'https://www.newgrounds.com/portal/view/166104',
        imgUrl: './static/images/icons/brb.jpg',
        isPinned: false
    },
    {
        name: 'Big Tower Tiny Square',
        url: 'https://evilobjective.itch.io/bigtowertinysquare',
        imgUrl: './static/images/icons/btts.jpg',
        isPinned: false
    },
    {
        name: 'Bitlife',
        url: 'https://bitlifeonline.io/',
        imgUrl: './static/images/icons/bitlife.png',
        isPinned: false
    },
    {
        name: 'Black Hole Square',
        url: 'https://js13kgames.com/entries/black-hole-square',
        imgUrl: './static/images/icons/bhs.jpg',
        isPinned: false
    },
    {
        name: 'Black Knight',
        url: 'https://www.crazygames.com/game/the-black-knight-get-medieval',
        imgUrl: './static/images/icons/blckk.jpg',
        isPinned: false
    },
    {
        name: 'Blockpost',
        url: 'https://poki.com/en/g/blockpost',
        imgUrl: './static/images/icons/blockpost.jpeg',
        isPinned: false
    },
    {
        name: 'Bloons TD',
        url: 'https://www.crazygames.com/game/bloons-tower-defense',
        imgUrl: './static/images/icons/btd.png',
        isPinned: false
    },
    {
        name: 'Bloons TD 2',
        url: 'https://www.crazygames.com/game/bloons-tower-defense-2',
        imgUrl: './static/images/icons/btd2.png',
        isPinned: false
    },
    {
        name: 'Bloons TD 4',
        url: 'https://www.crazygames.com/game/bloons-tower-defense-4',
        imgUrl: './static/images/icons/btd4.jpg',
        isPinned: false
    },
    {
        name: 'Bloxorz',
        url: 'https://www.crazygames.com/game/bloxorz',
        imgUrl: './static/images/icons/blx.jpeg',
        isPinned: false
    },
    {
        name: 'Bob the Robber 2',
        url: 'https://www.crazygames.com/game/bob-the-robber-2',
        imgUrl: './static/images/icons/btr2.jpeg',
        isPinned: false
    },
    {
        name: 'Boxing Random',
        url: 'https://www.twoplayergames.org/game/boxing-random',
        imgUrl: './static/images/icons/br.jpg',
        isPinned: false
    },
    {
        name: 'Breaking the Bank',
        url: 'https://www.twoplayergames.org/game/boxing-random',
        imgUrl: './static/images/icons/btb.png',
        isPinned: false
    },
    {
        name: 'Burger and Freights',
        url: 'https://donitz.itch.io/burger-frights',
        imgUrl: './static/images/icons/baf.webp',
        isPinned: false
    },
    {
        name: 'Cars Simulator',
        url: 'https://www.crazygames.com/game/3d-car-simulator',
        imgUrl: './static/images/icons/cs.png',
        isPinned: false
    },
    {
        name: 'circloO',
        url: 'https://www.coolmathgames.com/0-circloo',
        imgUrl: './static/images/icons/circ.png',
        isPinned: false
    },
    {
        name: 'Cluster Rush',
        url: 'https://www.miniplay.com/game/cluster-rush',
        imgUrl: './static/images/icons/cluster-rush.webp',
        isPinned: false
    },
    {
        name: 'Cookie Clicker',
        url: 'https://orteil.dashnet.org/cookieclicker/',
        imgUrl: './static/images/icons/cookieclicker.png',
        isPinned: false
    },
    {
        name: 'Core Ball',
        url: 'https://www.arealme.com/coreball/en/',
        imgUrl: './static/images/icons/cb.png',
        isPinned: false
    },
    {
        name: 'Craft Mine',
        url: 'https://www.crazygames.com/game/craftmine',
        imgUrl: './static/images/icons/cfmn.png',
        isPinned: false
    },
    {
        name: 'Creative Kill Chamber',
        url: 'https://www.crazygames.com/game/creative-kill-chamber',
        imgUrl: './static/images/icons/ckc.png',
        isPinned: false
    },
    {
        name: 'Crossy Road',
        url: 'https://poki.com/en/g/crossy-road',
        imgUrl: './static/images/icons/cr.jpg',
        isPinned: false
    },
    {
        name: 'Cube Field',
        url: 'https://www.crazygames.com/game/cubefield',
        imgUrl: './static/images/icons/cf.png',
        isPinned: false
    },
    {
        name: 'Cut the Rope',
        url: 'https://www.crazygames.com/game/cut-the-rope',
        imgUrl: './static/images/icons/ctr.jpeg',
        isPinned: false
    },
    {
        name: 'Dante',
        url: 'https://js13kgames.com/public/entries/dante',
        imgUrl: './static/images/icons/dante.jpeg',
        isPinned: false
    },
    {
        name: 'Death Run 3D',
        url: 'https://www.y8.com/games/death_run_3d',
        imgUrl: './static/images/icons/dr3d.png',
        isPinned: false
    },
    {
        name: 'Deepest Sword',
        url: 'https://cosmicadventuresquad.itch.io/deepest-sword',
        imgUrl: './static/images/icons/deepest-sword.png',
        isPinned: false
    },
    {
        name: 'Doge Miner 2',
        url: 'https://dogeminer2.com',
        imgUrl: './static/images/icons/doge-miner-2.webp',
        isPinned: false
    },
    {
        name: 'Doodle Jump',
        url: 'https://doodlejump.io/',
        imgUrl: './static/images/icons/dj.png',
        isPinned: false
    },
    {
        name: 'Dragon VS Bricks',
        url: 'https://www.miniplay.com/game/dragon-vs-bricks',
        imgUrl: './static/images/icons/dvb.jpeg',
        isPinned: false
    },
    {
        name: 'Draw the Hill',
        url: 'https://www.mathplayground.com/pg_draw_the_hill.html',
        imgUrl: './static/images/icons/dth.png',
        isPinned: false
    },
    {
        name: 'Drift Hunters',
        url: 'https://www.crazygames.com/game/drift-hunters',
        imgUrl: './static/images/icons/drift-hunters.png',
        isPinned: false
    },
    {
        name: 'Drive Mad',
        url: 'https://poki.com/en/g/drive-mad',
        imgUrl: './static/images/icons/dm.png',
        isPinned: false
    },
    {
        name: 'Duck Life 4',
        url: 'https://www.mathplayground.com/logic_duck_life_4.html',
        imgUrl: './static/images/icons/ducklife.webp',
        isPinned: false
    },
    {
        name: 'Duke Nukem 2',
        url: 'https://www.playdosgames.com/online/duke-nukem-2/',
        imgUrl: './static/images/icons/dk2.jpeg',
        isPinned: false
    },
    {
        name: 'HexGL',
        url: 'https://hexgl.bkcore.com/',
        imgUrl: './static/images/icons/hex.jpeg',
        isPinned: false
    },
    {
        name: 'Offline Paradise',
        url: 'https://js13kgames.com/entries/offline-paradise',
        imgUrl: './static/images/icons/oflp.jpg',
        isPinned: false
    },
    {
        name: 'Rocket League',
        url: 'https://watchdocumentaries.com/rocket-league-game/',
        imgUrl: './static/images/icons/2D-Rocket-League.png',
        isPinned: false
    },
    {
        name: 'Run 2',
        url: 'https://www.coolmathgames.com/0-run-2',
        imgUrl: './static/images/icons/run3.png',
        isPinned: false
    },
    {
        name: 'Subway Surfers',
        url: 'https://poki.com/en/g/subway-surfers',
        imgUrl: './static/images/icons/subway.jpg',
        isPinned: false
    },
    {
        name: 'Trimps',
        url: 'https://trimps.github.io/',
        imgUrl: './static/images/icons/trimps.jpeg',
        isPinned: false
    },
    {
        name: '1',
        url: 'https://hgentry.github.io/1/',
        imgUrl: './static/images/icons/1.png',
        isPinned: false
    },
    {
        name: '10 Minutes Till Dawn',
        url: 'https://flanne.itch.io/10-minutes-till-dawn',
        imgUrl: './static/images/icons/10mtd.png',
        isPinned: false
    },
    {
        name: '100 Player Pong',
        url: 'https://okaybenji.itch.io/100ng',
        imgUrl: './static/images/icons/100p.jpg',
        isPinned: false
    },
    {
        name: 'Minecraft 1.5.2',
        url: 'https://eaglercraft.com/',
        imgUrl: './static/images/icons/mc.avif',
        isPinned: false
    }
];

function edu(val) {
    let iframe = document.querySelector(".iframe.active");
    window.navigator.serviceWorker
        .register("./static/uv.js", {
            scope: __uv$config.prefix,
        })
        .then(() => {
            let url = val.trim();
            if (!ifUrl(url)) url = "https://www.google.com/search?q=" + url;
            else if (!(url.startsWith("https://") || url.startsWith("http://")))
                url = "https://" + url;
            sessionStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
            location.href = "edu.html";
        });
}

function ifUrl(val = "") {
    try {
        const url = new URL(val);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (e) {
        return false; // The constructor throws an error for invalid URLs
    }
}

// Save the state of games to localStorage
function saveGameData() {
    localStorage.setItem('games', JSON.stringify(games));
}

// Add a new game to the collection of games
function addGame() {
    const name = document.getElementById('gameName').value;
    const url = document.getElementById('gameUrl').value;
    const imgUrl = document.getElementById('gameImgUrl').value;

    // Preventing the addition of duplicate games
    const exists = games.some(game => game.name.toLowerCase() === name.toLowerCase());
    if (exists) {
        alert('An game with this name already exists.');
        return;
    }

    if (name && url && imgUrl) {
        games.push({ name, url, imgUrl, isPinned: false });
        games.sort((a, b) => a.name.localeCompare(b.name)); // Keep the games sorted after addition
        renderGames();
        saveGameData(); // Save to localStorage after adding a new game
        clearForm(); // Clear the form fields after adding
    } else {
        alert('Please ensure all fields are filled in correctly.');
    }
}

function addCustomGame(name, url, imgUrl) {
    if (!name || !url || !imgUrl) {
      alert('Please ensure all fields for the custom game are filled in correctly.');
      return false; // Do not proceed with adding the game.
    }
  
    const existingGameIndex = games.findIndex(game => game.name.toLowerCase() === name.toLowerCase());
    if (existingGameIndex !== -1) {
      alert('An game with this name already exists.');
      return false; // Do not proceed with adding the game.
    }
  
    const newCustomGame = { name, url, imgUrl, isPinned: false, isCustom: true };
    games.push(newCustomGame);
    saveGameData(); // Save the updated games array.
    renderGames(); // Re-render the game list.
    clearForm(); // Clear the input form.
  
    return true; // Successfully added the game.
  }

// Render the games, filtering them if a search query is provided
function renderGames(filteredGames = games) {
    const pinnedGamesGrid = document.getElementById('pinnedGamesGrid');
    const gamesGrid = document.getElementById('gamesGrid');

    // Clear previous games
    pinnedGamesGrid.innerHTML = '';
    gamesGrid.innerHTML = '';

    // Sort games by pinned status and alphabetically within those groups
    filteredGames.sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return a.name.localeCompare(b.name); // Alphabetical sorting
    });

    // Render each game using the provided getGameElement function
    filteredGames.forEach((game, index) => {
        const gameElement = getGameElement(game, index);
        if (game.isPinned) {
            pinnedGamesGrid.appendChild(gameElement);
        } else {
            gamesGrid.appendChild(gameElement);
        }
    });
}

function renderCustomGames() {
    const customGames = games.filter(game => game.isCustom);
    const customGamesGrid = document.getElementById('customGamesGrid');
    customGamesGrid.innerHTML = ''; // Clear existing custom games.
  
    customGames.forEach((game, index) => {
      const gameElement = getGameElement(game, index);
      customGamesGrid.appendChild(gameElement);
    });
  }

// Filter the games based on the search query
function searchGames() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchQuery));
    renderGames(filteredGames);
}

// Toggle the pinned status of an game
function togglePin(index) {
    games[index].isPinned = !games[index].isPinned;
    saveGameData(); // Save to localStorage after toggling the pinned state
    renderGames(); // Re-render games to reflect changes
}

// Clear the form fields
function clearForm() {
    document.getElementById('gameName').value = '';
    document.getElementById('gameUrl').value = '';
    document.getElementById('gameImgUrl').value = '';
}

// Create a visual element for an game
function getGameElement(game, index) {
    const gameShortcut = document.createElement('div');
    gameShortcut.className = 'game-shortcut hvr-grow-rotate';
    gameShortcut.innerHTML = `
      <a onclick="edu('${game.url}')" title="${game.name}">
        <img src="${game.imgUrl}" alt="${game.name}">
      </a>
      <div class="gametext">
        <a style="font-size:12px;" onclick="edu('${game.url}')" title="${game.name}">
          ${game.name}
        </a>
        <button class="button-save" onclick="togglePin(${index})">
          ${game.isPinned ? 'Unpin' : 'Pin'}
        </button>
      </div>`
        ;
    return gameShortcut;
}

// Bind the form submission function and render the games on window load
document.getElementById('newGameForm').onsubmit = function(event) {
    event.preventDefault();
  
    const name = document.getElementById('gameName').value;
    const url = document.getElementById('gameUrl').value;
    const imgUrl = document.getElementById('gameImgUrl').value;
  
    if (addCustomGame(name, url, imgUrl)) {
      renderCustomGames(); // Render the custom games after adding one.
    }
  };

// Render games on window load, considering any search query
window.onload = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
        document.getElementById('searchBar').value = searchQuery;
        searchGames();
    } else {
        renderGames();
    }
}
