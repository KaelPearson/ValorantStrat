class Strat {
    constructor(title, detail){
        this.title = title;
        this.detail = detail;
        this.used = false;
    }
    getTitle(){
        return this.title;
    }
    getDetail(){
        return this.detail;
    }
    getUsed(){
        return this.used;
    }
    setUsed(bool){
        this.used = bool;
    }
}
const allDefence = new Strat("You used all Defence strats!", "Click defence again to reuse old ones");

const allAttack = new Strat("You used all attack strats!", "Click attack again to reuse old ones");
/* 

    ----Haven Start----

*/

// Haven Attack

// Haven Defence
const heavenHaven = new Strat("Heaven Haven", "One member of your team must hold heaven till the bomb is planted. If they die someone must take their place.")

// Haven Both
const shortyShort = new Strat("Shorty Short", "Entire team must buy shortys and rush A Short using every ability you have to secure A Short.");
const japaneseOnly = new Strat("JapaneseOnly", "You may only speak Japanese")

// Haven Strat Lists
var havenAttackStrat = [];
var havenDefenceStrat = [heavenHaven];
var havenStrat = [shortyShort, japaneseOnly];

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
const arabicOnly = new Strat("Arabic Only", "You may only speak Arabic");
// Bind Strat Lists
var bindAttackStrat = [];
var bindDefenceStrat = [teleportRush];
var bindStrat = [bindRhyme, arabicOnly];

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
const englishOnly = new Strat("English Only", "You may only speak English");
// Split Strat Lists
var splitAttackStrat = [];
var splitDefenceStrat = [];
var splitStrat = [noRope, englishOnly];

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
const hotPotato = new Strat("Hot Potato", "You can't have the spike for more than 8 seconds");
const switchSites = new Strat("Entry Frags", "After getting a kill going into one site you must attack another. Do this till either you get bomb down or kill everyone else");
const oneByOne = new Strat("One by one we fall", "You must all rush a choke point one by one.");
const leader = new Strat("leader", "You may only move when you have bomb");

// Universal Defence
const theFullStack = new Strat("The full stack", "Your team must choose one site that everyone must hold. You may not leave till a bomb is planted on another site");
const noBackTracking = new Strat("Never turn back", "You can not go where you have already gone");
const sittingDuck = new Strat("Sitting Duck", "Before the buy phase ends, pick a spot and stay there until either the round ends or a bomb is planted");
const hideAndSeek = new Strat("Hide And Seek", "Try your best to hide. (Last person standing wins)");

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
const onlyOneShot = new Strat("One Shot", "One player must buy the Sheriff and after taking one shot pass it to a teammate. This is the only gun you can use");
const switchHands = new Strat("Switch Hands", "Switch your hands for mouse and keyboard");
const doubleStrat = new Strat("Double Strat!", "The next two strats you have to do this round");
const emptyMags = new Strat("Empty Clips", "At the start of the round you must shoot your guns till you only have one clip left");
const scoped = new Strat("Scoped in", "You many only shoot while aiming down a scope. (If its pistol round reroll)");
const noCrosshair = new Strat("Crosshair gone", "You must disable your crosshair this round");
const formation = new Strat("Stay together", "You must move in formation 3 in the front 2 in the back");
const bunnyHop = new Strat("Bunny", "ALWAYS bunnyhop. (Even while shooting)");
const snitch = new Strat("Tekashi", "One player must stay in spawn and report on all teammate locations");
const knifeShoot = new Strat("The Assholes", "Try your hardest to convince the enemy team into a knife round then gun them down");
const leftWall = new Strat("Maze", "You must always stick to the left wall");
const target = new Strat("Target Acquired", "You must declare your target at the start of the round. You can only kill them before choosing your next target");
const standUp = new Strat("Stand Up", "Stand up in real life while playing this round");
const lying = new Strat("Lying Calls", "Play normally but every 1-5 calls are a lie");
const canada = new Strat("Canadians", "Type im sorry after killing someone");
const pushToTalk = new Strat("Chaos", "Push to talk must always be held down");
const scream = new Strat("They know me for my one taps", "Only one tap");
const redLight = new Strat("Red Light, Green Light", "One player dictates all movement by saying red light or green light");
const backwardsKeyboard = new Strat("Backwards keyboard", "Title");
const budget = new Strat("Low Eco", "Player with least cash provides for the entire team");
const entireClip = new Strat("I think they are dead", "You must use your entire clip once you see an enemy even if they die");
const defendYourTeammate = new Strat("He is trying his best!", "The person on the bottom of the scoreboard must shoot their gun straight in the air while running around and their teammates must make excuses for them ('They were dropped as a child')");
const randomGun = new Strat("I believe", "You must close your eyes and randomly buy a gun");
const lessKeys = new Strat("More deaths less keys", "Everytime someone dies you cannot use one key from left to right (W,A,S,D)");
const anime = new Strat("Anime Lovers!", "You must talk like anime characters the entire round and the last person alive must be cheered on by everyone else");
const mechanic = new Strat("The reloader", "Only one person on the team can reload other peoples guns. (Everyone must give them their gun to reload)");
const freeze = new Strat("Freeze", "When an enemy is killed everyone must freeze for 5 seconds");
const theBest = new Strat("YOU'RE AMAZING!", "When someone gets a kill everyone must compliment them in chat.");
const pause = new Strat("Pause one sec", "The bottom frag types in chat pause(time) and you must sit till that time is met");
const botGun = new Strat("One gun team", "The bottom fragger chooses a gun and everyone must buy it");
const hoard = new Strat("Hoarders", "Everytime you see a gun on the ground you must bring it to spawn and make a pile");
const newLanguage = new Strat("No English", "You may not speak English");

