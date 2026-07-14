function goProfile() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("profil").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "instant" });
}

function goBack() {
    document.getElementById("profil").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}
