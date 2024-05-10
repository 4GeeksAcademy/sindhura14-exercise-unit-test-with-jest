// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("8 dollars should be 1170.0934579439252 yens", function() {
    // Import the function from app.js
    const { fromDollarTOYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarTOYen(8);

    
    // This is the comparison for the unit test
     expect(yens).toBe(1170.0934579439252); 
})

test("500 yens should be 2.7795527156549524 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(500);

    
    // This is the comparison for the unit test
     expect(pounds).toBe(2.7795527156549524); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})