const themeBody = document.querySelector('.switch-body');
const header = document.querySelector('.header-nav');
const lineBg = document.querySelector('.switch-line');

console.log(header)

function hendleSwitchTheme({ target }) {
    if (target.tagName === 'LI') {
        console.log(Object.keys(target.dataset).join(''))
        switch (Object.keys(target.dataset).join('')) {
            case 'yellow':
                console.log('y')
                header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-1x-320w.jpg)';

                if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-2x-320w.jpg)';
                }
                if (window.innerWidth >= 480) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-1x.jpg)';

                    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                        header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-2x.jpg)';
                    }
                }
                break;
            case 'red':
                console.log('r')
                header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-1x-320w.jpg)';

                if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-2x-320w.jpg)';
                }
                if (window.innerWidth >= 480) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-1x.jpg)';

                    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                        header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-2x.jpg)';
                    }
                }
                break;
            case 'orange':
                console.log('y')
                header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-1x-320w.jpg)';

                if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-2x-320w.jpg)';
                }
                if (window.innerWidth >= 480) {
                    header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-1x.jpg)';

                    if (window.devicePixelRatio > 1 || (window.matchMedia && (window.matchMedia('(min-resolution: 192dpi)').matches || window.matchMedia('(min-resolution: 2dppx)').matches))) {
                        header.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 65.37%), url(../images/bg/bg-yel-2x.jpg)';
                    }
                }
                break;
        }


    }
}

themeBody.addEventListener('click', hendleSwitchTheme)

