document.addEventListener('DOMContentLoaded', () => {

    // ====================================================================
    // "DATABASE" KATALOG GAME ANDA
    // Cukup ubah data di bawah ini untuk mengupdate.
    // ====================================================================
    const gameCatalog = [
        {
            title: '7DS: Grand Cross',
            imageUrl: 'https://images.ctfassets.net/vplk1b08x40x/3232I4I32aZ4b1Iqg454C/117c2a233e5c3e62597285a31a986c75/7DS_Oktoberfest_Main_Art.jpg',
            logoUrl: 'https://assets.ctfassets.net/vplk1b08x40x/3r6AS2iQidJ23n6Y9c8W5F/f2f518b0671846c433c66f68a735c026/7ds_logo_white.png',
            link: '7dsgc.html',
            status: 'active',
            isPopular: true
        },
        {
            title: 'Uma Musume: Pretty Derby',
            imageUrl: 'https://pbs.twimg.com/media/F6nZk9zbgAAaH2I?format=jpg&name=4096x4096',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Uma_Musume_Pretty_Derby_logo.svg/2560px-Uma_Musume_Pretty_Derby_logo.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Genshin Impact',
            imageUrl: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/2022/08/17/30c7b39d78426d1752c4a93361834241_315181750244634289.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/2560px-Genshin_Impact_logo.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Valorant',
            imageUrl: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f07233bf8332746/64657df143f6312258756972/Val_Banner_PatchNotes_8-09.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Free Fire',
            imageUrl: 'https://webstatic.ff.garena.com/official/files/202407/a6b998bb55a73e51240a5ee877f884a4.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Garena_Free_Fire_logo.svg/1024px-Garena_Free_Fire_logo.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'PUBG Mobile',
            imageUrl: 'https://www.pubgmobile.com/images/event/home/kv.jpg',
            logoUrl: 'https://1000logos.net/wp-content/uploads/2020/09/PUBG-Mobile-Logo.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Honkai: Star Rail',
            imageUrl: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/2023/10/18/439d092c4310d5a4176722d3d9876f1c_4169542890659979929.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Honkai-Star-Rail.svg/2560px-Honkai-Star-Rail.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'EA FC 24',
            imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/fc/fc-24/global-assets/f24-keyart-16x9.jpg.adapt.320w.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/EA_Sports_FC_24_logo.svg/2560px-EA_Sports_FC_24_logo.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'eFootball',
            imageUrl: 'https://www.konami.com/efootball/s/img/asset/efootball_2024_top_bg_pc.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/EFootball_logo.svg/2560px-EFootball_logo.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Clash of Clans',
            imageUrl: 'https://clashofclans.com/uploaded-images-blog/clash-of-clans-banner_1684347209.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Clash_of_Clans_Logo.svg/200px-Clash_of_Clans_Logo.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'League of Legends',
            imageUrl: 'https://www.leagueoflegends.com/static/open-graph-b586ac0b6689b78248a3360341512403.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/2560px-League_of_Legends_2019_vector.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Dota 2',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dota2_logo.svg/2560px-Dota2_logo.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Point Blank',
            imageUrl: 'https://www.pointblank.id/images/news/2024/07/09/c2f82c9e74/images/main-kv.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/id/thumb/d/df/Point_Blank_Zepetto_logo_2019.png/1024px-Point_Blank_Zepetto_logo_2019.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Arena of Valor',
            imageUrl: 'https://www.arenaofvalor.com/images/kv_m.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Arena_of_Valor_logo.svg/2560px-Arena_of_Valor_logo.svg.png',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Call of Duty Mobile',
            imageUrl: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mobile/home/new-season/s6/m/codm-s6-home-kv-m.jpg',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Call_of_Duty_Mobile_logo.svg/2560px-Call_of_Duty_Mobile_logo.svg.png',
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
        const logoHtml = game.logoUrl 
            ? `<img src="${game.logoUrl}" alt="${game.title} Logo" class="card-logo">` 
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
