let progress = 0
const progressbutton =
document.getElementByld("progressbutton")
progressbutton.addEventListener("click",function() {
    progress = progress + 1;
    console.log(progress)
});