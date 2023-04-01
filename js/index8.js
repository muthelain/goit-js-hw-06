// const form = document.querySelector('.login-form');
// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event){
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);

//     formData.forEach((value,name)=>{
//         if ( value === '' || name === ''){
//             alert('Будь ласка, заповніть усі поля!');
//         }else {
//             console.log('name',name)
//             console.log('value',value)
//         }
//         // form.reset();
//     });
// } 


const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Будь ласка, заповніть усі поля!');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    console.log(formData);

    loginForm.reset();
  }
});