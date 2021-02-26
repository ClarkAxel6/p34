class Box{
    constructor(x, y, width, height){
        var options = {
            density: 1,
            friction: 0.5,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body); 
    }

    display(){
        var angle = this.body.angle;
        push();
        angleMode(RADIANS);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill('green');
        stroke(1);
        rect(0,0, this.width, this.height);
        pop();
    }
}