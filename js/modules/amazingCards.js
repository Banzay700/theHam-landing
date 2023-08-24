import imagesData from '../../data/imagesData.json' assert { type: 'json' }
import { find, findAll, shuffle, addCardsOnPage, addClass, removeClass } from './tools.js'

let allProjectsInfo = shuffle(imagesData)

const tabs = find('.amazing-work__tabs')
const cardList = find('.amazing-work__cards')
const amazingButton = find('#amazing-btn')

const fillHtmlList = (posOne, posTwo) => {
    const cardsOnList = allProjectsInfo.slice(`${posOne}`, `${posTwo}`)
    cardsOnList.forEach(card => addCardsOnPage(card, cardList))
}

const filterCards = checkedTab => {
    const activeTab = checkedTab
    const allCards = findAll('.card')
    const allTabs = findAll('.amazing-work__tab-title')

    removeClass('amazing-tab-active', allTabs)
    addClass('amazing-tab-active', activeTab)

    allCards.forEach(card => {
        const cardCategoryName = card.dataset.name

        removeClass('card-hidden', card)
        cardCategoryName !== activeTab.textContent ? addClass('card-hidden', card) : ''
        activeTab.textContent === 'All' ? removeClass('card-hidden', card) : ''
    })
}

export const fillAmazingSection = () => {
    const allCards = findAll('.card')
    const tab = find('.amazing-tab-active')

    allCards.length === 0 ? fillHtmlList(0, 12) + filterCards(tab) : ''
    allCards.length === 12 ? fillHtmlList(12, 24) + filterCards(tab) : ''

    if (allCards.length === 24) {
        fillHtmlList(24, 36)
        filterCards(tab)
        amazingButton.parentElement.innerHTML = ''
    }
}

export const filterCardsOnClick = () => {
    tabs.addEventListener('click', e => filterCards(e.target))
}

export const fillAmazingSectionOnClick = () => {
    amazingButton.addEventListener('click', () => setTimeout(fillAmazingSection, 2000))
}
