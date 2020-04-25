window.onload = function() {
    const page = document.querySelector('lbwc-index-page');
    const ieMessageTemplate = document.getElementById("ie-message");
    if (!page) throw new this.Error('"lbwc-index-page" tag not found')
    if (!ieMessageTemplate) throw new this.Error('"lbwc-index-page" tag not found')
    if (IntersectionObserver){
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    const templateHolder = entry.target;
                    const post = templateHolder.children[0].content.cloneNode(true);
                    page.replaceChild(post,templateHolder);
                    templateHolder.remove();
                }
            })
        });
        document
            .querySelectorAll('.template-holder')
            .forEach(e=>imageObserver.observe(e));
    } else {
        const message = ieMessageTemplate.content.cloneNode(true);
        document.querySelector('lbwc-index-page').appendChild(message)
    }
}