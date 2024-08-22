// F0 Let's simulate a subscription feature similar to YouTube. Using the events module, we'll create a custom event named "subscribe". When this event is triggered, it should display a message in the console indicating that the user has subscribed.
const EventEmitter = require("events");
const event = new EventEmitter();
event.on("subscribe",(channelname)=>{
console.log(`Thanks for subscribing to ${channelname}`);


})
event.emit("subscribe",'college wallah');