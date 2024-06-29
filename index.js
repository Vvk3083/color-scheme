let schemForm = document.getElementById("scheme-form")
let color = document.getElementById("color")
// color.addEventListener("change",function(){
//     console.log(color.value)
// })
let scheme= document.getElementById("color-scheme")
// console.log(scheme.value)
let getButton = document.getElementById("get-color-scheme")
schemForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(color.value)
    let trimmedColor = color.value.slice(1);
    console.log(trimmedColor)
    console.log(scheme.value)
    let schemeValue = scheme.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${trimmedColor}&mode=${schemeValue}`)
        .then(response=>response.json())
        .then(data=>{
            html =""
            for(let color of data.colors){
                console.log(color.hex.value)
                html+=`<div>
                <div class="colorcode" style="background-color:${color.hex.value};"></div>
                <p data-hex="${color.hex.value}">${color.hex.value}</p>
                </div>`
            }
            document.getElementById("final-output").innerHTML = html
            // console.log(data)
            // console.log(data.colors)
        })
})
