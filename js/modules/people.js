import { find, findAll, addClass, removeClass } from './tools.js'

const btnLeft = find('.btn-left')
const btnRight = find('.btn-right')
const allIcons = findAll('.author-photo__small')
const allButtons = findAll('.feedback__carousel__btn')

const removeClassFromElements = () => {
    allIcons.forEach(icon => removeClass('photo-active', icon))
    allButtons.forEach(button => removeClass('button-disabled', button))
}

const moveIcon = direction => {
    let nextIcon
    const activeIcon = find('.photo-active')

    direction === 'right' ? (nextIcon = activeIcon.nextElementSibling) : ''
    direction === 'left' ? (nextIcon = activeIcon.previousElementSibling) : ''

    removeClassFromElements()

    addClass('photo-active', nextIcon)
    showAuthorInfo()
    activeIcon.dataset.position === '2' ? addClass('button-disabled', btnLeft) : ''
    activeIcon.dataset.position === '3' ? addClass('button-disabled', btnRight) : ''
}

const showAuthorInfo = () => {
    const allInfo = findAll('.people__feedback__about-author')
    const activeAuthor = find('.photo-active').dataset.position
    const authorInfo = find(`*[data-position="${activeAuthor}"]`)

    removeClass('about-author-active', allInfo)
    addClass('about-author-active', authorInfo)
}

export const peopleIconsCarousel = () => {
    const carousel = find('.feedback__carousel')

    carousel.addEventListener('click', e => {
        const icon = e.target
        const iconPosition = e.target.dataset.position

        if (icon === carousel) return

        if (iconPosition !== '0' && iconPosition !== '5') {
            removeClassFromElements()
            addClass('photo-active', icon)
            showAuthorInfo()

            iconPosition === '1' ? addClass('button-disabled', btnLeft) : ''
            iconPosition === '4' ? addClass('button-disabled', btnRight) : ''
        }

        iconPosition === '0' ? moveIcon('left') : ''
        iconPosition === '5' ? moveIcon('right') : ''
    })
}
