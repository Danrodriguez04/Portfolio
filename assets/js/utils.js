
export function dropdownMobile() {
    const dropdownMobile = document.querySelector("#menu-dropdown-mobile");
    const navBar = document.querySelector("#hidden-bar");
    const buttonCloseNavMobile = document.querySelector("#close-nav-mobile");

    dropdownMobile.addEventListener("click", function () {
        navBar.style.display = 'block';
    });

    document.querySelector("#bar-nav").addEventListener("click", (event) => {
        event.stopPropagation();
    });

    navBar.addEventListener("click", function () {
        navBar.style.display = 'none';
    })

    buttonCloseNavMobile.addEventListener("click", function () {
        navBar.style.display = 'none';
    })
}