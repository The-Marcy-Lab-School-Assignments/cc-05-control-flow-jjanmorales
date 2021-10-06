//1
function absoluteValue(num){
  if(typeof num === "number"){
    if(num < 0){
        return num * -1
    }else{
      return num
  }
  }else{
      return null
  }
}

console.log(absoluteValue("8"))

function multiplesOfFourAndSix() {
    let array = [];
    for(let i = 1; i <= 100; i++){
        if(i % 4 === 0 && i % 6 === 0){
            array.push(i)
        }
    }return array
}

console.log(multiplesOfFourAndSix());

