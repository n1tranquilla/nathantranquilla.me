import 'lean-blog-web-components/src/app-bar';

window.onload = function(){
    const mq = window.matchMedia('(max-width: 475px)');
    const appbar = document.querySelector('lbwc-app-bar')
    mq.addListener(function(changed) {
        
        if(changed.matches && !appbar.hasAttribute('mobile')) {    
            appbar.setAttribute('mobile','');
        }
        
        if(!changed.matches && appbar.hasAttribute('mobile')) {
            appbar.removeAttribute('mobile')
        }
    });
}


