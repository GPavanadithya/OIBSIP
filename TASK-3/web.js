document.getElementById('convert-btn').addEventListener('click', function () {
    const temperatureInput = document.getElementById('temperature');
    const errorDiv = document.getElementById('error');
    const resultValue = document.getElementById('result-value');
    const resultUnit = document.getElementById('result-unit');

    const temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        errorDiv.style.display = 'block';
        resultValue.textContent = '';
        resultUnit.textContent = '';
        return;
    } else {
        errorDiv.style.display = 'none';
    }

    const fromUnit = document.querySelector('input[name="from-unit"]:checked').value;
    const toUnit = document.querySelector('input[name="to-unit"]:checked').value;

    let convertedTemperature;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        convertedTemperature = (temperature * 9 / 5) + 32;
        resultUnit.textContent = 'Fahrenheit (°F)';
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedTemperature = (temperature - 32) * 5 / 9;
        resultUnit.textContent = 'Celsius (°C)';
    } else {
        convertedTemperature = temperature; // No conversion needed
        resultUnit.textContent = fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1) + ' (' + (fromUnit === 'celsius' ? '°C' : '°F') + ')';
    }

    resultValue.textContent = convertedTemperature.toFixed(2);
}); 