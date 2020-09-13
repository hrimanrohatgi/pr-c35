class form{
constructor(){

}
display(){
var title = createElement('h2');
title.html("virtual Pet");
title.position(130,0);
var input = createInput("name");
input.position(130,160);
var button = createButton("play");
button.position(250,200);
var greeting = createElement('h3')
button.mousePressed(function(){
    input.hide()
    button.hide()
    var name = input.value();
    playerCount =playerCount+1;
    player.update(player);
    player.update(player);
    player.update(playerCount);
    greeting.html("hello"+name);
    greeting.position(130,160);
})
}
}