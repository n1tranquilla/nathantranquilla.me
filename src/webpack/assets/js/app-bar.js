const mq = window.matchMedia('(max-width: 480px)');
const getAppBar = () => document.querySelector('lbwc-app-bar');
const handleMediaQuery = (mediaQuery) => {
        
    if(mediaQuery.matches && !getAppBar().hasAttribute('mobile')) {    
        getAppBar().setAttribute('mobile','');
    }
    
    if(!mediaQuery.matches && getAppBar().hasAttribute('mobile')) {
        getAppBar().removeAttribute('mobile')
    }
}
handleMediaQuery(mq);
document.addEventListener("DOMContentLoaded", function(event){
    mq.addListener(handleMediaQuery);    
});

