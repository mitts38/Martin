const Anotherlocation = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close2")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    
        }
document.querySelector("#button--sam").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--sam")
        theDialog.showModal()
    }
)
document.querySelector("#button--sai").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--sai")
        theDialog.showModal()
    }
)
document.querySelector("#button--bala").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bala")
        theDialog.showModal()
    }
)
document.querySelector("#button--nimo").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--nimo")
        theDialog.showModal()
    }
)
document.querySelector("#button--tony").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--tony")
        theDialog.showModal()
    }
)
document.querySelector("#button--bilu").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bilu")
        theDialog.showModal()
    }
)
}

export default Anotherlocation
