import { assertEquals, assertNotEquals } from "../spec/test-framework/test-framework.js";
import airport from "../src/airport.js"
import airplane from "../src/airplane.js";

const reset = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    airport.currentlyLanded = [];
    airplane.id = "default";
}

// Test 1 - 1
console.log(`Test 1-1`);
//Arrange
let expected = 5;
//Act
let actual = airport.getCapacity();
//Assert
let result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset();

console.log(`Test 2-1`);
//Arrange
expected = airport.getCapacity() + 1;
//Act
airport.updateCapacity(airport.getCapacity() + 1);
actual = airport.getCapacity();
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset();

console.log(`Test 2-2`);
//Arrange
expected = airport.getCapacity();
//Act
airport.updateCapacity(null);
actual = airport.getCapacity();
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset();

console.log(`Test 3-1`);
//Arrange
expected = false;
//Act
actual = airport.checkIfFull();
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

// console.log(`Test `);
// //Arrange
// expected = false;
// //Act
// airport.currentlyLanded = [];
// actual = airport.checkIfFull();
// //Assert
// result = assertEquals(actual, expected);
// //Report
// console.log(result ? `Pass` : `Fail`);
// console.log(`==============================`);
// reset(); 

console.log(`Test 3-2`);
//Arrange
expected = false;
//Act
actual = airport.checkIfLanded(airplane);
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset();

console.log(`Test 3-3`);
//Arrange
expected = false;
//Act
airplane.id = null;
actual = airport.checkIfLanded(airplane);
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 3-4`);
//Arrange
expected = true;
//Act
airport.instructLanding(airplane);
actual = airport.checkIfLanded(airplane);
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 3-5`);
//Arrange
expected = false;
//Act
airplane.id = null;
actual = airport.instructLanding(airplane); 
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 4-1`);
//Arrange
expected = true;
//Act 
actual = airport.instructTakeoff(airplane); 
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 4-2`);
//Arrange
expected = false;
//Act 
airplane.id = null;
actual = airport.instructTakeoff(airplane); 
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 