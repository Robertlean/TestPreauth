# Game 01

Let M be a not empty set of integer numbers, find the first subset of 2 numbers of M which sum N. For instance, let's say we've got a set of numbers [2, 5, 8, 14, 0] and N = 10, the resulting subset should be [2, 8].

## Challenge
You're required to create a function that receives an array (M) and integer value (N). This function has to return an array of the first possible solution.

## Challenge Complete
It was fulfilled what was required in the challenge. below I will demonstrate how it works

## Usage
Start the PowerShell or CMD and you position in the game-01 folder. There you run the following command: node app value1 value2. Where value1 is the array with the sets of integers. Value2 would replace the value to be sumed. Value1 must be numbers separated by commas

Example
```bash
node app 2,5,8,14,0 10
```
## Return
Possible outcomes are that it finds the first 2 integers or a message if it doesn't find values for the sum