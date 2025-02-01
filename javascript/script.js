// JavaScript (JS) is a high-level, dynamic programming language primarily used for making web pages interactive. It is one of the core technologies of the web, alongside HTML and CSS.

// ### **Uses of JavaScript** 🚀  
// 1. **Web Development** – Adds interactivity, modifies HTML/CSS.  
// 2. **Front-End Frameworks** – Used in React, Angular, Vue.  
// 3. **Back-End Development** – Runs servers with Node.js.  
// 4. **Game Development** – Builds browser-based games.  
// 5. **Mobile Apps** – Creates cross-platform apps (React Native).  
// 6. **Desktop Apps** – Powers apps like VS Code (Electron.js).  
// 7. **Real-Time Apps** – Chat, live notifications (WebSockets).  
// 8. **AI & ML** – Runs ML models in the browser (TensorFlow.js).  
// 9. **Data Visualization** – Creates interactive charts (D3.js).  
// 10. **Browser Extensions** – Enhances Chrome, Firefox.  

// Need details on any? 🔥



//^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^&%^%^%^%^%^%^%^%^%^%^%^%^%^


// Word

// Any sequence of characters used in JavaScript, including variable names, function names, and identifiers.
// Example: hello, myVariable, sum

// Keyword

// Reserved words with special meanings in JavaScript that cannot be used as variable names.
// Example: var, let, const, if, else, function, return



//^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^&%^%^%^%^%^%^%^%^%^%^%^%^%^




// ### **How JavaScript Works?**  

// Everything in JavaScript happens inside an **Execution Context**. This execution context is responsible for running the code and managing variables and functions. It consists of two main components:  

// #### **1. Memory Component (Variable Environment)**  
// - This is where all variables and functions are stored as **key-value pairs**.  
// - When JavaScript encounters a variable declaration, it reserves a space in memory and assigns an initial value (like `undefined` for `var` variables).  
// - Example:  
//   ```js
//   let n = 2;
//   ```
//   In memory, this is stored as:  
//   ```js
//   { n: 2 }
//   ```

// #### **2. Code Component (Thread of Execution)**  
// - This is where JavaScript executes the code **line by line** in a structured order.  
// - Each line of code is executed in sequence, following the **call stack** mechanism.

// ---

// ### **Key Characteristics of JavaScript Execution:**  

// ✅ **Single-Threaded Language**  
// - JavaScript runs on a **single thread**, meaning it can execute **only one command at a time**.  

// ✅ **Synchronous Execution by Default**  
// - JavaScript executes code in a **synchronous manner**, meaning it follows a **step-by-step** execution order.  
// - However, JavaScript can handle **asynchronous tasks** (like API calls, setTimeout, event listeners) using **callbacks, promises, and async/await**.

// ---






//^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^&%^%^%^%^%^%^%^%^%^%^%^%^%^






// var n = 2;
// function square(num){
//     var asn = num * num;
//     return asn;
// }
// var square2 = square(n);
// var square4 = square(4);





// ### **Refined Summary of JavaScript Execution Context**  

// 1. **Global Execution Context (GEC)**  
//    - Whenever JavaScript code is executed, an **Execution Context** is created.  
//    - By default, the first execution context is the **Global Execution Context (GEC)**.  

// 2. **Execution Context Structure**  
//    - An Execution Context consists of **two components**:  
//      - **Memory Component (Variable Environment):** Stores variables and functions as key-value pairs.  
//      - **Code Component (Thread of Execution):** Executes code **line by line**.  

// 3. **Phases of Execution Context Creation**  
//    a. **Memory Creation Phase**  
//       - JavaScript allocates memory for all **variables** and **functions** in the global scope.  
//       - Variables are assigned **undefined**, while function declarations store the entire function.  
      
//    b. **Code Execution Phase**  
//       - Code is executed **line by line**, replacing `undefined` with actual values.  

