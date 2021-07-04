function preload(){
}

function setup() {
    canvas =  createCanvas(300, 300);
    canvas.center();
 
    video = createCapture(VIDEO);
    video.hide();
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
	image(video, 0, 0, 300, 300);
}

function modelLoaded() {
  console.log('Model is loaded');
}

function gotPoses(results)
{
  if(results.length > 0){
  }
}