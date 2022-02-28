myTimeout = setTimeout(generateColor, 50);

let color1 = document.querySelector('#color1');
let color1ActualValue1 = document.querySelector('#ValueColor1');
let color2 = document.querySelector('#color2');
let color1ActualValue2 = document.querySelector('#ValueColor2');
let bodyColor = document.querySelector('#gradient');
let resultColor = document.querySelector('.resultColor');
let cssprop = document.querySelector('#Cssprop');

color1.addEventListener('input', generateColor);
color2.addEventListener('input', generateColor);

function generateColor() {
    //console.log( "from func" + color1.value);
    //console.log(resultColor);
    color1ActualValue1.value = color1.value;
    color1ActualValue2.value = color2.value;
    setBGCorlo(color1ActualValue1.value, color1ActualValue2.value)
    clearTimeout(myTimeout);
}

function setBGCorlo(col1, col2) {
    //console.log('btn mriguel' + color2.value)
    let gradientColor = `linear-gradient(to right, ${col1} ,${col2})`;
    console.log(gradientColor);
    resultColor.style.backgroundImage = gradientColor;
    cssprop.value = " background-Image:" + gradientColor;
    //resultColor.style.backgroundColor = color1.value;
}

function copyToClickBoard() {
    var content = document.querySelector('#Cssprop').value;
    navigator.clipboard.writeText(content)
}
