Part 14 of My JavaScript Journey 🚀, What I learned in this part👇.

🔹More on Promises — Explored advanced Promise methods.
Promise.race() returns the result of the first settled Promise, whether fulfilled or rejected, Promise.allSettled() waits for all Promises to finish and gives results for both successes and failures, Promise.any() returns the first fulfilled Promise and ignores rejections.

🔹Microtasks & Macrotasks — Learned how JavaScript schedules work. Microtasks (like Promise callbacks) run before macrotasks (like setTimeout), ensuring async operations complete in the right order.

🔹Callback Queue & Event Loop — Understood how the event loop constantly checks the call stack and queues to decide what to execute next, making asynchronous behavior possible even in a single-threaded environment.

🔹How Async Code Works — Realized that JavaScript doesn’t actually run multiple things at once — it just manages timing cleverly using the event loop, queues, and microtasks to make it feel that way.

🔹Async–Await — Learned that every async function automatically returns a Promise. Await pauses execution until the Promise settles, making async code look synchronous and super clean to read.

🔹throw Keyword & Handling Rejections in Await — Practiced using throw to reject inside async functions and handling those rejections with try–catch blocks. It made error handling in async code feel much more natural and controlled.

💡Overall Takeaway:
Understanding how Promises, async/await, and the event loop all connect gave me a much clearer picture of how JavaScript truly handles asynchronous behavior behind the scenes.