// const list=document.getElementById("list");

// const listItem1=document.createElement("li");
// listItem1.innerHTML = "List Item 1";

// const listItem2=document.createElement("li");
// listItem2.innerHTML = "List Item 2";

// const listItem3=document.createElement("li");
// listItem3.innerHTML = "List Item 3";

// const listItem4=document.createElement("li");
// listItem4.innerHTML = "List Item 4";

// const listItem5=document.createElement("li");
// listItem5.innerHTML = "List Item 5";

// // const listParent = document.querySelector("#list");
// // console.log(listParent);

// list.appendChild(listItem1);
// list.appendChild(listItem2);
// list.appendChild(listItem3);
// list.appendChild(listItem4);
// list.appendChild(listItem5);

// const saveButton=document.getElementById("save")
// saveButton.addEventListener('click', data)
// function data(){
//     const textBox=document.getElementById('textbox')
//     console.log(textBox.value);
// }


const title=document.getElementById('title');
title.style.backgroundColor="orange";
const Save=document.getElementById('add');
const ul=document.getElementById('myList');
const itemText=document.getElementById('text');
Save.addEventListener('click', addItem);

function addItem(){
    const listItem=document.createElement('li');
    listItem.innerHTML=itemText.value;
    ul.appendChild(listItem);
    itemText.value="";
}

// const deleteFirst=document.getElementById('deleteFirst');
// deleteFirst.addEventListener("click",() => {
//     ul.removeChild(list.firstElementChild);
// });

// const deleteLast=document.getElementById('deleteLast');
// deleteLast.addEventListener("click", () => {
//   ul.removeChild(list.lastElementChild);
// });

const firstDelete=document.getElementById('firstItem');
const lastDelete=document.getElementById('lastItem');

firstDelete.addEventListener('click', deleteFirstItem);

function deleteFirstItem(){
    ul.firstChild.remove();
}

lastDelete.addEventListener('click', deleteLastItem);

function deleteLastItem(){
    ul.lastChild.remove();
}

const name=document.getElementById('name');
const age=document.getElementById('age');
const save=document.getElementById('saveData');
const table=document.getElementById('table');

save.addEventListener('click', addData)


function addData(){
let tr=document.createElement('tr');
let td1=document.createElement('td');
td1.innerHTML=name.value;
tr.appendChild(td1);
let td2=document.createElement('td');
td2.innerHTML=age.value;
tr.appendChild(td2);
table.appendChild(tr);

}