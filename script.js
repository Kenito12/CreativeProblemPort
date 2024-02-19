console.log(document.URL)

const loadingPage = document.getElementById("loaderWrappers");
const landingPage = document.getElementById("landingpage");

landingPage.style.display = 'none'

const unitButton1 = document.getElementById("UnitButton1")
const unitButton2 = document.getElementById("UnitButton2")
const unitButton3 = document.getElementById("UnitButton3")
const unitButton4 = document.getElementById("UnitButton4")


setTimeout(() => {
    loadingPage.style.animation = "LoadingAnimFadeOut ease-in-out 0.3s"
    // loadingPage.style.display = "none"
}, 2500)
setTimeout(() => {
    loadingPage.style.display = "none"
    landingPage.style.display = "block"
}, 2800)

unitButton1.onclick = () => {
    window.location.href = "Unit1.html";
}
unitButton2.onclick = () => {
    window.location.href = "index.html";
}
unitButton3.onclick = () => {
    window.location.href = "index.html";
}
unitButton4.onclick = () => {
    window.location.href = "index.html";
}