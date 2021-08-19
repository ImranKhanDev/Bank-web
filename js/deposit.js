
function getInputValue(inputId) {
      const depositInput = document.getElementById(inputId);
      const depositInputText = depositInput.value;
      const depositAmount = parseFloat(depositInputText);
    
    
// clearing input field 
      depositInput.value = '';
      return depositAmount;
}

//deposit btn 

document.getElementById('deposit-btn').addEventListener('click', function () {
      // const depositInput = document.getElementById('deposit-input');
      // const depositInputText = depositInput.value;
      // const depositAmount = parseFloat(depositInputText);
      // console.log(depositAmount);
      const depositAmount = getInputValue('deposit-input')


      // deposit-box er moddhe k id ta ache seta k dhora

      const depositTotal = document.getElementById('deposit-total');

      const depositTotalText = depositTotal.innerText;

      const depositTotalAmount = parseFloat(depositTotalText);

      // deposit total kora mane depositTotal er sateh depositAmount er sateh + kora

      depositTotal.innerText = depositTotalAmount + depositAmount;
      

      

      // update current balence , so i need the id of this variable

      const balenceTotal = document.getElementById('balence-total');

      const balenceTotalText = balenceTotal.innerText;

      const getBalence = parseFloat(balenceTotalText);

      balenceTotal.innerText = getBalence + depositAmount;

      // console.log(getBalence);


});

// withdraw korar kaj shuru  tar jonno withdraw button ke dhorte hobe.

// Naming a variable for withdraw-btn
const withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click', function () {
      
      // const withdrawInput = document.getElementById('withdraw-input');
      // const withdrawInputText = withdrawInput.value;

      // const withdrawAmount = parseFloat(withdrawInputText);
      const withdrawAmount = getInputValue('withdraw-input')

      //withdrawAmount = withdraw-input

      // console.log(withdrawAmount);
     

   // update withdraw total  
   
      const withdrawTotal = document.getElementById('withdraw-total');

      const withdrawTotalText = withdrawTotal.innerText;

      const withdrawTotalAmount = parseFloat(withdrawTotalText);

      

      // withdrawTotalAmount = withdraw box er Text

      withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

      // console.log(withdrawTotalAmount);

        
     // final work 
     
      // withdraw ja kora hoise ta total balence theke minus (-) kora

      const balenceTotal = document.getElementById('balence-total');

      const presentBalenceTotal = balenceTotal.innerText;

      const presentBalenceTotalText = parseFloat(presentBalenceTotal);

      balenceTotal.innerText = presentBalenceTotalText - withdrawAmount;

})