// 4. **Function Execution Context**  
//    - Every time a function is invoked, a **new Execution Context** is created.  
//    - This follows the **same two-phase process (Memory & Code Execution Phase)**.  
//    - If the function has **parameters**, they are also stored in the memory component.  

// 5. **Function Return and Execution Context Removal**  
//    - When JavaScript encounters a **return** statement, the function’s task is complete.  
//    - The **function execution context is removed** from memory, and control is returned to the place where the function was invoked.  

// 6. **Call Stack (Execution Stack)**  
//    - JavaScript maintains execution order using a **Call Stack** (LIFO - Last In, First Out).  
//    - Process:  
//      - The **Global Execution Context** is pushed onto the stack first.  
//      - When a function is invoked, a **new execution context is pushed onto the stack**.  
//      - Once a function finishes execution, its **execution context is popped off the stack**.  
//      - When the entire script finishes running, the **Global Execution Context is also removed**.  

//      "Call stack maintains the order of execution of execution contexts"








// 0. Call Stack
// 1. Execution Context Stack
// 2. Program Stack
// 3. Control Stack
// 4. Runtime Stack
// 5. Machine Stack
// ---








//^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^&%^%^%^%^%^%^%^%^%^%^%^%^%^



// Hoisting

console.log(a); //undefined
console.log(getname); // function
getname(); // hello zameer
var a = 7;


function getname(){
    console.log("helle zameer")
}


console.log(a); // 7
console.log(getname); // function







// JavaScript Hoisting and Execution Context**  

// 1. **Variable Initialization Before Execution**  
//    - Before JavaScript executes the code, **all variables are initialized to `undefined`** during the **Memory Creation Phase**.  

// 2. **Arrow Functions vs. Regular Functions**  
//    - **Arrow functions are treated as variables**, so they are **initialized as `undefined`** just like other variables.  
//    - **Function declarations**, however, are fully **hoisted**, meaning they can be called **before** their declaration.  

// 3. **Hoisting in JavaScript**  
//    - **Hoisting** is a mechanism where JavaScript moves all **variable and function declarations** to the **top of their scope** before execution.  
//    - This allows functions to be called **before they are defined** in the code.  
//    - Example:  
//      ```js
//      console.log(hoistedVar); // undefined
//      var hoistedVar = "I am hoisted";
//      ```
//      ```js
//      greet(); // ✅ Works because function declarations are hoisted

//      function greet() {
//        console.log("Hello!");
//      }
//      ```

// 4. **Execution Context Structure**  
//    - Whenever JavaScript runs a program, it creates a **Global Execution Context (GEC)**, which consists of:  
//      - **Memory Creation Phase** – Allocates memory for variables and functions.  
//      - **Code Execution Phase** – Executes the script **line by line**.  

// 5. **Variable Hoisting Behavior**  
//    - **Variable declarations** (`var`) are **hoisted but initialized as `undefined`**.  
//    - Example:  
//      ```js
//      console.log(name); // undefined
//      var name = "Zameer";
//      ```

// 6. **Function Hoisting Behavior**  
//    - **Function declarations** are **fully hoisted**, meaning they can be invoked before their definition.  
//    - Example:  
//      ```js
//      sayHello(); // ✅ Works

//      function sayHello() {
//        console.log("Hello, world!");
//      }
//      ```
//    - However, **function expressions and arrow functions** behave like variables and **do not get hoisted** in the same way:  
//      ```js
//      console.log(sayHi); // undefined
//      var sayHi = function () {
//        console.log("Hi");
//      };

//      console.log(sayBye); // ❌ ReferenceError
//      let sayBye = () => console.log("Bye");
//      ```

// ---

// ### **Key Takeaways**  
// ✅ **Variable declarations (`var`) are hoisted but set to `undefined`**.  
// ✅ **Function declarations are fully hoisted and can be called before they appear in the code**.  
// ✅ **Arrow functions and function expressions behave like variables, so they are hoisted but remain `undefined`**.  
// ✅ **JavaScript execution follows a structured process using the Execution Context and Call Stack**.