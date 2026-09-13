# Dev Stack

Dev Stack is a beginner-friendly React + Vite project that helps users explore modern web development technologies and build a personalized stack.

## Technologies Used
- React
- Vite
- JavaScript
- React Toastify

## Main Features
1. Explore a curated list of frontend, backend, database, styling, devops, and tool technologies.
2. Add technologies to a personal "Your Stack" section and remove them individually or all at once.
3. View responsive sections including a sticky navbar, hero area, technology cards, and footer.

## React Questions and Answers

1. What is JSX, and why is it used in React?
   - JSX is a way to write HTML-like code inside JavaScript. It makes React code easier to read and helps us build UI in a simple way.

2. What is the difference between props and state?
   - Props are data passed from a parent component to a child component. State is data stored inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?
   - useState lets a component keep and update data. In this project, I used it in Navbar.jsx to control the mobile menu open/close state, and in App.jsx to store the selected technologies list.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   - useEffect runs code after a component renders, which is useful for loading data from an API or JSON file. I used it in App.jsx to fetch technologies.json when the app starts.

5. Why does every item in a .map() list need a unique key prop?
   - React uses the key to keep track of each item in the list. It helps React update the list correctly and avoids errors when items are added, removed, or reordered.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
   - Conditional rendering means showing different content based on a condition. In this project, the empty stack message is shown only when the stack array is empty, such as in TechnologyList.jsx.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   - A parent passes data to a child with props, like technology={technology}. A child sends data back by calling a function passed from the parent, such as onAddTechnology or onRemoveTechnology.
