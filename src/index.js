import Airplane from "./airplane.js";
import airport from "../src/airport.js";

console.log("Welcome to the BHX Airport Terminal!");
console.log(`The current maximum capacity of the airport is ${airport.getCapacity()}.`);
console.log(`The new desired maximum capacity is 7!`);
airport.updateCapacity(7);
console.log(`The new maximum capacity is ${airport.getCapacity()}.`);
console.log(`=========================================`);

console.log(`A new airplane is requesting to land.`);
console.log(`An ID of A113 is assigned to the new airplane.`);
const plane1 = new Airplane("A113");
airport.instructLanding(plane1); 
console.log(`The airplane has been given permission to land.`);

console.log(`The airplane with the ID of ${plane1.getID()} is now requesting to take off.`);
airport.instructTakeoff(plane1);
console.log(`The airplane has been given permission to take off!`);

console.log(`A new airplane is requesting to land but the weather is getting stormy!`);
airport.weather = "stormy";
console.log("An ID of B224 is assigned to the new airplane.");
const plane2 = new Airplane("B224");
airport.instructLanding(plane2); 
console.log(`The airplane has not been allowed to land because of the stormy weather.`);
console.log(`The weather has returned to normal now! The airplane is requesting to land again.`);
airport.weather = "normal";
airport.instructLanding(plane2); 
console.log(`The airplane has been given permission to land.`);

console.log(`The airplane with the ID of ${plane2.getID()} is now requesting to take off but the weather is getting stormy!`);
airport.weather = "stormy";
airport.instructTakeoff(plane2);
console.log(`The airplane has not been given permission to take off because of the stormy weather.`);
airport.weather = "normal";
console.log(`The weather has returned to normal now! The airplane is requesting to land again.`);
airport.instructTakeoff(plane2);
console.log(`The airplane has been given permission to take off!`);

console.log(`=========================================`);
console.log(`Thank you for using this Terminal!`);