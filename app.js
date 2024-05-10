// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromDollarTOYen = function(dollars){
    //getting euros for given dollars
    const euro = dollars/ oneEuroIs.USD;
    //calculating how many yens is for given euro
    const yen = euro * oneEuroIs.JPY;
    return yen;

}

console.log(fromDollarTOYen(8));

const fromEuroToDollar = function(euros) {
    const eurosToDollar = euros * oneEuroIs.USD;

    return eurosToDollar;
}

console.log(fromEuroToDollar(5));

const fromYenToPound = function(yens){
    //getting euros from given yens
    const euros = yens / oneEuroIs.JPY;
    //calculating pounds for given euros
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
}

console.log(fromYenToPound(500));


// Exporting the functions to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum,fromDollarTOYen,fromEuroToDollar,fromYenToPound };