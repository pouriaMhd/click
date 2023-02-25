let demo = document.querySelector(`#demo`)
let btn = document.createElement(`button`)
demo.append(btn)
btn.setAttribute(`class` , `btn`)
btn.innerText=`click here`

let show=()=>{
    let ali = document.createElement(`div`)
    ali.setAttribute(`id` , `show`)
    demo.append(ali)
    // 
    let exit = document.createElement(`button`)
    exit.setAttribute(`class` , `exit`)
    ali.append(exit)
    exit.innerText=`close`
    exit.addEventListener(`click`, function () {
        this.parentElement.remove()
    })
}
btn.addEventListener(`click` , function () {
    show()
})