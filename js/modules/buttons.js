import { find, addClass, removeClass } from './tools.js'

export const buttonAnimation = btnSelector => {
    const button = find(btnSelector)

    button.addEventListener('click', () => {
        const spinner = '<span class="spinner"></span>'
        const plus = `<img class="plus" src="./image/svg/plus.svg" alt="plus-icon"/> load more`

        addClass('loading', button)
        button.innerHTML = spinner

        setTimeout(() => {
            removeClass('loading', button)
            button.innerHTML = ''
            setTimeout(() => button.insertAdjacentHTML('afterbegin', plus), 200)
        }, 2000)
    })
}
