// const picture=document.querySelector('img');
// picture.style.width="50px";
// picture.style.height="50px";
// picture.style.border="3px solid gold";
// console.log(picture);

// const item=document.getElementById('p1');
// item.style.color="red";
// console.log(item);


// const image=document.getElementById('Logo')

// document.getElementById('hide').addEventListener('click', function HideImage() {
//     // image.style.display="none";
//     image.style.visibility="hidden";
// })

// document.getElementById('show').addEventListener('click',
// function ShowImage(){
//     // image.style.display="block";
//     image.style.visibility="visible"; 
// })

const div = document.querySelector("div");
 
div.addEventListener("mouseover", () => {
  div.style.width = "50px";
});
div.addEventListener("mouseout", () => {
  div.style.width = "100px";
});


