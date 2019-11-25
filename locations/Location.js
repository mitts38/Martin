const LocationComponent = (locations) => {
    return `
        <div class = "singleLocation">
        <h4>${locations.tital}<h4>
        <p>${locations.details}<p>
        </div>
    `
}

export default LocationComponent