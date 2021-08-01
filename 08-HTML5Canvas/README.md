# Learning Outcome

- HTML5 <code>canvas</code> element is an API used to draw graphs.

```html
<canvas id="draw"></canvas>
```

- <code>getContext()</code> method gets <code>canvas</code> element's context which the drawing will be rendered. It takes one parameter that specifies the type of context.

- The actualy drawing is done using <code>CanvasRenderingContext2D</code> interface. Specify <code>"2d"</code> to use it.

```js
const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d')';
```

- Default size of the canvas is 300px \* 150px. <code>height</code> and <code>width</code> can be used to customize sizes.

```js
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

- Insert the alternate content inside <code>canvas</code> to provide fallback

```html
<canvas id="draw">
  <p>Fallback element</p>
</canvas>
```

- Seems like a really cool API. All methods used can be found on MDN.
- JavaScript part is about to use <code>mouse[move, down, out]</code> events to get coordinates and control the flow of drawing.
- Wes's code is easy to read and understand. Nothing too hard to follow up.
