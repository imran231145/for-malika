function showMessage() {
    const text = document.getElementById("hiddenText");
    if (text) {
        text.classList.add("show");
    }
}


const nameText = "Малике 💖";
let i = 0;

function typeWriter() {
    const nameElement = document.getElementById("name");
    if (nameElement && i < nameText.length) {
        nameElement.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
    }
}

typeWriter();
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";

    document.body.appendChild(heart);

    let position = 100;

    const move = setInterval(() => {
        position -= 0.5;
        heart.style.top = position + "vh";

        if (position < -10) {
            clearInterval(move);
            heart.remove();
        }
    }, 16);
}

setInterval(createHeart, 500);
