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

// Haven Defence
const heavenHaven = new Strat("Heaven Haven", "One member of your team must hold heaven till the bomb is planted. If they die someone must take their place.")

// Haven Both
const shortyShort = new Strat("Shorty Short", "Entire team must buy shortys and rush A Short using every ability you have to secure A Short.");


// Haven Strat Lists
var havenAttackStrat = [];
var havenDefenceStrat = [heavenHaven];
var havenStrat = [shortyShort];

// Haven Team Comps

// Haven Team Comp List
var havenTeamComp = [];

/* 

    ----Haven End---- 
    ------------------
    ----Bind Start----

*/

// Bind Attack

// Bind Defence
const teleportRush = new Strat("Teleport madness", "Everyone on your team at the start of the round must rush a teleporter instantly (Stacking 5 on one is better)");

// Bind Both
const bindRhyme = new Strat("Bind Find Grind Mind", "Every sentence must include a rhyme with Bind (Heres some examples because im so kind blind, crined, dined, find, fined, grind, hind, kind, lined, mind, mined, pined, rind, shined, signed, tined, twined, vined, wined, wynd)");

// Bind Strat Lists
var bindAttackStrat = [];
var bindDefenceStrat = [teleportRush];
var bindStrat = [bindRhyme];

// Bind Team Comps

// Bind Team Comp List
var bindTeamComp = [];

/* 

    ----Bind End---- 
    ------------------
    ----Split Start----

*/

// Split Attack 

// Split Defence 

// Split Both
const noRope = new Strat("No Rope Climb", "Your team are not allowed to use any of the ropes on the map");

// Split Strat Lists
var splitAttackStrat = [];
var splitDefenceStrat = [];
var splitStrat = [noRope];

// Split Team Comps

// Split Team Comp List
var splitTeamComp = [];

/* 

    ----Split End---- 
    ------------------
    ----Universal Start----

*/

// Universal Attack
const lastTwentySeconds = new Strat("The only need 20", "Your team must wait till the last 20 seconds before attacking a site");
const spikeTag = new Strat("Spike tag", "The person with the spike is IT and everyone must avoid getting the spike from them. If you give someone the bomb you must say Tag! in chat");
const motivation = new Strat("Hype it up", "Everyone must rush a site as fast as possible while one player gives a motivational speech");
const jumpCorners = new Strat('"I feel more accurate"', "Everyone must jump around corners");
const mrPres = new Strat("GET DOWN MR. PRESIDENT!", "One player becomes the president they can only hold the spike and the other 4 players must defend him. The president cannot shoot till the bomb is down and if the president dies everyone must drop their gun and retreat");
const backsTogether = new Strat("We see all","Everyone in your group must put your backs together while moving around. You are not allowed to see another teammate");
const raidBoss = new Strat("Raid Boss", "You must choose one player to become the Raid Boss he must get a odin and armour if he can not afford it the person with the most money must drop a weapon for him. He then must run into a site and your team must choose to either all follow him or not follow him at all ");
const supressiveFire = new Strat("SUPRESSIVE FIRE!!", "Everyone must by armour and Odins, rush a site while shouting 'Supressive Fire!!' while holding down mouse_1");
const oneAtATime = new Strat("One At A Time", "Pick a bomb site, and only 1 teammate is allowed to push the site, once they either reach the bombsite or is killed, the next one can advance");
const whoForgotSpike = new Strat("Who Forgot Spike?", "at the beginning of the round, leave spike at spawn, proceed to take a bombsite, once the bombsite is taken, 1 must return to spawn and retrive the spike and come back to the bombsite");

// Universal Defence
const theFullStack = new Strat("The full stack", "Your team must choose one site that everyone must hold. You may not leave till a bomb is planted on another site");
const noBackTracking = new Strat("Never turn back", "You can not go where you have already gone");
const sittingDuck = new Strat("Sitting Duck", "Before the buy phase ends, pick a spot and stay there until either the round ends or a bomb is planted");

