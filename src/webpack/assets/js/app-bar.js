const mq = window.matchMedia('(max-width: 480px)');
const temp = mq.matches 
    ? document.getElementById("mobile-template")
    : document.getElementById("desktop-template");
const root = document.getElementById("root");
const appbar = temp.content.cloneNode(true);
root.prepend(appbar);

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

mq.addListener(handleMediaQuery);