document.getElementById('getPriceBtn').addEventListener('click', async function () {
    const coinAmount = parseFloat(document.getElementById('coinAmount').value);

    if (isNaN(coinAmount) || coinAmount <= 0) {
        alert("Please enter a valid amount of coins.");
        return;
    }

    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();

        const rate = data.bpi.USD.rate_float;
        const totalPrice = rate * coinAmount;

        document.getElementById('priceDisplay').innerText = `Total Price: $${totalPrice.toFixed(4)}`;
    } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
        alert("Sorry, we couldn't fetch the Bitcoin price. Please try again later.");
    }
});
