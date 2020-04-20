- [x] clean up webpack setup
- [x] Can I get rid of the title slide?
- [ ] adding emoji
- [ ] rewrite promises section to not involve network calls maybe?
- [ ] convert all Jasmine tests to Jest
- [ ] provide Jest watch command as helper
- [ ] maybe provide yarn commands to navigate to the necessary folder?
- [ ] webpack advanced section (code splitting, vendor, tree shaking, etc.)
- [ ] webpack diagram to visualize what's happening
- [ ] class properties
- [ ] borrow setup instructions from EN project
- [ ] add nvm section to node
- [ ] create visualization of querying
- [ ] add notes about arrow function `this` once that topic is discussed
- [ ] replace sandbox with the webpack babel starter repo
- [ ] slide around class assignment to variable / passing as data?
- [ ] es6 object shorthand
- [ ] es6 object function shorthand
- [ ] trailing comma in obj, functions, etc.

Idea for FP intro:

- in OOP, everything is an is-a relationship. But in web there's ... so many things! How could we model them all?


Closure example:

```
var scope = "I am global";
function whatismyscope(){
   var scope = "I am just a local";
   function func() {return scope;}
   return func;
}

whatismyscope()()
```
