status = "";

function setup(){
 canvas = createCanvas(480 , 380);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 video.size(480 , 380);
}
function start(){
    objectDetecter = ml5.objectDetecter('cocossd', modelLoaded );
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_value = document.getElementById("input1").value;
}
function modelloaded(){
    console.log("modelLoaded");
    status = "true";
}
function draw(){
    image(video,0,0,600,500);
}