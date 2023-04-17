const themeBody = document.querySelector('.switch-body');
const header = document.querySelector('.header-nav');
const lineBg = document.querySelector('.switch-line');
const root = document.documentElement;

const switchItems = lineBg.children;

if (!localStorage.getItem('theme')) {
    orangeTheme()
} else {
    switch (localStorage.getItem('theme')) {
        case 'yellow':
            yellowTheme()
            break;
        case 'red':
            redTheme()
            break;
        case 'orange':
            orangeTheme()
            break;
    }

}

function hendleSwitchTheme(e) {
    if (e.target.tagName === 'LI') {
        switch (Object.keys(e.target.dataset).join('')) {
            case 'yellow':
                yellowTheme()
                break;
            case 'red':
                redTheme()
                break;
            case 'orange':
                orangeTheme()
                break;
        }
    }
}


function yellowTheme() {
    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/bg-yel-1x-320w.jpg)';
    header.style.backgroundColor = '#ece913';
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    header.style.backgroundRepeat = 'no-repeat'
    root.style.setProperty('--var-color-primary', '#ece913');
    lineBg.style.backgroundColor = 'rgba(236, 233, 19, 0.5)';
    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
        header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/bg-yel-2x-320w.jpg)';
    }
    if (window.innerWidth >= 480) {
        header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/bg-yel-1x.jpg)';

        if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
            header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/bg-yel-2x.jpg)';
        }
    }
    localStorage.setItem('theme', 'yellow');
    const activeItem = lineBg.querySelector('.switch--active');
    if (activeItem) activeItem.classList.remove('switch--active');
    switchItems[0].classList.add('switch--active')
}

function redTheme() {
    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/bg-red-1x-320w.jpg)';
    header.style.backgroundColor = '#B92F2C';
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    header.style.backgroundRepeat = 'no-repeat'
    lineBg.style.backgroundColor = 'rgba(185, 47, 44, 0.5)';
    root.style.setProperty('--var-color-primary', '#B92F2C');
    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
        header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/bg-red-2x-320w.jpg)';
    }
    if (window.innerWidth >= 480) {
        header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/bg-red-1x.jpg)';

        if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
            header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/bg-red-2x.jpg)';
        }
    }
    localStorage.setItem('theme', 'red');
    const activeItem = lineBg.querySelector('.switch--active');
    if (activeItem) activeItem.classList.remove('switch--active');
    switchItems[1].classList.add('switch--active')
}

function orangeTheme() {
    header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/background_1x_320.jpg)';
    header.style.backgroundColor = 'rgba(255, 152, 13, 0.9)';
    lineBg.style.backgroundColor = 'rgba(255, 152, 13, 0.5)';
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    header.style.backgroundRepeat = 'no-repeat';
    root.style.setProperty('--var-color-primary', '#FFA225');
    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
        header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/background_2x_320.jpg)';
    }
    if (window.innerWidth >= 480) {
        header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/background_1x_1200.jpg)';

        if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
            header.style.backgroundImage = 'linear-gradient(267.62deg, rgba(255, 156, 46, 0) 78.46%, #ffa225 97.43%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/bg/background_2x_1200.jpg)';
        }
    }
    localStorage.setItem('theme', 'orange');
    const activeItem = lineBg.querySelector('.switch--active');
    if (activeItem) activeItem.classList.remove('switch--active');
    switchItems[2].classList.add('switch--active')
}

themeBody.addEventListener('click', hendleSwitchTheme)