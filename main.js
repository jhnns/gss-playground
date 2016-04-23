var searchParam = new URLSearchParams(location.search.slice(1));

if (searchParam.has("gss")) {
    var cssStylesheet = document.querySelector("link[href^=main]");

    cssStylesheet.parentNode.removeChild(cssStylesheet);
    window.engine = new GSS(document);
}

document.addEventListener("keyup", function (event) {
    if (event.key === "g") {
        document.getElementById("visual-grid").classList.toggle("hide");
    }
});
