Part 13 of JavaScript Journey 🚀, Here’s what I explored today 👇

🔹Promises — Discovered how Promises help handle asynchronous operations in a cleaner and more structured way. Instead of dealing with multiple nested callbacks, Promises let us define what should happen next in a clear sequence.

🔹Promise States — Learned that every Promise goes through three key stages: pending, fulfilled, and rejected. Once a Promise settles (fulfilled or rejected), its state never changes again.

🔹resolve() & reject() Handlers — Explored how these functions determine the outcome of a Promise. resolve signals success, while reject indicates something went wrong — both letting us respond appropriately in our .then() and .catch() handlers.

🔹Executor Function Behavior — Realized that the function inside new Promise() runs immediately and synchronously, even though the resolution is handled asynchronously later. That small detail clarified a lot!

🔹.then() & .catch() and .finally() — Practiced chaining multiple .then() calls to handle tasks sequentially, using .catch() at the end to handle any errors accurately, and .finally() for cleanup, ensuring certain code always runs, no matter the outcome.

🔹Promise.all() — Discovered how Promise.all() allows multiple Promises to run in parallel and returns results once all are complete.

🔹Inversion of Control Problem — Understood how callbacks often take control away from our code, making it harder to manage the flow. Promises fix this by giving control back to us — we decide what happens next, step by step.