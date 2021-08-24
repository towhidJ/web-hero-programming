

// var newBalance = document.getElementById('balance-total').innerHTML;
document.getElementById('deposit-button').addEventListener('click', function() {
    //var newDepositamount = document.getElementById('deposit-total').innerHTML;
    // const depositInput = document.getElementById('deposite-input');
    // const depositAmount = depositInput.value;

    // console.log(depositAmount);
    const depositAmount = getInputValue('deposite-input');
    totalUpdateField('deposit-total',depositAmount);


    updateBalance(depositAmount,true);
    //balanceTotal.innerHTML = parseInt(newBalance)+ parseInt(depositAmount);
    // depositTotal.innerHTML = parseInt(newDepositamount) + parseInt(depositAmount);
    //newDepositamount = depositTotal.innerHTML;
    // depositInput.value = "";
});


//Witdraw Function

document.getElementById('withdraw-button').addEventListener('click', function() {
    //var newWithdrawamount = document.getElementById('withdraw-total').innerHTML;
    //var newBalance = document.getElementById('balance-total').innerHTML;
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmount = withdrawInput.value;

    // console.log(withdrawAmount);

    const withdrawAmount = getInputValue('withdraw-input');
    totalUpdateField('withdraw-total',withdrawAmount);
    const withdrawTotal = document.getElementById('withdraw-total');
    updateBalance(withdrawAmount,false);
    //balanceTotal.innerHTML = parseInt(newBalance) - parseInt(withdrawAmount);
    // withdrawTotal.innerHTML = parseInt(newWithdrawamount) + parseInt(withdrawAmount);
    // newWithdrawamount = withdrawTotal.innerHTML;
    // console.log(withdrawTotal.innerHTML);
});



//Input Function
function getInputValue(inputId)
{
    const Input = document.getElementById(inputId);
    const Amount = Input.value;

    console.log(Amount);
    Input.value = "";

    return Amount;
}

function totalUpdateField(totalFieldId,amount)
{
    const totalElement = document.getElementById(totalFieldId);
    const totalText =totalElement.innerHTML;
    totalElement.innerHTML = parseInt(amount) + parseInt(totalText);
}

function updateBalance(ammount,isAdd)
{
    var balanceTotal = document.getElementById('balance-total');
    var previousBlaance = balanceTotal.innerHTML;
    if(isAdd==true)
    {
        balanceTotal.innerHTML = parseInt(previousBlaance)+ parseInt(ammount);
    }
    else{
        balanceTotal.innerHTML = parseInt(previousBlaance) - parseInt(ammount);
    }
    
}