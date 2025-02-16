document.addEventListener('DOMContentLoaded', () => {
    const heroes = [
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
    ];

    const gulHeroes = ['Spectre', 'Templar Assassin', 'Terrorblade', 'Tinker', 'Void Spirit', 'Phantom Assassin', 'Shadow Fiend'];
    const beerHeroes = ['Spirit Breaker', 'Tidehunter', 'Treant Protector', 'Viper', 'Dark Seer', 'Warlock'];

    const randomizeButton = document.getElementById('randomize-hero');
    const resetButton = document.getElementById('reset-hero');
    const heroDisplay = document.getElementById('hero-display');
    const goulMessage = document.getElementById('goul-message');
    const beerMessage = document.getElementById('beer-message');
    const enigmaMessage = document.getElementById('enigma-message');

    resetButton.disabled = true;

    const hideAllMessages = () => {
        goulMessage.classList.add('hidden');
        beerMessage.classList.add('hidden');
        enigmaMessage.classList.add('hidden');
    };

    randomizeButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * heroes.length);
        const chosenHero = heroes[randomIndex];
        heroDisplay.textContent = `Ваш герой: ${chosenHero}`;
        
        hideAllMessages();
        
        if (gulHeroes.includes(chosenHero)) {
            goulMessage.classList.remove('hidden');
        } else if (beerHeroes.includes(chosenHero)) {
            beerMessage.classList.remove('hidden');
        } else if (chosenHero === 'Enigma') {
            enigmaMessage.classList.remove('hidden');
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
