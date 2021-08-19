 
// name of all Id
// deposit  h4 span id = deposit-total
//withdraw h4 spand id = withdraw-total
// current balence h4 id = balence-total 

//all button id 
/* deposit  */
// deposit input  = deposit-input
// deposit button = deposit-btn
/* withdraw   */
// withdraw input = withdraw-input 
// withdraw button = withdraw-btn









/*

document.getElementById('deposit-btn').addEventListener('click', function () {
      const depositInput = document.getElementById('deposit-input');
      const newDepositAmountText = depositInput.value;
      const depositAmount = parseFloat(newDepositAmountText);

      // get current deposit
      const depositTotal = document.getElementById('deposit-total');
      
      const depositTotalText = depositTotal.innerText;

      const previousDepositTotal = parseFloat(depositTotalText);

      depositTotal.innerText = depositAmount + previousDepositTotal;
      // console.log(previousDepositTotal);

      //update total balence / current balence

      const balenceTotal = document.getElementById('balence-total');

      const balenceTotalText = balenceTotal.innerText;

      const previousBalenceTotal = parseFloat(balenceTotalText);

      balenceTotal.innerText = previousBalenceTotal + depositAmount;


      // clearing input field
      depositInput.value = " ";
});

*/

/*
document.getElementById('withdraw-btn').addEventListener('click', function () {
        
      const withdrawInput = document.getElementById('withdraw-input');

      const newWithdrawAmountText = withdrawInput.value;

      const withdrawAmount = parseFloat(newWithdrawAmountText);
      // console.log(newWithdraw);

      // update withdraw total 
      const withdrawTotal = document.getElementById('withdraw-total');

      const withdrawTotalText = withdrawTotal.innerText;

      const previousWithdrawTotal = parseFloat(withdrawTotalText);
      withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

      // update balence after withdraw

      const balenceTotal = document.getElementById('balence-total');

      const balenceTotalText = balenceTotal.innerText;

      const previousBalenceTotal = parseFloat(balenceTotalText);

      balenceTotal.innerText = previousBalenceTotal - withdrawAmount;



      // claring withdraw input field 
      withdrawInput.value = " ";
})


*/