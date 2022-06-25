
function renderNavbar() {
    const list = document.querySelector("#nav-list");

    const navbarLinks = [
        { title: "Home", icon: "bi bi-house" },
        { title: "About", icon: "bi bi-info-square" },
        { title: "Authorize", icon: "bi bi-person-fill" },
        { title: "User cart", icon: "bi bi-bag" },
    ];

    navbarLinks.forEach(function (value) {
        var title = value.title;
        var icon = value.icon;
        var liMarkup = `<li class="nav-item">
    <a
    class="nav-link active"
    aria-current="page"
    href="#"
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    title="${title}">
    <i class="${icon}"></i>
    <span class="d-none d-lg-inline">${title}</span>
</a>
</li>`;
        list.insertAdjacentHTML("beforeend", liMarkup);
    });
};
const mediaQuery = window.matchMedia("(min-width:992px)");

function madiaQueries() {
    mediaQuery.addEventListener("change", function () { });
    // console.log(mediaQuery);
    // if (mediaQuery.matches) {

    // }
}

function tooltipInit() {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
};

function init() {
    renderNavbar();
    madiaQueries();
    tooltipInit();
};
function init();
