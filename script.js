let headingOne = document.querySelector(".headingOne")
let inputOne = document.querySelector(".inputOne")
let btnOne = document.querySelector(".btnOne")
let error = document.querySelector(".error")


let headingTwo = document.querySelector(".headingTwo")
let chance = document.querySelector(".chance")
let inputTwo = document.querySelector(".inputTwo")
let btnTwo = document.querySelector(".btnTwo")
let error3 = document.querySelector(".error3")
let error2 = document.querySelector(".error2")
let winner = document.querySelector(".winner")
let count=5





btnOne.addEventListener("click",function(){
  if(!inputOne.value){
    error.innerHTML="Please Enter Something"


  } else if( isNaN(inputOne.value)){
    error.innerHTML="Please Enter A Number"

  
  }else if (!(inputOne.value<=10 && inputOne.value>0)){
    error.innerHTML="Enter The Number From 1 to 10"
    
  } else{

    headingTwo.style.display='block'
    chance.style.display="block"
    inputTwo.style.display='block'
    btnTwo.style.display='block'
    chance.innerHTML=`chance : ${count}`
    


    headingOne.style.display='none'
    
    inputOne.style.display='none'
    btnOne.style.display='none'
    error.style.display='none'
    
  }
  
})

btnTwo.addEventListener("click",function(){
  if(!inputTwo.value){
    error3.innerHTML="Please Enter Somthing"

  } else if (isNaN(inputTwo.value)){
    error3.innerHTML="Please Enter Number"

  } else if ( !(inputTwo.value<=10 && inputTwo.value>0)){
    error3.innerHTML="Please Enter Number From 1 to 10"


  } else {

    if(count>1){
      count--
      chance.innerHTML=`chance : ${count}`
      if(inputOne.value==inputTwo.value){
        headingTwo.innerHTML="Player Two Winner";
      
        chance.style.display="none"
        inputTwo.style.display='none'
        btnTwo.style.display='none'
  
      }
    } else{
      count=0
      chance.innerHTML=`chance : ${count}`
      headingTwo.innerHTML="Player One Winner"
     
      chance.style.display="none"
      inputTwo.style.display='none'
      btnTwo.style.display='none'
    }
  }
})