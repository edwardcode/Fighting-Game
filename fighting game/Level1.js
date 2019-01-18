Game.Level1 = function(game){};

var map;
var layer;

var player;
// var controls = {};
// var playerSpeed = 150;
// var jumpTimer = 0;

Game.Level1.prototype = {
  create:function(){
    this.stage.backgroundColor = '#3A5963';

    map = this.add.tilemap('map',64,64);
    map.addTilesetImage('tileset');
    layer = map.createLayer(0);
    layer.resizeWorld();



    player = this.add.sprite(100,560,'player');//position of the player



    this.physics.arcade.enable(player);
    this.camera.follow(player);
    player.body.collideWorldBounds = true;



  },

  update:function(){
     this.physics.arcade.collide(player,layer)


  },

}