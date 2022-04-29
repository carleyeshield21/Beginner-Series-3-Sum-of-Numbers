// Here is the link to this JavaScript problem in codewars.com
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum( a,b )
{
    arr = []

    if(a > b){
        // console.log(`${a} is greater than ${b}`)
        for(i=b; i<=a; i++){
            // console.log(i)
            arr.push(i)       
        }
        console.log(arr)
        sumOfArray = arr.reduce(
            (a, b) => a + b,
          )
        console.log(`The sum of the elements is ${sumOfArray}`)
    
    } else if(a < b) {
        // console.log(`${b} is greater than ${a}`)
        for(i=a; i<=b; i++){
            // console.log(i)
            arr.push(i)       
        }
        console.log(arr)
        sumOfArray = arr.reduce(
            (a, b) => a + b,
          )
        console.log(`The sum of the elements is ${sumOfArray}`)
        
    } else {
        console.log(`${a} and ${b} are equal`)
    }
}

getSum(0,9)
console.log('==========')
getSum(9,-5)
console.log('==========')
getSum(7,7)
console.log('==========')
