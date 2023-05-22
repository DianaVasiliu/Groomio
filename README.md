# Groomio

## Resources

1. [NativeBase](https://docs.nativebase.io/?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_3)
2. [Icons](https://icons.expo.fyi/)
3. [Expo docs](https://docs.expo.dev/)
4. [Figma Prototype](https://www.figma.com/file/LdgjbDda9rPAHgV6AFwLQo/Pet-caring-app?type=design&node-id=0-1&t=2M2Xj0WKJro53Z1i-0)
5. [Firebase Project](https://console.firebase.google.com/u/0/project/groomio-36697/overview)
6. [Trello board](https://trello.com/b/dakdZwvB/groomio)

## 🙍‍♂️ Contributing

```
git clone https://github.com/DianaVasiliu/Groomio.git
```

You must install the NPM dependencies before running the project:

```
cd Groomio
npm install
```

Create a new file named `secrets.js` in `/src` and add your Firebase configuration.

To run the project:

```
npx expo start
```

❗ Please make new branches for your features.

## 💻 Code linting

To use the linter, run

```
npm run lint:fix
```

## ⁉ How does Redux work?

Redux is divied in two parts: `actions` and `reducers`.

The `actions` are responsible with database interaction, while the `reducers` are just updating the app's global state.

In an `action`, you will find calls of functions that interact with Firebase and a `dispatch` call, that triggers the `reducer`. In a `reducer`, you can find the implementation of the global state's update.

### How to add a new Redux flow

1. Add a new type in `/src/redux/types.js`. These are plain objects that help the reducer identify the action.
2. Create a new file in `/src/redux/reducers/` and copy-paste a reducer from another file.
3. Rename this reducer and update the `initialState` with the fields you want to store.
4. For each `case` statement, return the new state you want
    - you must populate every field that you find in the `initialState`
    - if you want to update only one field (or update the state partially), you can use `{ ...state, newField: newVal }`.
    - you can do this later, after you know how your data looks like
5. Add your new reducer in `/src/redux/reducers/index.js`.
6. Create a new file in `/src/redux/actions/`. Here, you will write all your `actions` for a specific entity. These actions will:
    - call a function that interacts with Firebase (you will implement this)
    - call `dispatch` to trigger the `reducer`. The `dispatch` function MUST HAVE a `type` field (which is defined by you at step 1) and CAN HAVE a `payload` field. The `type` field is necessary for identifying which `case` statement to choose from the reducer.
7. Write your Firebase functions in a new file that you create in `/src/firebase`. See the Firebase V9 docs to learn about their API.
8. You can now call your Firebase function in the action written before.
9. Go to your component where you want to call your `action`.
10. At the bottom of the file, create `mapStateToProps` (this will take your state variables and make them available through props) and `mapDispatchToProps` (this will take your `actions` and make them available through props).
11. Use `connect` when exporting the component (see example in another file).
12. Now you can use the variables as props (either state variables or `actions`).

Please be careful when naming your functions in the `mapDispatchToProps`. If you name them the same as the `action` you import, you might get an infinite recursive call. To avoid this, just name the function something different.

### So how does Redux work?

1. It connects the component to the state using the `connect` function.
2. Then, you call the function that you create in the `mapDispatchToProps`.
3. That function calls the `action` that you tell it to call.
4. The `action` calls the Firebase function that does all the work with the database.
5. Then, the action calls `dispatch` to trigger the `reducer`.
6. The `reducer` serches for the `type` you are providing as parameter and, when it finds it, it updates the state.
