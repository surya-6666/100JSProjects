//create the variables to target the Elements on the DOM
let count= document.querySelector('.count');
// let subtract= document.querySelector('.subtract');
// let add= document.querySelector('.add');
// let reseCount= document.querySelector('.reset');
let buttons =document.querySelector('.buttons');


buttons.addEventListener('click',(e)=>{
  if(e.target.classList.contains("add")){
      count.innerHTML++;
      setColor()

    
  }

});
buttons.addEventListener('click',(e)=>{
  if(e.target.classList.contains('subtract')){
  count.innerHTML--;
  setColor()
}

});
buttons.addEventListener('click',(e)=>{
  if(e.target.classList.contains('reset')){
  count.innerHTML=0;
  setColor()
}

})
function setColor(){
  if(count.innerHTML>0){
    count.style.color="yellow"
  }
  else if(count.innerHTML<0){
    count.style.color="orangered"
  }
  else{
    count.style.color="white"
  }
}


// add.addEventListener('click',()=>{
//   count.innerHTML++;

// });
// subtract.addEventListener('click',()=>{
//   count.innerHTML--;
// });
// reseCount.addEventListener('click',()=>{
//   count.innerHTML=0;
// })