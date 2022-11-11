// USER FORM SCRIPT
let nameinput= document.getElementById('name');
let emailinput= document.getElementById('email')
let userList = document.getElementById('users')
const msg = document.querySelector('.msg');


window.addEventListener('DOMContentLoaded', ()=>{
  
axios.get("https://crudcrud.com/api/60cc912e36e9429b9502a9a6d7a1a861/bookappointment").then(res=>{
  showOutput(res);console.log(res.data);
  } )
  .catch(err=>console.log(err))

})


let count=1;

let form =document.getElementById('my-form')
form.addEventListener('submit', submitdata)

function submitdata(e){
e.preventDefault();
if(nameinput.value === '' || emailinput.value === '') {
  //alert('Please enter all fields');
  msg.classList.add('error');
  msg.innerHTML = 'Please enter all fields';

  // Remove error after 3 seconds
  setTimeout(() => msg.remove(), 3000);
}else{

let nameval= nameinput.value;
let emailval= emailinput.value;
let obj = {"number":count++,"name" : nameval,"email":emailval }

axios.post('https://crudcrud.com/api/60cc912e36e9429b9502a9a6d7a1a861/bookappointment', obj).then(res=>{
  console.log(res.data);
})
.catch(err=>console.log(err))

axios.get("https://crudcrud.com/api/60cc912e36e9429b9502a9a6d7a1a861/bookappointment").then(res=>{
showOutput(res);console.log(res.data);
} )
.catch(err=>console.log(err))

}


}


function showOutput(res) {
  let length= Object.keys(res.data).length 
  console.log(res.data[0]);

for (let i = 0; i <length; i++) {
  let destring= res.data[i];
  console.log(destring);
  // console.log(localStorage.key(i),destring.expanse, destring.category,destring.description);

//creating li object
let li= document.createElement('li');
li.id=i;
li.appendChild(document.createTextNode(destring.name + ': ' ))
li.appendChild(document.createTextNode(destring.email ))



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

userList.appendChild(li);


}


nameinput.value='';
emailinput.value='';

}