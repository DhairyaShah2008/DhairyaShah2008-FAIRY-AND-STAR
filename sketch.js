var starImg,bgImg;
var star, starBody;
var fairy,fairyImg
var Sound

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	Sound=loadSound("sound/JoyMusic.mp3")
	
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	fairy=createSprite(100,600,20,20)
	fairy.addAnimation("Fairy",fairyImg)
	fairy.scale=0.2
	fairy.setCollider("rectangle",0,0,1000,100)
	fairy.debug=true

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.debug=true



	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	Sound.play()
	
}


function draw() {
  background(bgImg);
  
  

  star.x= starBody.position.x 
  star.y= starBody.position.y 


  //write code to stop star in the hand of fairy
keyPressed()
  drawSprites();

  if (fairy.isTouching(star,starBody)){
	  Matter.Body.setStatic(starBody,true)

  }


  

}

function keyPressed() {

	if (keyIsDown(LEFT_ARROW)) {
		fairy.x+=-10

		
	}

	if (keyIsDown(RIGHT_ARROW)) {
		fairy.x+=+10
		
		
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		
	}

	

	
	//write code to move fairy left and right
	
}
