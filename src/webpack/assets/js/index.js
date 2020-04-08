import 'lean-blog-web-components/src/app-bar';

window.onload = function(){
    const mq = window.matchMedia('(max-width: 475px)');
    const appbar = document.querySelector('lbwc-app-bar');

    const handleMediaQuery = (mediaQuery) => {
        if(mediaQuery.matches && !appbar.hasAttribute('mobile')) {    
            appbar.setAttribute('mobile','');
        }
        
        if(!mediaQuery.matches && appbar.hasAttribute('mobile')) {
            appbar.removeAttribute('mobile')
        }
    }

    handleMediaQuery(mq);
    mq.addListener(handleMediaQuery);
}


