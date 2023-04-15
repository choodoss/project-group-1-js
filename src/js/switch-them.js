const themeBody = document.querySelector('.switch-body');
const header = document.querySelector('.header-nav');
const lineBg = document.querySelector('.switch-line');
const root = document.documentElement;

const switchList = document.querySelector('.switch-line');
const switchItems = switchList.children;


switchItems[2].classList.add('switch--active');// Додаємо клас switch--active до останнього елементу списку

switchList.addEventListener('click', function (event) {
    const clickedItem = event.target.closest('li');
    if (!clickedItem || !switchList.contains(clickedItem)) return;

    const activeItem = switchList.querySelector('.switch--active');
    if (activeItem) activeItem.classList.remove('switch--active');

    clickedItem.classList.add('switch--active');
});

function hendleSwitchTheme(e) {
    if (e === undefined) {
        header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_1x_320.0bfcda2f.jpg)';
        header.style.backgroundColor = 'rgba(255, 152, 13, 0.9)';
        lineBg.style.backgroundColor = 'rgba(255, 152, 13, 0.5)';
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
        header.style.backgroundRepeat = 'no-repeat';
        root.style.setProperty('--var-color-primary', '#FFA225');
        if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
            header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_2x_320.47e90df4.jpg)';
        }
        if (window.innerWidth >= 480) {
            header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_1x_1200.13d23d1a.jpg)';

            if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_2x_1200.a640d600.jpg)';
            }
        }
        return;
    }

    if (e.target.tagName === 'LI') {
        switch (Object.keys(e.target.dataset).join('')) {
            case 'yellow':
                header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./bg-yel-1x-320w.5e72ba0c.jpg)';
                header.style.backgroundColor = '#ece913';
                header.style.backgroundSize = 'cover';
                header.style.backgroundPosition = 'center';
                header.style.backgroundRepeat = 'no-repeat'
                root.style.setProperty('--var-color-primary', '#ece913');
                lineBg.style.backgroundColor = 'rgba(236, 233, 19, 0.5)';
                if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./bg-yel-2x-320w.a92a628b.jpg)';
                }
                if (window.innerWidth >= 480) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./bg-yel-1x.94a242f5.jpg';

                    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                        header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./bg-yel-2x.6935a1f1.jpg';
                    }
                }
                break;
            case 'red':
                header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./bg-red-1x-320w.a05c4f8a.jpg)';
                header.style.backgroundColor = '#B92F2C';
                header.style.backgroundSize = 'cover';
                header.style.backgroundPosition = 'center';
                header.style.backgroundRepeat = 'no-repeat'
                lineBg.style.backgroundColor = 'rgba(185, 47, 44, 0.5)';
                root.style.setProperty('--var-color-primary', '#B92F2C');
                if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./bg-red-2x-320w.c49671d9.jpg)';
                }
                if (window.innerWidth >= 480) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./bg-red-1x.bdc0b77f.jpg)';

                    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                        header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./bg-red-2x.ff5a966b.jpg)';
                    }
                }
                break;
            case 'orange':
                header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_1x_320.0bfcda2f.jpg)';
                header.style.backgroundColor = 'rgba(255, 152, 13, 0.9)';
                lineBg.style.backgroundColor = 'rgba(255, 152, 13, 0.5)';
                header.style.backgroundSize = 'cover';
                header.style.backgroundPosition = 'center';
                header.style.backgroundRepeat = 'no-repeat';
                root.style.setProperty('--var-color-primary', '#FFA225');
                if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                    header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_2x_320.47e90df4.jpg)';
                }
                if (window.innerWidth >= 480) {
                    header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_1x_1200.13d23d1a.jpg)';

                    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                        header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_2x_1200.a640d600.jpg)';
                    }
                }
                break;
            default:
                header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_1x_320.0bfcda2f.jpg)';
                header.style.backgroundColor = 'rgba(255, 152, 13, 0.9)';
                lineBg.style.backgroundColor = 'rgba(255, 152, 13, 0.5)';
                header.style.backgroundSize = 'cover';
                header.style.backgroundPosition = 'center';
                header.style.backgroundRepeat = 'no-repeat';
                root.style.setProperty('--var-color-primary', '#FFA225');
                if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                    header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_2x_320.47e90df4.jpg)';
                }
                if (window.innerWidth >= 480) {
                    header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_1x_1200.13d23d1a.jpg)';

                    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                        header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(./background_2x_1200.a640d600.jpg)';
                    }
                }
                break;
        }
    }
}

hendleSwitchTheme()

themeBody.addEventListener('click', hendleSwitchTheme)