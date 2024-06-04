const apiKey =  "127abfe73bd927f782db2d89"; // Replace with your API key

async function fetchRates(baseCurrency) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
    if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
    }
    return response.json();
}

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    try {
        const data = await fetchRates(fromCurrency);
        const rate = data.conversion_rates[toCurrency];
        const result = amount * rate;
        document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}