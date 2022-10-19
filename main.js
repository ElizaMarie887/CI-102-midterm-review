/*
parameters: 2 arrays: arr1, arr2
both arrays of numbers

return type: an array of numbers

for loop - to go through arrays

arr2.length equals arr1.length!
for(let i = 0; 0 < arr1.length ;i++)

let resultArray = []
*/

function crossArray (array1, array2){
    let resultArray = []

    for(let i = 0; i < array2.length; i++){
        resultArray.push(array1[i]);
        resultArray.push(array2[i]);
        //resultArray.push(array1[i], array2[i]) //Same thing as above
    }
    return resultArray;
}
//testing code
console.log('crossArray');
console.log(crossArray([3,4,5,6], [7,8,9,0]));

/*
parameters - array - strings

return boolean
*/

function foundCat (array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'cat'){
            return true;
        } 
        }
        return false;
        // return array.includes ("cat"); // same as above
    }
   

//testing code
console.log('foundCat');
let catArray = ["dog", "bear", "cheese", "cat", "fox"];
let noCatArray = ["hi", "bye", "why", "try"];
console.log(foundCat(catArray));
console.log(foundCat(noCatArray));

/*
parameters - array - numbers

return newArray of numbers
*/
function oddOnesOut(array){
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] !== 1){
            newArray.push(array[i])
        }
    
    }
    return newArray
    // function oddOnesOut(array){
    //     return array.filter(function(num){
    //         return num !== 1;
    //     })
    // }
}

//testing code
console.log('oddOnesOut');
console.log(oddOnesOut([1,2,1,1,3,5,1]));

/*
parameters - string

return new string
*/
function stringSpace(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr = newStr + str[i] + " " 

    }
    return newStr.substring(0, newStr.length -1)
}

//testing code
console.log('stringSpace')
console.log(stringSpace('Eliza'))

/*
parameters - 2 strings

return - number
*/

function stringCompareCounter (str1, str2){
    let count = 0;

    for(let i = 0; i < str1.length; i++){
        if(str1[i] === str2[i]){
            count++;
        }
    }
    return count;
}

//test code
console.log('stringCompareCounter')
console.log(stringCompareCounter('cat','cow'));
console.log(stringCompareCounter('count','touch'))

/*
parameters - array - doesnt matter the type

return - boolean
*/
function duplicate (array){
    let seen = [];

    for(let i = 0; i < array.length; i++){
        if(seen.includes(array[i])){
            return true;
        } else {
            seen.push(array[i]);
        }
    }
    return false;
}

// function duplicate (array){
//     for (let i = 0; i <array.length; i++){
//         for(let n = 0; n<array.length; n++){
//             if (array[i]===array[n] && i !==n){
//             return true;
//         }}}
//     return false;
//     } //Same as above

//test code
console.log("duplicate")
console.log(duplicate(['hi', 'wow', 'hey', 'hi']))
console.log(duplicate(['one', 'two', 'three']))

/*
parameters - 2 objects 
character = {
  name: string,
  atk: number,
  def: number,
}

return - if the damage result is >0 return the damage calculation: Number
if damage result is <= 0 return "NO DAMAGE!" : string
*/

function  damageCalculator(char1, char2){
    let dmg = char1.atk - char2.def

    if(dmg <= 0){
        return 'NO DAMAGE!'
    }
    return dmg
}

//test code
let character1 = {
    name: 'Cloud',
    atk: 100,
    def: 90
  }
  
  let character2 = {
    name: 'Sephiroth',
    atk: 150,
    def: 50
  }
  console.log('damageCalculator')
  console.log(damageCalculator(character1, character2))