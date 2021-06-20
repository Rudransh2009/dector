function draw()
{
    image(img, 0, 0, 600, 500);
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
}

function preload() {
    img = loadImage("bottel.jpg");
}

function back()
{
    window.location="index.html"
}