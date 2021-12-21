    var fundo;
    var gatoSentado,gatoAndando,gatoDeitado
    var rato1,rato2,rato3
    var tom
    var jerry
    function preload() {
        //load the images here
        //mause2 mause3 são do rato2
        
        rato1=loadAnimation("images/mouse1.png");
        rato2=loadAnimation("images/mouse2.png","images/mouse3.png");
        rato3=loadAnimation("images/mouse4.png");
        gatoDeitado=loadAnimation("images/cat1.png");
        gatoAndando=loadAnimation("images/cat2.png","images/cat3.png");
        gatoSentado=loadAnimation("images/cat4.png");
        fundo=loadImage("images/garden.png");
    }

    function setup(){
        createCanvas(1000,800);
        //create tom and jerry sprites here
        
    tom=createSprite(870,600)
    tom.addAnimation("gatoDormindo",gatoDeitado);
    tom.scale= 0.2
    jerry=createSprite(200,600);
    jerry.addAnimation("rato1",rato1);
    jerry.scale= 0.15
    }

    function draw() {

        background(fundo);
        //Write condition here to evalute if tom and jerry collide
        if (tom.x - jerry.x < (tom.width - jerry.width) / 2) {
            tom.velocityX = 0;
            tom.addAnimation("tomLastImage", gatoSentado);
            tom.x = 300;
            tom.scale = 0.2;
            tom.changeAnimation("tomLastImage");
            jerry.addAnimation("jerryLastImage", rato3);
            jerry.scale = 0.15;
            jerry.changeAnimation("jerryLastImage");
          }
        drawSprites();
    }


    function keyPressed(){
if(keyCode===LEFT_ARROW){
    //For moving and changing animation write code here
tom.velocityX=-5
tom.addAnimation("tomAndando",gatoAndando);
tom.changeAnimation("tomAndando",gatoAndando);
jerry.addAnimation("jerry2",rato2);
jerry.changeAnimation("jerry2",rato2);
jerry.frameDelay = 25
    }
    }