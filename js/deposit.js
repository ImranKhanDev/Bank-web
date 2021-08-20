
// deposit-input & withdraw-input
function getInputValue(inputId) {
      const inputField = document.getElementById(inputId);
      const inputAmountText = inputField.value;
      const amountValue = parseFloat(inputAmountText);
    
    
// clearing input field 
      inputField.value = '';
      return amountValue;
}
// update total field ( deposit-total & withdraw-total)
function updateAllTotalField(totalIdField,amount) {
      const totalField = document.getElementById(totalIdField,amount);

      const totalText = totalField.innerText;

      const totalAmount = parseFloat(totalText);

      // deposit total kora mane depositTotal er sateh depositAmount er sateh + kora

      totalField.innerText = totalAmount + amount;
}
 

/* update total */

function updateBalence(withdrawAmount,isAdd){
      const balenceTotal = document.getElementById('balence-total');

      const presentBalenceTotal = balenceTotal.innerText;

      const presentBalenceTotalText = parseFloat(presentBalenceTotal);

      if (isAdd == true) {
            
      balenceTotal.innerText = presentBalenceTotalText + withdrawAmount; 
      }
      else {
            
      balenceTotal.innerText = presentBalenceTotalText - withdrawAmount; 
      }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
      
      const depositAmount = getInputValue('deposit-input')
 
      if (depositAmount > 0) {
            updateAllTotalField('deposit-total',depositAmount);
      
     
      updateBalence(depositAmount,true);

      }
});

// withdraw korar kaj shuru  tar jonno withdraw button ke dhorte hobe.

// Naming a variable for withdraw-btn
const withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click', function () {
      
      // get & update withdraw input
      const withdrawAmount = getInputValue('withdraw-input')

      if (withdrawAmount > 0) {
            updateAllTotalField('withdraw-total',withdrawAmount)
   
      updateBalence(withdrawAmount,false);
     }

})













