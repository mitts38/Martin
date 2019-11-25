

import { usetip } from "./TipDataProvider.js"
import TipComponent from "./Tip.js"

// Get a reference to the `<article class="content">` elemen

const Tip2Component = () => {
    const tip = usetip()
    const contentElement = document.querySelector(".tip")

    // Add to the existing HTML in the content element
    contentElement.innerHTML += ` 
    <aside class ="tipList">
    <h2 class= "tipList_header">Martin's Tips</h2>
    ${tip.map(singletip => TipComponent(singletip)).join("")}
    </aside>

    `
}

export default Tip2Component