document.addEventListener('DOMContentLoaded', () => {
    const gameCatalog = [
        {
            title: '7DS: Grand Cross',
            imageUrl: 'https://images.ctfassets.net/vplk1b08x40x/3232I4I32aZ4b1Iqg454C/117c2a233e5c3e62597285a31a986c75/7DS_Oktoberfest_Main_Art.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/An1-MMf-31-h-Fxy3226a2f_bABs-k2Br-v-S-1-yaG2-vWXb-2-lq2_12-TUl_i_Q=s256',
            link: '7dsgc.html',
            status: 'active',
            isPopular: true
        },
        {
            title: 'Uma Musume: Pretty Derby',
            imageUrl: 'https://pbs.twimg.com/media/F6nZk9zbgAAaH2I?format=jpg&name=4096x4096',
            logoUrl: 'https://play-lh.googleusercontent.com/z4b0-8y3h2-1cE-m3czQ-Fh1O21W-WJ3M2b-b-6G-PhDE0-y_ac-a-20-wS-I-Q-Q-A=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Genshin Impact',
            imageUrl: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/2022/08/17/30c7b39d78426d1752c4a93361834241_315181750244634289.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/yIz2i-i-bZHul-15-z65-b-i_T-8D_9-cRZg_ITP_q-ma-yAn3-l-45-70-H-A-A-4g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Valorant',
            imageUrl: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f07233bf8332746/64657df143f6312258756972/Val_Banner_PatchNotes_8-09.jpg',
            logoUrl: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/valorant_logo_icon_190013.png',
            link: '#',
            status: 'coming-soon',
            isPopular: true
        },
        {
            title: 'Free Fire',
            imageUrl: 'https://webstatic.ff.garena.com/official/files/202407/a6b998bb55a73e51240a5ee877f884a4.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/e3o0-E-8Ec-2-CrdoA-0v2-tA-M-mMj3-5-hY-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'PUBG Mobile',
            imageUrl: 'https://www.pubgmobile.com/images/event/home/kv.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/L-EEE0nU_o-8Pyk44s-z-1-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Honkai: Star Rail',
            imageUrl: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/2023/10/18/439d092c4310d5a4176722d3d9876f1c_4169542890659979929.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/y-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'EA FC MOBILE 24',
            imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/fc/fc-24/global-assets/f24-keyart-16x9.jpg.adapt.320w.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/qA-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'eFootball 2024',
            imageUrl: 'https://www.konami.com/efootball/s/img/asset/efootball_2024_top_bg_pc.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Clash of Clans',
            imageUrl: 'https://clashofclans.com/uploaded-images-blog/clash-of-clans-banner_1684347209.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'League of Legends: Wild Rift',
            imageUrl: 'https://www.leagueoflegends.com/static/open-graph-b586ac0b6689b78248a3360341512403.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Dota 2',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg',
            logoUrl: 'https://static.wikia.nocookie.net/logopedia/images/7/74/Dota_2_Icon.svg/revision/latest?cb=20210204113112',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Point Blank: Strike',
            imageUrl: 'https://www.pointblank.id/images/news/2024/07/09/c2f82c9e74/images/main-kv.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Arena of Valor',
            imageUrl: 'https://www.arenaofvalor.com/images/kv_m.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
            link: '#',
            status: 'coming-soon',
            isPopular: false
        },
        {
            title: 'Call of Duty Mobile',
            imageUrl: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mobile/home/new-season/s6/m/codm-s6-home-kv-m.jpg',
            logoUrl: 'https://play-lh.googleusercontent.com/A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-A-g=s256',
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
