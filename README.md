# What is this?

WedGE.js is Web Game Engine
That means you can use it to make games in web app in front-end javascript. (You don/t need to use it for games but thats the main purpous.)

# How to setup WedGE.js?

## HTLM file

You can import WedGE into your html app with `<script src="https://gameengine.petrprudil.repl.co/wedge.js"></script>` line. (make sure that this line is placed before `<script src="script.js"></script>` (or other scripts that you want to use WedGE in).)
Then you need to add `<canvas id="gameCanvas"></canvas>` tag (Don't fergot to ad the `id="gameCanvas"` part, it won't work without it.)

Afthe that your html file should look somewhat like this:
```html
<!DOCTYPE html>
<html>
  <head>

    <script src="https://gameengine.petrprudil.repl.co/wedge.js"></script>

  </head>
  <body>

    <canvas height="600" width="600" id="gameCanvas"></canvas>
    <script src="script.js"></script>

  </body>
</html>
```

## JasvaScript file

Type `wedge.setup()` in your script, this will setup wedge and link it to your game canvas. Then if you'd want to make your WedGE ojects move, you will need to use `wedge.update()` this function updates all WedGE objects every frame. (More about those functions later.)

```javascript
wedge.setup()

wedge.update(function() {

  //Your WedGE code that will run every frame.

})
```

afther this you can use WedGE.js in your web application. 
If you don't know how to use Wedge functions look at the tutorial below

# How to use WedGE.js?

## WedGE objects

WedGE.js works with WedGE objects. They are special objects whitch are the core of WedGE.js

### WedGE object properties

>1. name - (string) 
>2. transform - (object)
>  a) position - (object)
>    -x - (number)
>    -y - (number)
>  b) size - (object)
>    -x - (number)
>    -y - (number)
>3. sprite - (string) (ex.: 'rectangle') (there is only rectangle available now)
>4. color - (string) (ex.: 'white', '#ffffff')
>5. physics - (object)
>  a) velocity - (object)
>    -x - (number)
>    -y - (number)
>  b) isFriction - (boolean)
>  c) friction - (number)

### WedGE object methods

.move() it just consollogs name of the object is moving. That's it. (There will by functionality eventually, I swear.)

### Creating a WedGE object

You create WedGE object same way as you would a normal object, but from `wedge.objecr()` class. Ex.: `var object = new wedge.object()` (you don't need to name it 'object')
When creating WedGE object you can input it some parameters.
```javascript
var object = new wedge.object(name, posX, posY, width, height, sprite, color)

//ex.:
var object = new wedge.object('John', 120, 90, 100, 47, 'rectangle', 'white')
```
You can change these (or other) parameters any time in your code simply by typing
```javascript
//name of your object.value that you want to change = new value;

//ex.:
object.transform.position.x = 100;
```

Example code:
```javascript
wedge.setup()

var object = new wedge.object('mikel', 0, 0, 100, 100, 'rectangle', 'white')

object.transform.position.x = 100;

wedge.update()

console.log(object);
```

Example output:

![Example output image](exampleOutput.png)

Example console output:
```javascript
object
{ 
  name: 'mike',
  transform: 
  { 
    position: { x: 100, y: 0 }, 
    size: { x: 100, y: 100 } 
  },
  sprite: 'rectangle',
  color: 'white',
  physics: 
  { 
    velocity: 
    { 
      x: 0, 
      y: 0 
    }, 
    isFriction: false, 
    friction: 0.001 
  }
}
```

## Update function

### Why dont just use while(true)

Firstly thats just a bad idea.
Secondly evan if you don't need to repeat any code. This function will update every WedGE object automaticly and without it your object will not move and work properly.

### How to use it?

```javascript
wedge.update(function() {

  //code that will run every frame

})
```

it's that simple

## Log function

### When to use it?

You can use it if you want to know if WedGE works properly. Or you want to log something in your game code and distinguish it from normal log messages.

### How to use it?

```
wedge.log(message)
//message is optional (message = "I'm working.") <<< default
```

Example:
```javascript
wedge.log()

wedge.log('How are you?')
```

Example console output:
```
WedGE: I'm working.
WedGE: How are you?
```

# The End.

Web
e
d
Game
Engine

Your Doo Studio

Terzu