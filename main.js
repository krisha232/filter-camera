function preload(){
}function setup(){
canvas=createCanvas(640,489);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

tint_color="";
}

function draw(){
    image(video,60,45,500,400);
    tint(tint_color);
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,50,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,65,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,80,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,95,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,110,9);
    
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,125,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,140,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,155,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,170,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,185,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,200,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,215,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,230,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,245,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,260,9);
    
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,275,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,290,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,305,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,320,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,335,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,350,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,365,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,380,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,395,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,410,9);
    
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,425,9);
    
    fill(191,19,105);
    stroke(191,19,105);
    circle(565,440,9);
    

    
    
    fill(191,19,105);
stroke(191,19,105);
circle(59,50,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,65,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,80,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,95,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,110,9);


fill(191,19,105);
stroke(191,19,105);
circle(59,125,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,140,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,155,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,170,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,185,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,200,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,215,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,230,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,245,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,260,9);


fill(191,19,105);
stroke(191,19,105);
circle(59,275,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,290,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,305,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,320,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,335,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,350,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,365,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,380,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,395,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,410,9);


fill(191,19,105);
stroke(191,19,105);
circle(59,425,9);

fill(191,19,105);
stroke(191,19,105);
circle(59,440,9);








}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color  =document.getElementById("color_name").value;

}


