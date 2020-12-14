class Ball{

    constructor (x, y, r)  {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:2.2    
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x, y, r,options);
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r);
        pop()

    }




}