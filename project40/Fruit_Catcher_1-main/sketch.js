var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var f1img,f2img,f3img,f4img,f5img;
var player_img;
var player1score =0;
var player2score =0;
var game;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  f1img = loadImage("images/apple2.png");
  f2img = loadImage("images/banana2.png");
  f3img = loadImage("images/melon2.png");
  f4img = loadImage("images/orange2.png");
  f5img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
  
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  fruitGroup = newGroup();
}

function draw() {
  background(back_img);

  // conditions for gameStates and playerCount
  
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if(playerCount === 2){
    game.update(1);
  }
  }
