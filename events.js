// Streams are Event Emitters
// process.stdin, process.stdout

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//If you need to emit the event before the event trigger declarations by using the "Event Loop".
setImmediate(() => {
  myEmitter.emit('MY_EVENT');
});

/*--------- Event declarations ----------*/

myEmitter.on('MY_EVENT', () => {
  console.log('MY_EVENT triggered');
});

myEmitter.on('MY_EVENT', () => {
  console.log('MY_EVENT triggered');
});

myEmitter.on('MY_EVENT', () => {
  console.log('MY_EVENT triggered');
});

//Emitting the event
myEmitter.emit('MY_EVENT');
