
window.onload = () => {
    setTimeout(() => {
        const loader = document.getElementById("loaderOverlay");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 400);
        }
    }, 500);
};
function showPopup(message, type = "error") {
    const title = document.getElementById("popupTitle");
    const msg = document.getElementById("popupMessage");
    const anim = document.getElementById("networkAnim");

    msg.innerText = message;
    if (type === "network") {
        title.innerText = "Network Issue";
        anim.style.display = "block";
    } else {
        title.innerText = "Alert";
        anim.style.display = "none";
    }

    document.getElementById("popupOverlay").classList.add("show");
    document.getElementById("globalPopup").classList.add("show");
}

function closePopup() {
    document.getElementById("popupOverlay").classList.remove("show");
    document.getElementById("globalPopup").classList.remove("show");
}

// ---- INTERNET MONITOR ----
window.addEventListener("offline", () => {
    showPopup("Internet disconnected! Please check your network.", "network");
});

window.addEventListener("online", () => {
    showPopup("Internet connection restored.", "success");
});

