# personal-site

Code for my [website](https://ulan13.me) 🌐

#### deploy in firebase:

- **Steps**
- `firebase deploy` (make sure you have firebase.json)
- `choose build as public directory`
- `prevent from overwriting index.html`

#### Issues

- When upgrading to react-scripts v5. Getting an error: **BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by defaul.** https://github.com/diegomura/react-pdf/issues/1670
- VM171:2 Uncaught ReferenceError: process is not defined inside `Blog.jsx` file because of require i use.
