let conversionType;

function chooseConversionType() {
    let choice = prompt("Type 'C' to convert Celsius to Fahrenheit or 'F' to convert Fahrenheit to Celsius:");

    if (choice.toUpperCase() === 'C') {
        conversionType = 'CtoF';
        document.getElementById("conversion-form").style.display = "block";
    } else if (choice.toUpperCase() === 'F') {
        conversionType = 'FtoC';
        document.getElementById("conversion-form").style.display = "block";
    } else {
        alert("Invalid choice. Please try again.");
    }
}

function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    let result;

    if (conversionType === 'CtoF') {
        result = (temperature * 9/5) + 32;
        document.getElementById("result").textContent = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else if (conversionType === 'FtoC') {
        result = (temperature - 32) * 5/9;
        document.getElementById("result").textContent = `${temperature}°F is ${result.toFixed(2)}°C`;
    }
}