// Universal Strat Lists
var universalAttack = [lastTwentySeconds, spikeTag, motivation, jumpCorners, mrPres, backsTogether, raidBoss, supressiveFire, oneAtATime, whoForgotSpike, hotPotato, switchSites, oneByOne,
    leader
];
var universalDefence = [theFullStack, noBackTracking, sittingDuck, hideAndSeek];
var universalBoth = [
    unheard, spawnRun, backwardsHeadphones, dictator, noStopWalking, pokemonPlayers, teamSight, noLeftTurns,
    teammateChooseGuns, potLuckGuns, enemyHunting, myGunNow, shotgunOnly, backwardsMovement, sockHand, sensitivityExtreme, onlyOneShot, switchHands, doubleStrat, emptyMags, scoped, noCrosshair,
    formation, bunnyHop, snitch, knifeShoot, leftWall, target, standUp, lying, canada, pushToTalk, scream, redLight, backwardsKeyboard, budget, entireClip, defendYourTeammate, randomGun,
    lessKeys, anime, mechanic, freeze, theBest, pause, botGun, hoard, newLanguage
];

// Universal Team Comps
const womenTeam = new Strat("Power to women", "All women and Sova (long hair)");
const slowAndThrow = new Strat("Slow and throw", "Sage, Viper, Pheonix, Raze and Brimstone. Slow your opponents using Sage ice field and Vipers shot to then throw all your grenades and molotovs");
const fullSmoke = new Strat("Full Smoke","Brimstone, Omen, Jett, Viper and Cypher. Try to through as many smokes as possible while entering sites");
const menTeam = new Strat("All Men","Choose any from (Phoenix, Breach, Brimstone, Cypher, Omen and Sova)");

// Universal Team Comp List
var universalTeamComp = [womenTeam, slowAndThrow, fullSmoke, menTeam];

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
    getStrat(side){
        if(side == "attack"){
            return this.getRandomAttackStrat();
        } else if (side == "defence"){
            return this.getRandomDefenceStrat();
        } else {
            return this.getTeamComp();
        }
    }
    getRandomAttackStrat(){
        if(this.checkUsedList(this.attackStrat, "attack") == true){
            return allAttack;
        }
        return this.getOpenStrats(this.attackStrat);
    }
    getRandomDefenceStrat(){
        if(this.checkUsedList(this.defenceStrat, "defence") == true){
            return allDefence;
        }
        return this.getOpenStrats(this.defenceStrat);
    }
    getTeamComp(){
        if(this.checkUsedList(this.teamComp, "team") == true){
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
        return this.getOpenStrats(this.teamComp);
    }
    checkUsedList(list, side){
        for(var i = 0; i < list.length; i++){
            if(list[i].getUsed() == false){
                return false;
            }
        }
        if(side != "team"){
            for(var i = 0; i < list.length; i++){
                list[i].setUsed(false);
            }
        }
        return true;
    }
    getOpenStrats(list){
        let openStrats = [];
        for(var i = 0; i < list.length; i++){
            if(list[i].getUsed() == false){
                openStrats.push(list[i]);
            }
        }
        var rand = Math.floor(Math.random() * openStrats.length);
        openStrats[rand].setUsed(true);
        return openStrats[rand];
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