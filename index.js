var wedge = {
  ctx : '',   //canvas context
  canvas : '',
  objects : [],   //number of wedge objects

  setup : function()
  {
    var canvas = document.getElementById('gameCanvas')
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
  },
  
  update : function(inLoop = function inLoop(){})
  {
    loop()
    function loop()
    {

      wedge.rect(0, 0, wedge.canvas.width, wedge.canvas.height, '#2e2e2e')
      
      function updateObject(i, name = 'wedgeObject', transform, sprite = 'rectangle', color = 'white', physics) {

        // PHYSICS

        if(physics.isFriction)
        {
          if(physics.velocity.x != 0)
          {
            physics.velocity.x -= physics.friction;
          }

          if(physics.velocity.y != 0)
          {
            physics.velocity.y -= physics.friction;
          }

          if(physics.velocity.x < physics.friction && physics.velocity.x > -physics.friction)
          {
            physics.velocity.x = 0;
          }

          if(physics.velocity.x < physics.friction && physics.velocity.x > -physics.friction)
          {
            physics.velocity.y = 0;
          }
        }

        transform.position.x += physics.velocity.x
        transform.position.y += physics.velocity.y

        //console.log(wedge.objects[i].physics.velocity.x + '\n' + physics.velocity.x + '\n \n \n')

        wedge.objects[i].physics = physics
        wedge.objects[i].transform = transform
        

        // RENDER
        switch (sprite){
          case 'rectangle':
            wedge.rect(transform.position.x, transform.position.y, transform.size.x, transform.size.y, color)
          break
          default:
            console.log('there is not a sprite named: ' + this.sprite);
        }

      }

      for (i = 0; i < wedge.objects.length; i++) {
        var obj = wedge.objects[i]
        updateObject(i, obj.name, obj.transform, obj.sprite, obj.color, obj.physics)
      }

      
      inLoop();   //user input
      requestAnimationFrame(loop);
    }
  },

  log : function(option = "I'm working")
  {
    var logMessage = "WedGE: " + option
    console.log(logMessage);
    document.getElementById('wedgeDebug').innerHTML = logMessage
  },

  rect : function(posX = 0, posY = 0, width = 100, height = 100, color = 'white')
  {
    this.ctx.fillStyle = color
    this.ctx.fillRect(posX, posY, width, height)
  },

  object : class{
    constructor(name = 'wedgeObject', posX = 0, posY = 0, width = 100, height = 100, sprite = 'rectangle', color = 'white') {
      this.name = name;
      var pos = {x:posX, y:posY};
      var sz = {x:width, y:height}
      this.transform = {position:pos, size:sz}
      this.sprite = sprite;
      this.color = color;
      var velocity = {x:0, y:0};
      var isFriction = false;
      var friction = 0.001;
      this.physics = {velocity, isFriction, friction};
      

      switch (this.sprite){
        case 'rectangle':
          wedge.rect(this.transform.position.x, this.transform.position.y, this.transform.size.x = width, this.transform.size.y = height, this.color)
        break
        default:
          console.log('there is not a sprite named: ' + this.sprite);
      }

      wedge.objects[wedge.objects.length] = this;
      
    }

    move() {
      console.log(this.name + ' is moving')
    }
  },

  test : function()
  {
    for(obj in wedge.objects){
      console.log(obj)
    }
  },
  
};