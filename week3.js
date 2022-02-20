////creat an array called ages: 
/// 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(ages[ages.length - 1] - ages[0])

ages.push(27)
console.log(ages[ages.length - 1] - ages[0])

let sum = ages.reduce(function(accumulator, currentValue) {
    return accumulator +currentValue
},); console.log(sum)
for (let i = 0; i < ages.length; i++){
    console.log(sum / ages.length)
} 

/// 2
let names = ["sam",'Tommy', 'Tim', 'Sally', 'Buck', 'Bob' ];
let lengths = names.map(function(element) {
    return element.length;
}); console.log(lengths)
let average = lengths.reduce(function(accumulator, currentValue) {
    return (accumulator + currentValue) 
});
console.log(average / (names.length - 1));

names.forEach(function(element) {
    console.log(element)
});
/// 5
let nameLengths = [3, 5, 3, 5, 4, 3];
/// 6
let sums = nameLengths.reduce(function(accumulator, currentValue) { 
    return accumulator +currentValue
});
console.log(sums);
/// 7
function multiplyingWords(word , n) {
    for (let i = 0; i < n; i++)
    return word.concat(word);
}
console.log(multiplyingWords( "hello" , 2));

/// 8
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName("Mike", "Jones");

/// 9
function greaterThan(amount1, amount2) {
    if(amount1 + amount2 > 100) 
    { return amount1 + amount2 }
    else { return false }
} ;
console.log(greaterThan( 29, 85));

////10
function averageArray(n,w,e) {
    return ((n + w + e) / (averageArray.length - 1));
};
console.log(averageArray[7,20,13]);

////11 I couldnt figure out how to simplfy the code
array3 = [ 20, 27,28, 30];
array4 = [ 4, 15, 20, 32];
let array3sum = array3.reduce(function(accumulator, currentValue) { 
    return accumulator +currentValue
});

array4 = [ 4, 15, 20, 32];
let array4sum = array4.reduce(function(accumulator, currentValue) { 
    return accumulator +currentValue
});


function combiningArrays(array3sum, array4sum ) {
    return array3sum / (array3sum.length - 1) > array4sum / (array4sum.length - 1)
};
console.log(combiningArrays(array3sum,array4sum));


//// 12

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === 'is hot outside' && moneyInPocket > 10.50)  
        console.log(true);
        else console.log(false)
}
console.log(willBuyDrink("is hot outside", 25.60))    


/// 13 i created a function that prints a remaining budget. Iam 
/// having an easier time with creating math functions then anything else.
function checkout(budget, cost){
    if(cost > budget) { return "you cant afford!!!"; }
    else { return budget - cost  + " Dollars left in budget"; }
}

console.log(checkout(22, 15))
console.log(checkout(12, 28))