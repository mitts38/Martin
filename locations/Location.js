const LocationComponent = (locations) => {
    return `
        <div class = "singleLocation">
        <h4>${locations.tital}</h4>
        <h4>${locations.city}</h4>
        <div class="fish">
        <button id="button--${locations.city}">Details</button>

        <dialog class="location.city" id="details--${locations.city}">
            <div>Species: ${locations.tital}</div>
            <div>Location: ${locations.city}</div>
            <p>${locations.details}</p>

            <button class="button--close2" id='close-${locations.city}'>Close Dialog</button>
        </dialog>
    </div>
        `
}

export default LocationComponent