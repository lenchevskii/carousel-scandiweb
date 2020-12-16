# Scandiweb Test Task (**[full text one's](https://github.com/lenchevskii/scanditask/blob/main/TASK.md)**)

  **Pipe:**

- [x] Manually configure the environment (Webpack, React)
- [ ] Create a carousel component:
  - [ ] Mobile + Desktop
  - [ ] Swipes
  - [x] Work with any HTML content
  - [x] Animated
  - [x] Multi-picture referenced post usage ability
- [x] Demonstrate component in [action](https://lenchevskii.github.io/scanditask/)
- [ ] Make the application' setup explanation

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

Because of using a bundler, the deploy environment has to have only JS engine and two packages to run the project.

Simple application deploy was implement through the **GitHub Pages**.

---

## Deployed application: [Scanditask](https://lenchevskii.github.io/scanditask/)

---

*PS:*

*I was inspired by [this](https://www.youtube.com/watch?v=Tdpq-9XYoNM) video. But the aimed component was rewritten by dint of **`useReducer()`** (instead of **`useState()`**), which allows troubleless working with complex logic inside the state.*
