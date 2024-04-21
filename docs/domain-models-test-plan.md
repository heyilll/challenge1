# Domain Models and Test Plan
<h2>Task 1</h2>

This software will help manage the the proper flow of air traffic for any airport. Airports have a responsibility to ensure that the safety of all users and the reliability of efficient air traffic control systems are kept to the highest standard. Preventing collisions between airplanes and providing correct information for incoming and outgoing journeys and effectively managing the capacity of the airport are all examples of the various and important problems that are faced every day by all airports. Minimizing the risk of human error is the greatest benefit afforded by the use of software in air traffic control with which comes improved safety and reliability.  
   - Enhances safety by maintaining safe separation distances, reducing the risk of accidents  
   - Improves air traffic management by controlling the flow of air traffic to reduce delays and minimize congestion
   - Provides air traffic controllers with a top down view of the airspace and how many planes are at the airport 
  
However, developing software for this purpose involves several risks that need to be addressed.  
   - Any errors in the software could lead to aircraft collisions and result in loss of life and significant damage. The software should be reliable and bug-free, as any bug can disrupt air traffic and create delays, cancellations, and financial losses for airlines and airports 
     
---

<h2>Task 2</h2>
<h3>User Stories</h3>

|       As a...       | I want to...        | So that...                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| airport traffic controller | track how many airplanes are at the airport | I can check whether the airport's max capacity has been reached and ensure operational efficiency of the airport |
| airport traffic controller | be able to change the maximum capacity of the airport       | the airport can be represented correctly when new extensions are built             |
| airport traffic controller | be able to instruct a plane to land at the airport    | I can ensure the safety of the planes already at the airports|
| airport traffic controller | be able to instruct a plane to take off from the airport   | I can effectively manage the flow of air traffic  |
---

<h2>Task 3</h2>
<h3>Domain model</h3>

| Requirement | Objects | Properties | Messages   | Output
| ------- |-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------------------------------|
| 1  |  Airport  | maxCapacity @integer   | getCapacity() @integer | @integer 
| 2  |  Airport  | maxCapacity @integer    | updateCapacity(@integer)         | @void | 
| 3  |  Airport   | currentlyLanded @Array[@Airplane]   | instructLanding(@Airplane) <br> checkIfFull() <br> checkIfLanded(@Airplane) | @boolean <br> @boolean <br> @boolean  |
|   |  Airplane   |  ID @string |   |  |
| 4  |  Airport   | currentlyLanded @Array[@Airplane]  | instructTakeoff(@Airplane)  <br> checkIfLanded(@Airplane)   | @boolean  <br> @boolean  |
|   |  Airplane   |   ID @string   |   |   |

<h3>Test cases</h3>

1. 1. Returns the current maximum capacity of the airport 
2. 1. Test that the item that is removed from the basket is the item passed through removeItem
   2. Check that the maximum capacity has been changed to the correct number
3. 1. Check that the plane is not already at the airport before attempting to instructing it to land
   2. Check that there is enough capacity at the airport before allowing the plane to land
   3. Check that planes with null ids are not allowed as input
4. 1. Check that the airplane is already landed at the airport before instructing it to take off
   2. Check that planes with null ids are not allowed to be instructed to take off

---