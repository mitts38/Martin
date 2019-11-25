/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
// import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlights.js'
import boderColorChange from './tipborder.js'
import { useFish } from './FishDataProvider.js'
import initializeDetailButtonEvents from './dialogs.js'
import FishListComponent from './fishlist.js'
import Tip2Component from './tips/TipList.js'
import { usetip } from './tips/TipDataProvider.js'


FishListComponent()
initializeDetailButtonEvents()
Tip2Component()
addMouseOverEventListeners()
boderColorChange()
usetip()
const allOfTheFish = useFish()
console.log("all the fish:", allOfTheFish)

for (const fish of allOfTheFish) {
    console.log("individual fish:", fish)
}