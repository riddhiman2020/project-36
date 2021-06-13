class Food{
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body =  Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("Images/Milk.png")
    World.add(world, this.body);
    this.foodStock;
  }
    getFoodStock(){
    return this.foodStock;
    }
   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }
  deductFood(){
    if(this.foodStock>0){
      this.foodStock=this.foodStock-1
    }
  }

  display(){
    var x=80, y=100;
   
    imageMode(CENTER);
    image(this.image,720,220,70,70);
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,50,50)
        x=x+30;
      }
    }
  }
}
