// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
let i=1;
// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {


    // Add text node with input values
   // localStorage.setItem(`${nameInput.value}`, `${emailInput.value}`);
let myvar= { name:  `${nameInput.value}`  , email: `${emailInput.value}` }
let  userdata= JSON.stringify(myvar);
localStorage.setItem(`user${i}`,userdata)
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }

  let ul= document.getElementById('users');
  
  let li= document.createElement('li');
  let deserialisedobj= JSON.parse( localStorage.getItem(`user${i++}`))
  li.appendChild(document.createTextNode(deserialisedobj.name+" : "+ deserialisedobj.email ))
  ul.appendChild(li)


}