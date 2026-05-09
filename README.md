# 🚀 The Ultimate React Revision Handbook

This README serves as a complete, practical, and interview-focused revision guide for React. It is designed to replace the need to browse through multiple project folders and help you master React concepts quickly.

---

# 1. JSX (JavaScript XML)
### Simple Definition
JSX is a syntax extension for JavaScript that looks like HTML. It allows you to write HTML-like structures directly inside JavaScript, making the code more readable and easier to write. React uses JSX to describe what the UI should look like.

### Syntax
```javascript
const element = <h1>Hello, React!</h1>;
```

### Important Points
- JSX is not valid JS; it gets transpiled to `React.createElement()` by tools like Babel.
- You must return a single root element (or use a Fragment `<> </>`).
- Attributes use **camelCase** (e.g., `className` instead of `class`, `onClick` instead of `onclick`).
- You can embed any JS expression inside `{}`.

### Short Example
```javascript
const name = "Ansh";
const element = <h1>Hello, {name}</h1>;
```

### Real Use Case
Used in every React component to define the layout and structure of the UI.

### Common Mistakes
- Forgetting to close tags (e.g., `<img />` is required, `<img>` will error).
- Using `class` instead of `className`.

### Revision Notes
- JSX → JS via Babel
- One parent element only
- `{}` for JS logic
- CamelCase attributes

### Interview Questions
1. What is the difference between JSX and HTML?
2. Why do we need to import React when using JSX? (In older versions)
3. Can JSX have multiple root elements? How to handle it?

---

# 2. Components
### Simple Definition
Components are the building blocks of a React application. They are independent, reusable pieces of UI that can be composed to build complex interfaces. Think of them as custom HTML elements.

### Syntax
```javascript
function Welcome() {
  return <h1>Hello there!</h1>;
}
```

### Important Points
- Component names must start with a **Capital Letter**.
- They can be Functional (standard now) or Class-based (legacy).
- They must return JSX.
- They can accept inputs called "Props".

### Short Example
```javascript
const Header = () => <header>My Portfolio</header>;

function App() {
  return (
    <div>
      <Header />
      <main>Content here</main>
    </div>
  );
}
```

### Real Use Case
Used to break a website into parts like Header, Sidebar, Button, Card, etc.

### Common Mistakes
- Starting component names with lowercase (React treats them as HTML tags).
- Forgetting to return JSX.

### Revision Notes
- Components = UI Lego blocks
- PascalCase naming
- Reusable & Independent
- Functional > Class components

### Interview Questions
1. What is the difference between Functional and Class components?
2. When should you use a component?
3. Can a component return multiple elements?

---

# 3. Props (Properties)
### Simple Definition
Props are inputs to a React component. They are used to pass data from a parent component to a child component. Props are **read-only** (immutable).

### Syntax
```javascript
<User name="Ansh" age={20} />
```

### Important Points
- Data flows in one direction: **Parent to Child** (Unidirectional Data Flow).
- Props are immutable; a component cannot change its own props.
- You can pass strings, numbers, arrays, objects, and even functions.

### Short Example
```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Greeting name="Ansh" />
```

### Real Use Case
Passing a product's details to a generic `ProductCard` component to display different items.

### Common Mistakes
- Trying to modify a prop value inside the child component.
- Forgetting to use `{}` when passing non-string values (e.g., `age="20"` vs `age={20}`).

### Revision Notes
- Parent → Child communication
- Read-only (Immutable)
- Destructuring is best practice: `({ name }) => ...`

### Interview Questions
1. What is Prop Drilling?
2. Can you pass a component as a prop?
3. What are default props?

---

# 4. State
### Simple Definition
State is an object that holds information about a component's current situation. Unlike props, state is **private** and fully controlled by the component. When state changes, React re-renders the component.

### Syntax
```javascript
const [count, setCount] = useState(0);
```

### Important Points
- State change triggers a **re-render**.
- State is local to the component unless passed down.
- State updates are **asynchronous**.

