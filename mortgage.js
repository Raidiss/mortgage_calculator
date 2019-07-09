window.addEventListener('load', function() {
    // console.log('hello world');

    //this is to manipulate de Dom
    function calculateMonthlyPayment() {
        // declare some variables
        let principal = document.getElementById("principal").value;
        if (isNaN(principal) || principal <= 0) {
            alert(`Please enter a valid Principal!`);
            return;
        };
        let numberOfYears = document.getElementsByClassName("term")[0].value;
        if (isNaN(numberOfYears)) {
            alert(`Please select a Term!`);
            return;
        };
        let annualRate = document.getElementById("annual-rate").value;
        if (isNaN(annualRate) || annualRate <= 0) {
            alert(`Plase enter a valid rate!`);
            return;
        };
        const monthlyRate = annualRate / 12 / 100;
        const numberOfPayments = numberOfYears * 12;
        const numerator = monthlyRate * (1 + monthlyRate) ** numberOfPayments;
        const denominator = (1 + monthlyRate) ** numberOfPayments - 1;
        const monthyPayment = principal * (numerator / denominator);
        let monthyPaymentinDollar = monthyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("payment").innerHTML = monthyPaymentinDollar;
        document.getElementById('monthlyPayment1').style = 'display: inline';
    };
    let submitButton = document.querySelector('#calculate-button');

    submitButton.onclick = function() {
        calculateMonthlyPayment();
        event.preventDefault();
    };

});