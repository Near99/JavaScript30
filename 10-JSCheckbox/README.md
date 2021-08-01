# Learning Outcome

I can't say how much I appreciate this free course, it's even better than one of the paid courses on Udemy.

I am gonna tease out the whole logic behind this little but amazing exercise to give myself a better understand of it.

# Mind behing the code

1. First to get all the <code>input</code> elements. I include this line of code because I would usually to add class to each <code>input</code> elements. But it's able to use <code>querySelector</code> in this way that I didn't know before XD. It's much cleaner.

```js
const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
```

2. Define <code>lastCheck</code> variable and initalize it to <code>undefined</code> which will be used later.

```js
let lastCheck;
```

2. Iterate <code>input</code> elements using <code>forEach</code>. What I learned from here is <code>'click'</code> also has <code>shiftKey</code> property. It's really handy as Wes mentioned.

```js
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", handleCheck);
});
```

3. Then the big part <code>handleCheck()</code> function. First thing to do it's to set <code>lastCheck</code> to the checkbox element that is clicked.

```js
function handleCheck(e) {
  lastCheck = this;
}
```

4. If another element is clicked with <code>shift</code> key down, iterate all <code>input</code> elements again.

```js
function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    checkBoxes.forEach((checkBox) => {
      // Todo
    });
  }
  lastCheck = this;
}
```

5. The logic inside of second loop of <code>input</code> elements is to give the last two clicked checkbox a tag. That's why <code>lastCheck</code> being declared in the first place. Don't brother to define another variable for the second clicked <code>input</code> because we use <code>this</code>.

```js
if (checkBox === lastCheck || checkBox === this) {
  // Todo
}
```

6. After the last two times clicked checkbox being identified, a handller is needed to control the checkboxes that have to be checked between last two clicked checkboxes XD.

```js
let isBetween = false;
```

7. When the <code>if</code> statement is satisfied, set the <code>isBetween</code> to true.

```js
if (checkBox === lastCheck || checkBox === this) {
  isBetween = !isBetween;
}
```

8. If <code>isBetween</code> is truthly, check the checkbox(es). The code looks like this:

```js
function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkBoxes.forEach((checkBox) => {
      if (checkBox === lastCheck || checkBox === this) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkBox.checked = true;
      }
    });
  }
  lastCheck = this;
}
```

# What Happends Actually?

1. When we first click one checkbox for example the second box is checked:

- [ ] This is an inbox laytou.
- [x] Check one item
- [ ] Hold down your Shift key
- [ ] Everthing in between should also be set to checked
- [ ] Try to do it without any libraries
- [ ] Just regular JavaScript
- [ ] Good Luck!
- [ ] Don't forget to tweet your result!

2. <code>'click'</code> event is fired and handleCheck is called. Because we didn't press <code>Shift</code> key. <code>if</code> statement is not satisfied, it is then being skipped. Therefore <code>lastCheck</code> is set to the second checkbox

```js
lastCheck = <secondCheckBox>
```

3. Then we click fifth checkbox with <code>Shift</code> key pressed down

- [ ] This is an inbox laytou.
- [x] Check one item
- [ ] Hold down your Shift key
- [ ] Everthing in between should also be set to checked
- [x] Try to do it without any libraries
- [ ] Just regular JavaScript
- [ ] Good Luck!
- [ ] Don't forget to tweet your result!

4. <code>if (e.shiftKey && this.checked)</code> is satisfied after second click. Then the loop begins.

5. When it goes to the second checkbox, <code>if (checkBox === lastCheck || checkBox === this)</code> is triggered, and <code>isBetween</code> is set to <code>true</code>.

6. After that, <code>if (inBetween)</code> is fired as well. Thus the third and fourth checkboxes are checked.

- [ ] This is an inbox laytou.
- [x] Check one item
- [x] Hold down your Shift key
- [x] Everthing in between should also be set to checked
- [x] Try to do it without any libraries
- [ ] Just regular JavaScript
- [ ] Good Luck!
- [ ] Don't forget to tweet your result

7. When the loop goes to the fifth checkbox, <code>if (checkBox === lastCheck || checkBox === this)</code> is satisfied again by <code>checkbox === this</code>, which sets <code>isBetween</code> to <code>false</code>. The loop continues, but none of checkboxes will be checked from then on.
