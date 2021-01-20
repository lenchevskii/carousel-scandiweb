*... currently in progress*

---

### Scandiweb Test Task (**[full text one's](https://github.com/lenchevskii/visualworm/blob/main/TASK.md)**)

  **To-do list:**

- [x] Manually configure the environment (Webpack, React)
- [x] Create a carousel component:
  - [x] Mobile
  - [x] Desktop
  - [x] Swipes
    - [x] Desktop infinite option
    - [ ] Mobile infinite option
  - [x] Work with any HTML content
  - [x] Animated
- [ ] Multi-picture referenced post usage ability
  - [x] Server side
    - [x] Tests (extra-task option)
  - [ ] Client side
    - [ ] Popup windows with desired apply
    - [ ] Interection interface
- [x] Demonstrate component in [action](https://lenchevskii.github.io/visualworm/)
- [x] Make the application' setup explanation
- [x] Keyboard accessibility (extra-task option)
- [ ] Connect client side with server side
- [ ] Deploy server side

**App usage:**

Clone a repository:

  ```bash
  git clone https://github.com/lenchevskii/visualworm.git
  ```

Install actual node packages:

  ```bash
  npm ci
  ```

Run script to build client side via Webpack bundler:

  ```bash
  npm run build
  ```

Because of using a bundler, the client deploy environment has to have only JS engine to run the project.

The client\`s build stored at the `/bundle` directory.

Simplified client deploy was implement through the **GitHub Pages** - [Visual Worm](https://lenchevskii.github.io/visualworm/).


**Developing scripts:**

Develop client under `webpack`:

  ```bash
  npm run client
  ```

Listen server via `nodemon`:

  ```bash
  npm run server
  ```

Test server via `jest`:

  ```bash
  npm run test
  ```

To use server side it is necessary to create the `.env` file with own configuration (`PORT`, `PASSWD`, .. etc. ).

The following tips can simplify developer's hard life:

- `jq` utility for terminal pretty print JSON

  ```bash
  curl -s http://localhost:3001/instagram.worm | jq .
  ```

- `focus-visible` [polyfill](https://github.com/WICG/focus-visible) allow to use **focus-visiable** pseudo-selector properties in any browser

---

*PS:*

*Carousel component was inspired by [this](https://www.youtube.com/watch?v=Tdpq-9XYoNM) video. The aimed component was rewritten by dint of **`useReducer()`** (instead of **`useState()`**), which allows troubleless working with complex logic inside the state in the future.*
