# Feathers Basics

In the basics tutorial we went through the process of generating the whole app
structure manually.
We started with
```
npm init --yes
```

and then installed some of the dependencies for our app.
```
npm install @feathersjs/feathers --save

npm install @feathersjs/socketio @feathersjs/express --save
```

Now, we want to use the Feathers CLI to manage some of these steps.
First, the CLI can be installed by running:
```
npm install @feathersjs/cli -g
```

and we can subsecuently generate an app as such:
```
feathers generate app
```
