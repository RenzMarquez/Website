let scrollAmount = 0;
const cards = document.getElementById("cards");
const cardWidth = 280; // width of one card

function slide(direction) {
    scrollAmount += direction * cardWidth;

    // prevent scrolling beyond first/last card
    const maxScroll = cards.scrollWidth - cards.parentElement.clientWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;

    cards.style.transform = `translateX(-${scrollAmount}px)`;
}

function toggleOverlay(card) {
    card.classList.toggle("active");
}

function Activities() {
    document.getElementById("activities").scrollIntoView({ behavior: "smooth" });
}

function AboutUs() {
    document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" });
}

function toggleAndGo(card, url) {
    card.classList.toggle("active");
    setTimeout(() => {
        window.location.href = url;
    }, 300); // wait for overlay animation
}

function openViewer(card) {
    const img = card.querySelector("img").src;
    const desc = card.querySelector(".overlay").innerText;

    document.getElementById("viewer-img").src = img;
    document.getElementById("viewer-desc").innerText = desc;

    document.getElementById("viewer").style.display = "flex";
}

function closeViewer() {
    document.getElementById("viewer").style.display = "none";
}

