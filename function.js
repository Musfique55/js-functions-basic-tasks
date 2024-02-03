// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiplyNums(a,b,c,d){
    const multiply = a*b*c*d;
    return multiply;
}

console.log(multiplyNums(2,4,8,2));

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function multiDivide(num){
    if(num % 2 === 0){
        const divide = num / 2;
        return divide;
    } else{
        const divide = num * 2;
        return divide;
    }
}

console.log(multiDivide(5));


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
const arr = [];
let sum =0;
function make_avg(numbers){
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
        arr.push(numbers[i]);
    }
    const integers = arr.length;
    const avg = sum / integers; 
    return avg;
}
const nums = [3,5,4,3,5,6,2];
console.log(make_avg(nums));

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

let count = 0;
function count_zero(zero){
    const div = zero.split('');
    for(let i = 0; i < div.length; i++){
        if(div[i].includes(0)){
            count++
        }
    }
    return count;
}

const binary = '001 100 101 101 111';
console.log(count_zero(binary));

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num){
    if(num % 2 ===0){
        return 'even';
    } else{
        return 'odd';
    }
}

console.log(odd_even(1001));


