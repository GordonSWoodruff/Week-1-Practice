// function sumArray(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([4, 3, -1, 10])); // 16
// console.log(sumArray([6, 7, 2])); // 15
// console.log(sumArray([])); // 0

// function avgVal(arr) {
//     let sum = 0;
//     let avg = 0;
//     let i = 0;

//     if(arr.length === 0) {
//         return null;
//     }
//     while (i < arr.length) {
//         sum += arr[i];
//         i++;
//     }
//     avg = sum / arr.length;

//     return avg;
// }

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

// function myIndexOf(arr, target) {
//     let i = 0;
//     let index = -1;

//     while (i < arr.length) {
//         if(target === arr[i]) {
//             index = i;

//             return index;
//         }
//         i++;
//     }

//     return index;
// }

// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
// console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
// console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

// function tripler(nums) {
//     let outArr = [];

//     for(let i = 0; i < nums.length; i++) {
//         outArr.push(nums[i]*3);
//     }

//     return outArr;
// }

// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

// function longWords(words) {
//     let outArr = [];

//     for(let i = 0; i < words.length; i++) {
//         if(words[i].length > 5) {
//             outArr.push(words[i]);
//         }
//     }

//     return outArr;
// }

// console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

// function removeEWords(sentence) {
//     let outStr = "";


// }

// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'

// function maxValue(nums) {
//     let outs = 0;
//     let tester = nums[0];

//     if(nums.length === 0) {
//         outs = null;
//         return outs;
//     }

//     for(let i = 1; i < nums.length; i++) {
//         if(tester < nums[i]) {
//             tester = nums[i];
//         }
//     }
//     outs = tester;

//     return outs;
// }

// console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxValue([-2, -3, -7, 3 ])); // 3
// console.log(maxValue([])); // null

// function twoSum(arr, target) {
//     let bool = false;
//     let tester;
//     let iIndex = 0;
//     let jIndex = 1;

//     while (iIndex < arr.length) {
//         for(let i = iIndex; i < arr.length; i++) {
//             tester = arr[i];
//             for(let j = jIndex; j < arr.length; j++) {
//                 let sum = tester + arr[j];
//                 if(target === sum) {
//                     bool = true;
//                     return bool;
//                 }
//             }
//             jIndex++;
//         }
//         iIndex++;
//     }

//     return bool;
// }

// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false

// function reverseSentence(sentence) {
//     let outStr = "";
//     let workArr = sentence.split(" ");
//     let outArr = [];
//     let j = workArr.length;
//     let index = 0;

//     for(let i = 0; i < workArr.length; i++) {
//         for(j; j >= 0; j--) {
//             outArr.push(workArr[j]);
//         }
//     }
//     outStr = outArr.toString();
//     while (index < outStr.length) {
//         if(index === 0) {
//             outStr = outStr.replace(",", "");
//         } else {
//             outStr = outStr.replace(",", " ");
//         }
//         index++;
//     }

//     return outStr;
// }

// console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

// function initials(name) {
//     let outStr = "";
//     let index = 0;
//     let flag = true;

//     while (index < name.length) {
//         if (flag === true) {
//             outStr = outStr + name[index];
//             flag = false;
//         } else if (name[index] === " ") {
//             flag = true;
//         } else {
//             outStr;
//         }
//         index++;
//     }

//     return outStr.toUpperCase();
// }

// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

// function twoDimensionalProduct(array) {
//     let product = 1;
//     let j = 0;

//     for(let i = 0; i < array.length; i++) {
//         for(j; j < array[i].length; j++) {
//             product = product * array[i][j];
//         }
//         j = 0;
//     }

//     return product;
// }

// let arr1 = [
//     [6, 4],
//     [5],
//     [3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [
//     [11, 4],
//     [2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88

// let popper = function (array, num) {
//     let outs = [];
//     let i = num;
//     let j = 0;

