var ball;
var database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    console.log(database)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database.ref("ball/position").on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
database.ref("ball/position").set({
    x:ball.x+x,
    y:ball.y+y
})
}
//x:200,y:165 x:230,y:240
function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}

function showError(){
    console.log("Error");
}




