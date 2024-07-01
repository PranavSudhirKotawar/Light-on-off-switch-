let bulbImagrEl = document.getElementById("bulbImg");
let catImagrEl = document.getElementById("catImg");
let switchTextEl = document.getElementById("switchText");
let onBtnEl = document.getElementById("onBtn");
let offBtnEl = document.getElementById("offBtn");

function offFunction(){
    console.log("Off function Running Good")
    bulbImagrEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImagrEl.src = " https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png ";
    switchTextEl.textContent="Switch Off";
    offBtnEl.style.background= "gray";
    onBtnEl.style.background= "green";
}

function onFunction(){
    console.log("On function Running Good")
    bulbImagrEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImagrEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchTextEl.textContent = "Switch On";
    offBtnEl.style.background = "red";
    onBtnEl.style.background = "gray";
}