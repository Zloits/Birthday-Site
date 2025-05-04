function handleChest() {
    const closed = document.getElementById("closedChest");
    const opened = document.getElementById("openedChest");

    closed.style.transition = "opacity 0.5s";
    opened.style.transition = "opacity 0.5s";

    closed.style.opacity = 0;
    opened.style.opacity = 1;

    setTimeout(() => {
        const container = document.getElementById("container")
        container.style.transition = "1s"
        container.style.opacity = "0";
        document.body.style.transition = "background 1s";
        document.body.style.background = "black";

        setTimeout(() => {
            window.location.href = "/scrapbook/index.html"
        }, 2000);
    }, 500);
}
