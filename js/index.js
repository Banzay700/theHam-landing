import { buttonAnimation } from './modules/buttons.js'
import { showModalImage } from './modules/gallery.js'
import { peopleIconsCarousel } from './modules/people.js'
import { showServicesTabContent } from './modules/servicesTabs.js'
import { fillAmazingSection, fillAmazingSectionOnClick, filterCardsOnClick } from './modules/amazingCards.js'

showServicesTabContent()

buttonAnimation('#amazing-btn')
buttonAnimation('#gallery-btn')

filterCardsOnClick()
fillAmazingSection()
fillAmazingSectionOnClick()

peopleIconsCarousel()

showModalImage()
