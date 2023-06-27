// Define arrays for races and classes
var races = ['Human', 'Orc', 'Dwarf', 'Night Elf', 'Undead', 'Tauren', 'Gnome', 'Troll', 'Blood Elf', 'Draenei', 'Worgen', 'Goblin', 'Pandaren'];
var classes = ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Death Knight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demon Hunter'];

// Function to generate a random combination
function generateRandomCombination() {
    var randomRaceIndex = Math.floor(Math.random() * races.length);
    var randomClassIndex = Math.floor(Math.random() * classes.length);
    var randomRace = races[randomRaceIndex];
    var randomClass = classes[randomClassIndex];

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'You got: ' + randomRace + ' ' + randomClass;
}
