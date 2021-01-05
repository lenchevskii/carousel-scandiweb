*... currently in progress*

---

# Scandiweb Test Task (**[full text one's](https://github.com/lenchevskii/scanditask/blob/main/TASK.md)**)

  **ToDo:**

- [x] Manually configure the environment (Webpack, React)
- [x] Create a carousel component:
  - [x] Mobile
  - [x] Desktop
    - [x] Keyboard accessibility (additional option)
  - [x] Swipes
    - [x] Desktop infinite option
    - [ ] Mobile infinite option
  - [x] Work with any HTML content
  - [x] Animated
- [ ] Multi-picture referenced post usage ability
  - [x] Server side
  - [ ] Client side
- [x] Demonstrate component in [action](https://lenchevskii.github.io/scanditask/)
- [x] Make the application' setup explanation

**App usage:**

Clone a repository:

  ```bash
  git clone https://github.com/lenchevskii/scanditask.git
  ```

Install actual node packages:

  ```bash
  npm ci
  ```

Run script to build a project via Webpack bundler:

  ```bash
  npm run build
  ```

Because of using a bundler, the client deploy environment has to have only JS engine to run the project.

The client build's stored at the `/bundle` directory.

Simple client deploy was implement through the **GitHub Pages**.

---

## Deployed application: [Scanditask](https://lenchevskii.github.io/scanditask/)

---

*PS:*

*Client side was inspired by [this](https://www.youtube.com/watch?v=Tdpq-9XYoNM) video. The aimed component was rewritten by dint of **`useReducer()`** (instead of **`useState()`**), which allows troubleless working with complex logic inside the state.*
