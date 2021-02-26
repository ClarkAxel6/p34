class Ball{
    constructor(x, y, radius){
        var options = {
            density: 1,
            restitution: 0.8,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage('/images/Superhero-01.png');
        this.radius = radius;
        World.add(world, this.body); 
    }

    display(){
        imageMode(CENTER);
        
        image(this.image, this.body.position.x, this.body.position.y, this.radius * 2, this.radius);
    }
}