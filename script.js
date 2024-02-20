console.log(document.URL)

//Pages
const loadingPage = document.getElementById("loaderWrappers");
const landingPage = document.getElementById("landingpage");
const unit1Page = document.getElementById("unit1Page");
const unit2Page = document.getElementById("unit2Page");
const unit3Page = document.getElementById("unit3Page");
const unit4Page = document.getElementById("unit4Page");


//Set page default 
loadingPage.style.display = 'none'
landingPage.style.display = 'none'
unit1Page.style.display = 'block'
unit2Page.style.display = 'none'
unit3Page.style.display = 'none'
unit4Page.style.display = 'none'

// Landing Page button
const unitButton1 = document.getElementById("UnitButton1")
const unitButton2 = document.getElementById("UnitButton2")
const unitButton3 = document.getElementById("UnitButton3")
const unitButton4 = document.getElementById("UnitButton4")


setTimeout(() => {
    loadingPage.style.animation = "LoadingAnimFadeOut ease-in-out 0.3s"
    // loadingPage.style.display = "none"
}, 2500)
// setTimeout(() => {
//     loadingPage.style.display = "none"
//     landingPage.style.display = "block"
// }, 2800)

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