### Short Example
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Real Use Case
Managing input values in a form, tracking if a modal is open, or storing data fetched from an API.

### Common Mistakes
- Modifying state directly (e.g., `state.count = 5`). Always use the setter function.
- Expecting state to update immediately after calling the setter.

### Revision Notes
- State = Component Memory
- Change State → Re-render UI
- Managed via `useState` hook

### Interview Questions
1. Difference between Props and State?
2. Why should we not update state directly?
3. What happens when state changes?

---

# 5. useState Hook
### Simple Definition
`useState` is a Hook that lets you add React state to functional components. It returns an array with two items: the current state value and a function to update it.

### Syntax
```javascript
const [state, setState] = useState(initialValue);
```

### Important Points
- Can hold any data type: string, number, object, array.
- The setter function can take a new value or a callback (functional update).
- Functional updates `setCount(prev => prev + 1)` are safer for concurrent updates.

### Short Example
```javascript
const [isOn, setIsOn] = useState(false);
const toggle = () => setIsOn(prev => !prev);
```

### Real Use Case
Handling toggles (dark mode), counters, or text input values.

### Common Mistakes
- Using `useState` inside a loop or conditional statement (violates Hooks rules).
- Not initializing state correctly (leading to `undefined` errors).

### Revision Notes
- Array destructuring: `[val, setVal]`
- Initial value only used on 1st render
- Use functional updates for logic based on prev state

### Interview Questions
1. How does `useState` work under the hood?
2. Why is `useState` returned as an array and not an object?
3. Can we use multiple `useState` calls in one component?

---

# 6. Event Handling
### Simple Definition
Event handling in React is similar to DOM handling but uses camelCase naming and passes a function as the event handler rather than a string.

### Syntax
```javascript
<button onClick={handleClick}>Click Me</button>
```

### Important Points
- Events are camelCase: `onClick`, `onChange`, `onSubmit`.
- Prevent default behavior using `e.preventDefault()` inside the handler.
- Synthetic Events: React wraps native events for cross-browser compatibility.

### Short Example
```javascript
const handleClick = (e) => {
  console.log("Button clicked!", e.target);
};
return <button onClick={handleClick}>Click</button>;
```

### Real Use Case
Form submissions, button clicks, hovering over elements, or typing in inputs.

### Common Mistakes
- Calling the function immediately: `onClick={handleClick()}` instead of `onClick={handleClick}`.
- Forgetting to pass the event object `e` when needed.

### Revision Notes
- camelCase: `onClick`
- Pass function reference, don't invoke it
- `e.preventDefault()` for forms

### Interview Questions
1. What are Synthetic Events?
2. How do you pass arguments to an event handler?
3. Difference between HTML and React event handling?

---

# 7. Conditional Rendering
### Simple Definition
Conditional rendering allows you to render different UI elements based on certain conditions (like `if` statements in JS).

### Syntax
```javascript
{ condition ? <ElementA /> : <ElementB /> }
// OR
{ condition && <ElementA /> }
```

### Important Points
- Use Ternary operator `? :` for if-else logic.
- Use Logical AND `&&` for if-only logic.
- Use `if-else` or `switch` outside the JSX return.

### Short Example
```javascript
function Status({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
    </div>
  );
}
```

### Real Use Case
Showing a loading spinner while data is fetching, or displaying "Logout" vs "Login" buttons.

### Common Mistakes
- Using `0 && <Component />` (it will render `0` on the screen because 0 is falsy but not "nothing").
- Complexity in nested ternaries (hard to read).

### Revision Notes
- `&&` → Show if true
- `? :` → Toggle between two
- `null` → Render nothing

### Interview Questions
1. How to prevent a component from rendering? (Return `null`)
2. Why avoid nested ternaries?
3. Can we use `if-else` inside JSX? (No, only expressions)

---

# 8. Lists & Keys
### Simple Definition
React uses the `map()` function to transform arrays into lists of elements. Keys help React identify which items have changed, been added, or removed.

### Syntax
```javascript
<ul>
  {items.map(item => <li key={item.id}>{item.text}</li>)}
</ul>
```

