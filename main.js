/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlights.js'
import boderColorChange from './tipborder.js'
import {useFish} from './FishDataProvider.js'


initializeDetailButtonEvents()
addMouseOverEventListeners()
boderColorChange()
const allOfTheFish = useFish()
console.log("all the fish:", allOfTheFish)

for(const fish of allOfTheFish){
    console.log("individual fish:", fish)
}