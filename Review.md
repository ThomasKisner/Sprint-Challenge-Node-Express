# Review Questions

## What is Node.js?
        Node.js is a runtime environment written to use Javascript outside of the browser. This allows you to have your back-end be written in the same language as your front-end. An advantage of with is sharing code between the two become easier. Node.js is also faster than some other back-end options that are synchronous.
## What is Express?
        Express is a web application that sits on top of the Node server. It removes a lot of the verbosity of native Node. Many multiline Node tasks become one line in Express.
## Mention two parts of Express that you learned about this week.
        Express has middleware. Which I detail the meaning of below. Express also has routing which allows you to use HTTP/CRUD operation to map directly to each operation.
## What is Middleware?
        Middleware are functions that get executed in the order they are introduced to the server. You can think of middleware as intercepting (in our case CRUD) request before it is executed by the route handler. You can use it to validate data, modify data or requests, or really whatever you can think of. It can also be used post request for error handling.
## What is a Resource?
        In REST everything is a resource.
## What can the API return to help clients know if a request was successful?
        A status code.
## How can we partition our application into sub-applications?
        By using Router within express.
## What is express.json() and why do we need it?
        express.json() tells express that the information it uses must be in JSON format.