class Shop{
    constructor(x, y, width, height){
        var options = {
            'density': 50
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 0;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("gold");
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();

        if(keyIsDown("s")){
            this.Visibility = 255;
        };
    }
}