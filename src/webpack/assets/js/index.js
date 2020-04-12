import 'lean-blog-web-components/src/app-bar';
import 'lean-blog-web-components/src/nav-link';

window.onload = function(){
    const mq = window.matchMedia('(max-width: 480px)');
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


