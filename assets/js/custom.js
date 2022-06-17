/* Temporary fix for https://github.com/lxndrblz/anatole/issues/369  */
if (window.location.pathname.startsWith("/de/")) {
    document.addEventListener('DOMContentLoaded', (event) => {
        Array.from(document.getElementsByTagName("h3")).forEach(function (element) {
            if (element.innerHTML === "Posts in this Series") {
                element.innerHTML = "Beiträge in dieser Serie";
            }
        });
    });
}