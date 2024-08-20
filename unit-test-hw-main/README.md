What are middleware functions in Express.js, and how do they work?


   Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.Middleware Function can perform the following taks:Execute any code.Make changes to the request and the response objects.End the request-response cycle.Call the next middleware in the stack.



What is JWT, and how does it work?

    JWT is Json Web Token use for authorization where it create a JWT for user, JWT contain three part
    Header with contains the type of token and the algorithm it uses
    Payload which contains all the data field for the application
    and verify signature to verify the sender of the JWT is the right person and message wont be modify 
How do you securely store JWT on the client-side?

    To Securely Store JWT on the client-side using HTTP-only cookies to reducing XSS risk and using local stroage or session storage 
How does token expiration work in JWT?

    In JWT Token expiration is contain in the payload section with exp which defined when will the tokon will be no longer valid.