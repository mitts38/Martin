const boderColorChange = () => {
    let tipDivs = document.querySelectorAll(".tip")

    for (const tip of tipDivs) {
        tip.addEventListener(
            "mouseover", 
            (theMouseOverEvent) => {
                tip.classList.add("tiphighlightfish")
            }
        )


        tip.addEventListener("mouseout", theMouseOutEvent => {
            tip.classList.remove("tiphighlightfish")
        })
    }
}

export default boderColorChange