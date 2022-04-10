var canvas=new fabric.Canvas('myCanvas');
var blockwidth=30;
var blockheight=30;
var playerx=10;
var playery=10;
var blockobject="";
var playerobject="";

function updateplayer(){
    fabric.Image.fromURL("player.png",function(Img){
    playerobject=Img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(150);
    playerobject.set({
    top:playery,
    left:playerx
    })
    canvas.add(playerobject)
    })
}

function newimg(getImg){
    fabric.Image.fromURL(getImg,function(Img){
    blockobject=Img;
    blockobject.scaleToWidth(blockwidth);
    blockobject.scaleToHeight(blockheight);
    blockobject.set({
    top:playery,
    left:playerx
    })
    canvas.add(blockobject)
    })
}