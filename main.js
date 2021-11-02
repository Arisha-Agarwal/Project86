canvas = new fabric.Canvas("mycanvas");
var xo = document.getElementById("sound");

function displayimg(){
    fabric.Image.fromURL("card.jpg", function(Img){

        Birthdayimg=Img;
        Birthdayimg.scaleToWidth(600);
        Birthdayimg.scaleToHeight(800);
        Birthdayimg.set({
top:0,
left:0
        });
        canvas.add(Birthdayimg);
    });
}

function playSound(){
   x.play();
}
