// email id=  userEmail
// pass  id =  userPass
// btn id = submit-btn

// button er id ta keh dhorchi

document.getElementById('submit-btn').addEventListener('click', function () {
      
     // email id takeh dhorchi
      const emailField = document.getElementById('user-email');

      const userEmail = emailField.value;
      console.log('email is  : ', userEmail);

      // pass er id takhe dhorchi
      const passField = document.getElementById('user-pass');
      const userPass = passField.value;
      console.log(' password is : ', userPass);

 // mail and pass matching handler
      if (userEmail == 'imran@gmail.com' && userPass == 'imran') {
            console.log('you can Go in to check your acc');
            window.location.href = 'deposit&withdraw.html';
      }
      
      else{
            alert('Shalare guli maar');
      }

})













