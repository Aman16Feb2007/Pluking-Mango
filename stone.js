class Stone{
    constructor(x,y,w,h){
        var options={
            density : 1
        }

        this.body = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("stone.png"); 
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }


}