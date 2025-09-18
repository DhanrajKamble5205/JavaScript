function helloOne(){
    console.log('Hello One!')
}
helloOne()
helloOne()

var helloTwo = function() {
    console.log('Hello Two!')
}
helloTwo()

var helloThree = () => {
    console.log('Hello Three!')
}
helloThree()

function printName(Fname, Lname){
    console.log(Fname+' '+Lname)
}
printName('Dhanraj','Kamble')

// Function return

function multiPlyByTwo(num){
    var result = num * 2
    return result
}
var myresult = multiPlyByTwo(5)
console.log(myresult)

// import function
import {printAge} from '../helper/helper.js'
printAge (5)
