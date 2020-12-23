class Wire{
    constructor(a,b){
        var options={
            bodyA : a,
            pointB : b,
            length : 10,
            stiffness : 0.05
        }
        this.body = Constraint.create(options);
        this.pointB = b;
        World.add(world, this.body);
    }

    attach(abc){
        this.body.bodyA = abc;
    }


    fly(){
       this.body.bodyA = null 
    }


    display(){
        if(this.body.bodyA){
        var posa = this.body.bodyA.position;
        var posb = this.pointB
        line(posa.x, posa.y, posb.x, posb.y);
    }
    }


}
