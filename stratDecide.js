var havenAttackStrat = ["havenattack1","havenattack2"];
var havenDefenceStrat = ["havendef1","havendef2"];
var havenStrat = ["havenuni1","havenuni2"];

var bindAttackStrat = ["binda","bindb"];
var bindDefenceStrat = ["",""];
var bindStrat = ["",""];

var splitAttackStrat = ["",""];
var splitDefenceStrat = ["",""];
var splitStrat = ["",""];

var universalAttack = ["uniattack1","uniattack2"];
var universalDefence = ["unidef1","unidef2"];
var universalBoth = ["both","both2"];

class Map{

    constructor(mapName, attackStrat, defenceStrat, mapStrat){
        this.mapName = mapName;
        this.attackStrat = attackStrat.concat(universalAttack.concat(universalBoth.concat(mapStrat)));
        this.defenceStrat = defenceStrat.concat(universalDefence.concat(universalBoth.concat(mapStrat)));
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


const haven = new Map("haven", havenAttackStrat, havenDefenceStrat, havenStrat);
const bind = new Map("bind", bindAttackStrat, bindDefenceStrat, bindStrat);
const split = new Map("split", splitAttackStrat, splitDefenceStrat, splitStrat);

var sides = ["attack","defence","both"];

function getStrat(map, side){
    var rand;
    var strat;
    if(map == "haven"){
        if(side == "attack"){
            rand = Math.floor(Math.random() * haven.getAttackStrat().length);
            document.getElementById("stratText").innerHTML = haven.getAttackStrat()[rand];
        } else {
            rand = Math.floor(Math.random() * haven.getDefenceStrat().length);
            document.getElementById("stratText").innerHTML = haven.getDefenceStrat()[rand];

        }
    } else if (map == "bind"){
        if(side == "attack"){
            rand = Math.floor(Math.random() * bind.getAttackStrat().length);
            document.getElementById("stratText").innerHTML = bind.getAttackStrat()[rand];

        } else {
            rand = Math.floor(Math.random() * bind.getDefenceStrat().length);
            document.getElementById("stratText").innerHTML = bind.getDefenceStrat()[rand];

        }
    } else if (map == "split"){
        if(side == "attack"){
            rand = Math.floor(Math.random() * split.getAttackStrat().length);
            document.getElementById("stratText").innerHTML = split.getAttackStrat()[rand];

        } else {
            rand = Math.floor(Math.random() * split.getDefenceStrat().length);
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