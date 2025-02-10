// ### 1. **What is a Function Statement?**

// A **Function Statement** (also called Function Declaration) is a standard way to declare a function by naming it. These functions are **hoisted**, meaning they can be called before their definition in the code, as JavaScript moves all function declarations to the top of their scope during execution.

// **Example:**

// ```javascript
// function xyz() {
//     console.log("Function Statement");
// }

// xyz();  // Function Statement
// ```

// **Explanation:**
// - Here, `xyz()` is a **Function Statement**.
// - The function is hoisted, meaning you can call `xyz()` even before its declaration, and it will work fine.

// ---

// ### 2. **What is a Function Expression?**

// A **Function Expression** is when a function is assigned to a variable. These functions are **not hoisted**, meaning you must define them before using them. 

// **Example:**

// ```javascript
// var a = function() {
//     console.log("Function Expression");
// };

// a();  // Function Expression
// ```

// **Explanation:**
// - Here, the function is assigned to the variable `a`. You cannot call `a()` before the function is assigned, as function expressions are not hoisted.
// - The function is treated as a variable, and it behaves like any other value assigned to a variable.

// ---

// ### 3. **What is an Anonymous Function?**

// An **Anonymous Function** is a function that does not have a name. It is commonly used as a function expression or when passing a function as a parameter. Since it doesn't have a name, it's used in places where the function will not be reused or where a function is passed as a value.

// **Example:**

// ```javascript
// var b = function() {
//     console.log("Anonymous Function");
// };

// b();  // Anonymous Function
// ```

// **Explanation:**
// - The function doesn't have a name and is assigned to the variable `b`.
// - This type of function is typically used in situations where the function is only needed temporarily, like in event listeners or callbacks.

// ---

// ### 4. **What is a Named Function Expression?**

// A **Named Function Expression** is a function expression where the function is assigned to a variable, but it has a name. Unlike anonymous functions, this allows you to refer to the function by its name inside itself (useful for recursion).

// **Example:**

// ```javascript
// var a = function xyz() {
//     console.log("Named Function Expression");
// };

// a();  // Named Function Expression
// ```

// **Explanation:**
// - The function is assigned to the variable `a`, but it has a name (`xyz`).
// - The name `xyz` can be used within the function itself, but it is still treated as an expression and not hoisted.

// ---

// ### 5. **Difference between Parameters and Arguments?**

// - **Parameters** are variables listed in the function definition. They are used to accept values passed into the function.
// - **Arguments** are the actual values passed to the function when it is called.

// **Example:**

// ```javascript
// function ab(param1, param2) {
//     console.log(param1, param2);
// }

// ab(4, 5);  // 4 5
// ```

// **Explanation:**
// - `param1` and `param2` are **parameters**. These are placeholders in the function definition.
// - `4` and `5` are the **arguments** passed when calling the function.

// ---

// ### 6. **What is a First-Class Function or First-Class Citizens?**

// In JavaScript, **functions are first-class citizens**, meaning that functions can be treated like any other value. This includes the ability to:

// - Be passed as arguments to other functions.
// - Be returned from other functions.
// - Be assigned to variables.

// **Example:**

// ```javascript
// var b = function(param) {
//     return function xyz() {
//         console.log("First-Class Function");
//     }
// };

// var returnedFunction = b();
// returnedFunction();  // First-Class Function
// ```

// **Explanation:**
// - The function `b` returns another function (`xyz`), demonstrating that functions can be passed as values and returned from other functions.
// - Functions are treated as values, which means they can be assigned to variables, passed as arguments, and even returned from other functions.

// ---

// ### 7. **Summary of Functions as First-Class Citizens in JavaScript**

// - **Functions are the heart of JavaScript** because they are first-class citizens. 
// - They can be **stored in variables**, **passed as arguments**, **returned from other functions**, and **executed inside closures**.
// - This flexibility is what makes functions so powerful in JavaScript, enabling many advanced programming techniques, such as functional programming, callbacks, and higher-order functions.

// **Example:**

// ```javascript
// function higherOrderFunction(func) {
//     return function() {
//         func();
//     };
// }

// function greet() {
//     console.log("Hello!");
// }

