# Domain Models and Test Plan
<h2>Task 1</h2>

<h3>Introduction</h3>

This software will help manage the the proper flow of air traffic for any airport. Airports have a responsibility to ensure that the safety of all users and the reliability of efficient air traffic control systems are kept to the highest standard. Preventing collisions between airplanes and providing correct information for incoming and outgoing journeys and effectively managing the capacity of the airport are all examples of the various and important problems that are faced every day by all airports. Minimizing the risk of human error is the greatest benefit afforded by the use of software in air traffic control with which comes improved safety and reliability.  

<h3>What are the benefits of the software?</h3>

- Allows control over the maximum capacity of the airport 
- Airport traffic controllers can manage the landing of incoming planes and the taking off of outgoing planes
- Airport traffic controllers can track the planes that are docked at the airport in real time 
- Checks the current weather conditions to ensure the safety of air traffic to and from the airport and prevents normal operation if it gets stormy 

<h3>How will the software benefit you?</h3>

- Enhances safety by maintaining safe separation by allowing airport traffic controllers the ability to stagger take off and landing between planes, reducing the risk of accidents 
- Improves air traffic management by giving airport traffic controllers better control over the flow of air traffic to reduce delays and minimize congestion
- Provides air traffic controllers with a top down view of the airspace, external factors such as the weather conditions and how many planes are at the airport, allowing for quicker reactions to each situation
  
<h3>What are the risks associated with the software?</h3>  

Any errors in the software could lead to aircraft collisions and result in loss of life and significant damage. The software should be reliable and bug-free, as any bug can disrupt air traffic and create delays, cancellations, and financial losses for airlines and airports. However, developing software for this purpose involves several risks that need to be addressed.

- If the maximum capacity of the airport is not properly updated in the software, this could lead to the software not being able to correctly represent which planes are currently at the airport or cause planes that are over the maximum capacity recorded in the software to not be given permission to land
- If there are any airplanes that are given the same ID, the software will not be able to differentiate between the multiple planes, which leads to confusion over which airplane is given permission to take off or land
 
---

<h2>Task 2</h2>
<h3>User Stories</h3>

|       As a...       | I want to...        | So that...                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| airport traffic controller | track how many airplanes are at the airport | I can check whether the airport's max capacity has been reached and ensure operational efficiency of the airport |
| airport traffic controller | be able to change the maximum capacity of the airport       | the airport can be represented correctly when new extensions are built             |
| airport traffic controller | be able to instruct a plane to land at the airport    | I can ensure the safety of the planes already at the airports|
| airport traffic controller | be able to instruct a plane to take off from the airport   | I can effectively manage the flow of air traffic  |
| airport traffic controller | stop airplanes from taking off and landing when the weather is stormy   | I can keep incoming and outgoing air traffic safe in unsafe weather conditions  |
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
| 5  |  Airport   | currentlyLanded @Array[@Airplane] <br> weather @string | instructLanding(@Airplane)  <br> instructTakeoff(@Airplane)   | @boolean  <br> @boolean  |
|   |  Airplane   |   ID @string   |   |   |

<h3>Test cases</h3>

1. 1. Returns the current maximum capacity of the airport 
2. 1. Check that the maximum capacity has been changed to the correct number
   2. Test null values passed to the method are not accepted and the capacity has not been changed
3. 1. For the checkIfFull function
      1. Check that the method correctly returns false when the airport is not full
      2. Check that it returns true when the airport is full
   2. For the checkIfLanded function
      1. Test passing no input to the checkIfLanded function returns false
      2. Test passing null returns false
      3. Test passing an airplane that has landed returns true
   3. For the instructLanding function
      1. Check that planes with null ids are not allowed as input
      2. Check that the plane is not already landed at the airport before attempting to instructing it to land
4. 1. For the instructTakeoff function
      1. Test that a airplane that hasn't landed isn't instructed to take off
      2. Check that planes with null ids are not allowed to be instructed to take off
      3. Check that the airplane is already landed at the airport before instructing it to take off
5. 1. For the weather conditions
      1. Test that the instructLanding function returns false when the weather conditions are stormy
      2. Test that the instructTakeoff function returns false when the weather conditions are stormy

---