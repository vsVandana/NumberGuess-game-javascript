let guessNum = document.getElementById("guessNum");
let submit = document.getElementById("submit");
console.log(guessNum,submit);

submit.addEventListener("click",()=>{
    let input_value = guessNum.value;
    if(input_value >0 && input_value<100){
        let random_num = Math.floor(10*Math.random());
      if(input_value == random_num){
          alert("Congrats! you guess a correct number.");
          
      }else{
          alert("Sorry you couldn't guess a correct number.try next time.");
          
      }
      console.log(input_value,random_num)
    }
})