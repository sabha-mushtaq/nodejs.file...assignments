const EventEmitter = require("events");
let myemitter = new EventEmitter();
let defaulmaxeventlistener = myemitter.getMaxListeners();
console.log(`The max default event listeners are :${defaulmaxeventlistener} `);
myemitter.setMaxListeners(5);
let newmaxlisteners = myemitter.getMaxListeners();
console.log(`The max default event listeners are :${newmaxlisteners} `);
 // try to add event listeners
 myemitter.on('event',()=> console.log ('listener 1')
 )
 myemitter.on('event',()=> console.log ('listener 2')
 )
 myemitter.on('event',()=> console.log ('listener 3')
 )
 myemitter.on('event',()=> console.log ('listener 4')
 )
 myemitter.on('event',()=> console.log ('listener 5')
 )

myemitter.on('event',()=> console.log ('listener 6')
)


 myemitter.emit('event');
