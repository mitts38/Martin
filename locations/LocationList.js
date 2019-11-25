

import Locationscomponent from "./Location.js"
import { useLocations} from "./LocationDataProvider.js"
const LocationListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    const locations = useLocations()

    let locationHTMLRepresentations = ""

    for (const singlelocation of locations) {
        const locationHTML = LocationsComponent(Location)
        locationHTMLRepresentations += locationComponenet(location)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="LocationList">
        
            ${allHTML}
        </section>
    `
}

export default LocationListComponent