// const greetFunction = higherOrderFunction(greet);
// greetFunction();  // Hello!
// ```

// **Explanation:**
// - Here, `higherOrderFunction` takes a function (`greet`) as an argument and returns it wrapped in another function, showing that functions can be passed and returned just like any other value.

// ---

// In summary, **Functions in JavaScript** are versatile and dynamic, enabling a variety of powerful patterns and techniques for writing clean, efficient, and maintainable code. They are treated as values, can be passed around, and are essential in various use cases from basic logic to complex application design patterns.















// Here are some detailed examples that showcase how **functions** in JavaScript can:

// ### 1. **Be passed as arguments to other functions**

// Functions can be passed as arguments to other functions. This is often used in callbacks or higher-order functions.

// **Example:**

// ```javascript
// // Function that accepts another function as an argument
function greet(name, callback) {
    console.log("Hello " + name);
    callback();  // Invokes the callback function
}

// Function passed as a callback
function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);  
// Output:
// Hello Alice
// // Goodbye!
// ```

// **Explanation:**
// - The function `greet` accepts two arguments: a string `name` and a `callback` function.
// - The `sayGoodbye` function is passed as a callback to `greet`, and is executed within `greet`.

// ---

// ### 2. **Be returned from other functions**

// Functions can be returned from other functions. This is a key concept in JavaScript, used in closures and higher-order functions.

// **Example:**

// ```javascript
// // Function that returns another function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

// Creating a new function that multiplies by 2
const multiplyByTwo = multiplier(2);

console.log(multiplyByTwo(5));  // Output: 10
console.log(multiplyByTwo(10)); // Output: 20
// ```

// **Explanation:**
// - The `multiplier` function returns another function that multiplies its input by the value of `factor`.
// - When `multiplier(2)` is called, it returns a function that multiplies its argument by 2. This function is then assigned to `multiplyByTwo`, which can be used multiple times.

// ---

// ### 3. **Be assigned to variables**

// Functions can be assigned to variables, and then invoked using those variables.

// **Example:**

// ```javascript
// // Assigning a function to a variable
// const add = function(a, b) {
//     return a + b;
// };

// console.log(add(3, 4));  // Output: 7
// ```

// **Explanation:**
// - The anonymous function `function(a, b) { return a + b; }` is assigned to the variable `add`.
// - The variable `add` now behaves like a function, and we can invoke it to calculate the sum of `3` and `4`.

// ---

// ### Conclusion

// JavaScript functions are **first-class citizens** because they can:

// 1. **Be passed as arguments** to other functions (used in callbacks, event handling).
// 2. **Be returned from other functions** (used in closures, currying).
// 3. **Be assigned to variables** (functional programming, dynamic behavior).

// This flexibility makes JavaScript highly powerful and enables the implementation of complex programming patterns like **higher-order functions**, **callbacks**, and **closures**.






















// ### Arrow Functions in JavaScript

// Arrow functions are a more concise way of writing functions in JavaScript, introduced in **ES6**. They are often used for their shorter syntax, but also bring some important differences compared to regular functions.

// ### Key Differences between Regular Functions and Arrow Functions:

// 1. **Syntax**:
//    - Arrow functions have a shorter syntax, especially when the function body is a single expression.
//    - The `function` keyword is replaced by `=>`.

// 2. **`this` Binding**:
//    - **Arrow functions** do **not** have their own `this`. Instead, they inherit `this` from the surrounding (lexical) context (the function or object they were defined in).
//    - **Regular functions** create their own `this` based on how they are called.

// 3. **No `arguments` object**:
//    - Arrow functions **do not** have an `arguments` object, which is available in regular functions. However, they can access arguments from the surrounding scope.

// ---

// ### Arrow Function Syntax

// 1. **Basic Arrow Function Syntax**:

// ```javascript
// // Regular function syntax
// function add(a, b) {
//     return a + b;
// }

// // Arrow function syntax
// const add = (a, b) => a + b;
// ```

// **Explanation**: 
// - The arrow function takes parameters `a` and `b` and returns their sum.
// - In this case, there’s no need for curly braces `{}` or a `return` statement because it’s a single expression. The result of the expression is returned automatically.

