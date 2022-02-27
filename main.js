function preload(){
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.position(100,300);

    video=createCapture(VIDEO);
    video.hide();

    filter_col="";
}

function draw(){
    image(video,0,0, 500,400);
    tint(filter_col);
}

function filter_color(){
    filter_col=document.getElementById("color_name").value;
}

function take_snapshot(){
    save('filter_img.png');
}