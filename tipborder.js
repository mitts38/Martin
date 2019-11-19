const boderColorChange = () => {
    let tipDivs = document.querySelectorAll(".tip")

    for (const tip of tipDivs) {
        tip.addEventListener(
            "mouseover", 
            (theMouseOverEvent) => {
                tip.tiplist.add("tiphighlightfish")
            }
        )


        tip.addEventListener("mouseout", theMouseOutEvent => {
            tip.classList.remove("highlightFish")
        })
    }
}

export default boderColorChange