// 2. **Single Parameter**:

// ```javascript
// // Regular function
// function square(x) {
//     return x * x;
// }

// // Arrow function
// const square = x => x * x;
// ```

// **Explanation**: 
// - When there is only **one parameter**, you can omit the parentheses `()` around the parameter.
  
// 3. **No Parameters**:

// ```javascript
// // Regular function
// function greet() {
//     console.log("Hello, world!");
// }

// // Arrow function
// const greet = () => console.log("Hello, world!");
// ```

// **Explanation**: 
// - When there are **no parameters**, an empty pair of parentheses `()` is required.

// 4. **Multiple Statements in the Body**:

// If the function has more than one statement, you need curly braces `{}` and a `return` statement (if you want to return a value).

// ```javascript
// const addAndLog = (a, b) => {
//     const sum = a + b;
//     console.log(sum);
//     return sum;
// };
// ```

// **Explanation**:
// - The body of the arrow function has multiple statements, so we need curly braces and an explicit `return` statement.

// ---

// ### `this` Behavior in Arrow Functions

// The most important difference is that arrow functions **do not** have their own `this`. Instead, `this` refers to the **lexical `this`** of the surrounding context, which can lead to cleaner code in certain scenarios.

// **Example with Regular Function:**

// ```javascript
// function Person(name) {
//     this.name = name;
//     setTimeout(function() {
//         console.log(this.name); // `this` refers to the global object, not the Person instance
//     }, 1000);
// }

// const person = new Person("John");
// ```

// In this case, `this` inside the `setTimeout` refers to the **global object** (in a browser, it's the `window`), not the instance of the `Person` object.

// **Example with Arrow Function:**

// ```javascript
// function Person(name) {
//     this.name = name;
//     setTimeout(() => {
//         console.log(this.name); // `this` refers to the Person instance
//     }, 1000);
// }

// const person = new Person("John");
// ```

// With the arrow function, `this` inside `setTimeout` refers to the `Person` instance, because arrow functions **inherit** `this` from their surrounding context.

// ---

// ### Example: Arrow Function vs Regular Function

// ```javascript
// // Regular Function
// const greet = function(name) {
//     console.log(`Hello, ${name}`);
// };

// // Arrow Function
// const greet = (name) => {
//     console.log(`Hello, ${name}`);
// };

// greet("Alice");  // Output: Hello, Alice
// ```

// Both of these functions do the same thing, but the arrow function is shorter.

// ---

// ### Why Use Arrow Functions?

// 1. **Shorter Syntax**: The main advantage of arrow functions is their concise syntax, making code more readable.
// 2. **Lexical `this`**: Arrow functions are often used when you want to ensure that `this` is inherited from the surrounding context, such as inside callbacks or event handlers.
// 3. **No `arguments` object**: If you don’t need access to the `arguments` object, arrow functions are a cleaner option.

// ---

// ### Conclusion

// - **Arrow functions** provide a cleaner, more concise way to write functions, especially for short functions or callbacks.
// - They are great for handling **lexical scoping of `this`**, making them ideal for use in callbacks, event handlers, and functions passed as arguments.
// - They don't have their own `this` or `arguments`, so they inherit them from their surrounding context.




















// ### JavaScript: Understanding Synchronous Execution, Callbacks, Event Listeners, and Closures

// ### 1. **JavaScript is a Synchronous and Single-Threaded Language**
// #### Definition:
// JavaScript is **single-threaded**, meaning it executes one operation at a time in a sequential order. It follows a **synchronous execution model**, where each line of code runs one after another, and the next operation does not start until the current one is completed.

// #### Example:
// ```javascript
// console.log("Start");
// console.log("Processing...");
// console.log("End");
// ```
// **Output:**
// ```
// Start
// Processing...
// End
// ```
// Each statement executes one after the other in a predictable order.

// ---

// ### 2. **Blocking the Main Thread**
// #### Definition:
// Since JavaScript runs on a **single-thread**, if a task takes too long to execute, it blocks the main thread. This means the browser cannot respond to user actions like clicking buttons or scrolling.

// #### Example of a Blocking Operation:
// ```javascript
// console.log("Start");

