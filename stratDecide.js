class Strat {
    constructor(title, detail){
        this.title = title;
        this.detail = detail;
    }
    getTitle(){
        return this.title;
    }
    getDetail(){
        return this.detail;
    }
}

/* 

    ----Haven Start----

*/

const shortyShort = new Strat("Shorty Short", "Entire team must buy shortys and rush A Short using every ability you have to secure A Short.");
const heavenHaven = new Strat("Heaven Haven", "One member of your team must hold heaven till the bomb is planted. If they die someone must take their place.")
const havenAttackTest = new Strat("havenAttackTest", "Lorem ipsum");

var havenAttackStrat = [havenAttackTest];
var havenDefenceStrat = [heavenHaven];
var havenStrat = [shortyShort];


const havenTeamTest = new Strat("HavenTeam", "Haven Team");
var havenTeamComp = [havenTeamTest];

/* 

    ----Haven End---- 
    ------------------
    ----Bind Start----

*/

const bindAttackTest = new Strat("bindAttackTest", "Lorem ipsum");
const bindDefenceTest = new Strat("bindDefenceTest", "Lorem ipsum");
const bindStratTest = new Strat("bindUniversalTest", "Lorem ipsum");


var bindAttackStrat = [bindAttackTest];
var bindDefenceStrat = [bindDefenceTest];
var bindStrat = [bindStratTest];


const bindTeamTest = new Strat("BindTeam", "Bind Team");
var bindTeamComp = [bindTeamTest];

/* 

    ----Bind End---- 
    ------------------
    ----Split Start----

*/

const splitAttackTest = new Strat("splitAttackTest", "Lorem ipsum");
const splitDefenceTest = new Strat("splitDefenceTest", "Lorem ipsum");
const splitStratTest = new Strat("splitUniversalTest", "Lorem ipsum");

var splitAttackStrat = [splitAttackTest];
var splitDefenceStrat = [splitDefenceTest];
var splitStrat = [splitStratTest];


const splitTeamTest = new Strat("SplitTeam", "Split Team");
var splitTeamComp = [splitTeamTest];

/* 

    ----Split End---- 
    ------------------
    ----Universal Start----

*/

const universalAttackTest = new Strat("universalAttackTest", "Lorem ipsum");
const universalDefenceTest = new Strat("universalDefenceTest", "Lorem ipsum");
const universalStratTest = new Strat("universalUniversalTest", "Lorem ipsum");

var universalAttack = [universalAttackTest];
var universalDefence = [universalDefenceTest];
var universalBoth = [universalStratTest];


const universalTeamTest = new Strat("universalTeam", "universal Team");
var universalTeamComp = [universalTeamTest];

/* 

    ----Universal End----

*/

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
    var characterSelectTitle = characterSelect.getTitle();
    var characterSelectDetail = characterSelect.getDetail();
    document.getElementById("stratTitle").innerHTML = characterSelectTitle;
    document.getElementById("stratText").innerHTML = characterSelectDetail;
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
    var stratTitle = strat.getTitle();
    var stratDetail = strat.getDetail();
    document.getElementById("stratTitle").innerHTML = stratTitle;
    document.getElementById("stratText").innerHTML = stratDetail;
}