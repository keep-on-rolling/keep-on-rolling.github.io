/* Temporary fix for https://github.com/lxndrblz/anatole/issues/369  */
document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname.startsWith("/de/")) {
        Array.from(document.getElementsByTagName("h3")).forEach(function (element) {
            if (element.innerHTML === "Posts in this Series") {
                element.innerHTML = "Beiträge in dieser Serie";
            }
        });
    }
});