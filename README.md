# Music Player

<img src="./screenshot.png" width="400"/>

React JS + Vite app from the youtube video :

- [Yt Pedrotech channel](https://www.youtube.com/@PedroTechnologies)
- [Build 3 React Projects in 4 Hours | ReactJS Course For Beginners](https://www.youtube.com/watch?v=r47C9c4qCqE)

Obs: This is the second app

## Topics

<ul>
<li>Hooks (useState,useEffect)
<li>Custom contexts (MainContext)
<li>Components
<li>Context
<li>LocalStorage
<li>Web Audio API (browser)
</ul>

## Further research

Issue 1:
Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.eslint(react-refresh/only-export-components)

File contexts/File MainContext.jsx

```
const useMusic: () => any
```

Solution:
Solved separating files inside the folder contexts

Issue 2:
Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:

- Update external systems with the latest state from React.

- Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).

Solution:
Instead of fetching the data in an effect after the first render, you should pass a function directly into useState. React will run this function exactly once before the initial render, meaning no extra renders and no warnings
