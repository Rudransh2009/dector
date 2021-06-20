function draw()
{
    image(img, 0, 0, 640, 420);
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage("fruit-basket_1.jpg");
}

function back()
{
    window.location="index.html"
}