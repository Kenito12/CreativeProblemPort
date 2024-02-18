const loadingPage = document.getElementById("loaderWrappers");
const landingPage = document.getElementById("landingpage");

landingPage.style.display = 'none'


setTimeout(() => {
    loadingPage.style.animation = "LoadingAnimFadeOut ease-in-out 0.3s"
    // loadingPage.style.display = "none"
}, 2500)
setTimeout(() => {
    loadingPage.style.display = "none"
    landingPage.style.display = "block"
}, 2800)