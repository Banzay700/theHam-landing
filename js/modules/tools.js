import { createCardTemplate } from './templates.js'

export const find = document.querySelector.bind(document)
export const findAll = document.querySelectorAll.bind(document)

export const shuffle = arr => arr.sort(() => Math.round(Math.random() * 100) - 50)

export const addAttributeToElement = (array, attributeName) => {
    array.forEach((item, index) => item.setAttribute(`${attributeName}`, `${index}`))
}

export const addCardsOnPage = (card, cardParentNode) => {
    cardParentNode.insertAdjacentHTML('beforeend', createCardTemplate(card.src, card.name, card.category))
}

export const addClass = (classToAdd, htmlElement) => {
    if (htmlElement.length) {
        htmlElement.forEach(item => item.classList.add(`${classToAdd}`))
    } else {
        htmlElement.classList.add(`${classToAdd}`)
    }
}

export const removeClass = (classToRemove, htmlElement) => {
    if (htmlElement.length) {
        htmlElement.forEach(item => item.classList.remove(`${classToRemove}`))
    } else {
        htmlElement.classList.remove(`${classToRemove}`)
    }
}
