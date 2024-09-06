// console.log("ss")
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userscorep=document.querySelector("#user-score")
const compscorep=document.querySelector("#comp-score")

const genratcompchoice=()=>{
    let options=["rock","paper","scissor"];
    let rndmIndx=Math.floor(Math.random()*3);
    // console.log(rndmIndx)
    return options[rndmIndx];
    
}

choices.forEach((selectchoice) => {
    selectchoice.addEventListener("click",()=>{
        // console.log("clicked")
        // console.log(selectchoice)
       const userchoice= selectchoice.getAttribute("id")
 
    //    console.log(userchoice)
       playGame(userchoice)

    });
    
});



const playGame=(userkichoice)=>{
  console.log(userkichoice)

  const compchoice=genratcompchoice()
  console.log(compchoice)

  if(userkichoice===compchoice){drawGame()}
  else{
    let userWin=true;
   if(userkichoice=="rock"){userWin=compchoice=="scissor"?true:false}
else if(userkichoice=="paper"){userWin=compchoice=="rock"?true:false}
else{userWin=compchoice=="paper"?true:false};
 showWinner(userWin,userkichoice,compchoice)
  }
  
// const show=showWinner()
}
let drawGame=()=>{console.log("Game was draw")
    msg.innerText="Game was draw";
    msg.style.backgroundColor=""
}
let UserScor=0;
let CompScor=0;

const showWinner=(userWin,userkichoice,compchoice)=>{
   if(userWin){
    console.log("you win");
    UserScor++;
    userscorep.innerText=UserScor;
    msg.innerText=`You Win ! ${userkichoice} beats ${compchoice} `;
    msg.style.backgroundColor="green"
   }
   else{
    console.log("compuer win")
    CompScor++;
    compscorep.innerText=CompScor;
    msg.innerText=`CompuTer Win ! ${compchoice} beats ${userkichoice} `
    msg.style.backgroundColor="red"

   }
}

// console.log(output)
