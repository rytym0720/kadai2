'use strict'

        document.querySelector('button').addEventListener('click',() => 
        const item = document.createElement('li');
        item.textContent = 

        const FizzNum = parseInt(prompt("FuzzNum"));
        const BuzzNum = parseInt(prompt("BuzzNum"));

        if (isNaN(FizzNum) ||isNaN(FizzNum)){
            console.log("整数値を入れてください")
            }else{
            for (let index = 1; index <= 99; index++) {
            if(index % FizzNum === 0 && index % BuzzNum === 0) {
            console.log(`FizzBuzz ${index}`);
            }else if(index % FizzNum === 0) {
            console.log(`Fizz ${index}`);
            }else if(index % BuzzNum === 0){
            console.log(`Buzz ${index}`);
            }

          }

        }
            

