const i18nPages = [
    {
        acceptLanguages: [
            "zh"
        ],
        page: "/zh/"
    },
    {
        acceptLanguages: [
            "en"
        ],
        page: "/en/"
    }
]

function getCurrentLanguage(){
    return (i18nPages.find(it => it.acceptLanguages.includes(new Intl.Locale(navigator.language).language)) ?? i18nPages[0])
}

function getCurrentPage(){
    return (i18nPages.find(it => it.page == window.location.pathname))
}

function redirectToLanagugePage(page){
    window.location.replace(page.page)
}

function goToLanguagePage(page){
    window.location.href = page.page
}

function changeLanaguge(changeWhenInSubpage) {
    const page = getCurrentLanguage()
    if ((changeWhenInSubpage || window.location.pathname == "/") && page != getCurrentPage()) {
        redirectToLanagugePage(page)
    }
}

export function nextLanguage(){
    goToLanguagePage(i18nPages[(i18nPages.indexOf(getCurrentPage()) + 1) % i18nPages.length])
}
globalThis.nextLanguage = nextLanguage

window.addEventListener('languagechange', () => changeLanaguge(true))

changeLanaguge(false)