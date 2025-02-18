document.addEventListener('DOMContentLoaded', () => {
    const HERO_DATA = {         strength: [
        'Abaddon', 'Alchemist', 'Axe', 'Beastmaster', 'Brewmaster',
        'Bristleback', 'Centaur', 'Chaos Knight', 'Dawnbreaker', 'Doom',
        'Dragon Knight', 'Earthshaker', 'Huskar', 'Kunkka', 'Legion Commander',
        'Lifestealer', 'Lycan', 'Mars', 'Night Stalker', 'Primal Beast',
        'Pudge', 'Slardar', 'Spirit Breaker', 'Sven', 'Tidehunter',
        'Timbersaw', 'Tiny', 'Treant Protector', 'Tusk', 'Underlord',
        'Undying', 'Wraith King'
    ],
    agility: [
        'Anti-Mage', 'Arc Warden', 'Bloodseeker', 'Bounty Hunter',
        'Clinkz', 'Drow Ranger', 'Ember Spirit', 'Faceless Void',
        'Gyrocopter', 'Hoodwink', 'Juggernaut', 'Luna', 'Medusa',
        'Monkey King', 'Morphling', 'Naga Siren', 'Phantom Assassin',
        'Phantom Lancer', 'Razor', 'Riki', 'Shadow Fiend', 'Slark',
        'Sniper', 'Spectre', 'Templar Assassin', 'Terrorblade',
        'Troll Warlord', 'Ursa', 'Vengeful Spirit', 'Venomancer', 'Viper'
    ],
    intelligence: [
        'Ancient Apparition', 'Bane', 'Batrider', 'Chen',
        'Crystal Maiden', 'Dark Willow', 'Dazzle', 'Death Prophet',
        'Disruptor', 'Enchantress', 'Enigma', 'Grimstroke', 'Invoker',
        'Jakiro', 'Keeper of the Light', 'Leshrac', 'Lich', 'Lina',
        'Lion', 'Nature\'s Prophet', 'Necrophos', 'Oracle', 'Outworld Destroyer',
        'Puck', 'Pugna', 'Queen of Pain', 'Rubick', 'Shadow Demon',
        'Skywrath Mage', 'Storm Spirit', 'Techies', 'Tinker', 'Visage',
        'Warlock', 'Windranger', 'Winter Wyvern', 'Witch Doctor', 'Zeus'
    ],
    universal: [
        'Void Spirit', 'Muerta', 'Marci', 'Dawnbreaker', 'Pangolier',
        'Snapfire', 'Dark Seer', 'Magnus', 'Earth Spirit', 'Io'
    ]
};
    const SPECIAL_MESSAGES = {         'Spectre': ['ДА ТЫ РЕАЛЬНЫЙ ГУЛЬ', 'ТЕНЕВОЙ ДЕМОН'],
        'Tinker': ['ХАКЕР ДЕТЕКТЕД', 'РЕПЕТЕР 9000'],
        'Earthshaker': ['ЗЕМЛЕТРЯСЕНИЕ!', 'БЕЛГОРОДСКОЕ БРЕВНО'],
        'Techies': ['БУМ-БУМ-БАХ!', 'МИНА-САМОУБИЙЦА'],
        'Pudge': ['МЯСНОЙ ЦЕХ', 'ХУКЕР 3000'],
        'Anti-Mage': ['МАНА-ХАКЕР', 'РАДИК НЕ СПАСЁТ'],
        'Invoker': ['10 ПАЛЬЦЕВ', 'ОРБИТАЛЬНЫЙ УДАР'],
        'Lion': ['СОСИ-ХВАТАЙ', 'ПАЛЬЦЫ В РОТ'],
        'Io': ['ШАРИКИ НАСВИСТЕЛЬ', 'АСТРАЛЬНЫЙ ВАМПИР'],
        'Meepo': ['КЛОНИРОВАНИЕ!', '5 В 1'],
        'Chen': ['АДМИН ДОТЫ', 'КРЕСТОНОСЕЦ']
 };

    const DOM = {
        rouletteTrack: document.getElementById('rouletteTrack'),
        spinBtn: document.getElementById('spinBtn'),
        resetBtn: document.getElementById('resetBtn'),
        attributeRadios: document.querySelectorAll('input[name="attribute"]'),
        specialMessage: document.getElementById('specialMessage'),
        messageText: document.getElementById('messageText'),
        continueBtn: document.getElementById('continueBtn')
    };

    let currentHero = null;
    let isSpinning = false;
    let startTime = null;
    let spinDuration = 3000;

    const init = () => {
        generateRouletteItems();
        setupEventListeners();
    };

    const generateRouletteItems = () => {
        DOM.rouletteTrack.innerHTML = '';
        const attribute = document.querySelector('input[name="attribute"]:checked').value;
        const heroes = attribute === 'all' 
            ? Object.values(HERO_DATA).flat() 
            : HERO_DATA[attribute];

        heroes.forEach(hero => {
            const item = document.createElement('div');
            item.className = 'roulette-item';
            item.textContent = hero;
            DOM.rouletteTrack.appendChild(item);
        });

        DOM.rouletteTrack.style.width = `${heroes.length * 150}px`;
    };

    const setupEventListeners = () => {
        DOM.spinBtn.addEventListener('click', startSpin);
        DOM.resetBtn.addEventListener('click', resetRoulette);
        DOM.continueBtn.addEventListener('click', hideMessage);
        DOM.attributeRadios.forEach(radio => {
            radio.addEventListener('change', handleAttributeChange);
        });
    };

    const startSpin = () => {
        if (isSpinning) return;
        isSpinning = true;
        DOM.spinBtn.disabled = true;
        startTime = Date.now();
        animate();
    };

    const animate = () => {
        const progress = (Date.now() - startTime) / spinDuration;
        
        if (progress < 1) {
            DOM.rouletteTrack.style.transform = `translateX(${-progress * 2000}%)`;
            requestAnimationFrame(animate);
        } else {
            finishSpin();
        }
    };

    const finishSpin = () => {
        const items = Array.from(DOM.rouletteTrack.children);
        const randomIndex = Math.floor(Math.random() * items.length);
        currentHero = items[randomIndex].textContent;
        
        DOM.rouletteTrack.style.transform = `translateX(${-randomIndex * 150}px)`;
        DOM.resetBtn.disabled = false;
        isSpinning = false;
        
        if (SPECIAL_MESSAGES[currentHero]) {
            showSpecialMessage();
        }
    };

    const showSpecialMessage = () => {
        DOM.messageText.textContent = SPECIAL_MESSAGES[currentHero][
            Math.floor(Math.random() * SPECIAL_MESSAGES[currentHero].length)
        ];
        DOM.specialMessage.classList.remove('hidden');
    };

    const resetRoulette = () => {
        DOM.rouletteTrack.style.transition = 'none';
        DOM.rouletteTrack.style.transform = 'translateX(0)';
        setTimeout(() => {
            DOM.rouletteTrack.style.transition = 'transform 2s cubic-bezier(0.25, 0.1, 0.25, 1)';
        }, 10);
        
        DOM.resetBtn.disabled = true;
        DOM.spinBtn.disabled = false;
        currentHero = null;
        hideMessage();
    };

    const hideMessage = () => {
        DOM.specialMessage.classList.add('hidden');
    };

    const handleAttributeChange = () => {
        generateRouletteItems();
        resetRoulette();
    };

    init();
});
