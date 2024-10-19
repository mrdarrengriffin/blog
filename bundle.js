document.addEventListener('DOMContentLoaded', () => {
    let facadesLoaded = false;
    let facaded = document.querySelectorAll('*[data-src]');

    if (facaded.length) {
        window.addEventListener('mousemove', loadFacaded, { once: true });
        window.addEventListener('touchstart', loadFacaded, { once: true });
        window.addEventListener('scroll', loadFacaded, { once: true });
    }

    function loadFacaded() {
        if (facadesLoaded) return;
        facadesLoaded = true;

        // Made for iframes
        facaded.forEach((el) => {
            el.src = el.getAttribute('data-src');
            el.removeAttribute('data-src');
        });

        // Twitter script delay
        const tweets = document.querySelectorAll('.twitter-tweet');
        if (tweets.length) {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://platform.twitter.com/widgets.js';
            document.body.appendChild(script);
        }
    }
});