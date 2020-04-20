var havenAttackStrat = ["havenattack1","havenattack2"];
var havenDefenceStrat = ["havendef1","havendef2"];
var havenStrat = ["havenuni1","havenuni2"];
var havenTeamComp = ["HavenTeam1","HavenTeam2"];

var bindAttackStrat = ["binda","bindb"];
var bindDefenceStrat = ["",""];
var bindStrat = ["",""];
var bindTeamComp = ["BindTeam1","BindTeam2"];

var splitAttackStrat = ["",""];
var splitDefenceStrat = ["",""];
var splitStrat = ["",""];
var splitTeamComp = ["SplitTeam1","SplitTeam2"];

var universalAttack = ["uniattack1","uniattack2"];
var universalDefence = ["unidef1","unidef2"];
var universalBoth = ["both","both2"];
var universalTeamComp = ["uniTeam1","uniTeam2"];

class Map{
    constructor(mapName, attackStrat, defenceStrat, mapStrat, mapTeamComp){
        this.mapName = mapName;
        this.attackStrat = attackStrat.concat(universalAttack.concat(universalBoth.concat(mapStrat)));
        this.defenceStrat = defenceStrat.concat(universalDefence.concat(universalBoth.concat(mapStrat)));
        this.teamComp = mapTeamComp.concat(universalTeamComp);
    }
    getMapName(){
        return this.mapName;
    }
    getAttackStrat(){
        return this.attackStrat;
    }
    getRandomAttackStrat(){
        var rand = Math.floor(Math.random() * this.attackStrat.length);
        return this.attackStrat[rand];
    }
    getDefenceStrat(){
        return this.defenceStrat;
    }
    getRandomDefenceStrat(){
        var rand = Math.floor(Math.random() * this.defenceStrat.length);
        return this.defenceStrat[rand];
    }
    getStrat(side){
        if(side == "attack"){
            return this.getRandomAttackStrat();
        } else {
            return this.getRandomDefenceStrat();
        }
    }
    getTeamComp(){
        var rand = Math.floor(Math.random() * this.teamComp.length);
        return this.teamComp[rand];
    }
}

const haven = new Map("haven", havenAttackStrat, havenDefenceStrat, havenStrat, havenTeamComp);
const bind = new Map("bind", bindAttackStrat, bindDefenceStrat, bindStrat, bindTeamComp);
const split = new Map("split", splitAttackStrat, splitDefenceStrat, splitStrat, splitTeamComp);

function getCharacter(map){
    var characterSelect;
    if(map == "haven"){
        characterSelect = haven.getTeamComp();
    } else if (map == "bind"){
        characterSelect = bind.getTeamComp();
    } else if (map == "split"){
        characterSelect = split.getTeamComp();
    } else {
        return;
    }
    document.getElementById("stratText").innerHTML = characterSelect;
}
function getStrat(map, side){
    var strat;
    if(map == "haven"){
        strat = haven.getStrat(side);
    } else if (map == "bind"){
        strat = bind.getStrat(side);
    } else if (map == "split"){
        strat = split.getStrat(side);
    } else {
        return;
    }
    document.getElementById("stratText").innerHTML = strat;
}