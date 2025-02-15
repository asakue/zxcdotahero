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

    const gulHeroes = ['Spectre', 'Templar Assassin', 'Terrorblade', 'Tinker', 'Void Spirit','Phantom Assassin','Shadow Fiend'];
    const beerHeroes = ['Spirit Breaker', 'Tidehunter', 'Treant Protector', 'Viper','Dark Seer','Warlock'];
    
   
        const randomizeButton = document.getElementById('randomize-hero');
        const heroDisplay = document.getElementById('hero-display');
        const specialMessage = document.getElementById('special-message');
    
        // Добавляем переменную для хранения ID анимации
        let animationId = null;
    
        const getRandomHero = () => {
            const randomIndex = Math.floor(Math.random() * heroes.length);
            return heroes[randomIndex];
        };
    
        const showSpecialMessage = (text, className) => {
            // Останавливаем предыдущую анимацию
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
    
            // Сбрасываем позицию сообщения
            specialMessage.style.left = '50%';
            specialMessage.style.top = '50%';
            specialMessage.textContent = text;
            specialMessage.className = className;
            specialMessage.classList.remove('hidden');
    
            if (className === 'beer-message') {
                // Начальные координаты и скорость
                let x = Math.random() * window.innerWidth * 0.8;
                let y = Math.random() * window.innerHeight * 0.8;
                let dx = 5;
                let dy = 5;
    
                const moveMessage = () => {
                    const rect = specialMessage.getBoundingClientRect();
                    
                    // Проверка столкновений с границами с учетом размера элемента
                    if (x + rect.width >= window.innerWidth || x <= 0) {
                        dx = -dx;
                        x = x <= 0 ? 0 : window.innerWidth - rect.width;
                    }
                    if (y + rect.height >= window.innerHeight || y <= 0) {
                        dy = -dy;
                        y = y <= 0 ? 0 : window.innerHeight - rect.height;
                    }
    
                    x += dx;
                    y += dy;
                    
                    specialMessage.style.left = `${x}px`;
                    specialMessage.style.top = `${y}px`;
                    
                    animationId = requestAnimationFrame(moveMessage);
                };
                
                moveMessage();
            }
    
            // Скрываем сообщение через 3 секунды
            setTimeout(() => {
                specialMessage.classList.add('hidden');
                if (className === 'beer-message' && animationId) {
                    cancelAnimationFrame(animationId);
                }
            }, 3000);
        };
    
        randomizeButton.addEventListener('click', () => {
            const chosenHero = getRandomHero();
            heroDisplay.textContent = `Ваш герой: ${chosenHero}`;
            
            // Сбрасываем анимацию при новом выборе
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
            specialMessage.classList.add('hidden');
    
            if (gulHeroes.includes(chosenHero)) {
                showSpecialMessage('да ты реальный гуль', 'gul-message');
            } else if (beerHeroes.includes(chosenHero)) {
                showSpecialMessage('пиво', 'beer-message');
            }
        });
    });