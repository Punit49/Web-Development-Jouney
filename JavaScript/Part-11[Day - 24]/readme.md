Part 11 of JavaScript Journey 🚀, Here’s what I explored 👇

🔹Event Delegation — Instead of attaching event listeners to multiple child elements, we can attach one to their parent. This makes our code more efficient, reduces memory usage, and helps when dynamically adding elements.

🔹Event Bubbling & Capturing (useCapture) — Learned how an event travels through the DOM. In bubbling, it moves from the target element up to its ancestors, while in capturing, it goes from the top down to the target. The useCapture flag lets us decide which one to use.

🔹stopPropagation() & stopImmediatePropagation() — These methods are used when we want to stop an event from moving further in the DOM tree or prevent other listeners of the same event from firing.

🔹Call Stack & JRE (JavaScript Runtime Environment) — Understood how the call stack keeps track of function execution and how the runtime environment manages asynchronous tasks even though JS is single threaded.

🔹Callback Hell — Saw how deeply nested callbacks can make code hard to read and maintain, and how Promises or async/await help solve that problem with cleaner, more readable code.

🔹 Breakpoints in DevTools — Practiced using breakpoints to pause code at specific lines, inspect variables, and understand the real-time execution flow.

🔹Single-Threaded Nature of JS — Realized that JavaScript can only do one thing at a time, but its event loop and asynchronous behavior make it feel multitasked. It’s all about clever execution management!
