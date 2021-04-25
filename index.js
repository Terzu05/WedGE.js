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
    loop() //run for the first time
    function loop()
    {
      wedge.rect(0, 0, wedge.canvas.width, wedge.canvas.height, '#2e2e2e') //background
      function updateObject(i, name = 'wedgeObject', transform, sprite = 'rectangle', color = 'white', physics) {

        //PHYSICS

        if(physics.isFriction)
        {
          if(physics.velocity.x != 0) physics.velocity.x -= physics.friction;

          if(physics.velocity.y != 0) physics.velocity.y -= physics.friction;

          if(physics.velocity.x < physics.friction && physics.velocity.x > -physics.friction) physics.velocity.x = 0;

          if(physics.velocity.x < physics.friction && physics.velocity.x > -physics.friction) physics.velocity.y = 0;
        }

        //ADDING VELOCITY TO POSITION
        
        transform.position.x += physics.velocity.x
        transform.position.y += physics.velocity.y

        //UPDATING TRANSFORM AND PHYSICS

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

      function collUpdate(j, collider, tran)
      {
        collider.collides = false;
        collider.collidesWith = [];
        for (var i = 0; i < wedge.objects.length; i++) {
          if(i != j)
          {
            var obj = wedge.objects[i];

            if(obj.physics.collider.works)
            {

              if(tran.position.x < obj.transform.position.x + obj.transform.size.x && tran.position.x + tran.size.x > obj.transform.position.x && tran.position.y < obj.transform.position.y + obj.transform.size.y && tran.position.y + tran.size.y > obj.transform.position.y)
              {
                collider.collides = true;

                collider.collidesWith[collider.collidesWith.length] = wedge.objects[i]
                
                //console.log(wedge.objects[j].name + ' is colliding with ' + wedge.objects[i].name + ' on bouth other axis')

                //console.log('\n\n\n ' + wedge.objects[j].name)
                //console.log(collider.collidesWith)
              }

            }
            //console.log('\n\n\n ' + wedge.objects[j].name)
            //console.log(collider.collides)

            wedge.objects[j].physics.collider = collider
          }
        }
        //wedge.objects[j].physics = physics
      }

      //GO THROUGH OBJECTS AND UPDATE THEM
      for (i = 0; i < wedge.objects.length; i++) {
        var obj = wedge.objects[i];
        updateObject(i, obj.name, obj.transform, obj.sprite, obj.color, obj.physics);
        if(obj.physics.collider.works)
        {
          collUpdate(i, obj.physics.collider, obj.transform);
        }
      }

      
      inLoop();   //user input
      requestAnimationFrame(loop); //repeat next frame
    }
  },

  log : function(message = "I'm working.")
  {
    var logMessage = "WedGE: " + message
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
      this.sprite = sprite;
      this.color = color;
      //transform
      var pos = {x:posX, y:posY};
      var sz = {x:width, y:height}
      this.transform = {position:pos, size:sz}
      //physics
      var velocity = {x:0, y:0};
      var isFriction = false;
      var friction = 0.001;
      //colider
      var collWorks = false;
      var collType = 'rectangle';
      var collWidth = this.transform.size.x;
      var collHeight = this.transform.size.y;
      var collides = 'false';
      var collidesWith = [];
      var collider = {works:collWorks, type:collType, width:collWidth, height:collHeight, collides:collides, collidesWith:collidesWith};

      this.physics = {velocity, isFriction, friction, collider};

      switch (this.sprite){
        case 'rectangle':
          wedge.rect(this.transform.position.x, this.transform.position.y, this.transform.size.x = width, this.transform.size.y = height, this.color)
        break
        default:
          console.log('there is not a sprite named: ' + this.sprite);
      }

      wedge.objects[wedge.objects.length] = this;
      
    }
  },
  
};