### Important Points
- **Keys must be unique** among siblings.
- Keys help in **Reconciliation** (efficient updates).
- Avoid using `index` as a key if the list can change (sort/filter/add).

### Short Example
```javascript
const users = [{id: 1, name: 'Ansh'}, {id: 2, name: 'John'}];
return users.map(user => <div key={user.id}>{user.name}</div>);
```

### Real Use Case
Rendering a list of search results, comments, or navigation links.

### Common Mistakes
- Forgetting the `key` prop (causes console warnings and performance issues).
- Using `Math.random()` as a key (causes unnecessary re-renders).

### Revision Notes
- Use `map()` for lists
- Unique `key` is mandatory
- Keys → Performance + Correctness

### Interview Questions
1. Why is `key` important?
2. Why is `index` a bad key?
3. What happens if keys are missing?

---

# 9. Forms & Controlled Components
### Simple Definition
In a controlled component, form data is handled by a React component's state. The "single source of truth" is the React state.

### Syntax
```javascript
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### Important Points
- `value` prop is bound to state.
- `onChange` handler updates the state.
- This allows immediate validation and UI feedback.

### Short Example
```javascript
function MyForm() {
  const [val, setVal] = useState("");
  return <input value={val} onChange={(e) => setVal(e.target.value)} />;
}
```

### Real Use Case
Search bars, login forms, or any input that needs validation as you type.

### Common Mistakes
- Forgetting `onChange` (makes the input read-only).
- Not initializing state (causes "controlled to uncontrolled" warnings).

### Revision Notes
- State → Input Value
- `onChange` → State Update
- Controlled = Predictable

### Interview Questions
1. Controlled vs Uncontrolled components?
2. How to handle multiple inputs in a single `useState`?
3. When to use `useRef` for forms?

---

# 10. useEffect Hook
### Simple Definition
`useEffect` allows you to perform side effects in functional components (e.g., API calls, subscriptions, DOM manipulation). It runs after the render.

### Syntax
```javascript
useEffect(() => {
  // logic here
  return () => { /* cleanup */ };
}, [dependencies]);
```

### Important Points
- **No Dependency Array**: Runs after every render.
- **Empty Array `[]`**: Runs only once (mount).
- **With Dependencies `[id]`**: Runs on mount + whenever `id` changes.
- **Cleanup Function**: Prevents memory leaks (runs before unmount).

### Short Example
```javascript
useEffect(() => {
  console.log("Mounted");
  return () => console.log("Unmounted");
}, []);
```

### Real Use Case
Fetching data from an API when a component loads, setting up a timer, or adding event listeners to the window.

### Common Mistakes
- Forgetting the dependency array (infinite loop if state is updated).
- Not cleaning up timers or subscriptions.

### Revision Notes
- Side Effects handler
- `[]` = Mount only
- `return () => {}` = Cleanup
- Runs AFTER render

### Interview Questions
1. What is the cleanup function for?
2. How to mimic `componentDidUpdate`?
3. Why can't `useEffect` be async? (It must return a cleanup function or nothing)

---

# 11. useRef Hook
### Simple Definition
`useRef` returns a mutable ref object whose `.current` property persists across renders. It does **NOT** trigger a re-render when changed.

### Syntax
```javascript
const myRef = useRef(initialValue);
// Access via myRef.current
```

### Important Points
- Used for accessing DOM elements directly.
- Used for storing values that don't need to be in the UI (like timers IDs).
- Unlike `useState`, updating a ref doesn't cause a re-render.

### Short Example
```javascript
const inputRef = useRef();
const focusInput = () => inputRef.current.focus();

