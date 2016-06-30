let searchParam = new URLSearchParams(location.search.slice(1));

if (searchParam.has("gss")) {
    let cssStylesheet = document.querySelector("link[href^=main]");

    cssStylesheet.parentNode.removeChild(cssStylesheet);
    window.engine = new GSS(document);
}

document.addEventListener("keyup", function (event) {
    if (event.key === "g") {
        document.getElementById("visual-grid").classList.toggle("hide");
    }
});

function cssProp(property) {
    return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
}
