1. What problem does the context API help solve?

The Context API solves the problem of application level state management in a much simpler, more intuitive way than Redux. It also allows you to do this without installing more dependencies than necessary.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

a) Actions are basically user events that describe what should happen to the state.
b) Reducers are functions that take in an action type + state & return new state, without mutating the previous state.
c) The store is a module that contains the initial state & reducers.

The store is known as the single source of truth because it is the central 'data processing' module that never mutates the state. It can always be trusted.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the global state that is used by multiple components. Component state is just the state that is taken in and used by a single component. Component level state is much simpler.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a middleware that allows you to call an 'action-creator', which returns a function, rather than a state object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer the Context API because it is much easier to understand, and does not require the installation of more dependencies.
