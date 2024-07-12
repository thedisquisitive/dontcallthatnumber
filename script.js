document.addEventListener("fullscreenchange", function () {
    console.log("fullscreenchange event fired!");
    document.exitFullscreen();
});