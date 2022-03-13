/*
Challenge 1:

  Print "Hello World" forever. Starting with a delay of 1 second
  but then incrementing the delay by 1 second each time.
  The second time will have a delay of 2 seconds
  The third time will have a delay of 3 seconds.

  Include the delay in the printed message
  Hello World. 1
  Hello World. 2
  Hello World. 3
  ...

  Constraints: You can only use const (no let or var)
*/

function sayHello(seconds) {
  console.log(`Hello world ${seconds}`);
  seconds++;
  setTimeout(sayHello, seconds * 1000, seconds);
}

setTimeout(sayHello, 1 * 1000, 1);
/*
Challenge 2:

  Just like Challenge 1 but this time with repeated delay values.
  Print Hello World 5 times with a delay of 100 ms.
  Then Print it again 5 more times with a delay of 200 ms.
  Then print it again 5 more times with a delay of 300 ms.
  And so on until the program is killed.

  Include the delay in the printed message:
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 200
  Hello World. 200
  Hello World. 200
  ...

  Constraints:
   - Only use setInterval (not setTimeout)
   - Use only ONE if statement
*/

let count = 0;
let intervalId;

function sayHelloInMs(milliSeconds) {
  count++;
  console.log(`Hello world ${milliSeconds}`);
  if (count % 5 === 0) {
    clearInterval(intervalId);
    milliSeconds += 100;
    intervalId = setInterval(sayHelloInMs, milliSeconds, milliSeconds);
  }
}

intervalId = setInterval(sayHelloInMs, 100, 100);
