# Learning Outcomes

1. <code>console.table()</code> displays information as table. This's great!!

2. <code>Array.filter()</code> creates a new array with all elements that pass the 'filter'.

3. <code>Array.map()</code> takes a callback function and returns a new array with elements that have been modified by the function.

4. The difference between <code>filter()</code> and <code>map()</code> is that filter function 'filters out' the elements you want, while map function acts like a manufacturing that takes input elements from array and return elements you want it to be.

5. <code>Array.sort()</code> sorts array elements in place and return sorted array. The default sort pattern will convert all elements of an array to <code>strings</code> and sorting in ascending order.
   If <code>compareFunction</code> is supplied, sorting order is according to compare function's return value.
   <code>compareFunction(a, b)</code>, when return value is > 0, sort b before a. when return value is <= 0, it will keep a and b in the same order.

Notes: <code>sort()</code> method won't create new array.

6. <code>Array.reduce()</code> takes a callback function. the return value is assigned to the accumulator, whose value is recorded across each loop. the fianl will be returned when iteration is done.

7. <code>Array.includes()</code> checks if array elements have certain values, return true or false as appropriate.

8. Ternary operator is the shortcut for <code>if</code> statement. syntax is beautiful: <code>condition ? ifTrue : ifFalse</code>.

9. Destructruing assignment syntax is beautiful as well. It's able to unpack values from arrays, or properties from objects, into distinct variables. <code>const[a, b] = arr/obj</code>

10. <code>Str.split()</code> divides a <code>string</code> into substrings and put it into an array.

11. For exercise 8, <code>accumulator</code> of <code>reduce()</code> can be other data type such as object.

12. God this is really a great exercise for js beginners.
