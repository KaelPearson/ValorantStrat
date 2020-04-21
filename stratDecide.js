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

// Haven Attack
const havenAttackTest = new Strat("havenAttackTest", "Lorem ipsum");

// Haven Defence
const heavenHaven = new Strat("Heaven Haven", "One member of your team must hold heaven till the bomb is planted. If they die someone must take their place.")

// Haven Both
const shortyShort = new Strat("Shorty Short", "Entire team must buy shortys and rush A Short using every ability you have to secure A Short.");


// Haven Strat Lists
var havenAttackStrat = [havenAttackTest];
var havenDefenceStrat = [heavenHaven];
var havenStrat = [shortyShort];

// Haven Team Comps
const havenTeamTest = new Strat("HavenTeam", "Haven Team");

// Haven Team Comp List
var havenTeamComp = [havenTeamTest];

/* 

    ----Haven End---- 
    ------------------
    ----Bind Start----

*/

// Bind Attack
const bindAttackTest = new Strat("bindAttackTest", "Lorem ipsum");

// Bind Defence
const bindDefenceTest = new Strat("bindDefenceTest", "Lorem ipsum");

// Bind Both
const bindStratTest = new Strat("bindUniversalTest", "Lorem ipsum");

// Bind Strat Lists
var bindAttackStrat = [bindAttackTest];
var bindDefenceStrat = [bindDefenceTest];
var bindStrat = [bindStratTest];

// Bind Team Comps
const bindTeamTest = new Strat("BindTeam", "Bind Team");

// Bind Team Comp List
var bindTeamComp = [bindTeamTest];

/* 

    ----Bind End---- 
    ------------------
    ----Split Start----

*/

// Split Attack 
const splitAttackTest = new Strat("splitAttackTest", "Lorem ipsum");

// Split Defence 
const splitDefenceTest = new Strat("splitDefenceTest", "Lorem ipsum");

// Split Both
const noRope = new Strat("No Rope Climb", "Your team are not allowed to use any of the ropes on the map");

// Split Strat Lists
var splitAttackStrat = [splitAttackTest];
var splitDefenceStrat = [splitDefenceTest];
var splitStrat = [noRope];

// Split Team Comps
const splitTeamTest = new Strat("SplitTeam", "Split Team");

// Split Team Comp List
var splitTeamComp = [splitTeamTest];

/* 

    ----Split End---- 
    ------------------
    ----Universal Start----

*/

// Universal Attack
const lastTwentySeconds = new Strat("The only need 20", "Your team must wait till the last 20 seconds before attacking a site");
const spikeTag = new Strat("Spike tag", "The person with the spike is IT and everyone must avoid getting the spike from them. If you give someone the bomb you must say Tag! in chat");

// Universal Defence
const theFullStack = new Strat("The full stack", "Your team must choose one site that everyone must hold. You may not leave till a bomb is planted on another site");

// Universal Both
const unheard = new Strat("The unheard", "Your team may only use silenced weapons, walk and you are not allowed to speak in voice chat");
const spawnRun = new Strat("Spawn killers", "After your team gets a kill you must run back to your spawn");
const backwardsHeadphones = new Strat("From where?", "Everyone must rotate their headsets backwards");

// Universal Strat Lists
var universalAttack = [lastTwentySeconds, spikeTag];
var universalDefence = [theFullStack];
var universalBoth = [unheard, spawnRun, backwardsHeadphones];

// Universal Team Comps
const universalTeamTest = new Strat("universalTeam", "universal Team");

// Universal Team Comp List
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

function displayStrat(strat){
    var stratTitle = strat.getTitle();
    var stratDetail = strat.getDetail();
    document.getElementById("stratTitle").innerHTML = stratTitle;
    document.getElementById("stratText").innerHTML = stratDetail;
}

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
    displayStrat(characterSelect);
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
    displayStrat(strat);
}