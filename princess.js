class Camilla{
    constructor(x, y, width, height){
        var options = {
            'restitution': 0.5,
            'friction': 1,
            'density': 1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("pink");
        fill("purple");
        rect(0, 0, this.width, this.height);
        pop();
    }

    right(){
        this.body.position.x = this.body.position.x + 5;
    }

    left(){
        this.body.position.x = this.body.position.x - 5;
    }

    jump(){
        this.body.position.y = this.body.position.y - 5;
        if(this.body.position.y <= 500){
            this.body.position.y = 650;
        };
    }
};