    const playerName = document.querySelector(".playername");

    const storagePlayer =
    localStorage.getItem("@memoryGame:playername");

    playerName.innerHTML = storagePlayer;