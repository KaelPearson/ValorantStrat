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
    getRandomAttackStrat(){

    }
    getDefenceStrat(){
        return this.defenceStrat;
    }
    getRandomDefenceStrat(){
        
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
            strat = haven.getAttackStrat()[rand];
        } else {
            rand = Math.floor(Math.random() * haven.getDefenceStrat().length);
            strat = haven.getDefenceStrat()[rand];

        }
    } else if (map == "bind"){
        if(side == "attack"){
            rand = Math.floor(Math.random() * bind.getAttackStrat().length);
            strat = bind.getAttackStrat()[rand];

        } else {
            rand = Math.floor(Math.random() * bind.getDefenceStrat().length);
            strat = bind.getDefenceStrat()[rand];

        }
    } else if (map == "split"){
        if(side == "attack"){
            rand = Math.floor(Math.random() * split.getAttackStrat().length);
            strat = split.getAttackStrat()[rand];

        } else {
            rand = Math.floor(Math.random() * split.getDefenceStrat().length);
            strat = split.getDefenceStrat()[rand];
        }
    } else {
        return;
    }
    document.getElementById("stratText").innerHTML = strat;
}