return <input ref={inputRef} />;
```

### Real Use Case
Focusing an input field, integrating with 3rd party DOM libraries (D3, Google Maps), or storing "previous state" values.

### Common Mistakes
- Using `useRef` for things that should be in `useState` (UI won't update).
- Trying to read `ref.current` during the render phase (it's only updated after render).

### Revision Notes
- Persistent value
- No re-render
- DOM access: `ref={myRef}`

### Interview Questions
1. `useRef` vs `useState`?
2. Can you use `useRef` to store previous props?
3. When should you NOT use `useRef`?

---

# 12. useMemo Hook
### Simple Definition
`useMemo` memoizes the **result of a calculation**. It only recalculates when one of its dependencies changes. It is used for performance optimization.

### Syntax
```javascript
const memoizedValue = useMemo(() => expensiveTask(a, b), [a, b]);
```

### Important Points
- Avoids expensive recalculations on every render.
- Returns a **value**.
- Use it sparingly; over-using it can actually hurt performance due to memory overhead.

### Short Example
```javascript
const doubled = useMemo(() => {
  return count * 2;
}, [count]);
```

### Real Use Case
Filtering a large list of data based on a search query.

### Common Mistakes
- Wrapping everything in `useMemo`.
- Forgetting a dependency in the array.

### Revision Notes
- Memoize calculation result
- Returns Value
- Optimization tool

### Interview Questions
1. `useMemo` vs `useCallback`?
2. When is it overkill to use `useMemo`?
3. Does `useMemo` guarantee it won't be recalculated? (No, React might discard it to free memory)

---

# 13. useCallback Hook
### Simple Definition
`useCallback` memoizes a **function definition**. It returns the same function instance between renders unless dependencies change.

### Syntax
```javascript
const memoizedFn = useCallback(() => { doSomething(a); }, [a]);
```

### Important Points
- Prevents child components from re-rendering if they take a function as a prop (when combined with `React.memo`).
- Returns a **function**.

### Short Example
```javascript
const handleClick = useCallback(() => {
  console.log("Clicked", count);
}, [count]);
```

### Real Use Case
Passing a click handler to a memoized child component to prevent unnecessary re-renders of that child.

### Common Mistakes
- Using `useCallback` when the child isn't memoized (useless).
- Closing over stale state (forgetting dependencies).

### Revision Notes
- Memoize function instance
- Returns Function
- Pair with `React.memo`

### Interview Questions
1. Why do we need `useCallback`?
2. What happens if dependency array is empty?
3. `useCallback(fn, [])` vs `fn` defined outside the component?

---

# 14. Custom Hooks
### Simple Definition
Custom hooks are JavaScript functions whose names start with `use` and that can call other hooks. They allow you to extract component logic into reusable functions.

### Syntax
```javascript
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
     const handleResize = () => setWidth(window.innerWidth);
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}
```

### Important Points
- Must start with `use`.
- Can call built-in hooks like `useState`, `useEffect`.
- Shared logic, not shared state. Each component calling a custom hook gets its own local state.

### Real Use Case
Extracting API fetching logic, form handling, or window event listeners.

### Revision Notes
- `useSomething`
- Logic Reusability
- Isolated State

---

# 15. Context API & Prop Drilling
### Simple Definition
Context API provides a way to share data (like themes or user info) between components without having to explicitly pass props through every level (Prop Drilling).

### Syntax
```javascript
const MyContext = createContext();
// Provide: <MyContext.Provider value={data}> ... </MyContext.Provider>
// Consume: const data = useContext(MyContext);
```

### Important Points
- **Prop Drilling**: Passing data through components that don't need it just to reach a deep child.
- Context solves Prop Drilling but can make component reuse harder.
- Best for "Global" data (Theme, Auth, Language).

### Short Example
```javascript
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

### Real Use Case
Managing User Authentication state or App-wide themes (Dark/Light mode).

### Common Mistakes
- Using Context for everything (causes excessive re-renders).
- Forgetting the `.Provider`.

### Revision Notes
- Global State
- No Prop Drilling
- `createContext` + `useContext`

### Interview Questions
1. Context API vs Redux?
2. How to avoid re-renders in Context?
3. What is Prop Drilling?

---

# 16. Lifting State Up
### Simple Definition
When two or more components need to share the same changing data, you "lift" that state up to their closest common ancestor.

