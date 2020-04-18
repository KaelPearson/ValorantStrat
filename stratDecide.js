var havenAttackStrat = ["rush b","rush a"];
var havenDefenceStrat = ["",""];

var bindAttackStrat = ["binda","bindb"];
var bindDefenceStrat = ["",""];

var splitAttackStrat = ["",""];
var splitDefenceStrat = ["",""];

class Map{

    constructor(mapName, attackStrat, defenceStrat){
        this.mapName = mapName;
        this.attackStrat = attackStrat;
        this.defenceStrat = defenceStrat;
    }
    getMapName(){
        return this.mapName;
    }
    getAttackStrat(){
        return this.attackStrat;
    }
    getDefenceStrat(){
        return this.defenceStrat;
    }
}


const haven = new Map("haven", havenAttackStrat, havenAttackStrat);
const bind = new Map("bind", bindAttackStrat, bindDefenceStrat);
const split = new Map("split", splitAttackStrat, splitDefenceStrat);

var sides = ["attack","defence","both"];

function getStrat(map, side){
    var rand;
    var strat;
    if(map == "haven"){
        if(side == "attack"){
            rand = Math.floor(Math.random() * haven.getAttackStrat().length);
            console.log(haven.getAttackStrat()[rand]);
            document.getElementById("stratText").innerHTML = haven.getAttackStrat()[rand];
        } else {
            rand = Math.floor(Math.random() * haven.getDefenceStrat().length);
            console.log(haven.getDefenceStrat()[rand]);
            document.getElementById("stratText").innerHTML = haven.getDefenceStrat()[rand];

        }
    } else if (map == "bind"){
        if(side == "attack"){
            rand = Math.floor(Math.random() * bind.getAttackStrat().length);
            console.log(bind.getAttackStrat()[rand]);
            document.getElementById("stratText").innerHTML = bind.getAttackStrat()[rand];

        } else {
            rand = Math.floor(Math.random() * bind.getDefenceStrat().length);
            console.log(bind.getDefenceStrat()[rand]);
            document.getElementById("stratText").innerHTML = bind.getDefenceStrat()[rand];

        }
    } else if (map == "split"){
        if(side == "attack"){
            rand = Math.floor(Math.random() * split.getAttackStrat().length);
            console.log(split.getAttackStrat()[rand]);
            document.getElementById("stratText").innerHTML = split.getAttackStrat()[rand];

        } else {
            rand = Math.floor(Math.random() * split.getDefenceStrat().length);
            console.log(split.getDefenceStrat()[rand]);
            document.getElementById("stratText").innerHTML = split.getDefenceStrat()[rand];
        }
    }
}


/*

LEGACY CODE 

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
        var strat = "";
        if(sideName == sides[0]){
            // Uni Attack
            rand = Math.floor(Math.random() * attackStrats.length);
            strat = attackStrats[rand];
            
        } else if(sideName = sides[1]){
            // Uni Defence 
            rand = Math.floor(Math.random() * defenceStrats.length);
            strat = defenceStrats[rand];

        } else {
            // Uni Both
            rand = Math.floor(Math.random() * bothStrats.length);
            strat = bothStrats[rand];

        }
        document.getElementById("stratPara").innerHTML = strat;
    }
}

*/