# Hooks

## useState

The `useState` hook is a fundamental hook in React for adding state to functional components. It returns an array with two elements: the current state and a function to update the state.

### Syntax

```jsx
const [state, setState] = useState(initialState);
```

## useEffect

The `useEffect` hook lets you perform side effects in functional components. It can handle data fetching, subscriptions, or manually changing the DOM. It's for synchronization of React with external things

### Syntax

```jsx
useEffect(() => {
  //logic

  return () => {
    // cleanup, if needed
  };
}, [dependencies]);
```

## Example

# Components

Components are the building blocks of a React app.

## Example

Let's practice breaking down a large piece of code into smaller components

Gonna make a calculated error and introduce a bug somewhere, which I'm gonna fix with the console and console logs

# My Advice

## 1. You Might Not Need an Effect

Before reaching for `useEffect`, make sure it's necessary. In many cases, side effects can be avoided by restructuring your component logic.

- When you add a useEffect to your code, check the React docs: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) to see if it is really necessary
- Avoid overusing effects for things like transforming data or working with props; state logic can often handle it.

## 2. Understand `useState` and Rerenders

`useState` is central to React's state management. Understanding how it affects rerenders will help you write more efficient components:

- **Rerender Trigger**: Every time you call the state update function (e.g., `setState`), it triggers a rerender of the component.

## 3. Keep Your Console Open

Always have the browser console open during development to catch warnings, errors, and logs:

- Use `console.log` to see what really goes on in your components and to track data flow
- clg command for console.log, utilize your vscode!

## 4. If it doesn't make sense yet, keep practicing until it "clicks"

- The only way to learn how to use React or just learn how to code in general is to practice.

Best way to practice is to make your own projects.

- When you run into errors and fix them, you learn a great deal