//     do {
//         outs.splice(j, 0, array[array.length - 1]);
//         j++;
//         array.pop();
//         i--;
//     } while (i != 0)

//     return outs;
// }

// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]

// let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

// function choosePrimes(nums) {
//     let outArr = [];

//     for(let i = 0; i < nums.length; i++) {
//         if(isPrime(nums[i])) {
//             outArr.push(nums[i]);
//         }
//     }

//     return outArr;
// }

// let isPrime = function(num) {
//     for(let i = 2; i < num; i++) {
//         if(num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

// function fizzBuzz(max) {
//     let outArr = [];

//     for(let i = 0; i < max; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             // Nothing gets done here
//         } else if (i % 3 === 0 || i % 5 === 0) {
//             outArr.push(i);
//         } else {
//             // Nothing happens here either
//         }
//     }

//     return outArr;
// }

// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

// // I'm the owner of an international electronics store, but I keep having issues calculating the total of goods when folks checkout because prices are in different currencies. I'm right on the canadian border

// // Smartphone:
// // Price: 800 (USD)

// // Electric Kettle:
// // Price: 50 (USD)

// // Bluetooth Speaker:
// // Price: 45 (USD)

// // Desk Lamp:
// // Price: CAD 70 (CAD)

// // Keyboard:
// // Price: CAD 70 (CAD)

// // 1 USD = 1.25 CAD

// // For any given list of these goods, give me the price.

// // The function will take two parameters
// // A list of goods
// // A currency, which we should default to USD, but I want to be able to calculate CAD as well

// let catalog = [
//     ["smartphone", 800, "USD"],
//     ["electric kettle", 50, "USD"],
//     ["bluetooth speaker", 45, "USD"],
//     ["desk lamp", 70, "CAD"],
//     ["keyboard", 70, "CAD"]
// ]

// function calcPrice(cart, currency) {
//     let cost = 0.00;
//     let itemPrice = 0.00;
//     let index = 0;
//     currency = currency.toString().toUpperCase()

//     for(let i = 0; i < cart.length; i++) {
//         let tester = cart[i];

//         tester = tester.toLowerCase();
//         if(typeof tester === "string" && tester !== "") {
//             itemPrice = determinePrice(tester, currency);
//         } else {

//         }
//         cost += itemPrice;

//     }
//     if(currency === "CAD") {
//         cost /= 1.25;
//         return ("CAD$" + cost);
//     } else {
//         return ("$" + cost);
//     }
// }

// let determinePrice = function(item) {
//     let price = 0.00;

//     for (let j = 0; j < catalog.length; j++) {
//         if(item === catalog[j][0]) {
//             if(catalog[j][2] === "CAD") {
//                 price = catalog[j][1] * 1.25;
//             } else {
//                 price = catalog[j][1]
//             }
//        }
//     }
//     console.log("Item:", item, "cost =", price);
//     return price;
// }

// console.log(calcPrice(["keyboard", "smartphone", "electric kettle", "desk lamp"], "usd")) // 1,025 USD or 820 CAD
// console.log(calcPrice(["Bluetooth Speaker", "SMARTPHONE"], "CaD")) // 845 USD or 676 CAD


// function longestWord(sentence) {
//     let outStr = "";
//     let workStr = "";
//     let i = 0;
//     let cut = 0;

//     if(sentence.length === 0) {
//         return "";
//     }

//     while (i < sentence.length) {
//         if(i === 0) {
//             cut = cutCount(sentence, i);
//             workStr = sentence.slice(0, cut);
//             i = cut + 1;
//         } else {
//             cut = cutCount(sentence, i);
//             workStr = sentence.slice(i, cut);
//             i = cut + 1;
//         }

//         if(workStr.length > outStr.length) {
//             outStr = workStr;
//         } else {
//             outStr;
//         }
//     }
//     return outStr;
// }

// let cutCount = function(sentence, count) {
//     let i = count;

