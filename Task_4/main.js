let p = document.querySelector("p")
let text = document.querySelector("input")
let color = document.querySelector("input#color")
let size = document.querySelector("select")
text.addEventListener("keyup", function () {
    p.innerText = text.value
})
color.addEventListener("change", function () {
    p.style = `color:${color.value}`
})
size.addEventListener("change", function () {
    p.style = `font-size:${size.value}`
})