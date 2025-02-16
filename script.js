document.addEventListener('DOMContentLoaded', () => {
    const heroes = {
        all: [
            'Abaddon', 'Alchemist', 'Ancient Apparition', 'Anti-Mage', 'Arc Warden',
            'Axe', 'Bane', 'Batrider', 'Beastmaster', 'Bloodseeker', 'Bounty Hunter',
            'Brewmaster', 'Bristleback', 'Broodmother', 'Centaur Warrunner', 'Chaos Knight',
            'Chen', 'Clinkz', 'Clockwerk', 'Crystal Maiden', 'Dark Seer', 'Dark Willow',
            'Dawnbreaker', 'Dazzle', 'Death Prophet', 'Disruptor', 'Doom', 'Dragon Knight',
            'Drow Ranger', 'Earth Spirit', 'Earthshaker', 'Elder Titan', 'Ember Spirit',
            'Enchantress', 'Enigma', 'Faceless Void', 'Grimstroke', 'Gyrocopter', 'Hoodwink',
            'Huskar', 'Invoker', 'Io', 'Jakiro', 'Juggernaut', 'Keeper of the Light',
            'Kunkka', 'Legion Commander', 'Leshrac', 'Lich', 'Lifestealer', 'Lina',
            'Lion', 'Lone Druid', 'Luna', 'Lycan', 'Magnus', 'Marci', 'Mars', 'Medusa',
            'Meepo', 'Mirana', 'Monkey King', 'Morphling', 'Muerta', 'Naga Siren',
            'Nature\'s Prophet', 'Necrophos', 'Night Stalker', 'Nyx Assassin', 'Ogre Magi',
            'Omniknight', 'Oracle', 'Outworld Destroyer', 'Pangolier', 'Phantom Assassin',
            'Phantom Lancer', 'Phoenix', 'Primal Beast', 'Puck', 'Pudge', 'Pugna',
            'Queen of Pain', 'Razor', 'Riki', 'Rubick', 'Sand King', 'Shadow Demon',
            'Shadow Fiend', 'Shadow Shaman', 'Silencer', 'Skywrath Mage', 'Slardar',
            'Slark', 'Snapfire', 'Sniper', 'Spectre', 'Spirit Breaker', 'Storm Spirit',
            'Sven', 'Techies', 'Templar Assassin', 'Terrorblade', 'Tidehunter',
            'Timbersaw', 'Tinker', 'Tiny', 'Treant Protector', 'Troll Warlord', 'Tusk',
            'Underlord', 'Undying', 'Ursa', 'Vengeful Spirit', 'Venomancer', 'Viper',
            'Visage', 'Void Spirit', 'Warlock', 'Weaver', 'Windranger', 'Winter Wyvern',
            'Witch Doctor', 'Wraith King', 'Zeus'
        ],
        strength: [
            'Axe', 'Beastmaster', 'Brewmaster', 'Bristleback', 'Centaur Warrunner', 
    'Chaos Knight', 'Clockwerk', 'Dawnbreaker', 'Doom', 'Dragon Knight', 
    'Earth Spirit', 'Earthshaker', 'Elder Titan', 'Huskar', 'Io', 
    'Kunkka', 'Legion Commander', 'Lifestealer', 'Lycan', 'Magnus', 
    'Marci', 'Mars', 'Night Stalker', 'Omniknight', 'Phoenix', 
    'Pudge', 'Sand King', 'Slardar', 'Snapfire', 'Spirit Breaker', 
    'Sven', 'Tidehunter', 'Timbersaw', 'Tiny', 'Treant Protector', 
    'Tusk', 'Underlord', 'Undying', 'Wraith King'
        ],
        agility: [
           'Anti-Mage', 'Arc Warden', 'Bloodseeker', 'Bounty Hunter', 'Broodmother',
    'Clinkz', 'Drow Ranger', 'Ember Spirit', 'Faceless Void', 'Gyrocopter',
    'Hoodwink', 'Juggernaut', 'Lone Druid', 'Luna', 'Medusa', 
    'Meepo', 'Mirana', 'Monkey King', 'Morphling', 'Naga Siren',
    'Nyx Assassin', 'Pangolier', 'Phantom Assassin', 'Phantom Lancer', 'Razor',
    'Riki', 'Shadow Fiend', 'Slark', 'Sniper', 'Spectre',
    'Templar Assassin', 'Terrorblade', 'Troll Warlord', 'Ursa', 'Vengeful Spirit',
    'Venomancer', 'Viper', 'Weaver'
        ],
        intelligence: [
            'Ancient Apparition', 'Bane', 'Batrider', 'Chen', 'Crystal Maiden',
    'Dark Seer', 'Dark Willow', 'Dazzle', 'Death Prophet', 'Disruptor',
    'Enchantress', 'Enigma', 'Grimstroke', 'Invoker', 'Jakiro',
    'Keeper of the Light', 'Leshrac', 'Lich', 'Lina', 'Lion',
    'Nature\'s Prophet', 'Necrophos', 'Ogre Magi', 'Oracle', 'Outworld Destroyer',
    'Puck', 'Pugna', 'Queen of Pain', 'Rubick', 'Shadow Demon',
    'Shadow Shaman', 'Silencer', 'Skywrath Mage', 'Storm Spirit', 'Techies',
    'Tinker', 'Visage', 'Void Spirit', 'Warlock', 'Windranger',
    'Winter Wyvern', 'Witch Doctor', 'Zeus'
        ],
        universal: [
            'Void Spirit', 'Snapfire', 'Hoodwink', 'Marci', 'Muerta'
            
        ]
    };

    const gulHeroes = ['Spectre', 'Templar Assassin', 'Tinker', 'Void Spirit', 'Phantom Assassin', 'Shadow Fiend'];
    const beerHeroes = ['Spirit Breaker', 'Tidehunter', 'Treant Protector', 'Viper', 'Dark Seer', 'Warlock'];

    const randomizeButton = document.getElementById('randomize-hero');
    const resetButton = document.getElementById('reset-hero');
    const heroDisplay = document.getElementById('hero-display');
    const goulMessage = document.getElementById('goul-message');
    const beerMessage = document.getElementById('beer-message');
    const enigmaMessage = document.getElementById('enigma-message');
    const zemelyaMessage = document.getElementById('zemelya-message');
    const terrorMessage = document.getElementById('terrorblade-message');
    const ioMessage = document.getElementById('io-message');
    const EarthshakerMessage = document.getElementById('earthshaker-message');
    const antimagerMessage = document.getElementById('antimage-message');
    const sosoMessage = document.getElementById('soso-message');

    resetButton.disabled = true;
    const hideAllMessages = () => {
        goulMessage.classList.add('hidden');
        beerMessage.classList.add('hidden');
        enigmaMessage.classList.add('hidden');
        zemelyaMessage.classList.add('hidden');
        terrorMessage.classList.add('hidden');
        ioMessage.classList.add('hidden');
        EarthshakerMessage.classList.add('hidden');
        antimagerMessage.classList.add('hidden');
        sosoMessage.classList.add('hidden');
    };

    randomizeButton.addEventListener('click', () => {
        const selectedAttribute = document.querySelector('input[name="attribute"]:checked').value;
        const selectedHeroes = heroes[selectedAttribute];
        const randomIndex = Math.floor(Math.random() * selectedHeroes.length);
        const chosenHero = selectedHeroes[randomIndex];
        heroDisplay.textContent = `Ваш герой: ${chosenHero}`;
        
        hideAllMessages();
        
        if (gulHeroes.includes(chosenHero)) {
            goulMessage.classList.remove('hidden');
        } else if (beerHeroes.includes(chosenHero)) {
            beerMessage.classList.remove('hidden');
        } else if (chosenHero === 'Enigma') {
            enigmaMessage.classList.remove('hidden');
        } else if (chosenHero === 'Earth Spirit') {
            zemelyaMessage.classList.remove('hidden');
        } else if (chosenHero === 'Terrorblade') {
            terrorMessage.classList.remove('hidden');
        } else if (chosenHero === 'Io') {
            ioMessage.classList.remove('hidden');
        } else if (chosenHero === 'Earthshaker') {
            EarthshakerMessage.classList.remove('hidden');
        } else if (chosenHero === 'Anti-Mage') {
            antimagerMessage.classList.remove('hidden');
        } else if (chosenHero === 'Lion') {
            sosoMessage.classList.remove('hidden');
        }

        randomizeButton.disabled = true;
        resetButton.disabled = false;
    });

    resetButton.addEventListener('click', () => {
        heroDisplay.textContent = '';
        hideAllMessages();
        randomizeButton.disabled = false;
        resetButton.disabled = true;
    });
});