// Universal Both
const unheard = new Strat("The unheard", "Your team may only use silenced weapons, walk and you are not allowed to speak in voice chat");
const spawnRun = new Strat("Spawn killers", "After your team gets a kill you must run back to your spawn");
const backwardsHeadphones = new Strat("From where?", "Everyone must rotate their headsets backwards");
const dictator = new Strat("The dictator","The person with the least amount of kills commands everyones every action this round");
const noStopWalking = new Strat("Can't stop wont stop","You must press W the entire round");
const pokemonPlayers = new Strat("Pokemon players", "All players must talk like pokemon by only talking using their in game name");
const teamSight = new Strat("Trust no one", "You can only move when looking at a teammate or a teammate is looking at you");
const noLeftTurns = new Strat("GeT_RiGhT", "You may only move and look right");
const teammateChooseGuns = new Strat("This is my favourite! Thank you!", "Everyone must buy the gun the person below them on the scoreboard says to buy and you must say thank you (If you are on the bottom choose for the top person)");
const potLuckGuns = new Strat("Pot Luck Special","Everyone must buy a gun and throw it in a pile once everyone has put in a gun count down to 3 and run in");
const enemyHunting = new Strat("Enemy Spotted","Once you see an enemy you can not kill anyone else besides them till they are dead");
const myGunNow = new Strat("My Gun Now", "After you kill an enemy, you must pick up their gun and use their gun to kill the next enemy, you may not kill anyone until you pick up their gun first.");

const shotgunOnly = new Strat("Spread Shot (Thank you xRevelantx!)", "Only buy shotguns (Shorty, Bucky or Judge)");
const backwardsMovement = new Strat("Looking behind (Thank you xRevelantx!)", "You can only walk backwards and are only allowed to turn around when standing still");
const sockHand = new Strat("Sock (Thank you xRevelantx!)", "Put a sock over your hand");
const sensitivityExtreme = new Strat("Can't control this (Thank you xRevelantx!)","Multiply your sensitivity by 3");

// Universal Strat Lists
var universalAttack = [lastTwentySeconds, spikeTag, motivation, jumpCorners, mrPres, backsTogether, raidBoss, supressiveFire, oneAtATime, whoForgotSpike];
var universalDefence = [theFullStack, noBackTracking, sittingDuck];
var universalBoth = [unheard, spawnRun, backwardsHeadphones, dictator, noStopWalking, pokemonPlayers, teamSight, noLeftTurns,
    teammateChooseGuns, potLuckGuns, enemyHunting, myGunNow, shotgunOnly, backwardsMovement, sockHand, sensitivityExtreme];

// Universal Team Comps
const womenTeam = new Strat("Power to women", "All women and Sova (long hair)");
const slowAndThrow = new Strat("Slow and throw", "Sage, Viper, Pheonix, Raze and Brimstone");
const sneakyBeaky = new Strat("Sneaky Beaky", "Viper, Omen, Brimstone, Cypher and Jett");
// Universal Team Comp List
var universalTeamComp = [womenTeam, slowAndThrow, sneakyBeaky];

/* 

    ----Universal End----

*/

const characterList = ["Phoenix","Breach","Brimstone","Cypher","Jett","Omen","Raze","Sage","Sova","Viper"];

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
        var rand = Math.floor(Math.random() * (this.teamComp.length + 1));
        if(this.teamComp.length == rand){
            var currList = [];
            randomCharacter(characterList, currList);
            var string = "";
            for(var i = 0; i < 5; i++){
                string += list[i];
                if(i != 4){
                    string += ", ";
                }
            } 
            const randCharStrat = new Strat("Random List", string);
            return randCharStrat;
        }
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

var list;
function randomCharacter(charList, currList){
    var rand = Math.floor(Math.random() * charList.length);
    currList.push(charList[rand]);
    var newList = [];
    if(currList.length >= 5){
        list = currList;
        return;
    }
    for(var i = 0; i < charList.length; i++){
        if(i != rand){
            if(i < rand){
                newList[i] = charList[i];
            } else {
                newList[i - 1] = charList[i];
            }
        }
    }
    randomCharacter(newList, currList);
}