document.addEventListener('DOMContentLoaded', () => {
    const gameCatalog = [
        {
            title: '7DS: Grand Cross',
            imageUrl: 'banergrid.png',
            link: '7dsgc.html',
            status: 'active',
            isPopular: true
        },
        {
            title: 'Uma Musume: Pretty Derby',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Genshin Impact',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Valorant',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Dota 2',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Free Fire',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'PUBG Mobile',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Honkai: Star Rail',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'EA FC MOBILE 24',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'eFootball 2024',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Clash of Clans',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'League of Legends: Wild Rift',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Point Blank: Strike',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Arena of Valor',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Call of Duty Mobile',
            imageUrl: 'banergrid.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        }
    ];

    const createGameCard = (game) => {
        const cardClass = game.status === 'coming-soon' ? 'game-card coming-soon' : 'game-card';
        const tagText = game.status === 'coming-soon' ? 'Segera Hadir' : 'Tersedia';
        const cardLink = document.createElement('a');
        cardLink.href = game.link;
        cardLink.className = cardClass;
        
        const logoHtml = game.imageUrl
            ? `<img src="${game.imageUrl}" alt="${game.title} Logo" class="card-logo">`
            : '';
            
        cardLink.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${game.imageUrl}" alt="${game.title}">
                <div class="status-tag">${tagText}</div>
            </div>
            <div class="card-content">
                ${logoHtml}
                <h3>${game.title}</h3>
            </div>
        `;
        return cardLink;
    };

    const renderCatalogs = () => {
        const popularContainer = document.getElementById('popular-container');
        const productGrid = document.getElementById('product-grid');
        if (!popularContainer || !productGrid) return;
        popularContainer.innerHTML = '';
        productGrid.innerHTML = '';
        gameCatalog.forEach(game => {
            const card = createGameCard(game);
            productGrid.appendChild(card.cloneNode(true));
            if (game.isPopular) {
                popularContainer.appendChild(card);
            }
        });
    };

    renderCatalogs();
});
