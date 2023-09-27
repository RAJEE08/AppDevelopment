// import { createStore,applyMiddleware } from "redux";
// import rootReducer from "./reducers/rootReducer";
// import thunk from "redux-thunk";
// const middleware=[thunk];


// // let store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// let store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(...middleware) // Apply middleware here
//   );

// export default store

// Import necessary Redux functions and middleware
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer"; // Import your root reducer
import thunk from "redux-thunk";
const middleware = [thunk];

// Use Redux DevTools Extension to enhance debugging (if available)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store by passing the rootReducer and middleware
const store = createStore(
  rootReducer, // The root reducer that combines all other reducers
  composeEnhancers(applyMiddleware(...middleware)) // Apply middleware and DevTools extension enhancer
);

// Export the configured Redux store
export default store;