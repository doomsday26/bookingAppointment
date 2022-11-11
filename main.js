// USER FORM SCRIPT
let nameinput= document.getElementById('name');
let emailinput= document.getElementById('email')
let userList = document.getElementById('users')
const msg = document.querySelector('.msg');


window.addEventListener('DOMContentLoaded', ()=>{
  userList.addEventListener('click',removeItem)
//userList.addEventListener('click',EditItem)
axios.get("https://crudcrud.com/api/93c06c6207b3406b9ee52f9eae3096fc/bookappointment").then(res=>{
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

axios.post('https://crudcrud.com/api/93c06c6207b3406b9ee52f9eae3096fc/bookappointment', obj).then(res=>{
  console.log(res.data);
})
.catch(err=>console.log(err))

axios.get("https://crudcrud.com/api/93c06c6207b3406b9ee52f9eae3096fc/bookappointment").then(res=>{
showOutput(res);console.log(res.data);
} )
.catch(err=>console.log(err))

}


}


function showOutput(res) {
//clear previous items

while (userList.firstChild) {
  userList.removeChild(userList.lastChild);
  }

  let length= Object.keys(res.data).length 
  console.log(res.data[0]);

for (let i = 0; i <length; i++) {
  let destring= res.data[i];
  console.log(destring);
  // console.log(localStorage.key(i),destring.expanse, destring.category,destring.description);

//creating li object
let li= document.createElement('li');

li.id=destring._id;
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



async function removeItem(e){
  if(e.target.classList.contains('delete')){
  var li= e.target.parentElement;

   let key = li.id;
  await axios.delete("https://crudcrud.com/api/93c06c6207b3406b9ee52f9eae3096fc/bookappointment/"+key).
   then( async (res)=>{console.log(res.data);
   }).catch(err=>{console.log(err);})
  }

 await axios.get("https://crudcrud.com/api/93c06c6207b3406b9ee52f9eae3096fc/bookappointment").then(res=>{
showOutput(res);console.log(res.data);
} )
.catch(err=>console.log(err))
}
 