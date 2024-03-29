class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }

    
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        push();


        if(pointA.x<100){
        strokeWeight(4);
        stroke(0,0,0);
        line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-25,pointA.y,pointB.x+30,pointB.y-3);
        }else{
            strokeWeight(7);
            stroke(0,0,0);
            line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-25,pointA.y,pointB.x+30,pointB.y-3);
        }
       pop();
    }

}
    }