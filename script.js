console.log(document.URL)

//Pages
const loadingPage = document.getElementById("loaderWrappers");
const landingPage = document.getElementById("landingpage");
const unit1Page = document.getElementById("unit1Page");
const unit2Page = document.getElementById("unit2Page");
const unit3Page = document.getElementById("unit3Page");
const unit4Page = document.getElementById("unit4Page");
const unit5Page = document.getElementById("unit5Page");


//Set page default 
loadingPage.style.display = 'block'
landingPage.style.display = 'none'
unit1Page.style.display = 'none'
unit2Page.style.display = 'none'
unit3Page.style.display = 'none'
unit4Page.style.display = 'none'
unit5Page.style.display = 'none'

// Landing Page button
const unitButton1 = document.getElementById("UnitButton1")
const unitButton2 = document.getElementById("UnitButton2")
const unitButton3 = document.getElementById("UnitButton3")
const unitButton4 = document.getElementById("UnitButton4")
const unitButton5 = document.getElementById("UnitButton5")
const logoBut = document.querySelectorAll('.Unitlogo')


setTimeout(() => {
    loadingPage.style.animation = "LoadingAnimFadeOut ease-in-out 0.3s"
}, 2500)
setTimeout(() => {
    loadingPage.style.display = "none"
    landingPage.style.display = "block"
}, 2800)

logoBut.forEach((i) => {
    i.onclick = () =>{
        landingPage.style.display = 'block'
        unit1Page.style.display = 'none'
        unit2Page.style.display = 'none'
        unit3Page.style.display = 'none'
        unit4Page.style.display = 'none'
        unit5Page.style.display = 'none'
    }
})

unitButton1.onclick = () => {
    landingPage.style.animation = "LoadingAnimFadeOut ease-in-out 0.3s"
    setTimeout(() => {
        landingPage.style.display = 'none'
        unit1Page.style.display = 'block';
    }, 300)
}
unitButton2.onclick = () => {
    landingPage.style.animation = "LoadingAnimFadeOut ease-in-out 0.3s"
    setTimeout(() => {
        landingPage.style.display = 'none'
        unit2Page.style.display = 'block';
    }, 300)
}
unitButton3.onclick = () => {
    landingPage.style.animation = "LoadingAnimFadeOut ease-in-out 0.3s"
    setTimeout(() => {
        landingPage.style.display = 'none'
        unit3Page.style.display = 'block';
    }, 300)
}
unitButton4.onclick = () => {
    landingPage.style.animation = "LoadingAnimFadeOut ease-in-out 0.3s"
    setTimeout(() => {
        landingPage.style.display = 'none'
        unit4Page.style.display = 'block';
    }, 300)
}

unitButton5.onclick = () => {
    landingPage.style.animation = "LoadingAnimFadeOut ease-in-out 0.3s"
    setTimeout(() => {
        landingPage.style.display = 'none'
        unit5Page.style.display = 'block';
    }, 300)
}