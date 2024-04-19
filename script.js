const mainpass = document.querySelector('#password');
const confpass = document.querySelector('#confpassword');
const error = document.querySelector('.passerror');
const button = document.querySelector('.createacc');

button.addEventListener('click', ()=>{
    if(mainpass.value !== confpass.value){
        mainpass.style.borderColor = 'red';
        confpass.style.borderColor = 'red';
        error.textContent = '*passwords do not match'
    } else {
        mainpass.style.borderColor = 'gray';
        confpass.style.borderColor = 'gray';
        error.textContent = ''
    }
});