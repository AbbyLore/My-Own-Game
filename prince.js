class Albert{
    constructor(x, y, width, height){
        var options = {
            'restitution': .5,
            'friction': 1,
            'density': 1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("gold");
        rect(0, 0, this.width, this.height);
        pop();
    }
}