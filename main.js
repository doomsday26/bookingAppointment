// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit',omsubmit);
userList.addEventListener('click',removeItem)
userList.addEventListener('click',EditItem)

function omsubmit(e){
e.preventDefault();
if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else{

//check if entered email is there in localstorage
//if present
if( localStorage.getItem(emailInput.value)!==null){  
localStorage.removeItem(emailInput.value);
localStorage.setItem(emailInput.value,nameInput.value);
}else{
    //if absent
    localStorage.setItem(emailInput.value,nameInput.value)
}
//clear previous items
let ul= document.getElementById('users');
while (ul.firstChild) {
    ul.removeChild(ul.lastChild);
  }

for (let i = 0; i < localStorage.length; i++) {
   var emailval= localStorage.key(i);
   var nameval= localStorage.getItem(emailval);
   //console.log(nameval+ " "+ emailval);

   // creating an li object.

let li= document.createElement('li');
li.appendChild( document.createTextNode(nameval))
li.appendChild( document.createTextNode( ": "))
li.appendChild( document.createTextNode(emailval))

//create span
let span = document.createElement('span');
span.appendChild(document.createTextNode('  '))
li.appendChild(span)
//delete button
let btn = document.createElement('button');
btn.className='delete'
btn.appendChild(document.createTextNode('DEL'))
li.appendChild(btn)


// edit button
let span2 = document.createElement('span');
span2.appendChild(document.createTextNode('  / '))
li.appendChild(span2)
let editbtn = document.createElement('button');
editbtn.className='edit'
editbtn.appendChild(document.createTextNode('EDIT'))
li.appendChild(editbtn)

ul.appendChild(li);
}

nameInput.value=''
emailInput.value=''

}
}


function removeItem(e){
    if(e.target.classList.contains('delete')){
    var li= e.target.parentElement;

     let key = li.childNodes[2].data;
     localStorage.removeItem(key);
     userList.removeChild(li);
    }
}

function EditItem(e){
    if(e.target.classList.contains('edit')){
      var li= e.target.parentElement;
      let key = li.childNodes[2].data;
      nameInput.value=li.childNodes[0].data;
      emailInput.value=li.childNodes[2].data;
      localStorage.removeItem(key);
      userList.removeChild(li);
     }
}