### Syntax
- Move `useState` from child to parent.
- Pass state and setter function back down as props.

### Short Example
```javascript
// Parent
const [val, setVal] = useState("");
return (
  <>
    <Input value={val} onChange={setVal} />
    <Display value={val} />
  </>
);
```

### Real Use Case
A temperature calculator where one input is Celsius and another is Fahrenheit; they both need to stay in sync.

### Revision Notes
- Share state between siblings
- Sync components
- "Single source of truth" in parent

---

# 17. React Router (Navigation)
### Simple Definition
React Router is the standard library for routing in React. It enables navigation among views, keeps the UI in sync with the URL, and handles "Single Page Application" (SPA) behavior.

### Syntax
```javascript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

### Important Points
- `Link` or `NavLink` instead of `<a>` (prevents page refresh).
- `useNavigate` for programmatic navigation.
- `useParams` for dynamic URL segments.
- `Outlet` for nested routing.

### Real Use Case
Building a multi-page feel in a React app (Home, Profile, Settings).

### Interview Questions
1. Difference between `Link` and `NavLink`?
2. How to handle 404 pages?
3. How to pass data during navigation?

---

# 18. Dynamic Routing
### Simple Definition
Routing where parts of the URL are dynamic parameters (e.g., product IDs, user profiles).

### Syntax
```javascript
<Route path="/product/:id" element={<ProductDetail />} />
// Inside component
const { id } = useParams();
```

### Revision Notes
- `:id` syntax in path
- `useParams()` hook to read
- Dynamic content fetching

---

# 19. Lazy Loading & Suspense
### Simple Definition
Lazy loading is a technique to defer the loading of components until they are actually needed. `Suspense` allows you to show a fallback UI (like a loader) while the component is loading.

### Syntax
```javascript
const LazyComp = React.lazy(() => import('./LazyComp'));
// Usage
<Suspense fallback={<Loader />}>
  <LazyComp />
</Suspense>
```

### Revision Notes
- `React.lazy` for code splitting
- `Suspense` for fallback UI
- Improves initial load speed

---

# 20. API Calling (Fetch vs Axios)
### Simple Definition
Fetching data from external servers using either the native `fetch` API or the `Axios` library.

### Syntax
```javascript
// Fetch
fetch(url).then(res => res.json()).then(data => ...);

