# roll-number
Changes provided elements numbers in half a second with as many iterations as possible to look like an animation of rolling numbers.

## usage
Create a new instance of rollNumber, for each element you want to animate, either providing a formating function or not.
```
var roller = new rollNumber();
```

```
var roundFunction = function(number) { return Math.floor(number); };
var roller = new rollNumber(roundFunction);
```
If no formatting function is provided it will not round leaving trailing commas.

For rolling initiation use
```
roller.addToQueue(element, startAmount, endAmount);
```

For example
```
roller.addToQueue(document.getElementById('rollElement'), 0, 1000);
```
Will animate the html of #rollElement from 0 to 1000.
Rolling can also be used for decreasing
```
roller.addToQueue(document.getElementById('rollElement'), 1000, 0);
```
This animates from 1000 to 0.

Also accepts jQuery elements, if an array of targets is provided will pick the first element.

Queue is processed synchronously, meaning it will wait for the last one to complete if there is another call.