// // A blocking operation (a long loop)
// for (let i = 0; i < 1000000000; i++) {} 

// console.log("End");
// ```
// - The `for` loop blocks the main thread for a few seconds.
// - During this time, the webpage becomes **unresponsive**.

// ✅ **Solution:** Use **asynchronous operations** like `setTimeout`, `Promises`, or `async/await` to prevent blocking.

// ---

// ### 3. **The Power of Callbacks**
// #### Definition:
// A **callback function** is a function **passed as an argument** to another function and executed later.

// #### Why use Callbacks?
// - They allow **asynchronous behavior** in JavaScript.
// - Used in **event handling**, **timers**, and **asynchronous API calls**.

// #### Example:
// ```javascript
// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         console.log("Data fetched!");
//         callback(); // Executes the callback after data is fetched
//     }, 2000);
// }

// function displayData() {
//     console.log("Displaying data...");
// }

// fetchData(displayData);
// ```
// **Output:**
// ```
// Fetching data...
// (Data is fetched after 2 seconds)
// Displaying data...
// ```
// ✅ The callback function `displayData` runs only after data fetching is complete.

// ---

// ### 4. **Deep Dive into Event Listeners**
// #### Definition:
// An **event listener** is a function that waits for an event (e.g., click, scroll, keypress) to occur and then executes a callback function.

// #### Example:
// ```javascript
// document.getElementById("btn").addEventListener("click", function() {
//     console.log("Button clicked!");
// });
// ```
// ✅ Every time the button is clicked, the function runs.

// **Why are Event Listeners powerful?**
// - They help in making **interactive web pages**.
// - They can invoke **closures**, meaning they can access variables from their outer function even after execution.

// ---

// ### 5. **Closures in Event Listeners**
// #### Definition:
// A **closure** is a function that remembers variables from its **lexical scope**, even after the outer function has finished executing.

// #### Example:
// ```javascript
// function createButtonLogger(message) {
//     return function() {
//         console.log(message);
//     };
// }

// document.getElementById("btn").addEventListener("click", createButtonLogger("Button clicked!"));
// ```
// ✅ The event listener function **remembers** the `message` even though `createButtonLogger` has finished executing.

// ---

// ### 6. **Scope Demo with Event Listeners**
// #### Example:
// ```javascript
// function addEvent() {
//     let count = 0;
//     document.getElementById("btn").addEventListener("click", function() {
//         count++;
//         console.log(`Button clicked ${count} times`);
//     });
// }

// addEvent();
// ```
// ✅ The event listener **retains access to `count`** due to **closures**.

// ---

// ### 7. **Garbage Collection & Removing Event Listeners**
// #### Definition:
// Event listeners take up memory. If we don’t remove unused listeners, they keep consuming memory, which can slow down the website.

// #### Example:
// ```javascript
// const button = document.getElementById("btn");

// function handleClick() {
//     console.log("Button clicked!");
//     button.removeEventListener("click", handleClick);
// }

// button.addEventListener("click", handleClick);
// ```
// ✅ After **one click**, the event listener is **removed** to free memory.

// ---

// ### 8. **setTimeout Makes JavaScript Asynchronous**
// #### Definition:
// Even though JavaScript is **single-threaded**, functions like `setTimeout` allow **asynchronous execution** by delaying the execution of a function.

// #### Example:
// ```javascript
// console.log("Start");

// setTimeout(() => {
//     console.log("Delayed execution");
// }, 2000);

// console.log("End");
// ```
// **Output:**
// ```
// Start
// End
// (After 2 seconds)
// Delayed execution
// ```
// ✅ `setTimeout` **does not block** execution.

// ---

// ### Summary:
// | Concept | Explanation |
// |---------|-------------|
// | **JavaScript is Single-Threaded** | Executes one operation at a time. |
// | **Blocking the Main Thread** | Long-running tasks freeze the page. |
// | **Callbacks** | Functions passed as arguments, enabling async behavior. |
// | **Event Listeners** | Functions that wait for user interactions like clicks. |
// | **Closures in Event Listeners** | Functions inside event listeners remember variables. |
// | **Removing Event Listeners** | Saves memory and improves performance. |
// | **setTimeout for Async Execution** | Delays execution without blocking other operations. |

