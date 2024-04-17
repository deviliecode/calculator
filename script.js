const ONsleshC = document.getElementById("ONsleshC");
const equal = document.getElementById("equal");
const screenTextOutput = document.getElementById("screen-text-output");
const infoBox = document.getElementById("info-box");
const toScreen = document.querySelectorAll(".toScreen");

// Додаю на екран, обчислюю, видаляю, обробляю інфо
toScreen.forEach(button => {
    button.addEventListener("click", addToScreen);
});
equal.addEventListener("click", calculate);
ONsleshC.addEventListener("click", () => {
    screenTextOutput.innerHTML = "";
});
infoBox.addEventListener("click", () => {
    alert("На жаль, кнопки 'MRC', 'M-', 'M+', 'CE', '%', '+/-' не мають функціоналу. Вони лише для краси. Часу допрацювати їх не вистачало :(");
});

// Додаю числа і знаки на екран
function addToScreen(i){
    if (screenTextOutput.innerHTML.length < 10) {
        screenTextOutput.innerHTML += this.innerText;
    } else {
        alert("Максимальна довжина екрану - 10 символів! Я ще не настільки крутий, щоб зробити більше :)");
    }
}
// Обчислюю все що на екрані
function calculate(){
    const result = eval(screenTextOutput.innerText);
    if (result.toString().length > 10) {
        alert("Результат перевищує 10 символів! На жаль, більше 10 не можна :(");
    } else {
        screenTextOutput.innerHTML = Number.isInteger(result) ? result : result.toFixed(3);
    }
}