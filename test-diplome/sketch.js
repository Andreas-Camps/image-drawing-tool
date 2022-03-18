let noiseScale = 1;
let test = document.getElementById('test-button')
let imagesize = 100;
let sliders = document.querySelectorAll(".image-buttons input");
sliders.forEach((slider) => {
    slider.onchange = () => {
        imagesize = slider.value;
    }
})


let imagebuttons = document.querySelectorAll(".image-buttons button");

imagebuttons.forEach((button) => {
    button.onclick = () => {
        img = loadImage("img/" + button.dataset.image);
        let slider = button.parentElement.querySelector("input");
        imagesize = slider.value;
    }
})


function preload() {
    img = loadImage('img/5.png');
}



var images = [
    "chair.png", "img.png", "5.png", "1.png", "football.png", "statue.png", "sucredorge.png", "avion.png"
]




function setup() {
    createCanvas(550, 700);
    background(250);
}



function draw() {
    if (mouseIsPressed == true) {


        // SOUSTRAIRE À -X ET -Y LA MOITIÉ DE LA TAILLE PAR À L'IMAGE.
        image(img, mouseX - imagesize / 2, mouseY - imagesize / 2, imagesize, imagesize);

        blendMode(BLEND);
        imageMode(CENTER);
        tint(0, 0, 255);




    }



}




function brush() {
    if (mouseY > 100) {
        fill(0);
    } else {
        fill(200);
    }
    ellipse(mouseX, mouseY, brushW, brushW);


}




function downloadCanvas() {
    // get canvas data  
    var image = canvas.toDataURL();

    // create temporary link  
    var tmpLink = document.createElement('a');
    tmpLink.download = 'image.png'; // set the name of the download file 
    tmpLink.href = image;

    // temporarily add link to body and initiate the download  
    document.body.appendChild(tmpLink);
    tmpLink.click();
    document.body.removeChild(tmpLink);
}