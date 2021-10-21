function preload(){

}
function draw(){
    background('#4682b4');
}
function setup(){
var video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 500);
canvas.position(560,150);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        
    }
}