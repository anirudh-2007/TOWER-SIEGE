class balle{
    constructor(x, y, width, height) {
        var options = {
                 isStatic:false  
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("polygon.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
     
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(2);
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
        pop();
      }
}
