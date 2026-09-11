let currentPage = 1;
// فتح الدعوة
function openInvitation() {
    const envelopeScreen = document.getElementById("envelope-screen");
    const invitation = document.getElementById("invitation");
    envelopeScreen.classList.add("hide");
    setTimeout(() => {
        envelopeScreen.style.display = "none";
        invitation.style.display = "flex";
        // التأكد أن الصفحة الأولى هي الظاهرة
        document.getElementById("page1").classList.add("active");
        document.getElementById("page2").classList.remove("active");
    }, 800);
}
// الانتقال للصفحة التالية
function nextPage() {
    const currentPageElement =
        document.getElementById("page" + currentPage);
    const nextPageElement =
        document.getElementById("page" + (currentPage + 1));
    if (!nextPageElement) {
        return;
    }
    currentPageElement.classList.remove("active");
    nextPageElement.classList.add("active");
    currentPage++;
}
// Countdown
const weddingDate =
    new Date("2027-01-01T15:00:00+02:00").getTime();
setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    if (distance <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }
    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );
    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );
    const seconds =
        Math.floor(
            (distance % (1000 * 60)) /
            1000
        );
    document.getElementById("days").innerText =
        String(days).padStart(2, "0");
    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}, 1000);
