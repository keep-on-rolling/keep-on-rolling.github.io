/* Temporary fix for https://github.com/lxndrblz/anatole/issues/369  */
document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname.startsWith("/de/")) {
        document.body.innerHTML = document.body.innerHTML.replace(/Posts in this Series/g, 'Beiträge in dieser Serie');
    }
});