// By understanding these core JavaScript concepts, you can write **efficient, non-blocking, and interactive web applications**! 🚀






// closure data hiding script-1









//Event loop
// Call Stack:

// The call stack is a data structure that keeps track of the function calls in your code. It follows the Last In, First Out (LIFO) principle, meaning the last function that gets pushed onto the stack is the first one to be popped off when the function completes.
// Callback Queue (Task Queue):

// The callback queue, also known as the task queue, holds tasks (callbacks or events) that are ready to be executed. These tasks usually come from asynchronous operations, such as DOM events, HTTP requests, or timers.
// Event Loop:

// The event loop is responsible for continuously checking the call stack and the callback queue. If the call stack is empty, the event loop takes the first task from the callback queue and pushes it onto the call stack for execution.
// Microtask Queue:

// The microtask queue holds tasks that are also ready to be executed but has a higher priority than the callback queue. Microtasks are usually scheduled by JavaScript promises, mutation observers, and other similar mechanisms.
// Here's how they work together:

// When an asynchronous operation is encountered, such as a setTimeout or a Promise, the callback associated with that operation is sent to the callback queue after the specified time or when the Promise settles.

// When the call stack is empty (no functions being executed), the event loop takes the first task from the microtask queue and pushes it onto the call stack.

// If the microtask queue is empty, the event loop looks at the callback queue and pushes the first task onto the call stack.

// This process repeats, allowing JavaScript to handle asynchronous operations without blocking the main thread.

// Understanding these concepts is crucial for writing efficient and responsive asynchronous JavaScript code, as it helps you manage the order of execution and prevent blocking the user interface.




// ## 🔥 **Deep Dive into JavaScript Execution Model: Call Stack, Event Loop, Web APIs, Callback Queue, and Microtask Queue** 🔥  

// JavaScript is **single-threaded** and **synchronous by default**, but it can handle **asynchronous operations** with the help of the **Event Loop** and **Web APIs**. This guide will explore **how JavaScript executes code**, how asynchronous tasks are handled, and how different queues interact to ensure non-blocking behavior.  

// ---

// ## 🚀 **1. JavaScript Engine & Web APIs (Superpowers of the Browser)**  
// The **JavaScript engine** (e.g., V8 in Chrome, SpiderMonkey in Firefox) executes JavaScript code. However, **it does not natively support asynchronous tasks** like timers, AJAX calls, or event listeners.  

// **The browser provides additional functionalities called Web APIs, including:**  
// ✅ **setTimeout / setInterval** (Timer API)  
// ✅ **DOM Manipulation APIs** (document.querySelector, event listeners)  
// ✅ **fetch API** (Network requests)  
// ✅ **console API** (Logging messages)  
// ✅ **localStorage API** (Persistent storage)  
// ✅ **location API** (URL-related actions)  

// ### **💡 How Web APIs Work:**  
// 1. JavaScript calls an asynchronous function (e.g., `setTimeout()` or `fetch()`).
// 2. The function is **sent to the Web API environment**, which manages the task separately.
// 3. Once completed, the **callback function is pushed into the Callback Queue or Microtask Queue**.

// ---

// ## 🛠️ **2. Call Stack (LIFO - Last In, First Out)**
// The **Call Stack** is a **stack data structure** used to keep track of function execution.  
// It follows the **LIFO (Last In, First Out)** rule:  
// - The last function pushed is the first to be popped.  
// - It **only handles synchronous operations**.

// ### **Example: Call Stack in Action**
// ```javascript
// function first() {
//     console.log("First function");
// }

// function second() {
//     console.log("Second function");
//     first();
// }

// second();
// ```

// ### **Execution Steps**
// 1. `second()` is **pushed** onto the Call Stack.
// 2. `console.log("Second function")` **executes** and prints `"Second function"`.
// 3. `first()` is **called**, so it's pushed onto the stack.
// 4. `console.log("First function")` **executes** and prints `"First function"`.
// 5. `first()` is **popped** off.
// 6. `second()` is **popped** off.

// ✅ The Call Stack **only runs synchronous code and blocks further execution until empty**.

// ---

