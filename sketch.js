var food1,database;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var foodStockVal;
var foodStock;
var foodS;
var dog,sadDog,happyDog;
var feed_pet,add_food,foodObjt;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);  
  
  food1=new Food();
 

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
 

  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addfood=createButton("add food")
  addfood.position(800,95)
  addfood.mousePressed(addFood)

}

function draw() {
  background(46,139,87);
  Engine.update(engine);

  food1.display();
  
  drawSprites();
}
function readStock(data){
  foodS=data.val();
  food1.updateFoodStock(foodS);
}

//function to read food Stock
function feedDog(){
  dog.addImage(happyDog)
  foodStockVal=food1.getFoodStock();
  if(foodStockVal<=0){
    food1.updateFoodStock(foodStockVal*0)
  }else{
    food1.updateFoodStock(foodStockVal-1)
  }

  database.ref('/').update({
    Food:foodStockVal
    //FeedTime:hour()
  })
  
}
//function to add food in stock

function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}