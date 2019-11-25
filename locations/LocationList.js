

import Locationscomponent from "./Location.js"
import { uselocations} from "./LocationDataProvider.js"
const LocationListComponent = () => {
    const locations = uselocations()
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    

    let locationHTMLRepresentations = ""

    for (const singlelocation of locations) {
        const locationHTML = Locationscomponent(singlelocation)
        locationHTMLRepresentations += locationHTML
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="LocationList">
        
            ${locationHTMLRepresentations}
        </section>
    `
}

export default LocationListComponent