// ## ⏳ **3. Web APIs & Asynchronous Behavior**
// Since JavaScript **is single-threaded**, it cannot perform tasks like timers, HTTP requests, or file reading on its own.  
// **Web APIs handle these tasks asynchronously without blocking the Call Stack.**

// ### **Example: setTimeout()**
// ```javascript
// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout Callback");
// }, 2000);

// console.log("End");
// ```

// ### **Execution Flow**
// 1. `"Start"` is printed immediately (Call Stack).
// 2. `setTimeout()` is sent to the **Web API**, which starts a **2-second timer**.
// 3. `"End"` is printed immediately (Call Stack).
// 4. After 2 seconds, the callback **(`console.log("Timeout Callback")`) is moved to the Callback Queue**.
// 5. **Event Loop checks the Call Stack**, and since it's empty, the callback executes.

// ✅ **Key takeaway**: `setTimeout()` doesn’t pause execution; it just schedules a task for later.

// ---

// ## 🕒 **4. Callback Queue (Task Queue)**
// The **Callback Queue** holds tasks that come from:
// - **Timers (`setTimeout`, `setInterval`)**
// - **DOM Events (`click`, `keydown`)**
// - **XHR / Fetch responses**
//The Callback Queue (also called the Task Queue) is a place where asynchronous callbacks (from timers, event listeners, and network requests) wait until the Call Stack is empty before being executed.

// Tasks in the **Callback Queue** are executed **only when the Call Stack is empty**.

// ---

// ## ⚡ **5. Microtask Queue (Higher Priority)**
// The **Microtask Queue** is like the Callback Queue but has **higher priority**.  
// Tasks in this queue are executed **before Callback Queue tasks**.

// **Microtask Queue contains:**
// ✅ **Promise `.then()` and `.catch()` handlers**  
// ✅ **MutationObserver callbacks**  
// ✅ **queueMicrotask()**

// ### **Example: Microtask vs. Callback Queue**
// ```javascript
// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise Microtask");
// });

// console.log("End");
// ```

// ### **Execution Order**
// 1. `"Start"` logs (Call Stack).
// 2. `setTimeout()` moves its callback to the **Callback Queue**.
// 3. `Promise.resolve().then()` moves its callback to the **Microtask Queue**.
// 4. `"End"` logs (Call Stack is now empty).
// 5. **Microtask executes first:** `"Promise Microtask"` logs.
// 6. **Callback Queue executes next:** `"setTimeout Callback"` logs.

// ✅ **Microtasks always execute before Callback Queue tasks.**

// ---

// ## 🔁 **6. Event Loop**
// The **Event Loop** is a mechanism that:  
// - Continuously checks the **Call Stack**.
// - If the Call Stack is **empty**, it first **executes all Microtasks**.
// - Then, it moves the **oldest task from the Callback Queue** to the Call Stack.

// ---

// ## ⚠️ **7. Starvation Problem (Too Many Microtasks)**
// If **too many microtasks** are scheduled, **callback tasks may never get executed**, causing "starvation."

// ### **Example: Starvation**
// ```javascript
// function infiniteMicrotasks() {
//     Promise.resolve().then(infiniteMicrotasks);
// }

// infiniteMicrotasks(); // Blocks execution

// setTimeout(() => {
//     console.log("This will never run");
// }, 1000);
// ```

// 🚨 **Issue**:  
// - The microtask queue keeps adding new tasks, preventing the `setTimeout` callback from executing.
// - **Solution**: Limit the number of microtasks per event loop cycle.

// ---

// ## 🗑️ **8. Memory Management & Removing Event Listeners**
// ### **Why Remove Event Listeners?**
// 1. **Event Listeners consume memory**.
// 2. **Too many event listeners slow down performance**.
// 3. **Unused event listeners cause memory leaks**.

// ### ✅ **Example: Removing Event Listener**
// ```javascript
// const button = document.getElementById("btn");

// function handleClick() {
//     console.log("Button Clicked");
//     button.removeEventListener("click", handleClick);
// }

// button.addEventListener("click", handleClick);
// ```

// ✅ **After one click, the event listener is removed**, preventing unnecessary memory usage.

