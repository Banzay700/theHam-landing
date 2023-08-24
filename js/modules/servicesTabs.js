import { find, findAll, addAttributeToElement, addClass, removeClass } from './tools.js'

const tabs = findAll('.tab__title')
const tabMenu = find('.tabs__title-wrapper')
const tabContent = findAll('.tab__description-wrapper')

export const showServicesTabContent = () => {
    tabMenu.addEventListener('click', e => {
        const tab = e.target
        const tabNumber = tab.dataset.tab
        const tabInfo = find(`*[data-tab-info="${tabNumber}"]`)

        if (tab === tabMenu) return

        removeClass('tab__title-active', tabs)
        addClass('tab__title-active', tab)

        removeClass('tab__description-active', tabContent)
        addClass('tab__description-active', tabInfo)
    })
}

addAttributeToElement(tabs, 'data-tab')
addAttributeToElement(tabContent, 'data-tab-info')
