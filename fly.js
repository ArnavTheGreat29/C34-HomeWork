class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
          //  stiffness: 0.004,
            length: 200
        }
      
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    attach(body){
        this.body.bodyA = body;
    }
    
    fly(){
        this.body.bodyA = null;
    }

    display(){
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y)
       
    }
    
}