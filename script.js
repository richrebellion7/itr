function calculateIncomeTax() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);

    if (isNaN(annualIncome) || annualIncome < 0) {
        alert('Please enter a valid annual income.');
        return;
    }

    let taxRate;
    let incomeTax;

    if (annualIncome <= 250000) {
        taxRate = 0;
    } else if (annualIncome <= 500000) {
        taxRate = 0.05;
    } else if (annualIncome <= 750000) {
        taxRate = 0.10;
    } else if (annualIncome <= 1000000) {
        taxRate = 0.15;
    } else if (annualIncome <= 1250000) {
        taxRate = 0.20;
    } else if (annualIncome <= 1500000) {
        taxRate = 0.25;
    } else {
        taxRate = 0.30;
    }

    incomeTax = annualIncome * taxRate;
    const remainingBalance = annualIncome - incomeTax;

    displayResults(annualIncome, taxRate * 100, remainingBalance);
}

function displayResults(annualIncome, taxRate, remainingBalance) {
    const outputTable = document.getElementById('outputTable');
    outputTable.innerHTML = '';

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headers = ['Annual Income (₹)', 'Income Tax Eligible (%)', 'Remaining Balance (₹)'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    const row = table.insertRow();
    const values = [
        annualIncome.toFixed(2),
        taxRate.toFixed(2) + '%',
        remainingBalance.toFixed(2)
    ];

    values.forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
    });

    outputTable.appendChild(table);
}
