import 'lean-blog-web-components/src/app-bar';
import 'lean-blog-web-components/src/nav-link';

document.addEventListener("DOMContentLoaded", function(event){
    const mq = window.matchMedia('(max-width: 480px)');

    const getAppBar = () => {
        return document.querySelector('lbwc-app-bar');
    }

    const handleMediaQuery = (mediaQuery) => {
        
        if(mediaQuery.matches && !getAppBar().hasAttribute('mobile')) {    
            getAppBar().setAttribute('mobile','');
        }
        
        if(!mediaQuery.matches && getAppBar().hasAttribute('mobile')) {
            getAppBar().removeAttribute('mobile')
        }
    }

    handleMediaQuery(mq);
    mq.addListener(handleMediaQuery);
});


