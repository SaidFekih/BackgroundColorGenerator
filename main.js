myTimeout = setTimeout(generateColor, 50);

let color1 = document.querySelector('#color1');
let color1ActualValue1 = document.querySelector('#ValueColor1');
let color2 = document.querySelector('#color2');
let color1ActualValue2 = document.querySelector('#ValueColor2');
let color3 = document.querySelector('#color3');
let color1ActualValue3 = document.querySelector('#ValueColor3');
let bodyColor = document.querySelector('#gradient');
let resultColor = document.querySelector('.resultColor');
let cssprop = document.querySelector('#Cssprop');
let coppied = document.querySelector('#coppied');
let modal = document.querySelector(".modal");
let gradientDirectionColor = 'to bottom';
let thirdColor = document.querySelector('#thirdColor');
let towColors = true;

color1.addEventListener('input', generateColor);
color2.addEventListener('input', generateColor);
color3.addEventListener('input', generateColor);

function numberOfColors1() {
    let activatBtn = document.querySelector('#addColor');
    console.log(activatBtn);
    if(activatBtn.textContent == "Add one color"){
        activatBtn.innerText = ("Delete a color")
        thirdColor.style.display="flex";
        towColors = false;
        generateColor();

    }else{
        activatBtn.innerText = ('Add one color')
        thirdColor.style.display="none";
        towColors = true;
        generateColor();
    }
}

function generateColor() {
    //console.log( "from func" + color1.value);
    //console.log(resultColor);
    color1ActualValue1.value = color1.value;
    color1ActualValue2.value = color2.value;
    color1ActualValue3.value = color3.value;
    setBGCorlo('to bottom', color1ActualValue1.value, color1ActualValue2.value,);
    clearTimeout(myTimeout);
}

function setBGCorlo(...data) {
    //console.log('btn mriguel' + color2.value)
    if (towColors) {
        let gradientColor = `linear-gradient(${data[0]}, ${data[1]} ,${data[2]})`;
        console.log(gradientColor);
        resultColor.style.backgroundImage = gradientColor;
        cssprop.value = " background-Image:" + gradientColor;
    }
    else {
        console.log("twil");
        let gradientColor = `linear-gradient(${data[0]}, ${data[1]} ,${data[2]}, ${color1ActualValue3.value})`;
        console.log(gradientColor);
        resultColor.style.backgroundImage = gradientColor;
        cssprop.value = " background-Image:" + gradientColor;
         
    }

}

function copyToClickBoard() {
    var content = document.querySelector('#Cssprop').value;
    navigator.clipboard.writeText(content)
    confirmationMessage();
}
function confirmationMessage() {
    coppied.setAttribute("style", "display: block;");
    modal.setAttribute("style", "display: block;");
}
function hideMessage() {
    coppied.setAttribute("style", "display: none;");
    modal.setAttribute("style", "display: none;");
}
function gradientDirection(typeId) {
    let direction = '';
    switch (typeId) {
        case '1': direction = 'to bottom'
            break;
        case '2': direction = 'to right'
            break;
        case '3': direction = 'to bottom right'
            break;
        case '4': direction = '360deg'
            break;
        case '5': direction = 'to left'
            break;
        default: direction = 'to bottom'

    }
    color1ActualValue1.value = color1.value;
    color1ActualValue2.value = color2.value;
    setBGCorlo(direction, color1ActualValue1.value, color1ActualValue2.value);
}
function numberOfColors(selectedNumber) {

    let colorsBox = document.querySelector(".colors");
    let colorBox = document.querySelector(".color");

    for (let i = 0; i < selectedNumber; i++) {

        let colorPicker = document.createElement('input');
        colorPicker.setAttribute("type", "color");
        colorPicker.className = "color-picker";
        colorPicker.id = "color" + i;
        colorPicker.value = '#b9eaea'

        let colorHexaCode = document.createElement('input');
        colorHexaCode.className = "color-Id"
        colorHexaCode.id = "ValueColor" + i;
        colorHexaCode.disabled = "disabled";
        colorHexaCode.value = colorPicker.value;

        colorBox.appendChild(colorPicker);
        colorBox.appendChild(colorHexaCode);
        colorsBox.appendChild(colorBox);
    }
}