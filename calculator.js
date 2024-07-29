function calculateTip() {
    var billAmount = parseFloat(document.getElementById('bill-amount').value);
    var tipPercentage = parseFloat(document.getElementById('tip-percentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers");
        return;
    }

    var tipAmount = billAmount * (tipPercentage / 100);
    var totalAmount = billAmount + tipAmount;

    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}
