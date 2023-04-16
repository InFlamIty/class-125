function setup()
{
    video = createCapture(VIDEO)
    video.size(600 , 500)
    canvas = createCanvas(800 , 700)
    canvas.position(610 , 135)
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on("pose" , gotResults)
}
function modelLoaded()
{
    console.log("Model Loaded")
}
function gotResults(results)
{
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)
    }
}
function draw()
{
    background("grey")
    fill("red")
    stroke("#006e1b")
    square(noseX , noseY , difference)
    document.getElementById("dif").innerHTML = "Square size = " + difference + "px"
}
noseX = 0
noseY = 0
leftWristX = 0
rightWristX = 0
difference = 0