// ---

// ## 📝 **Summary Table**
// | **Concept** | **Description** |
// |-------------|----------------|
// | **Call Stack** | Executes synchronous code (LIFO). |
// | **Web APIs** | Handle async tasks (setTimeout, fetch, DOM events). |
// | **Callback Queue** | Stores async callbacks (setTimeout, event listeners). |
// | **Microtask Queue** | Higher priority queue (Promises, MutationObserver). |
// | **Event Loop** | Moves tasks from queues to Call Stack when it's empty. |
// | **Starvation** | Too many microtasks can block Callback Queue execution. |

// ---

// ## 🎯 **Final Takeaways**
// ✔️ JavaScript is **single-threaded** and uses the **event loop** to manage async tasks.  
// ✔️ **Web APIs** handle timers, network requests, and DOM events.  
// ✔️ **Microtasks (`Promise.then()`) execute before callback queue tasks (`setTimeout()`).**  
// ✔️ **Too many microtasks can cause starvation, preventing callbacks from running.**  
// ✔️ **Removing event listeners** improves performance and prevents memory leaks.  

// 🔥 Mastering these concepts will help you write efficient **asynchronous JavaScript**! 🚀









// 🔍 Where does JavaScript put asynchronous code?
// 1️⃣ Web APIs (Handled Outside the Call Stack)

// JavaScript hands over timers, network requests, and event listeners to the Web APIs provided by the browser (or Node.js runtime).
// The Web APIs execute these tasks in the background without blocking the Call Stack.
// 2️⃣ Task Queues (After Completion)

// Once an asynchronous task completes, its callback is moved to either:
// Microtask Queue (for Promise.then(), queueMicrotask())
// Callback Queue (for setTimeout(), setInterval(), fetch() callbacks)
// 3️⃣ Event Loop (Execution Order)

// The Event Loop constantly checks the Call Stack.
// If the Call Stack is empty, it first executes all Microtasks.
// Then, it takes the oldest task from the Callback Queue and executes it.








// ### **What is Asynchronous in JavaScript?**  

// 🔹 **Asynchronous** means that JavaScript does not wait for a task to complete before moving on to the next one. It allows tasks to execute **independently** and **continue without blocking** other operations.  

// 🔹 **Synchronous vs. Asynchronous**:  
// - **Synchronous**: Executes **one task at a time**, waiting for each to finish before moving on.  
// - **Asynchronous**: Executes **multiple tasks concurrently**, without waiting for one task to complete.  

// ---

// ### **🛠 Example: Synchronous Code (Blocking)**
// ```javascript
// console.log("Start");

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log("End");
// ```
// ✅ **Output:**
// ```
// Start
// 0
// 1
// 2
// 3
// 4
// End
// ```
// 🔹 The loop **blocks** execution. The program waits for it to finish before moving to `"End"`.

// ---

// ### **🔥 Example: Asynchronous Code (Non-Blocking)**
// ```javascript
// console.log("Start");

// setTimeout(() => {
//     console.log("Async Task Done");
// }, 2000);

// console.log("End");
// ```
// ✅ **Output:**
// ```
// Start
// End
// Async Task Done
// ```
// 🔹 `setTimeout()` **runs in the background**, allowing `"End"` to print **before** `"Async Task Done"`.  

// ---

// ### **⚡ How Does Asynchronous JavaScript Work?**
// JavaScript handles **asynchronous operations** using:  
// ✔ **Callbacks** (e.g., `setTimeout`)  
// ✔ **Promises** (e.g., `fetch()`)  
// ✔ **Async/Await** (modern syntax for handling Promises)  
// ✔ **Web APIs** (e.g., `DOM Events`, `setInterval`, `fetch()`)  

// ---

// ### **🚀 Real-Life Examples of Asynchronous Behavior**
// 📌 **Fetching Data from an API** (e.g., user details, weather data)  
// 📌 **Reading a File** (Node.js file system operations)  
// 📌 **Timers & Animations** (`setTimeout`, `setInterval`)  
// 📌 **Handling User Input** (Button clicks, keypresses)  

// This **non-blocking nature** makes JavaScript **efficient and responsive**, especially in web applications! 🚀











