let conversionType;

function startConversion() {
    document.getElementById("conversion-form").style.display = "block";
}

function convertTemperatureRange() {
    const startValue = parseFloat(document.getElementById("startTemperature").value);
    const endValue = parseFloat(document.getElementById("endTemperature").value);
    const scale = document.getElementById("scale").value.toUpperCase();
    const results = document.getElementById("results");
    results.innerHTML = '';

    if (isNaN(startValue) || isNaN(endValue) || (scale !== 'C' && scale !== 'F')) {
        alert("Please enter valid inputs.");
        return;
    }

    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemp;
        if (scale === 'C') {
            convertedTemp = (temp * 9/5) + 32;
            results.innerHTML += `${temp}°C is ${convertedTemp.toFixed(2)}°F<br>`;
        } else if (scale === 'F') {
            convertedTemp = (temp - 32) * 5/9;
            results.innerHTML += `${temp}°F is ${convertedTemp.toFixed(2)}°C<br>`;
        }
    }
}