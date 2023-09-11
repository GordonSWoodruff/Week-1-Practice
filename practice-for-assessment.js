// // butter: $1
// // eggs: $2
// // milk: $3
// // bread: $4
// // cheese: $5


// function costOfGroceries(groceries) {
//     let cost = 0;
//     let prices = [
//         ["butter", 1],
//         ["eggs", 2],
//         ["milk", 3],
//         ["bread", 4],
//         ["cheese", 5]
//     ];

//     for(let i = 0; i < groceries.length; i++) {
//         for(let j = 0; j < prices.length; j++) {
//             if(prices[j][0] === groceries[i]) {
//                 cost += prices[j][1];
//             }

//         }
//     }
//     return cost;
// }

// function mostExpensiveGroceries(groceriesList) {
//     let highestCost = 0;

//     for(let i = 1; i < groceriesList.length; i++) {
//         console.log("Current Highest Cost:", groceriesList[highestCost]);
//         if(costOfGroceries(groceriesList[highestCost]) < costOfGroceries(groceriesList[i])) {
//             highestCost = i;
//         }
//     }
//     console.log("Final Highest Cost:", groceriesList[highestCost]);
//     return highestCost;
// }


// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// const groceriesA = ['cheese', 'butter', 'eggs'];
// const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
// const groceriesC = ['cheese', 'bread'];
// const groceriesD = ['eggs', 'butter'];

// costOfGroceries(groceriesA);  // 8
// costOfGroceries(groceriesB);  // 13
// costOfGroceries(groceriesC);  // 9
// costOfGroceries(groceriesD);  // 3

// mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

// let score = 0;

// if (costOfGroceries(groceriesA) === 8) score++;
// if (costOfGroceries(groceriesB) === 13) score++;
// if (costOfGroceries(groceriesC) === 9) score++;
// if (costOfGroceries(groceriesD) === 3) score++;

// if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

// console.log("You have scored " + score + "/7 points.");

// function stringChanger(word, operation) {
//     let outStr = "";

//     if (["capitalize", "cap"].includes(operation)) {
//         outStr = capStr(word);
//         return outStr;
//     } else if (["uppercase", "upper", "upc"].includes(operation)) {
//         outStr = uppStr(word);
//         return outStr;
//     } else if (["double", "dub", "doub", "x2"].includes(operation)) {
//         outStr = dubStr(word);
//         return outStr;
//     } else if (["reverse", "rev", "rvr", "backwards", "back"].includes(operation)) {
//         outStr = revStr(word);
//         return outStr;
//     } else {
//         return word;
//     }
// }

// function capStr(word) {
//     let capLetter = word[0].toUpperCase();
//     let restWord = word.slice(1, word.length);
//     let outStr = capLetter.concat(restWord);

//     return outStr;
// }
// function uppStr(word) {
//     let outStr = word.toUpperCase();

//     return outStr;
// }
// function dubStr(word) {
//     let outStr = word.concat(word);

//     return outStr;
// }
// function revStr(word) {
//     let outStr = "";
//     let workArr = word.split("");
//     let revArr = [];
//     let index = 0;
//     const regex = /,/

//     for(let i = workArr.length-1; i >= 0; i--) {
//         revArr.push(workArr[i]);
//     }
//     outStr = revArr.toString();
//     while (index < outStr.length) {
//         outStr = outStr.replace(regex, "");
//         index++;
//     }

//     return outStr;
// }

// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (stringChanger("foo", "capitalize") === "Foo") score++;
// if (stringChanger("foo", "uppercase") === "FOO") score++;
// if (stringChanger("foo", "double") === "foofoo") score++;
// if (stringChanger("foo", "reverse") === "oof") score++;

// if (stringChanger("foo", "unknown") === "foo") score++;

// console.log("You have scored " + score + "/5 points.");

function isSorted(nums) {

    // Loop through each number STARTING AT 1
    for (let i = 1; i < nums.length; i++) {

        // Check if the current number is less than
        // the previous number
        if (nums[i] < nums[i-1]) {
            // If it's not, return false
            return false;
        }
    }

    // If every number is greater or equal to the previous number
    // in the array, it's sorted.
    return true;

}

isSorted([1, 2, 3, 4, 5])  // true
isSorted([2, 2, 4, 4])  // true
isSorted([1, 2, 4, 3, 5, 6])  // false

/************ DO NOT WRITE BELOW THIS LINE**************/

let grade = false;

if (isSorted([1, 2, 3, 4, 5]) === true
 && isSorted([2, 2, 4, 4]) === true
 && isSorted([1, 2, 4, 3, 5, 6]) === false) {
    grade = true;
}

if (grade === true) {
    console.log('You have scored 1/1 points')
} else {
    console.log('You have scored 0/1 points')
}
