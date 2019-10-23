const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


// A message system that allows the user to create a new message and returns
// all existing ones.
class MessageService {
  constructor() {
    this.messages = [];
  }

  async find () {
    // Return all our messages.
    return this.messages;
  }

  async create (data) {
    // The new message will be made up of the data along with a unique id.
    // Theunique id will correspond to the message length.
    const message = {
      id: this.messages.length,
      text: data.text
    }

    // Add a new message to the list.
    this.messages.push(message);

    return message;
  }
}


// Create an ExpressJS compatible feathers application.
const app = express(feathers());

// Parse HTTP JSON bodies.
app.use(express.json());
// Parse URL-encoded params.
app.use(express.urlencoded({extended: true}));
// HOst static files from the current directory.
app.use(express.static(__dirname));

// Add REST API support.
app.configure(express.rest());
// Configure socket.io real-time APIs.
app.configure(socketio());

// Register an in-memory message service.
app.use('/messages', new MessageService());
// Register a nice error handler.
app.use(express.errorHandler());


// Add any new real-time connection to the 'everybody' channel.
app.on('connection', connection =>
  app.channel('everybody').join(connection)
);

// Publish all events to the 'everybody' channel.
app.publish(data => app.channel('everybody'));

// Start the server
app.listen(3000).on('listening', () =>
  console.log('Server listening on port 3000')
);


// Create a message.
app.service('messages').create({
  text: 'Welcome to Kubernetes'
});
