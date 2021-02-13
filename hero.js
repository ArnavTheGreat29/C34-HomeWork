class Hero{

    constructor(x,y){
    var options = {
        isStatic: false
    }
    this.body = Bodies.circle(x,y,25,options)
    this.image = loadImage("images/Superhero-02.png"); 
    World.add(world,this.body)

    }

    display(){
        //circle(this.body.position.x,this.body.position.y,50)
        image(this.image,this.body.position.x,this.body.position.y,100,100)

    }
}