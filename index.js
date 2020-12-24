let folder = "/Sounds/";
let sounds = ["bruh", "directed", "ea-sports", "rick-astley", "roblox"];
let extension = ".mp3";

let container = document.querySelector(".cardsParent");
for(let i = 0; i < 5; i++) {
    let card = document.createElement("div");
    card.className = "card";
    container.appendChild(card);

    let cardTitleParent = document.createElement("div");
    cardTitleParent.className = "card-title-parent";
    card.appendChild(cardTitleParent);

    let title = document.createElement("h1");
    title.className = "card-title";
    for (let s = 0; s < sounds.length; s++) {
        if(i == s) {
            title.innerHTML = sounds[i];
        }
    }
    title.style.whiteSpace = "nowrap";
    title.style.backgroundColor = "white";
    title.style.textAlign = "center";
    title.style.color = "#565656";
    cardTitleParent.appendChild(title);

    let btnParent = document.createElement("div");
    btnParent.className = "btn-parent";
    card.appendChild(btnParent);

    let playBtn = document.createElement("button");
    playBtn.className = "btn-play fas fa-play";
    playBtn.style.height = "3rem";
    playBtn.style.width = "3rem";
    playBtn.style.fontSize = "30px";
    playBtn.style.backgroundColor = "transparent";
    playBtn.style.border = "none";
    playBtn.style.color = "#565656";
    playBtn.addEventListener("click", function() {
        for (let s = 0; s < sounds.length; s++) {
            if(i == s) {
                playSound(folder + sounds[s] + extension);
            }
        }
    });
    btnParent.appendChild(playBtn);
}

function playSound(s) {
    let sound = new Audio(s);
    sound.play();
}