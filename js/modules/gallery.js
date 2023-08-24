import { find, findAll, addClass, removeClass } from './tools.js'
import { gridItemTemplate, gridModalTemplate } from './templates.js'

const modal = find('.grid-item__popup')
const galleryItems = findAll('[data-item]')

const fillGridItems = () => {
    galleryItems.forEach((item, index) => {
        addClass('item-active', item)
        item.innerHTML = gridItemTemplate(index)
    })
}

const addNewGridItems = () => {
    const button = find('#gallery-btn')
    const hiddenItems = findAll('.grid-block-hidden')

    button.addEventListener('click', () => {
        setTimeout(() => {
            addClass('grid-block-active', hiddenItems)
            button.parentElement.innerHTML = ''
        }, 2000)
    })
}

const showModal = index => {
    addClass('popup-active', modal)
    addClass('scroll-hidden', document.body)
    modal.innerHTML = gridModalTemplate(index)
}

const removeModal = () => {
    if (modal.classList.contains('popup-active')) {
        modal.addEventListener('click', () => {
            modal.innerHTML = ''

            removeClass('popup-active', modal)
            removeClass('scroll-hidden', document.body)
        })
    }
}

export const showModalImage = () => {
    const fullScreenIcons = findAll('.grid-item__full-icon')

    fullScreenIcons.forEach((item, index) => {
        item.addEventListener('click', () => {
            showModal(index)
            removeModal()
        })
    })
}

fillGridItems()
addNewGridItems()
