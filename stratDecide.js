var mapNames = ["split", "haven", "bind"];
var sides = ["attack","defence","both"];

var attackStrats = ["",""];
var defenceStrats = ["",""];
var bothStrats = ["",""];

function testMapName(mapName){
    for(var i = 0; i < mapNames.length; i++){
        if(mapName == mapNames[i]){
            return true;
        }
    }
    return false;
}
function testSideName(sideName){
    for(var i = 0; i < sides.length; i++){
        if(sideName == sides[i]){
            return true;
        }
    }
    return false;
}
function decideStrat(mapName, sideName){
    if(testMapName(mapName) == true && testSideName(sideName) == true){
        var rand;
        if(sideName == sides[0]){
            // Uni Attack
            rand = Math.floor(Math.random() * attackStrats.length);
            console.log("attack")
        } else if(sideName = sides[1]){
            // Uni Defence 
            rand = Math.floor(Math.random() * defenceStrats.length);
            console.log("defence");
        } else {
            // Uni Both
            rand = Math.floor(Math.random() * bothStrats.length);
            console.log("both");
        }
        console.log(rand);
    }
}