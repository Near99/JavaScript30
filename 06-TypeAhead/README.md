# Learning Outcome

1. <code>fetch</code> usage, it returns a promise, so does the first <code>.then()</code>.

2. Can use <code>new RegExp()</code> to create new regexp object and pass variables in.

# Confusion part

- The code below works as expected when typing in the input field.

```js
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  console.log(matchArray);
}
```

- But when I try this in the global, it returns an empty array.
- Have no idea why.

```js
const matchArray = findMatches("keyword", cities);
console.log(matchArray);
```

# A few minutes later

- I think it has something to do with promise...
- The value isn't returned yet hence the empty array comes
- But I still don't understand why it works typing directly in the chrome console like this:

```js
findMatches("keyword", cities);
```