// Axios
axios.get(url).then(res => res.data);
```

### Comparison Table
| Feature | Fetch | Axios |
| :--- | :--- | :--- |
| **JSON** | Manual (`res.json()`) | Automatic |
| **Error Handling** | Only on Network Fail | Any non-2xx status |
| **Interceptors** | No | Yes |
| **Library** | Native | External dependency |

### Revision Notes
- Use `useEffect` for API calls
- Handle loading & error states
- Cleanup abort controllers if needed

---

# 21. CRUD Operations
### Simple Definition
The four basic functions of persistent storage: Create, Read, Update, and Delete.

### Syntax Example (CRUD with Fetch)
- **Create**: `fetch(url, { method: 'POST', body: JSON.stringify(data) })`
- **Read**: `fetch(url)`
- **Update**: `fetch(url, { method: 'PUT', body: ... })`
- **Delete**: `fetch(url, { method: 'DELETE' })`

### Revision Notes
- POST, GET, PUT/PATCH, DELETE
- Sync local state with API response

---

# 22. useReducer Hook
### Simple Definition
An alternative to `useState` for complex state logic. It is similar to how Redux works: you dispatch actions to a reducer function which returns the next state.

### Syntax
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### Important Points
- Use when state logic is complex (multiple sub-values).
- Reducer is a pure function: `(state, action) => newState`.

### Interview Questions
1. `useState` vs `useReducer`?
2. What is an action and a payload?

---

# 23. useTransition Hook
### Simple Definition
A React 18 hook that lets you mark some state updates as "non-urgent" transitions. Urgent updates (like typing) interrupt non-urgent ones (like filtering a list).

### Syntax
```javascript
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setItems(filteredList);
});
```

### Revision Notes
- Non-blocking updates
- `isPending` for loading UI
- Better UX for heavy updates

---

# 24. forwardRef
### Simple Definition
`forwardRef` lets your component expose a DOM node to a parent component using a ref.

### Syntax
```javascript
const MyInput = forwardRef((props, ref) => (
  <input {...props} ref={ref} />
));
```

### Revision Notes
- Pass ref through components
- Useful for focus/scroll control from parent

---

# 25. Higher Order Components (HOC)
### Simple Definition
A pattern where a function takes a component and returns a new component with added functionality.

### Syntax
```javascript
const withLogger = (Component) => (props) => {
  console.log("Rendering...");
  return <Component {...props} />;
};
```

### Revision Notes
- Component → Component
- Code reuse
- Legacy but still used in libraries

---

# 26. React.memo
### Simple Definition
A Higher Order Component that wraps a functional component to memoize it. If the props haven't changed, React skips the re-render.

### Syntax
```javascript
export default React.memo(MyComponent);
```

### Revision Notes
- Prop-based memoization
- Prevents unnecessary child renders

---

# 27. Error Boundaries
### Simple Definition
Class components that catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of crashing the whole app.

### Syntax
```javascript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) { ... }
  render() { return this.state.hasError ? <Fallback /> : this.props.children; }
}
```

### Revision Notes
- Catch errors in children
- **Class components ONLY** (for now)
- Use libraries like `react-error-boundary`

---

# 28. Folder Structure (Best Practice)
### Standard Layout
- `src/components/`: Reusable small UI pieces.
- `src/pages/`: Full views (Home, About).
- `src/hooks/`: Custom hooks.
- `src/context/`: Context providers.
- `src/services/`: API calls/axios config.
- `src/utils/`: Helper functions.

---

# 29. Performance Optimization
### Key Concepts Table
| Technique | Description |
| :--- | :--- |
| **React.memo** | Prevents component re-render if props haven't changed. |
| **useMemo** | Memoizes expensive calculation results. |
| **useCallback** | Memoizes function definitions. |
| **Lazy Loading** | Loads code only when needed. |
| **Virtual DOM** | Minimizes actual DOM manipulation. |

---

# 30. React Lifecycle (Functional)
### Phases
1. **Mounting**: `useEffect(() => {}, [])`
2. **Updating**: `useEffect(() => {}, [deps])`
3. **Unmounting**: `useEffect(() => { return () => {} }, [])`

---

# 31. Virtual DOM & Reconciliation
### Simple Definition
- **Virtual DOM**: A lightweight copy of the real DOM kept in memory.
- **Reconciliation**: The process React uses to diff the Virtual DOM and update only changed parts.

---

# 32. Redux Basics (Short)
### Core Concepts
- **Store**: Single source of truth.
- **Action**: Object describing what happened `{type: 'ADD'}`.
- **Reducer**: Function that calculates new state based on action.
- **Dispatch**: Sending action to the store.

---

# Interview Rapid Revision Section
- **What is React?** A JS library for building user interfaces.
- **Declarative vs Imperative?** React is declarative (What you want) vs Imperative (How to do it).
- **Single Page App (SPA)?** Only one HTML page is loaded, JS updates the view dynamically.
- **Strict Mode?** Tool for highlighting potential problems in the app (renders twice in dev).
- **Fragments?** `<> </>` to group elements without adding extra DOM nodes.

---

# React Quick Revision Cheatsheet

### Hook Differences
- `useState`: Simple state.
- `useReducer`: Complex state.
- `useEffect`: After render logic.
- `useLayoutEffect`: Before paint logic (rarely used).

### Frequently Confused
- **Props vs State**: Props = External inputs, State = Internal memory.
- **useMemo vs useCallback**: useMemo = Value, useCallback = Function.

### Common Errors & Fixes
- **"Too many re-renders"**: Move setter out of the render cycle.
- **"Hook called conditionally"**: Move hooks to the top level.

---
**Happy Revision! 🚀**
