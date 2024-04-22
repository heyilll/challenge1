import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js"
import Airplane from "../src/airplane.js";

const reset = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    airport.currentlyLanded = []; 
    airport.capacity = 5;
    airport.weather = "normal";
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

console.log(`Test 3-1a`);
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

console.log(`Test 3-1b`);
//Arrange
expected = true;
//Act
const x = new Airplane("first");
airport.currentlyLanded.push(x);
airport.currentlyLanded.push(x);
airport.currentlyLanded.push(x);
airport.currentlyLanded.push(x);
airport.currentlyLanded.push(x);
actual = airport.checkIfFull();
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset();  

console.log(`Test 3-2a`);
//Arrange
expected = false;
//Act
actual = airport.checkIfLanded();
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset();

console.log(`Test 3-2b`);
//Arrange
expected = false;
//Act
actual = airport.checkIfLanded(null);
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset();

console.log(`Test 3-2c`);
//Arrange
expected = true;
//Act
airport.currentlyLanded.push(x);
actual = airport.checkIfLanded("first");
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 3-3a`);
//Arrange
expected = false;
//Act 
actual = airport.instructLanding(null); 
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 3-3b`);
//Arrange
expected = false;
//Act 
airport.currentlyLanded.push(x);
actual = airport.instructLanding(x.id); 
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 4-1a`);
//Arrange
expected = false;
//Act 
actual = airport.instructTakeoff('fake'); 
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 4-1b`);
//Arrange
expected = false;
//Act  
actual = airport.instructTakeoff(null); 
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 4-1c`);
//Arrange
expected = true;
//Act  
airport.currentlyLanded.push(x);
actual = airport.instructTakeoff(x.getID());
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 

console.log(`Test 5-1a`);
//Arrange
expected = false;
//Act
airport.weather = "stormy";
actual = airport.instructLanding(x.getID());
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset();

console.log(`Test 5-1b`);
//Arrange
expected = false;
//Act  
airport.currentlyLanded.push(x);
airport.weather = "stormy";
actual = airport.instructTakeoff(x.getID());
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);
reset(); 