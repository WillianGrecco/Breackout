var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Primeira linha de caixas

var caixa1 = createSprite(25,75,50,50);
caixa1.shapeColor="red";

var caixa2 = createSprite(75,75,50,50);
caixa2.shapeColor="blue";

var caixa3 = createSprite(125,75,50,50);
caixa3.shapeColor="red";

var caixa4 = createSprite(175,75,50,50);
caixa4.shapeColor="blue";

var caixa5 = createSprite(225,75,50,50);
caixa5.shapeColor="red";

var caixa6 = createSprite(275,75,50,50);
caixa6.shapeColor="blue";

var caixa7 = createSprite(325,75,50,50);
caixa7.shapeColor="red";

var caixa8 = createSprite(375,75,50,50);
caixa8.shapeColor="blue";

var caixa9 = createSprite(25,125,50,50);
caixa9.shapeColor="blue";

//Segunda linha de caixas

var caixa10 = createSprite(75,125,50,50);
caixa10.shapeColor="red";

var caixa11 = createSprite(125,125,50,50);
caixa11.shapeColor="blue";

var caixa12 = createSprite(175,125,50,50);
caixa12.shapeColor="red";

var caixa13 = createSprite(225,125,50,50);
caixa13.shapeColor="blue";

var caixa14 = createSprite(275,125,50,50);
caixa14.shapeColor="red";

var caixa15 = createSprite(325,125,50,50);
caixa15.shapeColor="blue";

var caixa16 = createSprite(375,125,50,50);
caixa16.shapeColor="red";

// variante da bola

var bola = createSprite(200,200,25,25);

//variante da raquete

var raquete = createSprite(200,355,120,15);
raquete.shapeColor="orange";

//variante dos pontos

var pontos = 0;
var gameState = ("inicio");




function draw() {
  background("white");
  drawSprites();
 createEdgeSprites();
  
  textSize(15);
  stroke("red");
  text("Pontuação: " + pontos,300,20);
  
  if(gameState=="inicio") {
   textSize(24);
   text("Aperte space pra INICIAR o Jogo",20,250);
    }
    
  
  //função de começar o jogo
 if (keyDown("space")) {
bola.velocityX=3; 
bola.velocityY=4;
gameState=("play");
   
 }
 
 
 if(gameState=="play") {
   raquete.x=World.mouseX;
   
   
   
 }
  
  /* Serve para fazer a bola quicar nas paredes
  e para a bola destroir as caixas*/
  bola.bounceOff(raquete);
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(topEdge);

  if(bola.bounceOff(caixa1)){
  caixa1.destroy();
  pontos=pontos + 1;
  } 

  if(bola.bounceOff(caixa2)){
  caixa2.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa3)){
  caixa3.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa4)){
  caixa4.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa5)){
  caixa5.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa6)){
  caixa6.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa7)){
  caixa7.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa8)){
  caixa8.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa9)){
  caixa9.destroy();
  pontos=pontos + 1;
  } 
  
if(bola.bounceOff(caixa10)){
  caixa10.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa11)){
  caixa11.destroy();
  pontos=pontos + 1;
  } 
 
  if(bola.bounceOff(caixa12)){
  caixa12.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa13)){
  caixa13.destroy();
  pontos=pontos + 1;
  } 
  
if(bola.bounceOff(caixa14)){
  caixa14.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa15)){
  caixa15.destroy();
  pontos=pontos + 1;
  } 
  
  if(bola.bounceOff(caixa16)){
  caixa16.destroy();
  pontos=pontos + 1;
  } 
  
  
if (gameState=="End") {
 textSize(24); 
text("FIM DE JOGO",120,250);
  
  }
  
  if (bola.isTouching(bottomEdge) || pontos==16) {
    gameState="End";
    
  }
  
  if (gameState=="End") {
    bola.setVelocity(0,0);
  }
  
  
}











// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
