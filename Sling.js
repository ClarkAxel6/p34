class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 280
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling); 
    }

    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.pointB;
        noStroke();
        line(posA.x, posA.y, posB.x, posB.y);
    }
}
