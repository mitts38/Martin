const LocationComponent = (locations) => {
    return `
        <div class = "singleLocation">
        <h4>${locations.tital}<h4>
        <h4>${locations.city}</h4>
        <p>${locations.details}<p>
        
        </div>
    `
}

export default LocationComponent