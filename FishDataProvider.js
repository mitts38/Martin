/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        food: ["algae", "crustaceans"],
        location: "Hawai",
        length: 2,
        species: "Betta Fish",
        species: "Betta Fish",
        species: "Betta Fish",
        image: "photo/yellow-fish.jpg"
    },
    {
        name: "goldy",
        food: ["algae", "crustaceans"],
        location: "saltwater",
        length: 2,
        species: "Betta Fish",
        image: "photo/orange-fish.jpg"
    },
    {
        name: "sam",
        food: ["algae", "crustaceans"],
        location: "warm water",
        length: 200,
        species: "Betta Fish",
        image: "photo/white-fish.jpg"
    },
    {
        name: "Tina",
        food: ["algae", "crustaceans"],
        location: "sea",
        length: 100,
        image: "photo/Dolphine-fish.jpg"
    },
   
    {
        name: "baggy",
        food: ["algae", "crustaceans"],
        location: "pond",
        length: 30,
        image: "photo/Red-orange-fish.jpg"
    },
    {
        name: "browny",
        food: ["algae", "crustaceans"],
        location: "mountain lake",
        length: 150,
        image: "photo/Ray-fish.jpg"
    },

]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection
}