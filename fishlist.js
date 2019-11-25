/**
 *  FishListComponent which renders individual fish objects as HTML
 */

import { useFish } from "./FishDataProvider.js"
import FishComponent from "./fish.js"


// Get a reference to the `<article class="content">` element
const contentElement = document.querySelector(".content")

const FishListComponent = () => {
    const fishes = useFish()

    let allFishHTML = ""


        // Add to the existing HTML in the content element
        contentElement.innerHTML += `
        <section class="fishList"> ${
        
            fishes.map(currentFish => 
            
                FishComponent(currentFish)
            
                ).join("")
            }
        </section>
    `
    }

    export default FishListComponent