var btn = document.getElementById("btn")
var div2 = document.getElementById("div2")
// var div3 = document.getElementById("div3")
btn.addEventListener("mouseover",function(){
    div2.style.animationPlayState="running"
})
btn.addEventListener("mouseleave",function(){
    div2.style.animationPlayState="paused"
})


