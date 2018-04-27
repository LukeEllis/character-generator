console.log("javascript loaded!")

var races = [
    "Aasimar",
    "Bugbear",
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Firbolg",
    "Genasi",
    "Gnome",
    "Goblin",
    "Goliath",
    "Half-Elf",
    "Half-Orc",
    "Halfling",
    "Hobgoblin",
    "Human",
    "Kenku",
    "Kobold",
    "Lizardfolk",
    "Orc",
    "Tabaxi",
    "Tiefling",
    "Tortle",
    "Triton",
    "Yuan-Ti Pureblood",
    "Aarakocra",
    "Changeling",
    "Gith",
    "Grung",
    "Kender",
    "Minotaur",
    "Revenant",
    "Shifter",
    "Warforged"
]

var classes = [
    "Artificer",
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Mystic",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
]

var backgrounds = [
    "Acolyte",
    "Anthropologist",
    "Archaeologist",
    "Black Fist Double Agent",
    "Caravan Specialist",
    "Charlatan",
    "City Watch",
    "Clan Crafter",
    "Cloistered Scholar",
    "Cormanthor Refugee",
    "Courtier",
    "Criminal",
    "Dissenter",
    "Dragon Casualty",
    "Earthspur Miner",
    "Entertainer",
    "Faction Agent",
    "Far Traveler",
    "Folk Hero",
    "Gate Urchin",
    "Gladiator",
    "Guild Artisan",
    "Guild Merchant",
    "Harborfolk",
    "Haunted One",
    "Heretic",
    "Hermit",
    "Hillsfar Smuggler",
    "Inheritor",
    "Initiate",
    "Inquisitor",
    "Investigator",
    "Iron Route Bandit",
    "Knight",
    "Knight of the Order",
    "Mercenary Veteran",
    "Mulmaster Aristocrat",
    "Noble",
    "Outlander",
    "Phlan Insurgent",
    "Phlan Refugee",
    "Pirate",
    "Sage",
    "Sailor",
    "Secret Identity",
    "Shade Fanatic",
    "Soldier",
    "Spy",
    "Stojanow Prisoner",
    "Ticklebelly Nomad",
    "Trade Sheriff",
    "Urban Bounty Hunter",
    "Urchin",
    "Uthgardt Tribe Member",
    "Vizier",
    "Waterdhavian Noble"
]

var randomRace = Math.floor(Math.random()*races.length);

var randomClass = Math.floor(Math.random()*classes.length);

var randomBackground = Math.floor(Math.random()*backgrounds.length);

$(".race-generator").click(function(){
    $(".generated-character-race").empty();
    $(".generated-character-race").append(`<h2>You are a ${races[randomRace]}.</h2>`);
});

$(".class-generator").click(function(){
    $(".generated-character-class").empty();
    $(".generated-character-class").append(`<h2>You are a ${classes[randomClass]}.</h2>`);
});

$(".background-generator").click(function(){
    $(".generated-character-background").empty();
    $(".generated-character-background").append(`<h2>You are a ${backgrounds[randomBackground]}.</h2>`);
});

$(".character-refresh").click(function(){
    $(".generated-character-race").empty();
    $(".generated-character-class").empty();
    $(".generated-character-background").empty();
});