document.addEventListener('DOMContentLoaded', () => {

    // ====================================================================
    // "DATABASE" KATALOG GAME ANDA
    // Untuk mengupdate di masa depan, cukup ubah data di bawah ini.
    // ====================================================================
    const gameCatalog = [
        {
            title: '7DS: Grand Cross',
            imageUrl: 'https://i.ibb.co/L8mN92s/7ds-background-epic.jpg',
            link: '7dsgc.html',
            status: 'active',
            isPopular: true
        },
        {
            title: 'Umamusume:Pretty Derby',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=UPD',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Genshin Impact',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=Genshin',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Valorant',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=Valorant',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Free Fire',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=Free+Fire',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'PUBG Mobile',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=PUBGM',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Honkai: Star Rail',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=HSR',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'EA FC 24',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=EAFC24',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'eFootball',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=eFootball',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Clash of Clans',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=CoC',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'League of Legends',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=LoL',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Dota 2',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=Dota+2',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Point Blank',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=PB',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Arena of Valor',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=AOV',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Call of Duty Mobile',
            imageUrl: 'https://via.placeholder.com/300x400/2c3e50/ecf0f1?text=CODM',
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
        cardLink.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${game.imageUrl}" alt="${game.title}">
                <div class="status-tag">${tagText}</div>
            </div>
            <div class="card-content">
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
