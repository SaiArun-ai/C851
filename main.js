canvas = document.getElementById("myCanvas");
rx = 10;
ry = 10;
rh = 100;
rw = 100;
ctx = canvas.getContext("2d");
rImage = "rover.png";

MarsIm = ["mars.gif","mars.jpg","Mars2.jpg","Mars3.jpg"];
Numb = Math.floor(Math.random()*4);
cImage = MarsIm[Numb];
function add(){
    CanvasBackgroundImg = new Image();
    CanvasBackgroundImg.onload = uploadBackground;
    cImage = MarsIm[Numb];
    CanvasBackgroundImg.src = cImage;
    RoverImg = new Image();
    RoverImg.onload = roverBackground;
    RoverImg.src = rImage;
}

function uploadBackground(){
    ctx.drawImage(CanvasBackgroundImg, 0, 0, canvas.width, canvas.height);
    
}
function roverBackground(){
   
    ctx.drawImage(RoverImg, rx, ry, rw, rh);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    if(keypressed == '38'){
        up();
        console.log("up");
} 
if(keypressed == '40'){
        Down();
        console.log("dp");
}
if(keypressed == '37'){
        Left();
        console.log(";p");
}
if(keypressed == '39'){
        Right();
        console.log("kp");
}
}
function up(){
    cImage = MarsIm[Numb];
    if(ry > 0){
        ry = ry - 10;
        uploadBackground();
        roverBackground();
    }
}
function Down(){
    cImage = MarsIm[Numb];
    if(ry < 500){
        ry = ry + 10;
        uploadBackground();
        roverBackground();
    }
}
function Right(){
    cImage = MarsIm[Numb];
    if(rx< 700){
        rx = rx + 10;
        uploadBackground();
        roverBackground();
    }
}
function Left(){
    cImage = MarsIm[Numb];
    if(rx > 0){
        rx = rx - 10;
        uploadBackground();
        roverBackground();
    }
}