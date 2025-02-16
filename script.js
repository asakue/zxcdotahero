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

    // Героев, для которых будут показаны специальные сообщения
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

    resetButton.disabled = true;

    // Функция для скрытия всех сообщений
    const hideAllMessages = () => {
        goulMessage.classList.add('hidden');
        beerMessage.classList.add('hidden');
        enigmaMessage.classList.add('hidden');
        zemelyaMessage.classList.add('hidden');
        terrorMessage.classList.add('hidden');
        ioMessage.classList.add('hidden');
        EarthshakerMessage.classList.add('hidden');
        enigmaMessage.classList.add('hidden');
        antimagerMessage.classList.add('hidden');
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
        } else if (chosenHero === 'Earth Spirit') {
            zemelyaMessage.classList.remove('hidden');
        }    else if (chosenHero === 'Terrorblade') {
            terrorMessage.classList.remove('hidden');
        }   else if (chosenHero === 'Io') {
            ioMessage.classList.remove('hidden');
        }   else if (chosenHero === 'Earthshaker') {
            EarthshakerMessage.classList.remove('hidden');
        }   else if (chosenHero === 'Anti-Mage') {
            antimagerMessage.classList.remove('hidden');
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
