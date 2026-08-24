let progress = 0
const progressbutton =
document.getElementById("progressbutton")
progressbutton.addEventListener("click",function() {
    progress = progress + 10;
    document.getElementById("progressdisplay").textcontent = progress + "% complete";
});