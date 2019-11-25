const boderColorChange = () => {
    let tipDivs = document.querySelectorAll(".singletip")

    for (const tip of tipDivs) {
        tip.addEventListener(
            "mouseover", 
            (theMouseOverEvent) => {
                tip.classList.add("tiphighlightfish")
                tip.classList.add("tipcolor")
            }
        )


        tip.addEventListener("mouseout", theMouseOutEvent => {
            tip.classList.remove("tiphighlightfish")
            tip.classList.remove("tipcolor")
        })
    }
}

export default boderColorChange