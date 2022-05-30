function getInputValues(inputId) {
    const input = document.getElementById(inputId);
    const inputInText = input.value;
    const inputInNumber = parseFloat(inputInText);
    input.value = '';
    console.log(inputInNumber);
    return inputInNumber;
}

function errorHandle(inputId) {
    if (isNaN(inputId)) {
        alert('Please Enter a number');
        return;
    }
    if (inputId < 0) {
        alert('Please Enter positive a number');
        return;
    }
}

document.getElementById('calculateBtn').addEventListener('click', function () {
    const input = getInputValues('incomeInput');
    errorHandle(input)

    const foodInput = getInputValues('foodInput');
    errorHandle(foodInput)

    const rentInput = getInputValues('rentInput');
    errorHandle(rentInput)

    const clothesInput = getInputValues('clothesInput');
    errorHandle(clothesInput)

    // total expense calculation
    const expenseSum = foodInput + rentInput + clothesInput;
    // console.log(expenseSum);
    const previousExpenseSum = document.getElementById('totalExpenses');
    const previousExpenseSumInText = previousExpenseSum.innerText;
    const previousExpenseSumInNumber = parseFloat(previousExpenseSumInText);
    const totalExpensesSum = expenseSum + previousExpenseSumInNumber;
    previousExpenseSum.innerText = totalExpensesSum;
    // console.log(totalExpensesSum);

    // balance calculation
    if (input > expenseSum) {
        const previousBalance = document.getElementById('balance');
        const previousBalanceInText = previousBalance.innerText;
        const previousBalanceInNumber = parseFloat(previousBalanceInText);
        const balanceCalculation = input - expenseSum;
        // console.log(balanceCalculation);
        const newBalance = balanceCalculation + previousBalanceInNumber;
        previousBalance.innerText = newBalance;
    }
    else {
        const previousBalance = document.getElementById('balance');
        previousBalance.innerHTML = `
            <p class="text-danger">Whoa!!!!!!!Your expenses is greater than your income!!</p>
            `
    }
})

document.getElementById('saveBtn').addEventListener('click', function () {
    const input = getInputValues('incomeInput');
    const savePercentage = document.getElementById('save');
    const savePercentageInText = savePercentage.value;
    const savePercentageInNumber = parseFloat(savePercentageInText);
    savePercentage.value = '';
    // saving amount calculation
    if (isNaN(savePercentageInNumber && input)) {
        alert("Please enter a saving amount and income amount");
        return;
    }
    else {
        const savePercentageCalc = savePercentageInNumber / 100;
        const previousSaveResult = document.getElementById('savingAmount');
        const previousSaveResultInText = previousSaveResult.innerText;
        const previousSaveResultInNumber = parseFloat(previousSaveResultInText);
        const savePercentageResult = (input * savePercentageCalc) + previousSaveResultInNumber;
        previousSaveResult.innerText = savePercentageResult;

        // remaining balance calculation
        const previousRemainingBalance = document.getElementById('remainingBalance');
        const previousRemainingBalanceInText = previousRemainingBalance.innerText;
        const previousRemainingBalanceInNumber = parseFloat(previousRemainingBalanceInText);

        // previous balance
        const previousBalance = document.getElementById('balance');
        const previousBalanceInText = previousBalance.innerText;
        const previousBalanceInNumber = parseFloat(previousBalanceInText);

        const newRemainingBalance = (previousBalanceInNumber - savePercentageResult) + previousRemainingBalanceInNumber;
        previousRemainingBalance.innerText = newRemainingBalance;
    }


})