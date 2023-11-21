    const inputName= document.querySelector(".inputName");
    const newGameButton = 
    document.querySelector(".newGameButton");
    const newGameform = 
    document.newGameform = document.querySelector("newGame")

    function validateinput(event) {
        console.log(event.target.value);
        if (event.target.value.length >= 3) { newGameButton.removeAttribute("disable");

        } else {
        newGameButton.setAttribute("disable","true");
        }
    }

    function handleSubmitNewGame(event) {
        event.preventDefault();
        console.log(inputName.value);
        localStorage.setItem("@memoryGame:playername", inputName.value);
        inputName.value = "",
        window.location.href = "pages/cards.html"
    }
    
    inputName.addEventListener("input", validateinput)
    newGameform.addEventListener("submit", handleSubmitNewGame);
    
