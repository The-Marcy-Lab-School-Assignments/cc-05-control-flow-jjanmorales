//1
function absoluteValue(num){
  if(num < 0){
      console.log(num *= -1)
  }else if(num > 0){
      console.log(num)
  }else{
      return null
  }
}

console.log(absoluteValue("tee"))

function multiplesOfFourAndSix() {
    let array = [];
    for(let i = 1; i <= 100; i++){
        if(i % 4 === 0 && i % 6 === 0){
            array.push(i)
        }
    }return array
}

console.log(multiplesOfFourAndSix());

