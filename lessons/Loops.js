// for loop

// for(let i=0;i<5;i++){
//     console.log('Hello world!'+i)
// }

// for-of-for

var car =['Volvo','Toyota','Tesla']
for(let cars of car){
    console.log(cars)

    if( cars == 'Toyota'){  // if we want to stop loop of specific value
        break
    }
}

// for each

// car.forEach(cars =>{
//     console.log(cars)
// })