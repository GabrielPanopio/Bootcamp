// document.getElementById('p1').innerHTML='<h1>Heading One</h1>';

// what method is used to attach an event to a HTML element?

// addEventListener

// what is the syntax of addEventListener method?

// -- element.addEventListener('event', greeting function greeting()
// function greeting()
// {alert("hi everyone");}

// setItem()
localStorage.setItem('Name', 'Gabriel Panopio');
localStorage.setItem('name2', 'John');

// getItem
console.log(localStorage.getItem('Name'));

// remove
localStorage.removeItem('Name');

// all the data in the localStorage is stored in string format.

const data=document.getElementById('value');
const key=document.getElementById('key');
const save=document.getElementById('save');
const clearall=document.getElementById('clear');

save.addEventListener('click', saveData);

function saveData(){
localStorage.setItem(key.value, data.value);
location.reload();
}


// delete data from local storage

const list=document.getElementById('list');
for(let i=0; i<localStorage.length; i++)
{
    let item=document.createElement('h3');
    item.innerHTML=localStorage.getItem(localStorage.key(i));
    list.appendChild(item);
}

// clear.addEventListener('click', clearAll)

// function clearAll(){
//     localStorage.removeItem(key.value, data.value)
// }

clearall.addEventListener('click, clearData');
function clearData()
{
    localStorage.clear();
    location.reload();
}

