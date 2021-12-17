const buttons = document.querySelectorAll('.btn');
const inputNum = document.querySelector('#inputText');
const clear = document.querySelector('.btnClear');
const del = document.querySelector('.btnDel');
console.log(buttons);
console.clear();
buttons.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        const num = e.currentTarget.innerText;
        console.log(num);
        inputNum.value += num;
    })
})
function result(){
  try{
    inputNum.value=eval(inputNum.value);
  }  
  catch(err){
        alert("enter the valid input");
  }
}
clear.onclick = ()=>{
    inputNum.value = "";
}
del.onclick = ()=>{
    inputNum.value = inputNum.value.slice(0,-1);
}
//!set the input field back to empty if the page is reloaded;

window.addEventListener("DOMContentLoaded", ()=>{
    inputNum.value = "";
});
//!either use this by adding the onload function to the body tag;
//! or use the above window function
// let reloaded = ()=>{
//     counter++;
//     console.log('page is loaded ' + counter);
//     inputNum.value = ""
// }