//     if(sentence[i] === " ") {
//         return 0;
//     }

//     while (sentence[i] !== " " && i < sentence.length) {
//         i++;
//     }

//     return i;
// }

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''

// function abbreviate(word) {
//     let outStr = "";
//     let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
//     let tester = "";

//     for(let i = 0; i < word.length; i++) {
//         tester = word[i];
//         if(vowels.includes(tester)) {
//             outStr;
//         } else {
//             outStr += tester;
//         }
//     }

//     return outStr;
// }

// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

// function product(nums) {
//     let product = 1;

//     for(i = 0; i < nums.length; i++) {
//         product *= nums[i];
//     }

//     return product;
// }

// console.log(product([10, 3, 5, 2])); // 300
// console.log(product([4, 3])); // 12

// function removeLastVowel(word) {
//     let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
//     let outStr = "";
//     let workStr1 = "";
//     let workStr2 = "";

//     for(let i = word.length - 1; i >= 0; i--) {
//         if(vowels.includes(word[i])) {
//             workStr1 = word.slice(0, i);
//             workStr2 = word.slice(i+1, word.length);
//             outStr = workStr1 + workStr2;
//             return outStr;
//         }
//     }

//     return word;
// }

// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

// function abbreviateWords(sentence) {
//     let outStr = "";
//     let word = cutCount(sentence, 0);
//     let index = 0;
//     let workStr = "";

//     console.log(word);

//     do {
//         if(word <= 4) {
//             workStr = sentence.slice(index, word);
//             console.log(workStr);
//             outStr += workStr;
//             index = word;
//         } else if(word > 4) {
//             workStr = removeVowels(sentence.slice(index, word));
//             console.log(workStr);
//             outStr += workStr;
//             index = word;
//         }

//         word = cutCount(sentence, index);
//     } while (index < sentence.length);

//     return outStr;
// }

// function removeVowels(word) {
//     let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
//     let index = 0;
//     let outStr = "";

//     while (index < word.length) {
//         if(vowels.includes(word[index])) {
//             outStr += word[i].replace(vowels, "");
//         } else {
//             outStr += word[i];
//         }
//         index++;
//     }
//     return outStr;
// }

// let cutCount = function(sentence, count) {
//     let i = count;

//     console.log(i);
//     console.log("letter:", sentence[i]);
//     if(sentence[i] === " ") {
//         return i;
//     }

//     while (sentence[i] !== " " && i < sentence.length) {
//         i++;
//         console.log[i];
//     }

//     return i;
// }

// console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
// console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg

// function containsWord(sentence, targetWord) {
//     let tester = "";
//     let index = 0;
//     let count = 0;
//     sentence = sentence.toLowerCase();

//     while (index < sentence.length) {
//         for(let i = index; i < sentence.length; i++) {
//             if(sentence[index] !== " ") {
//                 index++;
//             } else {
//                 break;
//             }
//         }
//         tester = sentence.slice(count, index);

//         if(tester === targetWord) {
//             return true;
//         }
//         count = index++ + 1;
//     }

//     return false;
// }

// console.log(containsWord('sounds like a plan', 'like')); // true
// console.log(containsWord('They are great', 'they')); // true
// console.log(containsWord('caterpillars are great animals', 'cat')); // false
// console.log(containsWord('Cast the net', 'internet')); // false

function uncompress(str) {
    let outStr = "";
    let workStr = "";
    let buildStr = "";
    let workNum = 0;
    let index = 0;
    let final = str.length;

    while (index < final) {
        workStr = str[index];
        console.log("Current Letter:", workStr)
        workNum = Number.parseInt(str[index+1]);
        console.log("Working Number:", workNum);
        for(let i = 0; i <= index; i++) {
            buildStr += workStr
            console.log("Build String:", buildStr);
        }
        outStr += buildStr;
        console.log("Output String:", outStr);
        index += 2;
        console.log("Next Index:", index);
    }
    return outStr;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
